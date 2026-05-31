# AI 每日情報儀表板 · Daily AI Intelligence

每天自動更新的 AI 模型/工具排行儀表板。涵蓋 **8 大範疇**,每個範疇兩個視角:

1. **① 整體 Top 5** — 目前最強的底盤(很少變)
2. **② 本月最新 Top 5** — 本月新發佈中最好用的;若與整體重疊,會標出**新版本號**讓你知道它是「因為新版本」才登上本月榜

> 範疇順序:①綜合 AI 排名 ②遊戲助手(AI 編程) ③數據模擬/推理 ④遊戲影片 ⑤真人影片 ⑥3D 模組 ⑦Rigging ⑧聲音特效

---

## 📂 檔案結構

| 檔案 | 作用 |
|---|---|
| `index.html` | 儀表板(讀 `data.js` 顯示);可直接雙擊開啟 |
| `data.js` | 當日資料(`window.DIGEST = {...}`)。**由排程自動重寫** |
| `data.json` | 同份資料的純 JSON 版(機器可讀 / 隔日比對用,自動產生) |
| `scripts/update_digest.py` | 每日研究引擎:Claude + web search → 重寫上面兩個檔 |
| `.github/workflows/daily-update.yml` | GitHub Action,每天 00:00 凌晨(台北/香港)自動跑 |
| `requirements.txt` | Python 套件(`anthropic`) |

---

## 🚀 上線三步驟(GitHub + Vercel,沿用你現有 pipeline)

**1. 推上 GitHub**
```bash
cd ai-daily-digest
git init && git add . && git commit -m "init: AI daily digest"
gh repo create ai-daily-digest --public --source=. --push
# 或在 github.com 開一個新 repo 再 push
```

**2. 連到 Vercel(純靜態,免 build)**
- Vercel → Add New → Project → 匯入這個 repo
- Framework Preset 選 **Other**,Build Command 留空,Output Directory 填 `.`(根目錄)
- Deploy → 拿到網址,手機/電腦打開即可看

**3. 設定每日自動更新的金鑰**
- 到 GitHub repo → **Settings → Secrets and variables → Actions**
- 新增 secret:`ANTHROPIC_API_KEY` = 你的 Anthropic API 金鑰([console.anthropic.com](https://console.anthropic.com))
- (選填)新增 variable:`DIGEST_MODEL` = `claude-opus-4-8`(預設,最佳)或 `claude-sonnet-4-6`(省錢)

完成後:**每天凌晨 00:00 Action 自動重查 → 更新 `data.js` → push → Vercel 自動重新部署**。你打開網址就是最新,不用按任何鍵。

---

## 👥 分享給朋友

部署到 Vercel 後,直接把網址(`https://你的專案.vercel.app`)發給朋友即可——免安裝、免登入。

- **分享零額外成本**:頁面是每天產生一次的靜態檔,朋友瀏覽**不會觸發 API**;給 1 人或 100 人看,費用一樣。
- **金鑰安全**:`ANTHROPIC_API_KEY` 只在 GitHub 後端,**不會出現在網頁**,訪客看不到。
- **連結預覽**:已內建 Open Graph 標籤;若要加縮圖,放一張 `og-image.png` 再於 `index.html` 補 `<meta property="og:image" content="https://你的網址/og-image.png">`。
- (進階)可在 Vercel 綁自訂網域,連結更好記、更好分享。

---

## ⏰ 想改時間 / 頻率 / 模型

- **時間**:改 `.github/workflows/daily-update.yml` 的 `cron`(GitHub 用 UTC;`0 16 * * *` = 台北/香港 00:00 凌晨)
- **改每週一次**(省錢):把 cron 改成 `0 16 * * 0`(= 台北/香港 每週一凌晨 00:00)
- **模型**:設 GitHub variable `DIGEST_MODEL`,或改 `update_digest.py` 最上面的預設值
- **手動觸發一次**:GitHub repo → Actions → Daily AI Digest Update → Run workflow

## 🖊️ 想手動改某筆資料

直接編輯 `data.js`(結構見檔內註解)。下一次排程會覆蓋它——若要保留,請同步改研究邏輯或暫停排程。

## 💻 本機預覽

直接雙擊 `index.html` 即可(`data.js` 以 `<script>` 載入,無需伺服器)。
或啟動本機伺服器:`cd ai-daily-digest && python3 -m http.server 8000` → 開 http://localhost:8000

## 💡 設計說明

- **網頁不會自己上網研究**;研究是 `update_digest.py`(Claude + web search)做的,網頁只負責漂亮顯示。
- 因此「最新」靠**背景排程**達成,不需要刷新按鈕。頁面上的「↻ 重新載入」只是重新讀取已存好的資料。
- 排名每天浮動(AA 72 小時滾動),第 2~5 名常在誤差內;剛發佈的模型數字數週後才定。
