/* =====================================================================
   AI 每日情報儀表板 — 資料檔(中英雙語 / bilingual)
   此檔由每日排程自動重寫;手動編輯也可。
   每個文字欄位都有中文 + `_en` 英文;網頁依語言切換顯示。
   overall 項目含 `score`(排名依據短標籤):LLM 類為公開 benchmark 分數,
   影音/3D/音訊類為 Arena 對戰排名+能力評估(部分為綜合判斷)。
   ===================================================================== */
window.DIGEST = {
  updatedAt: "2026-05-31T00:00:00+08:00",
  updatedDateLabel: "2026 年 5 月 31 日",
  month: "2026 年 5 月",
  month_en: "May 2026",
  dataConfidence: "已交叉比對 Artificial Analysis、LMArena 及各官方公告(2026/5/31 查證)",
  dataConfidence_en: "Cross-checked against Artificial Analysis, LMArena & official announcements (verified 2026/5/31)",

  changesToday: [
    "Claude Opus 4.8(5/28 發佈)登頂「綜合 / 遊戲助手 / 數據推理」三範疇 #1",
    "Gemini 3.5 Flash(5/19, Google I/O)與 Qwen3.7-Max(5/20)進本月榜",
    "音訊雙更新:Stable Audio 3(5/20)+ ElevenLabs Music v2(5/26)",
    "影片本月無新旗艦 — Sora 已停用(4/26)、Veo 4 仍未發佈(現役 3.1)"
  ],
  changesToday_en: [
    "Claude Opus 4.8 (released 5/28) takes #1 in Overall / Game-dev / Data-reasoning",
    "Gemini 3.5 Flash (5/19, Google I/O) & Qwen3.7-Max (5/20) enter this month's lists",
    "Two audio drops: Stable Audio 3 (5/20) + ElevenLabs Music v2 (5/26)",
    "No new video flagship this month — Sora discontinued (4/26), Veo 4 still unreleased (current 3.1)"
  ],

  notes: [
    "右側標籤=排名主要依據:LLM 類為 AA 指數/SWE-bench 等公開分數;影音/3D 類為 Arena 對戰+能力(部分綜合判斷)。",
    "排名每天會動:AA 為 72 小時滾動、LMArena Elo 每天浮動,第 2~5 名常在誤差內。",
    "Opus 4.8 為 5/28 剛發,目前多為廠商自測,獨立 benchmark 數週後才會定。"
  ],
  notes_en: [
    "The tag on the right = the main basis for the rank: LLMs use public scores (AA Index / SWE-bench); video/3D use Arena results + capability (partly editorial).",
    "Rankings shift daily: AA is a 72-hour rolling average and LMArena Elo moves; ranks 2–5 are often within noise.",
    "Opus 4.8 just launched 5/28 — mostly vendor self-reported numbers; independent benchmarks settle in a few weeks."
  ],

  categories: [
    /* ============ 1. 綜合 AI MODEL 排名 ============ */
    {
      id: 1, icon: "🧠",
      name: "綜合 AI MODEL 排名", name_en: "Overall AI Model Ranking",
      subtitle: "General-Purpose AI Models · Gemini / Claude / GPT",
      subtitle_en: "General-Purpose AI Models · Gemini / Claude / GPT",
      overall: [
        { rank: 1, name: "Claude Opus 4.8", vendor: "Anthropic", vendor_en: "Anthropic", score: "AA 61", why: "AA 智能指數 #1(61.4);agentic／編程 + 誠實度最佳", why_en: "#1 on AA Intelligence Index (61.4); best agentic/coding + honesty", meta: "5/28 發佈 · API $5/$25", meta_en: "Released 5/28 · API $5/$25" },
        { rank: 2, name: "GPT-5.5 (xhigh)", vendor: "OpenAI", vendor_en: "OpenAI", score: "AA 60", why: "AA 60;最強全能、生態最大", why_en: "AA 60; strongest all-rounder, largest ecosystem", meta: "4/23 · ChatGPT/API", meta_en: "4/23 · ChatGPT/API" },
        { rank: 3, name: "Gemini 3.1 Pro", vendor: "Google", vendor_en: "Google", score: "AA 57", why: "AA 57;推理領先(GPQA 94%),API 最便宜", why_en: "AA 57; reasoning leader (GPQA 94%), cheapest frontier API", meta: "~Q1 · AI Studio/Vertex", meta_en: "~Q1 · AI Studio/Vertex" },
        { rank: 4, name: "Qwen3.7-Max", vendor: "Alibaba", vendor_en: "Alibaba", score: "AA 57", why: "AA 57;開放生態最強,1M context", why_en: "AA 57; best open-ecosystem model, 1M context", meta: "5/20 · Alibaba Cloud", meta_en: "5/20 · Alibaba Cloud" },
        { rank: 5, name: "Gemini 3.5 Flash", vendor: "Google", vendor_en: "Google", score: "AA 55", why: "AA 55;性價比最佳", why_en: "AA 55; best value", meta: "5/19 · Gemini app", meta_en: "5/19 · Gemini app" }
      ],
      monthly: {
        note: null, note_en: null,
        items: [
          { rank: 1, name: "Claude Opus 4.8", version: "4.8", vendor: "Anthropic", vendor_en: "Anthropic", date: "5/28", isNew: true, overlap: "整體 #1", overlap_en: "Overall #1", why: "因 4.8 新版登頂;agentic 可靠度 + 對齊大幅提升", why_en: "New v4.8 takes the crown; big gains in agentic reliability + alignment" },
          { rank: 2, name: "Qwen3.7-Max", version: "3.7-Max", vendor: "Alibaba", vendor_en: "Alibaba", date: "5/20", isNew: true, overlap: "整體 #4", overlap_en: "Overall #4", why: "1M context、延伸思考;示範 35 小時自主執行", why_en: "1M context, extended thinking; demoed 35-hr autonomous run" },
          { rank: 3, name: "Gemini 3.5 Flash", version: "3.5 Flash", vendor: "Google", vendor_en: "Google", date: "5/19", isNew: true, overlap: "整體 #5", overlap_en: "Overall #5", why: "I/O 發佈,快又便宜,多數 benchmark 勝 3.1 Pro", why_en: "Launched at I/O; fast & cheap, beats 3.1 Pro on most benchmarks" },
          { rank: 4, name: "Grok 4.3", version: "4.3", vendor: "xAI", vendor_en: "xAI", date: "5/6", isNew: true, overlap: null, overlap_en: null, why: "推理小改版(前五外,placement 未確認)", why_en: "Reasoning refresh (outside top 5; placement unconfirmed)" },
          { rank: 5, name: "GPT-5.5 Instant", version: "5.5 Instant", vendor: "OpenAI", vendor_en: "OpenAI", date: "5/5", isNew: true, overlap: null, overlap_en: null, why: "ChatGPT 免費預設輕量版(非旗艦;旗艦 GPT-5.5 為 4/23)", why_en: "ChatGPT's free lightweight default (not the flagship; flagship GPT-5.5 = 4/23)" }
        ]
      }
    },

    /* ============ 2. 創建遊戲的助手(AI 編程) ============ */
    {
      id: 2, icon: "🎮",
      name: "創建遊戲的助手", name_en: "Game-Building Assistants",
      subtitle: "AI 編程 · 你的 Three.js + Claude Code + GitHub + Vercel pipeline",
      subtitle_en: "AI coding · your Three.js + Claude Code + GitHub + Vercel pipeline",
      overall: [
        { rank: 1, name: "Claude Opus 4.8", vendor: "Anthropic", vendor_en: "Anthropic", score: "WebDev #1", why: "長程 agentic 編程最強;WebDev Arena 系第一,Claude Code 原生", why_en: "Best long-horizon agentic coding; #1 on WebDev Arena lineage, native to Claude Code", meta: "5/28 · 你前端遊戲首選", meta_en: "5/28 · top pick for your frontend games" },
        { rank: 2, name: "GPT-5.5", vendor: "OpenAI", vendor_en: "OpenAI", score: "SWE 88.7%", why: "公開 SWE-bench Verified 最高(88.7%)", why_en: "Highest public SWE-bench Verified (88.7%)", meta: "4/23 · Codex/Copilot", meta_en: "4/23 · Codex/Copilot" },
        { rank: 3, name: "Claude Opus 4.7", vendor: "Anthropic", vendor_en: "Anthropic", score: "WebDev 1567", why: "前代旗艦,LMArena WebDev 仍第一(1567)", why_en: "Prior flagship; still #1 on LMArena WebDev (1567)", meta: "~4 月 · Claude API", meta_en: "~Apr · Claude API" },
        { rank: 4, name: "GPT-5.3-Codex", vendor: "OpenAI", vendor_en: "OpenAI", score: "SWE 85.0%", why: "Codex 調校 agent 模型,SWE-bench 85.0%", why_en: "Codex-tuned agent model, SWE-bench 85.0%", meta: "Q1 · Codex CLI", meta_en: "Q1 · Codex CLI" },
        { rank: 5, name: "Gemini 3.1 Pro", vendor: "Google", vendor_en: "Google", score: "SWE 80.6%", why: "性價比之王,1M context", why_en: "Best price/perf, 1M context", meta: "~Q1 · Gemini CLI", meta_en: "~Q1 · Gemini CLI" }
      ],
      monthly: {
        note: "模型 + IDE 工具混合排名(IDE 標 [工具])", note_en: "Mixed models + IDE tools (IDEs marked [tool])",
        items: [
          { rank: 1, name: "Claude Opus 4.8", version: "4.8", vendor: "Anthropic", vendor_en: "Anthropic", date: "5/28", isNew: true, overlap: "整體 #1", overlap_en: "Overall #1", why: "因 4.8 新版登頂;長 context 壓縮、tool 觸發更準", why_en: "New v4.8 takes #1; better long-context compaction & tool triggering" },
          { rank: 2, name: "Claude Code v1.0.56 [工具]", name_en: "Claude Code v1.0.56 [tool]", version: "1.0.56", vendor: "Anthropic", vendor_en: "Anthropic", date: "5/29", isNew: true, overlap: null, overlap_en: null, why: "免費/學生用戶可選非 Auto 模型", why_en: "Free/Student users can pick non-Auto models" },
          { rank: 3, name: "Cursor v3.4 [工具]", name_en: "Cursor v3.4 [tool]", version: "3.4", vendor: "Anysphere", vendor_en: "Anysphere", date: "5 月", date_en: "May", isNew: true, overlap: null, overlap_en: null, why: "雲端 Dev 環境、Bugbot PR 審查、並行 subagent", why_en: "Cloud dev envs, Bugbot PR review, parallel subagents" },
          { rank: 4, name: "Gemini 3.5 Flash", version: "3.5 Flash", vendor: "Google", vendor_en: "Google", date: "5/19", isNew: true, overlap: null, overlap_en: null, why: "快速編程/agentic,Terminal-Bench 76.2%", why_en: "Fast coding/agentic, Terminal-Bench 76.2%" },
          { rank: 5, name: "GPT-5.5", version: "5.5", vendor: "OpenAI", vendor_en: "OpenAI", date: "4/23", isNew: false, overlap: "整體 #2", overlap_en: "Overall #2", why: "近 5 週內最強,SWE-bench 公開榜首(補近期)", why_en: "Strongest in the last ~5 weeks, tops public SWE-bench (recent fill-in)" }
        ]
      }
    },

    /* ============ 3. 數據模擬器 & 數據推理 ============ */
    {
      id: 3, icon: "📊",
      name: "創建數據模擬器 & 數據推理", name_en: "Data Simulators & Reasoning",
      subtitle: "對應你的「深海奪寶」RTP / 機率沙盤",
      subtitle_en: "For your 'Abyss Treasury' RTP / probability sandbox",
      overall: [
        { rank: 1, name: "Claude Opus 4.8 (max)", vendor: "Anthropic", vendor_en: "Anthropic", score: "AA 61", why: "AA #1;最會「寫 + 跑」模擬邏輯", why_en: "AA #1; best at writing + running simulation logic", meta: "5/28 · 寫/跑模擬程式", meta_en: "5/28 · build/run simulations" },
        { rank: 2, name: "GPT-5.5 (xhigh)", vendor: "OpenAI", vendor_en: "OpenAI", score: "GPQA 93.5%", why: "純機率數學最強,GPQA 93.5%", why_en: "Best at pure probability math, GPQA 93.5%", meta: "4/23 · 機率推導", meta_en: "4/23 · probability reasoning" },
        { rank: 3, name: "Gemini 3.1 Pro", vendor: "Google", vendor_en: "Google", score: "GPQA 94.1%", why: "GPQA Diamond 最高(94.1%),大 context 分析大量結果", why_en: "Highest GPQA Diamond (94.1%); big context for analyzing large result sets", meta: "~Q1 · 大數據分析", meta_en: "~Q1 · big-data analysis" },
        { rank: 4, name: "Claude Opus 4.7 (max)", vendor: "Anthropic", vendor_en: "Anthropic", score: "AA 57", why: "幻覺率最低 → 數據推理較安全", why_en: "Lowest hallucination → safer data inference", meta: "~4 月 · Claude API", meta_en: "~Apr · Claude API" },
        { rank: 5, name: "Qwen3.7-Max", vendor: "Alibaba", vendor_en: "Alibaba", score: "HMMT 97", why: "數學頂尖(HMMT 97.1)", why_en: "Top-tier math (HMMT 97.1)", meta: "5/20 · Alibaba Cloud", meta_en: "5/20 · Alibaba Cloud" }
      ],
      monthly: {
        note: null, note_en: null,
        items: [
          { rank: 1, name: "Claude Opus 4.8", version: "4.8", vendor: "Anthropic", vendor_en: "Anthropic", date: "5/28", isNew: true, overlap: "整體 #1", overlap_en: "Overall #1", why: "因 4.8 新版;OSWorld 82.3%、Online-Mind2Web 84%", why_en: "New v4.8; OSWorld 82.3%, Online-Mind2Web 84%" },
          { rank: 2, name: "Qwen3.7-Max", version: "3.7-Max", vendor: "Alibaba", vendor_en: "Alibaba", date: "5/20", isNew: true, overlap: "整體 #5", overlap_en: "Overall #5", why: "數學最強之一(HMMT 97.1)", why_en: "Among the best at math (HMMT 97.1)" },
          { rank: 3, name: "Gemini 3.5 Flash", version: "3.5 Flash", vendor: "Google", vendor_en: "Google", date: "5/19", isNew: true, overlap: null, overlap_en: null, why: "高速推理;快速跑大量模擬分析", why_en: "Fast reasoning; quick large-scale simulation analysis" },
          { rank: 4, name: "Grok 4.3", version: "4.3", vendor: "xAI", vendor_en: "xAI", date: "5/6", isNew: true, overlap: null, overlap_en: null, why: "推理刷新版", why_en: "Reasoning refresh" },
          { rank: 5, name: "GPT-5.5 (xhigh)", version: "5.5", vendor: "OpenAI", vendor_en: "OpenAI", date: "4/23", isNew: false, overlap: "整體 #2", overlap_en: "Overall #2", why: "純機率數學最強(補近期)", why_en: "Best at pure probability math (recent fill-in)" }
        ]
      }
    },

    /* ============ 4. 創建遊戲影片(風格化) ============ */
    {
      id: 4, icon: "🎬",
      name: "創建遊戲影片", name_en: "Game / Stylized Video",
      subtitle: "風格化 / 動畫向 Video", subtitle_en: "Stylized / animated video",
      overall: [
        { rank: 1, name: "Kling 3.0 / 3.0 Omni", vendor: "快手 Kuaishou", vendor_en: "Kuaishou", score: "運鏡標竿", score_en: "motion benchmark", why: "電影級運鏡,東亞/動漫風訓練深,多角色對嘴", why_en: "Cinematic motion; deep East-Asian/anime training; multi-character lip-sync", meta: "2/4 · 付費 ~$0.10/s", meta_en: "2/4 · paid ~$0.10/s" },
        { rank: 2, name: "Dreamina Seedance 2.0", vendor: "ByteDance", vendor_en: "ByteDance", score: "多鏡頭敘事", score_en: "multi-shot story", why: "多鏡頭風格化敘事,動漫 I2V 強,原生音訊", why_en: "Multi-shot stylized storytelling, strong anime I2V, native audio", meta: "2/12 · CapCut/fal", meta_en: "2/12 · CapCut/fal" },
        { rank: 3, name: "PixVerse V6", vendor: "PixVerse", vendor_en: "PixVerse", score: "動漫專精", score_en: "anime-tuned", why: "專為動漫/遊戲風格打造,20+ 運鏡控制", why_en: "Built for anime/game styles, 20+ camera controls", meta: "3/30 · 免費增值+API", meta_en: "3/30 · freemium + API" },
        { rank: 4, name: "HappyHorse-1.0", vendor: "Alibaba", vendor_en: "Alibaba", score: "50+ 風格", score_en: "50+ styles", why: "盲測 Arena 第一,50+ 風格,音訊同步", why_en: "#1 in blind-test Arena, 50+ styles, audio sync", meta: "4/27 · fal API", meta_en: "4/27 · fal API" },
        { rank: 5, name: "Pika 2.x", vendor: "Pika", vendor_en: "Pika", score: "社群快剪", score_en: "fast social", why: "Pikaffects/Pikaswaps,快速社群/動漫短片", why_en: "Pikaffects/Pikaswaps; quick social/anime clips", meta: "2025–26 · 免費增值", meta_en: "2025–26 · freemium" }
      ],
      monthly: {
        note: "⚠️ 本月(5 月)無專門影片新旗艦;以下為近 30–90 天最新(依新近度排)",
        note_en: "⚠️ No dedicated new video flagship this month; below are the most recent (last 30–90 days), by recency",
        items: [
          { rank: 1, name: "Gemini Omni", version: "Omni", vendor: "Google", vendor_en: "Google", date: "5/19", isNew: true, overlap: null, overlap_en: null, why: "I/O 發佈,Veo 驅動影片輸出(本月唯一新進,非專門影片模型)", why_en: "Launched at I/O; Veo-powered video output (only May entry; not a dedicated video model)" },
          { rank: 2, name: "HappyHorse-1.0", version: "1.0", vendor: "Alibaba", vendor_en: "Alibaba", date: "4/27", isNew: false, overlap: "整體 #4", overlap_en: "Overall #4", why: "fal 上線,盲測 Arena 第一(補近期)", why_en: "Launched on fal; #1 blind-test Arena (recent fill-in)" },
          { rank: 3, name: "PixVerse V6", version: "V6", vendor: "PixVerse", vendor_en: "PixVerse", date: "3/30", isNew: false, overlap: "整體 #3", overlap_en: "Overall #3", why: "動漫/遊戲風格、多鏡頭(補近期)", why_en: "Anime/game styles, multi-shot (recent fill-in)" },
          { rank: 4, name: "Dreamina Seedance 2.0", version: "2.0", vendor: "ByteDance", vendor_en: "ByteDance", date: "2/12", isNew: false, overlap: "整體 #2", overlap_en: "Overall #2", why: "風格化敘事(補近期)", why_en: "Stylized storytelling (recent fill-in)" },
          { rank: 5, name: "Kling 3.0 Omni", version: "3.0", vendor: "快手 Kuaishou", vendor_en: "Kuaishou", date: "2/4", isNew: false, overlap: "整體 #1", overlap_en: "Overall #1", why: "電影級運鏡(補近期)", why_en: "Cinematic motion (recent fill-in)" }
        ]
      }
    },

    /* ============ 5. 創建真人影片(寫實) ============ */
    {
      id: 5, icon: "🎥",
      name: "創建真人影片", name_en: "Live-Action Video",
      subtitle: "寫實 / 真人向 Video", subtitle_en: "Realistic / live-action video",
      overall: [
        { rank: 1, name: "Dreamina Seedance 2.0 (720p)", vendor: "ByteDance", vendor_en: "ByteDance", score: "Arena 榜首", score_en: "Arena top", why: "Arena 榜首級(T2V & I2V),寫實 + 同步音訊", why_en: "Top of Arena (T2V & I2V); realism + synced audio", meta: "2/12 · CapCut/fal", meta_en: "2/12 · CapCut/fal" },
        { rank: 2, name: "HappyHorse-1.0", vendor: "Alibaba", vendor_en: "Alibaba", score: "盲測 #1", score_en: "blind-test #1", why: "無音訊 Arena #1,1080p 寫實,低 WER 對嘴", why_en: "#1 no-audio Arena; 1080p realism, low-WER lip-sync", meta: "4/27 · fal API", meta_en: "4/27 · fal API" },
        { rank: 3, name: "Kling 3.0 Pro (1080p)", vendor: "快手 Kuaishou", vendor_en: "Kuaishou", score: "原生 4K", score_en: "native 4K", why: "原生 4K,對白/寫實強", why_en: "Native 4K; strong dialogue/realism", meta: "2 月 · 付費", meta_en: "Feb · paid" },
        { rank: 4, name: "Google Veo 3.1 (+Fast)", vendor: "Google", vendor_en: "Google", score: "提示遵從佳", score_en: "best adherence", why: "提示遵從最佳,原生音訊,4K,最穩", why_en: "Best prompt adherence, native audio, 4K; most reliable", meta: "~1 月 · Flow/Gemini", meta_en: "~Jan · Flow/Gemini" },
        { rank: 5, name: "MiniMax Hailuo 2.3", vendor: "MiniMax", vendor_en: "MiniMax", score: "物理寫實", score_en: "physical realism", why: "物理寫實/微表情強,便宜", why_en: "Strong physical realism/micro-expressions, cheap", meta: "2025/10 · App+API", meta_en: "2025/10 · App+API" }
      ],
      monthly: {
        note: "⚠️ 本月無真人影片新旗艦;Sora 已停用(消費端 4/26、API 9/24);Veo 4 仍未發佈(現役 3.1)",
        note_en: "⚠️ No new live-action flagship this month; Sora discontinued (consumer 4/26, API 9/24); Veo 4 still unreleased (current 3.1)",
        items: [
          { rank: 1, name: "Gemini Omni", version: "Omni", vendor: "Google", vendor_en: "Google", date: "5/19", isNew: true, overlap: null, overlap_en: null, why: "I/O 發佈,Veo 驅動影片輸出 + Flow agents(本月唯一新進)", why_en: "Launched at I/O; Veo-powered video + Flow agents (only May entry)" },
          { rank: 2, name: "HappyHorse-1.0", version: "1.0", vendor: "Alibaba", vendor_en: "Alibaba", date: "4/27", isNew: false, overlap: "整體 #2", overlap_en: "Overall #2", why: "最近期專用模型,photoreal 1080p(補近期)", why_en: "Most recent dedicated model; photoreal 1080p (recent fill-in)" },
          { rank: 3, name: "Dreamina Seedance 2.0", version: "2.0", vendor: "ByteDance", vendor_en: "ByteDance", date: "2/12", isNew: false, overlap: "整體 #1", overlap_en: "Overall #1", why: "寫實 + 同步音訊(補近期)", why_en: "Realism + synced audio (recent fill-in)" },
          { rank: 4, name: "Kling 3.0 Pro", version: "3.0", vendor: "快手 Kuaishou", vendor_en: "Kuaishou", date: "2 月", date_en: "Feb", isNew: false, overlap: "整體 #3", overlap_en: "Overall #3", why: "原生 4K 寫實(補近期)", why_en: "Native 4K realism (recent fill-in)" },
          { rank: 5, name: "Google Veo 3.1", version: "3.1", vendor: "Google", vendor_en: "Google", date: "~1 月", date_en: "~Jan", isNew: false, overlap: "整體 #4", overlap_en: "Overall #4", why: "最穩全能(現役旗艦,Veo 4 未發)", why_en: "Most reliable all-rounder (current flagship; Veo 4 unreleased)" }
        ]
      }
    },

    /* ============ 6. 創建遊戲模組(3D 生成) ============ */
    {
      id: 6, icon: "🧊",
      name: "創建遊戲模組", name_en: "3D Asset Generation",
      subtitle: "3D 模型生成 · 例如 Meshy", subtitle_en: "3D model generation · e.g. Meshy",
      overall: [
        { rank: 1, name: "Meshy-6", vendor: "Meshy", vendor_en: "Meshy", score: "盲測勝出", score_en: "won blind test", why: "最均衡全流程(text/img→3D、PBR、低面數、匯出);盲測勝 Tripo", why_en: "Most balanced full pipeline (text/img→3D, PBR, low-poly, export); beat Tripo in blind tests", meta: "1/18 · 免費增值 ~$20/mo", meta_en: "1/18 · freemium ~$20/mo" },
        { rank: 2, name: "Tripo P1.0 (+H3.1)", vendor: "Tripo AI", vendor_en: "Tripo AI", score: "~2 秒出模", score_en: "~2s mesh", why: "原生 3D 擴散,~2 秒出引擎可用網格", why_en: "Native 3D diffusion; engine-ready meshes in ~2s", meta: "3/9 GDC · ~$12/mo", meta_en: "3/9 GDC · ~$12/mo" },
        { rank: 3, name: "Rodin Gen-2", vendor: "Hyper3D", vendor_en: "Hyper3D", score: "寫實最高", score_en: "top realism", why: "表面寫實度最高,四邊面 + 3D 修補", why_en: "Highest surface realism; quad mesh + 3D inpainting", meta: "2/9 · ~$30/mo", meta_en: "2/9 · ~$30/mo" },
        { rank: 4, name: "Hunyuan3D 3.0", vendor: "騰訊 Tencent", vendor_en: "Tencent", score: "開源自架", score_en: "open-source", why: "免費/可自架,開源線,1536³ 解析度", why_en: "Free/self-hostable, open-source line, 1536³ resolution", meta: "2025/9 · 免費自架", meta_en: "2025/9 · free self-host" },
        { rank: 5, name: "TRELLIS 2", vendor: "Microsoft(開源)", vendor_en: "Microsoft (open-source)", score: "開源材質佳", score_en: "open texture", why: "開源材質品質最佳(Gaussian-splat)", why_en: "Best open-source texture quality (Gaussian-splat)", meta: "2025–26 · 開源免費", meta_en: "2025–26 · open-source, free" }
      ],
      monthly: {
        note: "⚠️ 本月無新 3D 模型;最新動作在 4 月底(依新近度排)",
        note_en: "⚠️ No new 3D model this month; latest moves were late April (by recency)",
        items: [
          { rank: 1, name: "Autodesk Flow Studio + Trellis 2", version: "整合", version_en: "integration", vendor: "Autodesk", vendor_en: "Autodesk", date: "4/28", isNew: false, overlap: null, overlap_en: null, why: "Flow Studio 接入 Trellis 2 做 text/img→3D(最新)", why_en: "Flow Studio now includes Trellis 2 for text/img→3D (latest)" },
          { rank: 2, name: "Tripo P1.0", version: "P1.0", vendor: "Tripo AI", vendor_en: "Tripo AI", date: "3/9", isNew: false, overlap: "整體 #2", overlap_en: "Overall #2", why: "GDC 發佈,原生 3D 擴散(補近期)", why_en: "Launched at GDC; native 3D diffusion (recent fill-in)" },
          { rank: 3, name: "Rodin Gen-2", version: "Gen-2", vendor: "Hyper3D", vendor_en: "Hyper3D", date: "2/9", isNew: false, overlap: "整體 #3", overlap_en: "Overall #3", why: "表面寫實度最高(補近期)", why_en: "Highest surface realism (recent fill-in)" },
          { rank: 4, name: "Meshy-6", version: "6", vendor: "Meshy", vendor_en: "Meshy", date: "1/18", isNew: false, overlap: "整體 #1", overlap_en: "Overall #1", why: "最均衡全流程(補近期)", why_en: "Most balanced pipeline (recent fill-in)" },
          { rank: 5, name: "Hunyuan3D 3.0", version: "3.0", vendor: "騰訊 Tencent", vendor_en: "Tencent", date: "2025/9", isNew: false, overlap: "整體 #4", overlap_en: "Overall #4", why: "開源可自架(補近期;非「3.5」)", why_en: "Open-source, self-hostable (recent fill-in; not '3.5')" }
        ]
      }
    },

    /* ============ 7. 遊戲模組 Rigging(綁骨) ============ */
    {
      id: 7, icon: "🦴",
      name: "遊戲模組 Rigging", name_en: "Game Asset Rigging",
      subtitle: "綁骨 / 可動 · 例如 Anything World", subtitle_en: "Rigging / animation-ready · e.g. Anything World",
      overall: [
        { rank: 1, name: "Meshy-6 Auto-Rig + Animate", vendor: "Meshy", vendor_en: "Meshy", score: "<30s·500+動作", score_en: "<30s · 500+ anims", why: "一站式,<30 秒自動綁人形/四足,500+ 預設動作", why_en: "One-stop; auto-rigs humanoids/quadrupeds in <30s, 500+ preset animations", meta: "2025–26 · ~$20/mo", meta_en: "2025–26 · ~$20/mo" },
        { rank: 2, name: "Autodesk Flow Studio AI Rigging", vendor: "Autodesk", vendor_en: "Autodesk", score: "免費綁骨", score_en: "free rigging", why: "AI 自動關節 + AI 動捕,匯出 Maya/Blender/UE", why_en: "AI auto-joints + AI mocap; export to Maya/Blender/UE", meta: "4/28 · 全層免費預覽", meta_en: "4/28 · free preview, all tiers" },
        { rank: 3, name: "Tripo Auto-Rigging (Uni-Rig)", vendor: "Tripo AI", vendor_en: "Tripo AI", score: "骨架+動畫", score_en: "rig + anim", why: "自動骨架 + 權重 + 自動動畫,風格化佳", why_en: "Auto-skeleton + weights + auto-animation; great for stylized", meta: "2025–26 · ~$12/mo", meta_en: "2025–26 · ~$12/mo" },
        { rank: 4, name: "Cascadeur 2026.1", vendor: "Nekki", vendor_en: "Nekki", score: "AI 物理動作", score_en: "AI physics", why: "AI AutoPosing/Physics + AI Root Motion,UE Live Link", why_en: "AI AutoPosing/Physics + AI Root Motion; UE Live Link", meta: "4/9 · 免費層+訂閱", meta_en: "4/9 · free tier + subscription" },
        { rank: 5, name: "Anything World — Animate Anything", vendor: "Anything World", vendor_en: "Anything World", score: "任意網格", score_en: "any mesh", why: "任意靜態網格 AI 綁定(尤其動物/生物)", why_en: "AI-rig any static mesh (esp. animals/creatures)", meta: "Live · 免費起步+API", meta_en: "Live · free start + API" }
      ],
      monthly: {
        note: "⚠️ 本月無新 rigging 發佈;最新在 4 月(依新近度排)",
        note_en: "⚠️ No new rigging release this month; latest in April (by recency)",
        items: [
          { rank: 1, name: "Autodesk Flow Studio AI Rigging + Neural Layer", version: "新功能", version_en: "new", vendor: "Autodesk", vendor_en: "Autodesk", date: "4/28", isNew: false, overlap: "整體 #2", overlap_en: "Overall #2", why: "最新發佈;免費層可綁骨,廣泛引擎匯出(最新)", why_en: "Newest release; free-tier rigging, broad engine export (latest)" },
          { rank: 2, name: "Cascadeur 2026.1", version: "2026.1", vendor: "Nekki", vendor_en: "Nekki", date: "4/9", isNew: false, overlap: "整體 #4", overlap_en: "Overall #4", why: "新增 AI Root Motion、四足 AutoPosing、UE Live Link(補近期)", why_en: "Adds AI Root Motion, quadruped AutoPosing, UE Live Link (recent fill-in)" },
          { rank: 3, name: "Tripo Uni-Rig", version: "Uni-Rig", vendor: "Tripo AI", vendor_en: "Tripo AI", date: "2025–26", isNew: false, overlap: "整體 #3", overlap_en: "Overall #3", why: "自動骨架 + 自動動畫(補近期)", why_en: "Auto-skeleton + auto-animation (recent fill-in)" },
          { rank: 4, name: "Meshy-6 Auto-Rig", version: "6", vendor: "Meshy", vendor_en: "Meshy", date: "2025–26", isNew: false, overlap: "整體 #1", overlap_en: "Overall #1", why: "一站式 + 500+ 動作(補近期)", why_en: "One-stop + 500+ animations (recent fill-in)" },
          { rank: 5, name: "Anything World — Animate Anything", version: "—", vendor: "Anything World", vendor_en: "Anything World", date: "Live", isNew: false, overlap: "整體 #5", overlap_en: "Overall #5", why: "任意網格綁定(補近期;2026 無註明版本更新)", why_en: "Rig any mesh (recent fill-in; no dated 2026 update)" }
        ]
      }
    },

    /* ============ 8. 創建聲音特效(音訊) ============ */
    {
      id: 8, icon: "🔊",
      name: "創建聲音特效", name_en: "Sound Effects & Audio",
      subtitle: "SFX / 語音 / 音樂 · 例如 ElevenLabs", subtitle_en: "SFX / voice / music · e.g. ElevenLabs",
      overall: [
        { rank: 1, name: "ElevenLabs SFX v2 + v3 voice", vendor: "ElevenLabs", vendor_en: "ElevenLabs", score: "SFX 龍頭", score_en: "SFX leader", why: "遊戲音訊最全:文字轉 SFX(30s、可無縫循環)+ 頂級語音", why_en: "Most complete game-audio stack: text-to-SFX (30s, seamless loops) + top-tier voice", meta: "SFX 2025/9 · v3 2 月", meta_en: "SFX 2025/9 · v3 Feb" },
        { rank: 2, name: "Stable Audio 3", vendor: "Stability AI", vendor_en: "Stability AI", score: "開源·SFX", score_en: "open-source SFX", why: "開源,音樂 + SFX/foley 統一,適合自架 pipeline", why_en: "Open-source; unified music + SFX/foley; great for self-hosted pipelines", meta: "5/20 · 開源權重", meta_en: "5/20 · open weights" },
        { rank: 3, name: "ElevenLabs Music v2", vendor: "ElevenLabs", vendor_en: "ElevenLabs", score: "商用授權", score_en: "licensed", why: "商用授權清晰,可在曲中嵌 SFX、中途換曲風", why_en: "Clear commercial licensing; embed SFX in tracks, mid-track genre switch", meta: "5/26 · 降價 40–50%", meta_en: "5/26 · 40–50% cheaper" },
        { rank: 4, name: "Suno v5.5", vendor: "Suno", vendor_en: "Suno", score: "音樂龍頭", score_en: "music leader", why: "消費級音樂龍頭,語音擷取、自訂模型", why_en: "Consumer music leader; voice capture, custom models", meta: "3/27 · 訂閱制", meta_en: "3/27 · subscription" },
        { rank: 5, name: "Lyria 3 Pro", vendor: "Google DeepMind", vendor_en: "Google DeepMind", score: "3 分鐘長曲", score_en: "3-min tracks", why: "最長 3 分鐘結構化曲目,SynthID 浮水印", why_en: "Up to 3-min structured tracks; SynthID watermark", meta: "3/25 · Gemini/Vertex", meta_en: "3/25 · Gemini/Vertex" }
      ],
      monthly: {
        note: null, note_en: null,
        items: [
          { rank: 1, name: "ElevenLabs Music v2", version: "v2", vendor: "ElevenLabs", vendor_en: "ElevenLabs", date: "5/26", isNew: true, overlap: "整體 #3", overlap_en: "Overall #3", why: "曲中換曲風、嵌入 SFX、分段重繪;舊價砍 40–50%", why_en: "Mid-track genre switch, embedded SFX, section inpainting; 40–50% price cut" },
          { rank: 2, name: "Stable Audio 3", version: "3", vendor: "Stability AI", vendor_en: "Stability AI", date: "5/20", isNew: true, overlap: "整體 #2", overlap_en: "Overall #2", why: "本月對 SFX 最重要:開源 + 專用 SFX/foley 變體、最長 6:20、inpainting", why_en: "Most important SFX drop this month: open-source + dedicated SFX/foley variants, up to 6:20, inpainting" },
          { rank: 3, name: "Suno v5.5", version: "5.5", vendor: "Suno", vendor_en: "Suno", date: "3/27", isNew: false, overlap: "整體 #4", overlap_en: "Overall #4", why: "消費級音樂龍頭(補近期)", why_en: "Consumer music leader (recent fill-in)" },
          { rank: 4, name: "Lyria 3 Pro", version: "3 Pro", vendor: "Google", vendor_en: "Google", date: "3/25", isNew: false, overlap: "整體 #5", overlap_en: "Overall #5", why: "結構化長曲 + 浮水印(補近期)", why_en: "Structured long tracks + watermark (recent fill-in)" },
          { rank: 5, name: "ElevenLabs v3 voice", version: "v3", vendor: "ElevenLabs", vendor_en: "ElevenLabs", date: "2 月", date_en: "Feb", isNew: false, overlap: "整體 #1", overlap_en: "Overall #1", why: "頂級表情語音(補近期;SFX 本身本月無更新)", why_en: "Top-tier expressive voice (recent fill-in; SFX itself no update this month)" }
        ]
      }
    },

    /* ============ 9. AI 工具組合(Combo) ============ */
    {
      id: 9, icon: "🧩",
      name: "AI 工具組合 Combo", name_en: "AI Tool Combos",
      subtitle: "好用的 AI 混搭 · 例如 Claude + Obsidian", subtitle_en: "Great AI tool stacks · e.g. Claude + Obsidian",
      overall: [
        { rank: 1, name: "Claude + Obsidian", vendor: "Anthropic + Obsidian", vendor_en: "Anthropic + Obsidian", score: "社群熱門·MCP", score_en: "community · MCP", why: "AI 第二大腦:Claude 讀寫/連結你的 Markdown 筆記庫;PKM、研究、長期記憶", why_en: "AI second brain: Claude reads/links your local Markdown vault — PKM, research, memory", meta: "MCP/社群外掛 · 2026 大熱", meta_en: "MCP/community plugins · hot in 2026" },
        { rank: 2, name: "Claude Code + GitHub + Vercel", vendor: "Anthropic + GitHub + Vercel", vendor_en: "Anthropic + GitHub + Vercel", score: "官方·整合深", score_en: "official · deep", why: "build→push→自動部署 ~60–90 秒;標準 AI 網頁開發 pipeline(你正在用的)", why_en: "build→push→auto-deploy in ~60–90s; the standard AI web-dev pipeline (the one you use)", meta: "官方 Vercel 外掛/Skill", meta_en: "official Vercel plugin/skill" },
        { rank: 3, name: "Cursor + Claude Code + Codex", vendor: "Anysphere + Anthropic + OpenAI", vendor_en: "Anysphere + Anthropic + OpenAI", score: "跨廠·社群熱", score_en: "cross-vendor · hot", why: "可組合式編程:跨三家並行調度 agent;OpenAI 官方外掛可在 Claude Code 內跑", why_en: "Composable coding: orchestrate parallel agents across all three; OpenAI plugin runs inside Claude Code", meta: "跨廠互通 · 2026", meta_en: "cross-vendor interop · 2026" },
        { rank: 4, name: "Perplexity (Comet) + NotebookLM", vendor: "Perplexity + Google", vendor_en: "Perplexity + Google", score: "研究組合", score_en: "research duo", why: "研究神器:Perplexity 找來源 → NotebookLM 深入分析;側欄一鍵接力", why_en: "Research duo: Perplexity finds sources → NotebookLM analyzes them; one-click sidebar handoff", meta: "Comet iOS 3/18 免費", meta_en: "Comet free on iOS 3/18" },
        { rank: 5, name: "AI + n8n / Make / Zapier", vendor: "n8n / Make / Zapier", vendor_en: "n8n / Make / Zapier", score: "自動化·開源", score_en: "automation · OSS", why: "把 LLM 當工作流引擎裡的推理節點;自動化、可擴充、可自架(n8n)", why_en: "LLM as a reasoning node inside workflow engines; automation, extensible, self-hostable (n8n)", meta: "原生 OpenAI/Claude/Gemini 節點", meta_en: "native OpenAI/Claude/Gemini nodes" }
      ],
      monthly: {
        note: "本月以新 MCP 連接器/整合為主(讓既有工具互通);排名屬社群熱度,非 benchmark",
        note_en: "Mostly new MCP connectors/integrations this month (linking existing tools); ranking is community popularity, not a benchmark",
        items: [
          { rank: 1, name: "Microsoft 365 Copilot + 聯邦 MCP 連接器", name_en: "Microsoft 365 Copilot + Federated MCP", version: "MCP", vendor: "Microsoft", vendor_en: "Microsoft", date: "5/5", isNew: true, overlap: null, overlap_en: null, why: "Canva/HubSpot/Linear/Notion 等聯邦 MCP 連接器,prompt 時即時查企業資料", why_en: "Federated MCP connectors (Canva/HubSpot/Linear/Notion…) — live enterprise data at prompt time" },
          { rank: 2, name: "Claude + 法律 MCP 連接器", name_en: "Claude + legal MCP connectors", version: "MCP", vendor: "Anthropic", vendor_en: "Anthropic", date: "5 月", date_en: "May", isNew: true, overlap: null, overlap_en: null, why: "20+ 法律 MCP 連接器 + 12 個實務外掛(Thomson Reuters、Free Law 等)", why_en: "20+ legal MCP connectors + 12 practice plugins (Thomson Reuters, Free Law, etc.)" },
          { rank: 3, name: "Mistral + Connectors (Studio)", version: "Connectors", vendor: "Mistral", vendor_en: "Mistral", date: "5/22", isNew: true, overlap: null, overlap_en: null, why: "Studio 內建 + 自訂 MCP 連接器(API/SDK)", why_en: "Built-in + custom MCP connectors in Studio (API/SDK)" },
          { rank: 4, name: "Grok + Connectors", version: "Connectors", vendor: "xAI", vendor_en: "xAI", date: "5/6", isNew: true, overlap: null, overlap_en: null, why: "新增 Google Workspace、Notion、GitHub 連接器", why_en: "New Google Workspace, Notion, GitHub connectors" },
          { rank: 5, name: "Snyk + Claude / Opsera + Cursor", version: "整合", version_en: "integration", vendor: "Snyk / Opsera", vendor_en: "Snyk / Opsera", date: "5 月", date_en: "May", isNew: true, overlap: null, overlap_en: null, why: "把資安/DevOps 接進編程 agent(來源僅搜尋摘要證實,待覆核)", why_en: "Security/DevOps into coding agents (source via snippet only — to be verified)" }
        ]
      }
    }
  ]
};
