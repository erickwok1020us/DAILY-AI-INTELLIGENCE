#!/usr/bin/env python3
"""
混合更新:①「整體 Top N」沿用 curated.json(手工校正的權威、中立版,不交給 AI 重排);
         ②「本月最新」每天用免費 Google Gemini + Google 搜尋自動研究。
→ 最重要的排名一定正確/中立;新動態自動更新;全程免費。

由 .github/workflows/daily-update.yml 每日排程觸發。
手動跑:   GEMINI_API_KEY=... python3 scripts/update_digest.py
免費金鑰:  https://aistudio.google.com/apikey
要更新①:  直接編輯 curated.json 的 overall(或叫 Claude 重新校正)。
"""
import os, sys, json, re, time, datetime
from google import genai
from google.genai import types

MODEL = os.environ.get("DIGEST_MODEL") or "gemini-2.5-flash"
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DATA_JS   = os.path.join(ROOT, "data.js")
DATA_JSON = os.path.join(ROOT, "data.json")
CURATED   = os.path.join(ROOT, "curated.json")

TZ  = datetime.timezone(datetime.timedelta(hours=8))   # 台北 / 香港 (GMT+8)
NOW = datetime.datetime.now(TZ)
EN_MONTHS = ["January","February","March","April","May","June",
             "July","August","September","October","November","December"]

# 研究提示(scope/sources/topn);名稱/副標/icon/overall 一律由 curated.json 提供
HINTS = {
  1: {"topn":5,  "scope":"通用旗艦大型語言模型整體智能", "sources":"Artificial Analysis、LMArena、各官方部落格"},
  2: {"topn":5,  "scope":"AI 編程模型與 IDE/agent(網頁遊戲開發)", "sources":"SWE-bench Verified、LMArena WebDev、Anthropic/OpenAI/Google/Cursor 官方"},
  3: {"topn":5,  "scope":"數據模擬/機率/數據推理模型", "sources":"GPQA Diamond、AIME、Artificial Analysis"},
  4: {"topn":5,  "scope":"風格化/動畫向 AI 影片生成", "sources":"Artificial Analysis Video Arena、Kling/Seedance/PixVerse 官方"},
  5: {"topn":5,  "scope":"寫實/真人向 AI 影片生成", "sources":"Artificial Analysis Video Arena、Veo/Kling/Seedance/Hailuo 官方"},
  6: {"topn":5,  "scope":"text/image→3D 模型生成", "sources":"Meshy/Tripo/Rodin/Hunyuan3D 官方、3D-AI 評比"},
  7: {"topn":5,  "scope":"3D 自動綁骨/可動化", "sources":"Meshy/Autodesk Flow Studio/Tripo/Cascadeur/Anything World 官方"},
  8: {"topn":5,  "scope":"遊戲音效 SFX/語音/音樂", "sources":"ElevenLabs/Stability/Suno/Google 官方、AI 音訊評比"},
  9: {"topn":10, "scope":"AI 工具『組合/stack』(多工具搭配,如 Claude+Obsidian),非單一工具", "sources":"GitHub stars、官方部落格、Reddit/HN/YouTube 熱度、MCP 連接器公告"},
}

MONTHLY_SCHEMA = '''{
  "note": null, "note_en": null,
  "items": [
    {"rank":1,"name":"名稱","version":"版本號/類型","vendor":"廠商","vendor_en":"vendor","date":"M/D 或近似","date_en":"(若 date 含中文才填,如 Feb)","isNew":true,"overlap":"整體 #n(若同時在①)否則 null","overlap_en":"Overall #n 或 null","why":"一句話(繁中)","why_en":"one line (English)"}
  ]
}'''

def build_monthly_prompt(cat_name, hint, overall):
    n = hint["topn"]
    ov = "; ".join("#%s %s" % (it.get("rank"), it.get("name")) for it in (overall or []))
    return f"""今天是 {NOW:%Y-%m-%d}。範疇:「{cat_name}」({hint['scope']})。

務必用 Google 搜尋查證「本月({NOW.year} 年 {NOW.month} 月)」的最新發佈,絕不可憑記憶/舊資料。優先查:{hint['sources']}。

只要輸出「②本月最新 Top {n}」:從本月({NOW.year} 年 {NOW.month} 月)新發佈中挑最好用的 {n} 個並排名。
- 本月不足 {n} 個,就用最近期(近 30–60 天)補滿、date 標日期、isNew 設 false,並在 note 用一句話說明;否則 note 為 null。
- 本範疇①整體榜(僅供標 overlap 用,不要重排):{ov}。若某本月項目同時在①,overlap 標「整體 #n」。

【嚴謹·重要】只列「已正式發佈(GA)」的,**排除 preview/beta/未發佈/預計發佈**;benchmark 數字要準,**不確定就不要寫數字**;只列**廣為人知**的,不要冷門/SEO 小工具;**日期不可晚於 {NOW:%Y-%m-%d}**,不要編未來日期。
【雙語】每個文字欄位中英都要:vendor+vendor_en、why+why_en、overlap+overlap_en、note+note_en;date 含中文要加 date_en。

只輸出一個 JSON 物件(繁中內容),不要任何其他文字,嚴格符合:
{MONTHLY_SCHEMA}"""

def extract_json(text):
    m = re.search(r"```(?:json)?\s*(\{.*\})\s*```", text, re.S)
    raw = m.group(1) if m else None
    if raw is None:
        i, j = text.find("{"), text.rfind("}")
        if i == -1 or j == -1:
            raise ValueError("回應中找不到 JSON")
        raw = text[i:j+1]
    for attempt in range(3):
        try:
            return json.loads(raw, strict=False)
        except json.JSONDecodeError:
            if attempt == 0:
                raw = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", " ", raw)
            else:
                raw = re.sub(r",(\s*[}\]])", r"\1", raw)
    return json.loads(raw, strict=False)

