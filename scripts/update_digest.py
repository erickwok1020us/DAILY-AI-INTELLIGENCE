#!/usr/bin/env python3
"""
每日重新研究 8 大 AI 範疇,重寫 data.js / data.json(中英雙語)。
使用 Anthropic Messages API + 內建 web_search 工具(伺服器端自動搜尋)。
由 .github/workflows/daily-update.yml 每日排程觸發。

本機手動跑:  ANTHROPIC_API_KEY=sk-... python3 scripts/update_digest.py
切換模型:    DIGEST_MODEL=claude-sonnet-4-6 ...(省錢) 或 claude-opus-4-8(最佳)
"""
import os, sys, json, re, datetime
from anthropic import Anthropic

MODEL = os.environ.get("DIGEST_MODEL", "claude-opus-4-8")
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)                 # repo 根目錄(scripts/ 的上一層)
DATA_JS   = os.path.join(ROOT, "data.js")
DATA_JSON = os.path.join(ROOT, "data.json")

TZ  = datetime.timezone(datetime.timedelta(hours=8))   # 台北 / 香港時間 (GMT+8)
NOW = datetime.datetime.now(TZ)
EN_MONTHS = ["January","February","March","April","May","June",
             "July","August","September","October","November","December"]

# 固定的範疇定義(順序 / 圖示 / 名稱不變;模型只負責填排名內容)
CATEGORIES = [
  {"id":1,"icon":"🧠","name":"綜合 AI MODEL 排名","name_en":"Overall AI Model Ranking",
   "subtitle":"General-Purpose AI Models · Gemini / Claude / GPT","subtitle_en":"General-Purpose AI Models · Gemini / Claude / GPT",
   "scope":"通用旗艦大型語言模型(Gemini / Claude / GPT 之爭)的整體智能排名",
   "sources":"Artificial Analysis Intelligence Index、LMArena (Chatbot Arena)、各官方部落格"},
  {"id":2,"icon":"🎮","name":"創建遊戲的助手","name_en":"Game-Building Assistants",
   "subtitle":"AI 編程 · 你的 Three.js + Claude Code + GitHub + Vercel pipeline","subtitle_en":"AI coding · your Three.js + Claude Code + GitHub + Vercel pipeline",
   "scope":"AI 編程模型與 IDE/agent(用於 Three.js + GitHub + Vercel 開發網頁遊戲);整體榜列模型,本月榜可含 IDE 工具並標 [工具]/[tool]",
   "sources":"LMArena WebDev/Code、SWE-bench Verified、Aider polyglot、Anthropic/OpenAI/Google/Cursor 官方"},
  {"id":3,"icon":"📊","name":"創建數據模擬器 & 數據推理","name_en":"Data Simulators & Reasoning",
   "subtitle":"對應你的「深海奪寶」RTP / 機率沙盤","subtitle_en":"For your 'Abyss Treasury' RTP / probability sandbox",
   "scope":"數據模擬、機率/統計建模、數據推理最強的模型(推理 benchmark 為重)",
   "sources":"Artificial Analysis Intelligence Index、GPQA Diamond、AIME、MATH、LMArena"},
  {"id":4,"icon":"🎬","name":"創建遊戲影片","name_en":"Game / Stylized Video",
   "subtitle":"風格化 / 動畫向 Video","subtitle_en":"Stylized / animated video",
   "scope":"風格化 / 動畫 / 遊戲預告片向的 AI 影片生成",
   "sources":"Artificial Analysis Video Arena、fal.ai、Kling/Seedance/PixVerse/Pika 官方"},
  {"id":5,"icon":"🎥","name":"創建真人影片","name_en":"Live-Action Video",
   "subtitle":"寫實 / 真人向 Video","subtitle_en":"Realistic / live-action video",
   "scope":"寫實 / 真人向的 AI 影片生成",
   "sources":"Artificial Analysis Video Arena、Veo/Kling/Seedance/Hailuo/Runway 官方"},
  {"id":6,"icon":"🧊","name":"創建遊戲模組","name_en":"3D Asset Generation",
   "subtitle":"3D 模型生成 · 例如 Meshy","subtitle_en":"3D model generation · e.g. Meshy",
   "scope":"text/image → 3D 模型/網格生成(如 Meshy)",
   "sources":"Meshy / Tripo / Rodin(Hyper3D)/ Hunyuan3D 官方、3D-AI 評比文章"},
  {"id":7,"icon":"🦴","name":"遊戲模組 Rigging","name_en":"Game Asset Rigging",
   "subtitle":"綁骨 / 可動 · 例如 Anything World","subtitle_en":"Rigging / animation-ready · e.g. Anything World",
   "scope":"3D 自動綁骨 / auto-rig / 可動化(把網格變成可動角色,如 Anything World)",
   "sources":"Meshy auto-rig、Autodesk Flow Studio、Tripo Uni-Rig、Cascadeur、Anything World 官方"},
  {"id":8,"icon":"🔊","name":"創建聲音特效","name_en":"Sound Effects & Audio",
   "subtitle":"SFX / 語音 / 音樂 · 例如 ElevenLabs","subtitle_en":"SFX / voice / music · e.g. ElevenLabs",
   "scope":"遊戲音效 SFX 為主,兼顧語音 / 音樂(如 ElevenLabs)",
   "sources":"ElevenLabs、Stability(Stable Audio)、Suno、Google(Lyria)官方、AI 音訊評比"},
]

