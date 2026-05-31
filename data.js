/* =====================================================================
   AI 每日情報儀表板 — 資料檔
   此檔由每日排程自動重寫;手動編輯也可。
   結構: window.DIGEST = { updatedAt, month, changesToday[], notes[], categories[] }
   每個 category 有兩個 Top 5: overall(整體) 與 monthly(本月最新)
   ===================================================================== */
window.DIGEST = {
  updatedAt: "2026-05-31T00:00:00+08:00",
  updatedDateLabel: "2026 年 5 月 31 日",
  month: "2026 年 5 月",
  dataConfidence: "已交叉比對 Artificial Analysis、LMArena 及各官方公告(2026/5/31 查證)",

  // 今日相對昨日的重點變動(每日排程會更新)
  changesToday: [
    "Claude Opus 4.8(5/28 發佈)登頂「綜合 / 遊戲助手 / 數據推理」三範疇 #1",
    "Gemini 3.5 Flash(5/19, Google I/O)與 Qwen3.7-Max(5/20)進本月榜",
    "音訊雙更新:Stable Audio 3(5/20)+ ElevenLabs Music v2(5/26)",
    "影片本月無新旗艦 — Sora 已停用(4/26)、Veo 4 仍未發佈(現役 3.1)"
  ],

  // 看榜注意事項
  notes: [
    "排名每天會動:AA 為 72 小時滾動、LMArena Elo 每天浮動,第 2~5 名常在誤差內。",
    "Opus 4.8 為 5/28 剛發,目前多為廠商自測,獨立 benchmark 數週後才會定。",
    "常見舊資料/誤傳:Veo 4(未發,現役 3.1)、Hunyuan3D「3.5」(誤,現役 3.0)、「GPT-5.4 / Opus 4.6」(過時)。"
  ],

  categories: [
    /* ============ 1. 綜合 AI MODEL 排名 ============ */
    {
      id: 1, icon: "🧠",
      name: "綜合 AI MODEL 排名",
      subtitle: "General-Purpose AI Models · Gemini / Claude / GPT",
      overall: [
        { rank: 1, name: "Claude Opus 4.8", vendor: "Anthropic", why: "AA 智能指數 #1（61）；agentic／編程 + 誠實度最佳", meta: "5/28 發佈 · API $5/$25" },
        { rank: 2, name: "GPT-5.5 (xhigh)", vendor: "OpenAI", why: "AA 60；最強全能、生態最大", meta: "4/23 · ChatGPT/API" },
        { rank: 3, name: "Gemini 3.1 Pro", vendor: "Google", why: "AA 57；推理領先（GPQA 94%），API 最便宜", meta: "~Q1 · AI Studio/Vertex" },
        { rank: 4, name: "Qwen3.7-Max", vendor: "Alibaba", why: "AA 57；開放生態最強，1M context", meta: "5/20 · Alibaba Cloud" },
        { rank: 5, name: "Gemini 3.5 Flash", vendor: "Google", why: "AA 55；性價比最佳", meta: "5/19 · Gemini app" }
      ],
      monthly: {
        note: null,
        items: [
          { rank: 1, name: "Claude Opus 4.8", version: "4.8", vendor: "Anthropic", date: "5/28", isNew: true, overlap: "整體 #1", why: "因 4.8 新版登頂；agentic 可靠度 + 對齊大幅提升" },
          { rank: 2, name: "Qwen3.7-Max", version: "3.7-Max", vendor: "Alibaba", date: "5/20", isNew: true, overlap: "整體 #4", why: "1M context、延伸思考；示範 35 小時自主執行" },
          { rank: 3, name: "Gemini 3.5 Flash", version: "3.5 Flash", vendor: "Google", date: "5/19", isNew: true, overlap: "整體 #5", why: "I/O 發佈，快又便宜，多數 benchmark 勝 3.1 Pro" },
          { rank: 4, name: "Grok 4.3", version: "4.3", vendor: "xAI", date: "5/6", isNew: true, overlap: null, why: "推理小改版（前五外，placement 未確認）" },
          { rank: 5, name: "GPT-5.5 Instant", version: "5.5 Instant", vendor: "OpenAI", date: "5/5", isNew: true, overlap: null, why: "ChatGPT 免費預設輕量版（非旗艦；旗艦 GPT-5.5 為 4/23）" }
        ]
      }
    },

    /* ============ 2. 創建遊戲的助手（AI 編程） ============ */
    {
      id: 2, icon: "🎮",
      name: "創建遊戲的助手",
      subtitle: "AI 編程 · 你的 Three.js + Claude Code + GitHub + Vercel pipeline",
      overall: [
        { rank: 1, name: "Claude Opus 4.8", vendor: "Anthropic", why: "長程 agentic 編程最強；WebDev Arena 系第一，Claude Code 原生", meta: "5/28 · 你前端遊戲首選" },
        { rank: 2, name: "GPT-5.5", vendor: "OpenAI", why: "公開 SWE-bench Verified 最高（88.7%）", meta: "4/23 · Codex/Copilot" },
        { rank: 3, name: "Claude Opus 4.7", vendor: "Anthropic", why: "前代旗艦，LMArena WebDev 仍第一（1567）", meta: "~4 月 · Claude API" },
        { rank: 4, name: "GPT-5.3-Codex", vendor: "OpenAI", why: "Codex 調校 agent 模型，SWE-bench 85.0%", meta: "Q1 · Codex CLI" },
        { rank: 5, name: "Gemini 3.1 Pro", vendor: "Google", why: "性價比之王，1M context", meta: "~Q1 · Gemini CLI" }
      ],
      monthly: {
        note: "模型 + IDE 工具混合排名（IDE 標 [工具]）",
        items: [
          { rank: 1, name: "Claude Opus 4.8", version: "4.8", vendor: "Anthropic", date: "5/28", isNew: true, overlap: "整體 #1", why: "因 4.8 新版登頂；長 context 壓縮、tool 觸發更準" },
          { rank: 2, name: "Claude Code v1.0.56 [工具]", version: "1.0.56", vendor: "Anthropic", date: "5/29", isNew: true, overlap: null, why: "免費/學生用戶可選非 Auto 模型" },
          { rank: 3, name: "Cursor v3.4 [工具]", version: "3.4", vendor: "Anysphere", date: "5 月", isNew: true, overlap: null, why: "雲端 Dev 環境、Bugbot PR 審查、並行 subagent" },
          { rank: 4, name: "Gemini 3.5 Flash", version: "3.5 Flash", vendor: "Google", date: "5/19", isNew: true, overlap: null, why: "快速編程/agentic，Terminal-Bench 76.2%" },
          { rank: 5, name: "GPT-5.5", version: "5.5", vendor: "OpenAI", date: "4/23", isNew: false, overlap: "整體 #2", why: "近 5 週內最強，SWE-bench 公開榜首（補近期）" }
        ]
      }
    },

    /* ============ 3. 數據模擬器 & 數據推理 ============ */
    {
      id: 3, icon: "📊",
      name: "創建數據模擬器 & 數據推理",
      subtitle: "對應你的「深海奪寶」RTP / 機率沙盤",
      overall: [
        { rank: 1, name: "Claude Opus 4.8 (max)", vendor: "Anthropic", why: "AA #1；最會「寫 + 跑」模擬邏輯", meta: "5/28 · 寫/跑模擬程式" },
        { rank: 2, name: "GPT-5.5 (xhigh)", vendor: "OpenAI", why: "純機率數學最強，GPQA 93.5%", meta: "4/23 · 機率推導" },
        { rank: 3, name: "Gemini 3.1 Pro", vendor: "Google", why: "GPQA Diamond 最高（94.1%），大 context 分析大量結果", meta: "~Q1 · 大數據分析" },
        { rank: 4, name: "Claude Opus 4.7 (max)", vendor: "Anthropic", why: "幻覺率最低 → 數據推理較安全", meta: "~3 月 · Claude API" },
        { rank: 5, name: "Qwen3.7-Max", vendor: "Alibaba", why: "數學頂尖（HMMT 97.1）", meta: "5/20 · Alibaba Cloud" }
      ],
      monthly: {
        note: null,
        items: [
          { rank: 1, name: "Claude Opus 4.8", version: "4.8", vendor: "Anthropic", date: "5/28", isNew: true, overlap: "整體 #1", why: "因 4.8 新版；OSWorld 82.3%、Online-Mind2Web 84%" },
          { rank: 2, name: "Qwen3.7-Max", version: "3.7-Max", vendor: "Alibaba", date: "5/20", isNew: true, overlap: "整體 #5", why: "數學最強之一（HMMT 97.1）" },
          { rank: 3, name: "Gemini 3.5 Flash", version: "3.5 Flash", vendor: "Google", date: "5/19", isNew: true, overlap: null, why: "高速推理；快速跑大量模擬分析" },
          { rank: 4, name: "Grok 4.3", version: "4.3", vendor: "xAI", date: "5/6", isNew: true, overlap: null, why: "推理刷新版" },
          { rank: 5, name: "GPT-5.5 (xhigh)", version: "5.5", vendor: "OpenAI", date: "4/23", isNew: false, overlap: "整體 #2", why: "純機率數學最強（補近期）" }
        ]
      }
    },

    /* ============ 4. 創建遊戲影片（風格化／動畫） ============ */
    {
      id: 4, icon: "🎬",
      name: "創建遊戲影片",
      subtitle: "風格化 / 動畫向 Video",
      overall: [
        { rank: 1, name: "Kling 3.0 / 3.0 Omni", vendor: "快手 Kuaishou", why: "電影級運鏡，東亞/動漫風訓練深，多角色對嘴", meta: "2/4 · 付費 ~$0.10/s" },
        { rank: 2, name: "Dreamina Seedance 2.0", vendor: "ByteDance", why: "多鏡頭風格化敘事，動漫 I2V 強，原生音訊", meta: "2/12 · CapCut/fal" },
        { rank: 3, name: "PixVerse V6", vendor: "PixVerse", why: "專為動漫/遊戲風格打造，20+ 運鏡控制", meta: "3/30 · 免費增值+API" },
        { rank: 4, name: "HappyHorse-1.0", vendor: "Alibaba 阿里", why: "盲測 Arena 第一，50+ 風格，音訊同步", meta: "4/27 · fal API" },
        { rank: 5, name: "Pika 2.x", vendor: "Pika", why: "Pikaffects/Pikaswaps，快速社群/動漫短片", meta: "2025–26 · 免費增值" }
      ],
      monthly: {
        note: "⚠️ 本月（5 月）無專門影片新旗艦；以下為近 30–90 天最新（依新近度排）",
        items: [
          { rank: 1, name: "Gemini Omni", version: "Omni", vendor: "Google", date: "5/19", isNew: true, overlap: null, why: "I/O 發佈，Veo 驅動影片輸出（本月唯一新進，非專門影片模型）" },
          { rank: 2, name: "HappyHorse-1.0", version: "1.0", vendor: "Alibaba", date: "4/27", isNew: false, overlap: "整體 #4", why: "fal 上線，盲測 Arena 第一（補近期）" },
          { rank: 3, name: "PixVerse V6", version: "V6", vendor: "PixVerse", date: "3/30", isNew: false, overlap: "整體 #3", why: "動漫/遊戲風格、多鏡頭（補近期）" },
          { rank: 4, name: "Dreamina Seedance 2.0", version: "2.0", vendor: "ByteDance", date: "2/12", isNew: false, overlap: "整體 #2", why: "風格化敘事（補近期）" },
          { rank: 5, name: "Kling 3.0 Omni", version: "3.0", vendor: "快手", date: "2/4", isNew: false, overlap: "整體 #1", why: "電影級運鏡（補近期）" }
        ]
      }
    },

    /* ============ 5. 創建真人影片（寫實） ============ */
    {
      id: 5, icon: "🎥",
      name: "創建真人影片",
      subtitle: "寫實 / 真人向 Video",
      overall: [
        { rank: 1, name: "Dreamina Seedance 2.0 (720p)", vendor: "ByteDance", why: "Arena 榜首級（T2V & I2V），寫實 + 同步音訊", meta: "2/12 · CapCut/fal" },
        { rank: 2, name: "HappyHorse-1.0", vendor: "Alibaba", why: "無音訊 Arena #1，1080p 寫實，低 WER 對嘴", meta: "4/27 · fal API" },
        { rank: 3, name: "Kling 3.0 Pro (1080p)", vendor: "快手", why: "原生 4K，對白/寫實強", meta: "2 月 · 付費" },
        { rank: 4, name: "Google Veo 3.1 (+Fast)", vendor: "Google", why: "提示遵從最佳，原生音訊，4K，最穩", meta: "2025 末 · Flow/Gemini" },
        { rank: 5, name: "MiniMax Hailuo 2.3", vendor: "MiniMax", why: "物理寫實/微表情強，便宜", meta: "2025/10 · App+API" }
      ],
      monthly: {
        note: "⚠️ 本月無真人影片新旗艦;Sora 已停用(消費端 4/26、API 9/24);Veo 4 仍未發佈(現役 3.1)",
        items: [
          { rank: 1, name: "Gemini Omni", version: "Omni", vendor: "Google", date: "5/19", isNew: true, overlap: null, why: "I/O 發佈，Veo 驅動影片輸出 + Flow agents（本月唯一新進）" },
          { rank: 2, name: "HappyHorse-1.0", version: "1.0", vendor: "Alibaba", date: "4/27", isNew: false, overlap: "整體 #2", why: "最近期專用模型，photoreal 1080p（補近期）" },
          { rank: 3, name: "Dreamina Seedance 2.0", version: "2.0", vendor: "ByteDance", date: "2/12", isNew: false, overlap: "整體 #1", why: "寫實 + 同步音訊（補近期）" },
          { rank: 4, name: "Kling 3.0 Pro", version: "3.0", vendor: "快手", date: "2 月", isNew: false, overlap: "整體 #3", why: "原生 4K 寫實（補近期）" },
          { rank: 5, name: "Google Veo 3.1", version: "3.1", vendor: "Google", date: "2025 末", isNew: false, overlap: "整體 #4", why: "最穩全能（現役旗艦，Veo 4 未發）" }
        ]
      }
    },

    /* ============ 6. 創建遊戲模組（3D 生成） ============ */
    {
      id: 6, icon: "🧊",
      name: "創建遊戲模組",
      subtitle: "3D 模型生成 · 例如 Meshy",
      overall: [
        { rank: 1, name: "Meshy-6", vendor: "Meshy", why: "最均衡全流程（text/img→3D、PBR、低面數、匯出）；盲測勝 Tripo", meta: "1/18 · 免費增值 ~$20/mo" },
        { rank: 2, name: "Tripo P1.0 (+H3.1)", vendor: "Tripo AI", why: "原生 3D 擴散，~2 秒出引擎可用網格", meta: "3/9 GDC · ~$12/mo" },
        { rank: 3, name: "Rodin Gen-2", vendor: "Hyper3D", why: "表面寫實度最高，四邊面 + 3D 修補", meta: "2/9 · ~$30/mo" },
        { rank: 4, name: "Hunyuan3D 3.0", vendor: "騰訊 Tencent", why: "免費/可自架，開源線，1536³ 解析度", meta: "2025/9 · 免費自架" },
        { rank: 5, name: "TRELLIS 2", vendor: "Microsoft（開源）", why: "開源材質品質最佳（Gaussian-splat）", meta: "2025–26 · 開源免費" }
      ],
      monthly: {
        note: "⚠️ 本月無新 3D 模型;最新動作在 4 月底（依新近度排）",
        items: [
          { rank: 1, name: "Autodesk Flow Studio + Trellis 2", version: "整合", vendor: "Autodesk", date: "4/28", isNew: false, overlap: null, why: "Flow Studio 接入 Trellis 2 做 text/img→3D（最新）" },
          { rank: 2, name: "Tripo P1.0", version: "P1.0", vendor: "Tripo AI", date: "3/9", isNew: false, overlap: "整體 #2", why: "GDC 發佈，原生 3D 擴散（補近期）" },
          { rank: 3, name: "Rodin Gen-2", version: "Gen-2", vendor: "Hyper3D", date: "2/9", isNew: false, overlap: "整體 #3", why: "表面寫實度最高（補近期）" },
          { rank: 4, name: "Meshy-6", version: "6", vendor: "Meshy", date: "1/18", isNew: false, overlap: "整體 #1", why: "最均衡全流程（補近期）" },
          { rank: 5, name: "Hunyuan3D 3.0", version: "3.0", vendor: "騰訊", date: "2025/9", isNew: false, overlap: "整體 #4", why: "開源可自架（補近期；非「3.5」）" }
        ]
      }
    },

    /* ============ 7. 遊戲模組 Rigging（綁骨） ============ */
    {
      id: 7, icon: "🦴",
      name: "遊戲模組 Rigging",
      subtitle: "綁骨 / 可動 · 例如 Anything World",
      overall: [
        { rank: 1, name: "Meshy-6 Auto-Rig + Animate", vendor: "Meshy", why: "一站式，<30 秒自動綁人形/四足，500+ 預設動作", meta: "2025–26 · ~$20/mo" },
        { rank: 2, name: "Autodesk Flow Studio AI Rigging", vendor: "Autodesk", why: "AI 自動關節 + AI 動捕，匯出 Maya/Blender/UE", meta: "4/28 · 全層免費預覽" },
        { rank: 3, name: "Tripo Auto-Rigging (Uni-Rig)", vendor: "Tripo AI", why: "自動骨架 + 權重 + 自動動畫，風格化佳", meta: "2025–26 · ~$12/mo" },
        { rank: 4, name: "Cascadeur 2026.1", vendor: "Nekki", why: "AI AutoPosing/Physics + AI Root Motion，UE Live Link", meta: "4/9 · 免費層+訂閱" },
        { rank: 5, name: "Anything World — Animate Anything", vendor: "Anything World", why: "任意靜態網格 AI 綁定（尤其動物/生物）", meta: "Live · 免費起步+API" }
      ],
      monthly: {
        note: "⚠️ 本月無新 rigging 發佈;最新在 4 月（依新近度排）",
        items: [
          { rank: 1, name: "Autodesk Flow Studio AI Rigging + Neural Layer", version: "新功能", vendor: "Autodesk", date: "4/28", isNew: false, overlap: "整體 #2", why: "最新發佈;免費層可綁骨，廣泛引擎匯出（最新）" },
          { rank: 2, name: "Cascadeur 2026.1", version: "2026.1", vendor: "Nekki", date: "4/9", isNew: false, overlap: "整體 #4", why: "新增 AI Root Motion、四足 AutoPosing、UE Live Link（補近期）" },
          { rank: 3, name: "Tripo Uni-Rig", version: "Uni-Rig", vendor: "Tripo AI", date: "2025–26", isNew: false, overlap: "整體 #3", why: "自動骨架 + 自動動畫（補近期）" },
          { rank: 4, name: "Meshy-6 Auto-Rig", version: "6", vendor: "Meshy", date: "2025–26", isNew: false, overlap: "整體 #1", why: "一站式 + 500+ 動作（補近期）" },
          { rank: 5, name: "Anything World — Animate Anything", version: "—", vendor: "Anything World", date: "Live", isNew: false, overlap: "整體 #5", why: "任意網格綁定（補近期;2026 無註明版本更新）" }
        ]
      }
    },

    /* ============ 8. 創建聲音特效（音訊） ============ */
    {
      id: 8, icon: "🔊",
      name: "創建聲音特效",
      subtitle: "SFX / 語音 / 音樂 · 例如 ElevenLabs",
      overall: [
        { rank: 1, name: "ElevenLabs SFX v2 + v3 voice", vendor: "ElevenLabs", why: "遊戲音訊最全:文字轉 SFX（30s、可無縫循環）+ 頂級語音", meta: "SFX 2025/9 · v3 2 月" },
        { rank: 2, name: "Stable Audio 3", vendor: "Stability AI", why: "開源,音樂 + SFX/foley 統一,適合自架 pipeline", meta: "5/20 · 開源權重" },
        { rank: 3, name: "ElevenLabs Music v2", vendor: "ElevenLabs", why: "商用授權清晰,可在曲中嵌 SFX、中途換曲風", meta: "5/26 · 降價 40–50%" },
        { rank: 4, name: "Suno v5.5", vendor: "Suno", why: "消費級音樂龍頭,語音擷取、自訂模型", meta: "3/27 · 訂閱制" },
        { rank: 5, name: "Lyria 3 Pro", vendor: "Google DeepMind", why: "最長 3 分鐘結構化曲目,SynthID 浮水印", meta: "3/25 · Gemini/Vertex" }
      ],
      monthly: {
        note: null,
        items: [
          { rank: 1, name: "ElevenLabs Music v2", version: "v2", vendor: "ElevenLabs", date: "5/26", isNew: true, overlap: "整體 #3", why: "曲中換曲風、嵌入 SFX、分段重繪;舊價砍 40–50%" },
          { rank: 2, name: "Stable Audio 3", version: "3", vendor: "Stability AI", date: "5/20", isNew: true, overlap: "整體 #2", why: "本月對 SFX 最重要:開源 + 專用 SFX/foley 變體、可變長度、inpainting" },
          { rank: 3, name: "Suno v5.5", version: "5.5", vendor: "Suno", date: "3/27", isNew: false, overlap: "整體 #4", why: "消費級音樂龍頭（補近期）" },
          { rank: 4, name: "Lyria 3 Pro", version: "3 Pro", vendor: "Google", date: "3/25", isNew: false, overlap: "整體 #5", why: "結構化長曲 + 浮水印（補近期）" },
          { rank: 5, name: "ElevenLabs v3 voice", version: "v3", vendor: "ElevenLabs", date: "2 月", isNew: false, overlap: "整體 #1", why: "頂級表情語音（補近期;SFX 本身本月無更新）" }
        ]
      }
    }
  ]
};