def research_monthly(client, cat_name, hint, overall):
    sys_inst = "你是嚴謹的 AI 產業研究員。只研究『本月最新發佈』;先用 Google 搜尋查證,只列已正式發佈(非 preview)的;再只輸出 monthly JSON(用 ```json 包),文字欄位中英雙語。"
    cfg = types.GenerateContentConfig(
        system_instruction=sys_inst,
        tools=[types.Tool(google_search=types.GoogleSearch())],
        temperature=0.3, max_output_tokens=5000,
    )
    last_err = None
    for attempt in range(4):
        try:
            resp = client.models.generate_content(model=MODEL, contents=build_monthly_prompt(cat_name, hint, overall), config=cfg)
            data = extract_json(resp.text)
            return {"note": data.get("note"), "note_en": data.get("note_en"), "items": data.get("items", [])}
        except Exception as e:
            last_err = e
            print(f"  重試 {attempt+1}/4 ({type(e).__name__}): {str(e)[:120]}", flush=True)
            if attempt < 3:
                time.sleep(8 * (attempt + 1))
    raise last_err

def load_json(path):
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None

def main():
    if not os.environ.get("GEMINI_API_KEY"):
        sys.exit("ERROR: 缺少 GEMINI_API_KEY(免費:https://aistudio.google.com/apikey)")
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

    curated = load_json(CURATED)
    if not curated or not curated.get("categories"):
        sys.exit("ERROR: 找不到 curated.json(① 整體榜的權威來源)")
    cur = {c["id"]: c for c in curated["categories"]}
    prev = load_json(DATA_JSON)
    prev_cats = {c["id"]: c for c in prev["categories"]} if prev else {}

    cats = []
    for cid in sorted(cur.keys()):
        base = cur[cid]                       # 手工校正的權威分類(含 overall)
        hint = HINTS.get(cid, {"topn":5,"scope":base.get("name",""),"sources":""})
        print(f"[② monthly] {cid} {base.get('name')} (model={MODEL})", flush=True)
        try:
            monthly = research_monthly(client, base.get("name",""), hint, base.get("overall"))
        except Exception as e:
            print(f"  !! 失敗,② 沿用昨日: {e}", flush=True)
            monthly = (prev_cats.get(cid, {}) or {}).get("monthly") or base.get("monthly") or {"note": None, "note_en": None, "items": []}
        cats.append({
            "id": cid, "icon": base.get("icon",""),
            "name": base.get("name",""), "name_en": base.get("name_en",""),
            "subtitle": base.get("subtitle",""), "subtitle_en": base.get("subtitle_en",""),
            "overall": base.get("overall", []),     # ① 權威,原樣保留
            "monthly": monthly,                       # ② 每日自動
        })

    changes, changes_en = [], []
    for c in cats:
        for it in (c.get("monthly", {}) or {}).get("items", []):
            if it.get("isNew") and it.get("rank", 9) <= 2:
                d = f"({it.get('date','')})" if it.get("date") else ""
                changes.append(f"{it['name']} {d} — {c['name']}")
                changes_en.append(f"{it['name']} {d} — {c.get('name_en', c['name'])}")
    if not changes:
        changes = ["本月各範疇暫無重大新發佈,本月榜與近期相同。"]
        changes_en = ["No major new releases across domains this month; lists match recent."]

    digest = {
        "updatedAt": NOW.isoformat(timespec="seconds"),
        "updatedDateLabel": f"{NOW.year} 年 {NOW.month} 月 {NOW.day} 日",
        "month": f"{NOW.year} 年 {NOW.month} 月",
        "month_en": f"{EN_MONTHS[NOW.month-1]} {NOW.year}",
        "dataConfidence": f"①整體=手工校正權威版;②本月最新由 {MODEL}+Google 搜尋於 {NOW:%Y/%m/%d} 自動更新",
        "dataConfidence_en": f"① curated (hand-verified); ② this-month auto-updated by {MODEL}+Google Search on {NOW:%Y/%m/%d}",
        "changesToday": changes[:6],
        "changesToday_en": changes_en[:6],
        "notes": [
            "中立聲明:①整體榜以第三方獨立榜為準(綜合=AA 指數、編程=SWE-bench、推理=GPQA)、只列已發佈模型、經人工校正,非本 AI 或任何廠商觀點。",
            "①整體=手工校正的權威版(穩定);②本月最新=每日免費自動研究(僅供速覽,偶有出入請點源覆核)。",
            "排名每天會動:AA 為 72 小時滾動、LMArena Elo 每天浮動,第 2~5 名常在誤差內。",
        ],
        "notes_en": [
            "Neutrality: ① follows independent third-party leaderboards (General=AA Index, Coding=SWE-bench, Reasoning=GPQA), GA models only, human-verified — not this AI's or any vendor's view.",
            "① = hand-curated authoritative (stable); ② = free auto-research daily (quick reference; verify against sources).",
            "Rankings shift daily: AA is a 72-hour rolling average and LMArena Elo moves; ranks 2–5 are often within noise.",
        ],
        "categories": cats,
    }

    with open(DATA_JSON, "w", encoding="utf-8") as f:
        json.dump(digest, f, ensure_ascii=False, indent=2)
    with open(DATA_JS, "w", encoding="utf-8") as f:
        f.write("/* 自動產生 — ①讀 curated.json、②每日 Gemini 研究;勿手動編輯(改①請編 curated.json) */\n")
        f.write("window.DIGEST = ")
        json.dump(digest, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"done — ① 權威 + ② 自動 已寫入 data.js / data.json")

if __name__ == "__main__":
    main()