# 每個文字欄位都要中文 + `_en` 英文
SCHEMA_HINT = '''{
  "overall": [
    {"rank":1,"name":"模型/工具名稱+版本","vendor":"廠商(中文可加原名)","vendor_en":"vendor (English)","why":"一句話(繁中)","why_en":"one line (English)","meta":"發佈日 · 存取或價格(繁中)","meta_en":"date · access/price (English)"}
  ],
  "monthly": {
    "note": null, "note_en": null,
    "items": [
      {"rank":1,"name":"名稱","version":"版本號","vendor":"廠商","vendor_en":"vendor (English)","date":"M/D 或近似","date_en":"(若 date 含中文才填英文,否則省略)","isNew":true,"overlap":"整體 #1 或 null","overlap_en":"Overall #1 或 null","why":"一句話(繁中)","why_en":"one line (English)"}
    ]
  }
}'''

def build_prompt(cat):
    return f"""今天是 {NOW:%Y-%m-%d}。請研究範疇:「{cat['name']}」({cat['scope']})。

務必用 web_search 查證「截至本月({NOW.year} 年 {NOW.month} 月)」的最新狀況,絕不可憑記憶。優先查:{cat['sources']}。

輸出兩個 Top 5:
1) overall(整體 Top 5):目前最強/最值得用的 5 個,不論發佈時間,#1→#5。
2) monthly(本月最新 Top 5):從「本月({NOW.year} 年 {NOW.month} 月)新發佈」中挑「最好用」的 5 個並排名。
   - 若某項同時在 overall,請在 overlap/overlap_en 標「整體 #n」/「Overall #n」,並在 version 填它的新版本號(讓人知道它是因為新版本才登上本月榜)。
   - 若本月新發佈不足 5 個,用最近期(近 30–60 天)補滿、date 標日期、isNew 設 false,並在 note/note_en 用一句話說明;否則 note 與 note_en 皆為 null。

【雙語】每個文字欄位都要同時提供繁體中文與英文:vendor+vendor_en、why+why_en、meta+meta_en、overlap+overlap_en、note+note_en。name 與 version 多為產品名,中英相同可只填一份。date 若含中文(如「2 月」),請另填 date_en(如「Feb」)。

只輸出一個 JSON 物件,不要任何其他文字或解釋,嚴格符合:
{SCHEMA_HINT}"""

def extract_json(text):
    m = re.search(r"```(?:json)?\s*(\{.*\})\s*```", text, re.S)
    raw = m.group(1) if m else None
    if raw is None:
        i, j = text.find("{"), text.rfind("}")
        if i == -1 or j == -1:
            raise ValueError("回應中找不到 JSON")
        raw = text[i:j+1]
    return json.loads(raw)

def research(client, cat):
    msg = client.messages.create(
        model=MODEL,
        max_tokens=4500,
        system=[{"type":"text",
                 "text":"你是嚴謹的 AI 產業研究員。先用 web_search 查證,再只輸出符合指定結構的 JSON,文字欄位需中英雙語。",
                 "cache_control":{"type":"ephemeral"}}],
        tools=[{"type":"web_search_20250305","name":"web_search","max_uses":10}],
        messages=[{"role":"user","content":build_prompt(cat)}],
    )
    text = "".join(getattr(b,"text","") for b in msg.content if getattr(b,"type",None)=="text")
    data = extract_json(text)
    return {"id":cat["id"],"icon":cat["icon"],
            "name":cat["name"],"name_en":cat["name_en"],
            "subtitle":cat["subtitle"],"subtitle_en":cat["subtitle_en"],
            "overall":data["overall"],"monthly":data["monthly"]}

def load_prev():
    try:
        with open(DATA_JSON, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None

def main():
    if not os.environ.get("ANTHROPIC_API_KEY"):
        sys.exit("ERROR: 缺少環境變數 ANTHROPIC_API_KEY")
    client = Anthropic()
    prev = load_prev()
    prev_cats = {c["id"]: c for c in prev["categories"]} if prev else {}

    cats = []
    for cat in CATEGORIES:
        print(f"[research] {cat['id']} {cat['name']} (model={MODEL})", flush=True)
        try:
            cats.append(research(client, cat))
        except Exception as e:
            print(f"  !! 研究失敗,沿用昨日資料: {e}", flush=True)
            if cat["id"] in prev_cats:
                cats.append(prev_cats[cat["id"]])
            else:
                raise

    # 今日重點變動:本月新發佈中名次靠前者(中英各一份)
    changes, changes_en = [], []
    for c in cats:
        for it in c.get("monthly", {}).get("items", []):
            if it.get("isNew") and it.get("rank", 9) <= 2:
                d = f"({it.get('date','')})" if it.get("date") else ""
                changes.append(f"{it['name']} {d} — {c['name']}")
                changes_en.append(f"{it['name']} {d} — {c.get('name_en', c['name'])}")
    if not changes:
        changes = ["本月各範疇暫無重大新發佈,榜單與近期相同。"]
        changes_en = ["No major new releases across domains this month; lists match recent."]

    month_en = f"{EN_MONTHS[NOW.month-1]} {NOW.year}"
    digest = {
        "updatedAt": NOW.isoformat(timespec="minutes"),
        "updatedDateLabel": f"{NOW.year} 年 {NOW.month} 月 {NOW.day} 日",
        "month": f"{NOW.year} 年 {NOW.month} 月",
        "month_en": month_en,
        "dataConfidence": f"由 {MODEL} + 即時 web search 於 {NOW:%Y/%m/%d} 自動產生",
        "dataConfidence_en": f"Auto-generated by {MODEL} + live web search on {NOW:%Y/%m/%d}",
        "changesToday": changes[:6],
        "changesToday_en": changes_en[:6],
        "notes": [
            "排名每天會動:AA 為 72 小時滾動、LMArena Elo 每天浮動,第 2~5 名常在誤差內。",
            "剛發佈的模型多為廠商自測數字,獨立 benchmark 通常數週後才定。",
            "本頁由每日排程自動研究產生,僅供快速參考;重大決策請點源連結覆核。",
        ],
        "notes_en": [
            "Rankings shift daily: AA is a 72-hour rolling average and LMArena Elo moves; ranks 2–5 are often within noise.",
            "Newly launched models are mostly vendor self-reported; independent benchmarks settle a few weeks later.",
            "This page is auto-generated daily; quick reference only — verify big decisions against the source links.",
        ],
        "categories": cats,
    }

    with open(DATA_JSON, "w", encoding="utf-8") as f:
        json.dump(digest, f, ensure_ascii=False, indent=2)
    with open(DATA_JS, "w", encoding="utf-8") as f:
        f.write("/* 自動產生 — 由 scripts/update_digest.py 每日重寫,勿手動編輯 */\n")
        f.write("window.DIGEST = ")
        json.dump(digest, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"done — 已更新 {DATA_JS} 與 {DATA_JSON}")

if __name__ == "__main__":
    main()
