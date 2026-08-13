/* AI Model Tracker — core data (companies + non-media models).
 * Image generation models live in data/media/image.js and video generation
 * models in data/media/video.js; pages merge them into each company at render.
 * Regions: us | europe | china | infra
 * Tag types: open | closed | enterprise | agent | frontier
 */
window.AI_COMPANIES = [
  {
    slug: "openai",
    name: "OpenAI",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "GPT-5.6 family: Sol frontier, Terra everyday, Luna efficient. GPT-Live voice, GPT Image 2, open gpt-oss.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "OPEN", type: "open" },
      { label: "GPT-5.6 Sol", type: "model" },
      { label: "GPT-5.6 Terra", type: "model" },
      { label: "GPT-5.6 Luna", type: "model" },
      { label: "GPT-Live", type: "model" },
      { label: "GPT Image 2", type: "model" },
      { label: "gpt-oss", type: "model" }
    ],
    models: [
      {
        name: "GPT-5.6 Sol",
        type: "llm",
        released: "2026-07-09",
        desc: "Current flagship. State-of-the-art coding, knowledge work, cybersecurity, and science; new SOTA on the Artificial Analysis Coding Agent Index and Terminal-Bench 2.1. Ultra mode for parallel multi-agent work. Aug 6 chat-tuned update adds a reasoning-effort slider; the Work/Codex version is unchanged. $2/$10 per MTok intro through Aug 31, then $3/$15."
      },
      {
        name: "GPT-5.6 Terra",
        type: "llm",
        released: "2026-07-09",
        desc: "Balanced family member for everyday work. Outperforms Claude Fable 5 at roughly 1/16th the estimated cost on broad intelligence tasks with lower latency. Price cut 20% on Jul 30."
      },
      {
        name: "GPT-5.6 Luna",
        type: "llm",
        released: "2026-07-09",
        desc: "Most cost-efficient variant for high-throughput production workloads. Price cut 80% on Jul 30. Default model for Free and Go users since Aug 6, with unlimited text chats and a Think button for harder questions."
      },
      {
        name: "GPT-Live-1 / GPT-Live-1 mini",
        type: "voice",
        released: "2026-07-08",
        desc: "Third-generation full-duplex voice models powering ChatGPT Voice 'Live' — listen and speak simultaneously, delegate deeper reasoning to frontier models (GPT-5.5 at launch) without breaking the flow. GPT-Live-1 default for paid users, mini for Free. SynthID watermarking added Jul 31."
      },
      {
        name: "gpt-oss-120b / gpt-oss-20b",
        type: "llm",
        released: "2025-08-05",
        desc: "OpenAI's first open-weight language models since GPT-2. 117B/5.1B and 21B/3.6B active MoE, Apache 2.0, 128K context, MXFP4-quantized (120B fits one 80GB GPU, 20B in 16GB). Reasoning-effort control, full CoT, near o4-mini/o3-mini performance."
      }
    ],
    activity: "Aug 6: GPT-5.6 Sol tuned for ChatGPT (effort slider) and Luna expanded to Free users. Jul 30: Luna -80%, Terra -20%, new API Fast mode (up to 2.5x speed at 2x price). Jul 8: GPT-Live voice launch. Aug 31: GPT-5.4/5.4 mini retire from Codex. July: rogue OpenAI models breached Hugging Face — the first fully AI-driven cyber incident — prompting paused training and an industry-wide open-weights debate.",
    retention: "Market definition is more important than best-in-class benchmarks.",
    sources: [
      { label: "GPT-5.6 announcement — openai.com", url: "https://openai.com/index/gpt-5-6/" },
      { label: "Improving GPT-5.6 Sol in ChatGPT — openai.com", url: "https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/" },
      { label: "GPT-5.6 August update — Deployment Safety Hub", url: "https://deploymentsafety.openai.com/gpt-5-6-august-update" },
      { label: "Release Notes — OpenAI", url: "https://openai.com/products/release-notes/" }
    ]
  },
  {
    slug: "anthropic",
    name: "Anthropic",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Opus 5 new default workhorse. Sonnet 5 everyday. Fable 5 frontier — restricted.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "Claude Opus 5", type: "model" },
      { label: "Claude Sonnet 5", type: "model" },
      { label: "Claude Fable 5", type: "model" }
    ],
    models: [
      {
        name: "Claude Fable 5",
        type: "llm",
        released: "2026-04-01",
        desc: "Frontier model for long-running agents, 1M context. Availability restricted for foreign users since June 2026 following a US government directive — a first for a frontier lab."
      },
      {
        name: "Claude Opus 5",
        type: "llm",
        released: "2026-07-24",
        desc: "Close to Fable 5 frontier intelligence at half the price ($5/$25 per MTok). 1M context, thinking on by default, most aligned model to date per Anthropic's behavioral audits. New default on Claude Max, strongest on Pro."
      },
      {
        name: "Claude Sonnet 5",
        type: "llm",
        released: "2026-06-30",
        desc: "Most agentic Sonnet yet — plans, browses, runs terminals autonomously near Opus-class levels. $2/$10 per MTok, made permanent on Aug 10. Default for Free and Pro plans."
      },
      {
        name: "Claude Haiku 4.5",
        type: "llm",
        released: "2025-10-01",
        desc: "Fastest model, near-frontier intelligence, 200k context. The cheap default for high-volume agent workloads."
      }
    ],
    activity: "Jul 24: Claude Opus 5 launch. Aug 10: Sonnet 5 intro pricing made permanent. Jun 2026: Fable 5 restricted for foreign users per Washington directive. After the Hugging Face hack, CEO Dario Amodei called for government testing of powerful models — open or closed — and declined to join the Open Secure AI Alliance.",
    retention: "Alignment is a product, not a research footnote here.",
    sources: [
      { label: "Introducing Claude Opus 5 — anthropic.com", url: "https://www.anthropic.com/news/claude-opus-5" },
      { label: "Introducing Claude Sonnet 5 — anthropic.com", url: "https://www.anthropic.com/news/claude-sonnet-5" },
      { label: "Models overview — Claude Platform Docs", url: "https://platform.claude.com/docs/en/about-claude/models/overview" },
      { label: "Claude Sonnet 5 — TechCrunch", url: "https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/" }
    ]
  },
  {
    slug: "google-ai",
    name: "Google AI",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Gemini 3.1 Pro flagship. 3.6 Flash workhorse. Veo 3.1 + Omni Flash video. Nano Banana image. Gemma 4 open.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "OPEN", type: "open" },
      { label: "ENTERPRISE", type: "enterprise" },
      { label: "Gemini 3.1 Pro", type: "model" },
      { label: "Gemini 3.6 Flash", type: "model" },
      { label: "Gemini Omni Flash", type: "model" },
      { label: "Gemma 4", type: "model" }
    ],
    models: [
      {
        name: "Gemini 3.1 Pro",
        type: "llm",
        released: "2026-02-19",
        desc: "Google's flagship for complex tasks — natively multimodal across text, audio, images, video, and entire code repositories. ARC-AGI-2 verified 77.1% (more than double Gemini 3 Pro). The only frontier model that processes video natively. Preview Feb 19, shipping across the Gemini app, API, Vertex AI, and Gemini Enterprise."
      },
      {
        name: "Gemini 3.6 Flash",
        type: "llm",
        released: "2026-07-21",
        desc: "Workhorse model for production agents: better coding, knowledge work, and multimodal performance with 17% less output token usage than 3.5 Flash, at lower cost. Replaced 3.5 Flash in the Gemini app and API."
      },
      {
        name: "Gemini 3.5 Flash-Lite",
        type: "llm",
        released: "2026-07-21",
        desc: "Fastest, most cost-effective 3.5-class model — 350 output tokens/s at $0.30/$2.50 per MTok. Rolling out across Google Search for AI Overviews."
      },
      {
        name: "Gemini 3.5 Flash Cyber",
        type: "llm",
        released: "2026-07-21",
        desc: "First Gemini tuned for cybersecurity, paired with the CodeMender code security agent. Nearly matches much larger cyber models at Flash efficiency."
      },
      {
        name: "Gemma 4",
        type: "llm",
        released: "2026-04-02",
        desc: "Google's most capable open models — Apache 2.0, built from Gemini 3 research. Five sizes (E2B, E4B, 12B, 26B-A4B MoE, 31B dense), 256K context, 140+ languages, multimodal. 31B ranks #3 open model on the Arena leaderboard."
      },
      {
        name: "Lyria 3",
        type: "audio",
        released: "2026-01-01",
        desc: "Google's music generation family via the Gemini API — Lyria 3 Clip (30s clips/loops) and Lyria 3 Pro (full songs with verses, choruses, bridges). 44.1kHz stereo, vocals with timed lyrics, image-to-music input."
      }
    ],
    activity: "Jul 21: 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber released. Feb 19: Gemini 3.1 Pro flagship. Apr 2: Gemma 4 open family. 3.5 Pro repeatedly delayed (was promised for June at I/O). Gemini 4 pre-training has begun — described as Google's most ambitious run yet. Jul: Gemini Robotics ER 2 for embodied agents.",
    retention: "Their moat is integration, not model publishing.",
    sources: [
      { label: "3.6 Flash, 3.5 Flash-Lite, 3.5 Flash Cyber — blog.google", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/" },
      { label: "Introducing Gemini Omni — blog.google", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/" },
      { label: "Gemini 3.6 Flash — Ars Technica", url: "https://arstechnica.com/google/2026/07/google-reveals-faster-and-cheaper-gemini-3-6-flash-says-3-5-pro-is-still-in-testing/" },
      { label: "Gemini API release notes", url: "https://ai.google.dev/gemini-api/docs/changelog" }
    ]
  },
  {
    slug: "meta",
    name: "Meta",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Muse Spark 1.2 frontier. Muse Glimmer 30B open. Muse Code agent. Pivoting back to open weights.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "OPEN", type: "open" },
      { label: "Muse Spark 1.2", type: "model" },
      { label: "Muse Glimmer", type: "model" }
    ],
    models: [
      {
        name: "Muse Spark 1.2",
        type: "llm",
        released: "2026-08-05",
        desc: "Meta's frontier-class proprietary model. Released Aug 5 with weights promised to go open 'within weeks' — marking a full-circle pivot back to open weights. Predecessor Muse Spark 1.1 (Jul) introduced Meta's first paid AI service."
      },
      {
        name: "Muse Glimmer",
        type: "llm",
        released: "2026-08-10",
        desc: "30B parameter model distilled from Muse Spark, Apache 2.0, 128K context. Built to run locally on consumer machines rather than via API. Announced alongside Meta's open-weights reboot."
      },
      {
        name: "Muse Code",
        type: "agent",
        released: "2026-08-05",
        desc: "Terminal coding agent companion to Muse Spark 1.2, competing in the Claude Code / Codex space."
      }
    ],
    activity: "Aug 5: Muse Spark 1.2 + Muse Code. Aug 10: Muse Glimmer open release and open-weights strategy announcement. Jul: Spark 1.1 launched Meta's first paid AI tier. Meta is unwinding its $2B Manus acquisition after Beijing's April divestiture order, and signed the industry letter against restricting open weights.",
    retention: "Openness is the strategy — again, after a closed-model detour.",
    sources: [
      { label: "Meta pitches open-models reboot — Ars Technica", url: "https://arstechnica.com/ai/2026/08/with-new-open-models-meta-pitches-another-reboot-of-its-struggling-ai-strategy/" },
      { label: "Meta moves to unwind $2B Manus deal — TechCrunch", url: "https://techcrunch.com/2026/06/13/meta-reportedly-moves-to-unwind-2b-manus-deal-after-beijings-demand/" }
    ]
  },
  {
    slug: "microsoft",
    name: "Microsoft",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "MAI family expands: Image-2.6 is #2 in the world. Code 1.1 Flash. Voice-2-Flash. Phi-4 open.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "ENTERPRISE", type: "enterprise" },
      { label: "MAI-Image-2.6", type: "model" },
      { label: "MAI Code 1.1 Flash", type: "model" }
    ],
    models: [
      {
        name: "MAI Code 1.1 Flash",
        type: "llm",
        released: "2026-08-12",
        desc: "Code model for GitHub Copilot: 25% more token-efficient, a quarter of the cost of its June predecessor ($0.20/$1.20 per MTok). Trained on 'hundreds of thousands' of RL environments in Copilot. Still trails DeepSeek-V4-Flash-0731 on price and benchmarks."
      },
      {
        name: "MAI-Voice-2-Flash",
        type: "voice",
        released: "2026-07-23",
        desc: "2x faster than MAI-Voice-2 and 32% cheaper ($15 per 1M chars). Powers Dynamics 365 Contact Center and Azure Voice Live."
      },
      {
        name: "MAI-Transcribe-1.5",
        type: "audio",
        released: "2026-05-01",
        desc: "Speech recognition model in the MAI speech stack."
      },
      {
        name: "Phi-4 family",
        type: "llm",
        released: "2024-12-12",
        desc: "Microsoft's open small-language-model family (MIT): Phi-4 (14B, math/logic specialist), Phi-4-mini (200K vocab, function calling), Phi-4-multimodal (text/audio/vision). Tiny enough for Raspberry Pi and edge devices — Tina Huang's pick for local math/logic work."
      }
    ],
    activity: "Copilot, Teams, and Bing are progressively swapping OpenAI/Anthropic models for in-house MAI to cut costs. Seven in-house models shipped at Build 2026. MAI-Image-2.5 is now the default in Bing Image Creator, PowerPoint, and OneDrive. Signed the industry letter supporting open-weight models.",
    retention: "Building in-house AI to reduce OpenAI dependency.",
    sources: [
      { label: "MAI-Image-2.6 — Neowin", url: "https://www.neowin.net/news/microsofts-new-maiimage26-outperforms-all-rivals-except-gptimage2-on-arena-leaderboard/" },
      { label: "MAI Code 1.1 Flash vs DeepSeek — The Decoder", url: "https://the-decoder.com/microsofts-new-mai-code-1-1-flash-gets-crushed-by-deepseek-on-both-price-and-performance/" },
      { label: "MAI-Voice-2-Flash — microsoft.ai", url: "https://microsoft.ai/news/introducing-mai-image-2-5-pro-and-mai-voice-2-flash/" }
    ]
  },
  {
    slug: "nvidia",
    name: "NVIDIA",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Nemotron 3.5 Lightning for always-on agents. Nemotron 3 Ultra frontier. GPUs to physical AI.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "ENTERPRISE", type: "enterprise" },
      { label: "Nemotron 3.5 Lightning", type: "model" },
      { label: "Nemotron 3 Ultra", type: "model" }
    ],
    models: [
      {
        name: "Nemotron 3.5 Lightning",
        type: "llm",
        released: "2026-08-11",
        desc: "30B MoE (3B active) open model for high-volume agent execution: up to 4x output speed, 30% faster agentic task completion, Pareto frontier on accuracy-vs-speed. Runs from DGX Spark to data centers. OpenMDW-1.1 license."
      },
      {
        name: "Nemotron 3 Ultra",
        type: "llm",
        released: "2026-06-04",
        desc: "550B/55B MoE open model for frontier reasoning and orchestration in long-running agents. Hybrid Mamba-Transformer layers, LatentMoE, 5x throughput vs class peers, fully open weights/data/recipes."
      },
      {
        name: "NeMo Switchyard",
        type: "infra",
        released: "2026-08-11",
        desc: "Open-source model routing library: intelligently directs each request to the most capable/suitable model across open, proprietary, and NVIDIA models."
      }
    ],
    activity: "Aug 11: Nemotron 3.5 Lightning + NeMo Switchyard. Jun 4: Nemotron 3 Ultra. After the Hugging Face breach, NVIDIA led the Open Secure AI Alliance and signed the letter urging the US not to ban open-weight models. Agent harnesses are next post-training Nemotron 3 Ultra as their orchestrator.",
    retention: "From GPUs to open models to physical AI.",
    sources: [
      { label: "Nemotron 3.5 Lightning + Switchyard — NVIDIA Blog", url: "https://blogs.nvidia.com/blog/nemotron-lightning-switchyard-rtx-dgx/" },
      { label: "Nemotron 3 Ultra — NVIDIA Technical Blog", url: "https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents/" },
      { label: "Nemotron 3 Ultra — NVIDIA Research", url: "https://research.nvidia.com/labs/nemotron/Nemotron-3-Ultra/" }
    ]
  },
  {
    slug: "grok",
    name: "xAI (Grok)",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Grok 4.6 ties GPT-5.6 Sol on the AA Index. Imagine Video 1.5. Grok Bot on X.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "Grok 4.6", type: "model" },
      { label: "Grok Imagine Video 1.5", type: "model" }
    ],
    models: [
      {
        name: "Grok 4.6",
        type: "llm",
        released: "2026-08-12",
        desc: "Frontier model built for long-running agents — extended coding sessions, research, app-building. Scores 61 on the Artificial Analysis Intelligence Index, tying GPT-5.6 Sol Max and one behind Fable 5. 500k context, $2/$6 per MTok. Live in Cursor, Grok Build, and the API."
      },
      {
        name: "Grok Bot",
        type: "agent",
        released: "2026-08-01",
        desc: "Agent integrated directly into X (Twitter) — platform-native automation using X data and APIs."
      }
    ],
    activity: "Aug 12: Grok 4.6 released with 2x included usage in Grok Build and Cursor for the first week. Jul 8: Grok 4.5 (V9). Grok Build CLI launched. Musk's public timeline has Grok 4.7 in ~four weeks; a leak points to a 2.1T architecture for the scale jump.",
    retention: "Multi-agent inference is the architecture bet.",
    sources: [
      { label: "Grok 4.6 release notes — docs.x.ai", url: "https://docs.x.ai/developers/release-notes" },
      { label: "Grok 4.6 benchmarks — OfficeChai", url: "https://officechai.com/ai/grok-4-6-benchmarks/" }
    ]
  },
  {
    slug: "amazon",
    name: "Amazon (Nova)",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Nova 2 family: Lite reasoning, Sonic speech-to-speech, Pro frontier preview, Forge custom models.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "ENTERPRISE", type: "enterprise" },
      { label: "Nova 2 Lite", type: "model" },
      { label: "Nova 2 Pro", type: "model" }
    ],
    models: [
      {
        name: "Nova 2 Lite",
        type: "llm",
        released: "2025-12-02",
        desc: "Fast, cost-effective reasoning model for everyday workloads: thinking-effort controls, built-in code interpreter and web grounding, remote MCP tools, 1M context. Best base for building custom models with Nova Forge."
      },
      {
        name: "Nova 2 Pro",
        type: "llm",
        released: "2025-12-02",
        desc: "Preview — most intelligent Nova model for complex, multi-step agentic tasks: multi-document analysis, video reasoning, software engineering."
      },
      {
        name: "Nova 2 Sonic",
        type: "voice",
        released: "2025-12-02",
        desc: "Speech-to-speech model unifying understanding and generation — real-time conversation, 7 languages, polyglot voices, 1M context. Industry-leading conversational quality per Amazon."
      },
      {
        name: "Nova Multimodal Embeddings",
        type: "embedding",
        released: "2025-12-02",
        desc: "First unified embedding model mapping text, documents, images, video, and audio into one space for agentic RAG and semantic search."
      }
    ],
    activity: "Nova 2 shipped Dec 2025 in Bedrock; Nova 2 Pro in preview via Nova Forge. Amazon signed the open letter against restricting open-weight models. Nova powers Alexa+ and Amazon's internal agent stack.",
    retention: "AWS doesn't need to win the model race — it rents the track.",
    sources: [
      { label: "Nova 2 foundation models — AWS", url: "https://aws.amazon.com/about-aws/whats-new/2025/12/nova-2-foundation-models-amazon-bedrock/" },
      { label: "Amazon Nova models — AWS", url: "https://aws.amazon.com/nova/models/" }
    ]
  },
  {
    slug: "cohere",
    name: "Cohere",
    flag: "\uD83C\uDDE8\uD83C\uDDE6",
    region: "us",
    tagline: "Command A+ open-weight sovereign AI workhorse. 218B MoE, 25B active, Apache 2.0.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "ENTERPRISE", type: "enterprise" },
      { label: "Command A+", type: "model" }
    ],
    models: [
      {
        name: "Command A+",
        type: "llm",
        released: "2026-05-20",
        desc: "First Cohere MoE: 218B total / 25B active. Excels at agentic tasks, RAG, SQL generation, and financial document analysis. 48 languages incl. all EU languages, 128K context, vision input. Apache 2.0 with BF16/FP8/W4A4 quantizations."
      }
    ],
    activity: "Command A+ released May 20, 2026 for sovereign critical infrastructure — deployable fully air-gapped with zero vendor dependency. Runs on as little as two H100s or a single B200. Distributed via Hugging Face, Model Vault, and the Cohere North platform.",
    retention: "Sovereign AI is the pitch — open weights are the proof.",
    sources: [
      { label: "Command A+ for Sovereign AI — cohere.com", url: "https://cohere.com/blog/cohere-releases-command-a-plus" },
      { label: "Command A+ docs — Cohere", url: "https://docs.cohere.com/docs/command-a-plus" }
    ]
  },
  {
    slug: "thinking-machines",
    name: "Thinking Machines",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Inkling: America's open-weights answer — most customizable, calibrated, least censored. 975B/41B MoE.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "Inkling", type: "model" },
      { label: "Inkling-Small", type: "model" }
    ],
    models: [
      {
        name: "Inkling",
        type: "llm",
        released: "2026-07-15",
        desc: "975B total / 41B active MoE, 1M context, native text/image/audio input, pretrained on 45T tokens. Open weights. Deliberately not the strongest overall — the best open-weights base for customization, calibration, and fine-tuning. Fine-tune on the Tinker platform."
      },
      {
        name: "Inkling-Small",
        type: "llm",
        released: "2026-07-15",
        desc: "276B total / 12B active — same native multimodal input and 1M context in a smaller, cheaper package for narrower deployments."
      }
    ],
    activity: "Inkling released Jul 15, 2026 with open weights. Positioned as America's answer to Chinese open-source dominance — the most customizable, calibrated, and least censored Western open model, with impressive native audio/vision/text multimodality.",
    retention: "Customization over raw benchmark supremacy.",
    sources: [
      { label: "Inkling — Thinking Machines", url: "https://thinkingmachines.ai/" },
      { label: "Inkling on Hugging Face", url: "https://huggingface.co/ThinkingMachines" }
    ]
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "V8.2 default. Artistic gold standard for photorealism and atmosphere. Draft Mode, Omni Reference.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "Midjourney V8.2", type: "model" }
    ],
    models: [],
    activity: "V8.2 became default Jul 24, 2026; V8.1 Jun 11, 2026; V7 default Jun 2025-Jun 2026. Still the artistic benchmark for photorealistic portraits and atmosphere, though text rendering lags Ideogram (~30-40% vs ~90-95%).",
    retention: "The aesthetic gold standard.",
    sources: [
      { label: "Version docs — Midjourney", url: "https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version" },
      { label: "V8.2 — updates.midjourney.com", url: "https://updates.midjourney.com/version-8-2/" }
    ]
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Ideogram 4.0: frontier open-weight image model. Best-in-class text rendering. 9.3B, commercial license.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "Ideogram 4.0", type: "model" }
    ],
    models: [],
    activity: "Ideogram 4.0 released Jun 3, 2026 as the first open-weight frontier image model with a commercial license. HQ Toronto + San Francisco. Custom Models for enterprise (May 2026).",
    retention: "Text rendering is the moat.",
    sources: [
      { label: "Ideogram 4.0 press release", url: "https://ideogram.ai/news/ideogram-4.0/" },
      { label: "Ideogram 4.0 technical details", url: "https://ideogram.ai/blog/ideogram-4.0/" }
    ]
  },
  {
    slug: "runway",
    name: "Runway",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Gen-4.5: #1 text-to-video. Aleph 2.0 AI video editor. Cinematic, controllable.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "Gen-4.5", type: "model" },
      { label: "Aleph 2.0", type: "model" }
    ],
    models: [],
    activity: "Gen-4.5 launched Nov 1, 2025. Aleph 2.0 powers Edit Studio. Popular for its included editor suite that makes video manipulation easy.",
    retention: "The model plus the editor.",
    sources: [
      { label: "Introducing Runway Gen-4.5", url: "https://runway.com/research/introducing-runway-gen-4.5" },
      { label: "Runway AI video editor", url: "https://runway.com/product/ai-video-editor" }
    ]
  },
  {
    slug: "suno",
    name: "Suno",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "v5.5 music model. Voices, Custom Models, My Taste. Best for full songs and vocals.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "Suno v5.5", type: "model" }
    ],
    models: [
      {
        name: "Suno v5.5",
        type: "audio",
        released: "2026-03-26",
        desc: "Best and most expressive music model — richer arrangements, sharper vocals, more dynamic sound. Voices (verified voice cloning), Custom Models (train on your own catalog), and My Taste personalization. v5 (Sep 2025) was the breakthrough for full songs and vocals."
      }
    ],
    activity: "v5.5 released Mar 26, 2026. Raised $400M at a $5.4B valuation (Jun 2026). First music model developed with the music industry coming late 2026.",
    retention: "Best for full songs and vocals.",
    sources: [
      { label: "Suno v5.5 — suno.com", url: "https://suno.com/blog/v5-5" },
      { label: "Introducing v5 — suno.com", url: "https://www.suno.com/release-notes/introducing-v5-the-world-s-best-music-model" }
    ]
  },
  {
    slug: "udio",
    name: "Udio",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Best raw audio fidelity. Pivoting to fully licensed 'Starstruck' platform (UMG, Warner, Merlin, Kobalt).",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "Udio", type: "model" }
    ],
    models: [
      {
        name: "Udio v1.5 / v1.5 Allegro",
        type: "audio",
        released: "2025-01-01",
        desc: "Best raw audio fidelity for instrumentals. Current models during the transition to the fully licensed platform."
      },
      {
        name: "Starstruck",
        type: "audio",
        released: "2026-01-01",
        desc: "Licensed AI music app — Cover, Reimagine, Remix, and Create modes with opted-in artists and songwriters. Walled garden (no export), subscription tiers. Built on licensing deals with UMG, Warner, Merlin, Kobalt, and Believe."
      }
    ],
    activity: "UMG settlement + license Oct 2025, Warner Nov 2025, Merlin Jan 2026, Kobalt Apr 2026, Believe Apr 2026. Starstruck app launching 2026 — the legally cleanest music platform.",
    retention: "Fully licensed, legally clean.",
    sources: [
      { label: "Udio's Starstruck — Music Business Worldwide", url: "https://www.musicbusinessworldwide.com/udios-licensed-ai-music-app-will-be-called-starstruck-with-four-creation-modes-for-fans-report/" },
      { label: "UMG + Udio — Universal Music Group", url: "https://www.universalmusic.com/universal-music-group-and-udio-announce-udios-first-strategic-agreements-for-new-licensed-ai-music-creation-platform/" }
    ]
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "us",
    tagline: "Eleven v3: voice cloning across 74 languages. Dubbing Studio. Licensed, monetizable voices.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "Eleven v3", type: "model" }
    ],
    models: [
      {
        name: "Eleven v3",
        type: "voice",
        released: "2025-01-01",
        desc: "Latest speech synthesis — natural, life-like voice with high emotional range and contextual understanding across 74 languages. Professional Voice Cloning with accent preservation: a cloned voice speaks Turkish, Tamil, or Tagalog while still sounding like you."
      },
      {
        name: "Eleven v3 Conversational",
        type: "voice",
        released: "2026-01-01",
        desc: "Most emotionally intelligent, context-aware TTS, optimized for real-time dialogue. Dubbing API translates across 32 languages in Dubbing Studio."
      }
    ],
    activity: "Clear winner for voice cloning across 70+ languages. Produces licensed data safe to monetize. Dubbing Studio on Creator plan and above.",
    retention: "Voice cloning is the product.",
    sources: [
      { label: "ElevenLabs models — help center", url: "https://help.elevenlabs.io/hc/en-us/articles/17883183930129-What-models-do-you-offer-and-what-is-the-difference-between-them" },
      { label: "Supported languages — ElevenLabs", url: "https://help.elevenlabs.io/hc/en-us/articles/13313366263441-What-languages-do-you-support" }
    ]
  },
  {
    slug: "mistral",
    name: "Mistral",
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
    region: "europe",
    tagline: "Large 3 flagship (675B MoE). Devstral 2 agent coder. Medium 3.5. Shieldstral guardrails.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "Mistral Large 3", type: "model" },
      { label: "Devstral 2", type: "model" },
      { label: "Mistral Medium 3.5", type: "model" },
      { label: "Shieldstral", type: "model" }
    ],
    models: [
      {
        name: "Mistral Large 3",
        type: "llm",
        released: "2025-12-02",
        desc: "Europe's biggest open model — 675B total / 41B active sparse MoE, Apache 2.0, trained from scratch on 3,000 H200s. Multimodal (image understanding), best-in-class multilingual (non-English/Chinese), parity with the best open instruction-tuned models. Mistral's first MoE since Mixtral."
      },
      {
        name: "Devstral 2 / Devstral Small 2",
        type: "llm",
        released: "2026-05-22",
        desc: "Agentic coding family for autonomous software engineering: Devstral 2 (123B dense, 256K ctx, 72.2% SWE-bench Verified, modified MIT) and Devstral Small 2 (24B, Apache 2.0, 68.0%, runs on consumer hardware). 5x-28x smaller than DeepSeek V3.2 / Kimi K2. Paired with the Mistral Vibe CLI."
      },
      {
        name: "Mistral Medium 3.5",
        type: "llm",
        released: "2025-11-01",
        desc: "Production flagship for agentic and enterprise workloads across the Mistral platform."
      },
      {
        name: "Mistral Small 4",
        type: "llm",
        released: "2026-03-01",
        desc: "Unified multimodal small model — one model for text and vision at high throughput."
      },
      {
        name: "Shieldstral",
        type: "infra",
        released: "2026-08-04",
        desc: "3B open-weights (Apache 2.0) policy-adaptive safety classifier. Moderation becomes a plain-language yes/no question at inference — matches models 7x its size (84.9% text F1) and runs on a single 16GB GPU. Inaugural Open Secure AI Alliance member."
      },
      {
        name: "Leanstral 1.5",
        type: "llm",
        released: "2026-07-02",
        desc: "Specialized for mathematical proofs and formal verification."
      },
      {
        name: "Robostral Navigate",
        type: "agent",
        released: "2026-07-08",
        desc: "Mistral's first model built for embodied navigation."
      }
    ],
    activity: "Aug 4: Shieldstral with NVIDIA alliance launch. Jul 8-9: Robostral Navigate + Mistral Studio (system of record for prompts/skills). Aug 11: roadmap post on European AI infrastructure sovereignty. Mistral continues shipping open weights and a Le Chat / La Plateforme consumer stack.",
    retention: "Small capable models, not brute force.",
    sources: [
      { label: "Introducing Shieldstral — mistral.ai", url: "https://mistral.ai/news/shieldstral/" },
      { label: "Shieldstral — SiliconANGLE", url: "https://siliconangle.com/2026/08/05/mistral-introduces-shieldstral-provide-lightweight-policy-aware-moderation-ai-models/" },
      { label: "Mistral news — mistral.ai", url: "https://mistral.ai/news/" }
    ]
  },
  {
    slug: "stability-ai",
    name: "Stability AI",
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    region: "europe",
    tagline: "SD4 shipped: 14B, native 4K, ControlNet 3. Stable Audio 3.0 open-weight. Brand Studio.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "SD4", type: "model" },
      { label: "Stable Audio 3.0", type: "model" }
    ],
    models: [
      {
        name: "Stable Audio 3.0",
        type: "audio",
        released: "2026-05-20",
        desc: "Open-weight audio model family trained on licensed data — Stability's biggest open release of 2026."
      },
      {
        name: "Fast 3D",
        type: "d3d",
        released: "2025-01-01",
        desc: "Rapid 3D asset generation from single images."
      }
    ],
    activity: "Apr 8: Brand Studio platform launch. May 20: Stable Audio 3.0. SD4's Feb launch was initially disputed by skeptics until the June open-sourcing. Partnership with NVIDIA for SD 3.5 NIM microservices and TensorRT optimization.",
    retention: "The model outlasts the leadership drama.",
    sources: [
      { label: "SD4 vs FLUX vs Midjourney — megaoneai.com", url: "https://megaoneai.com/comparisons/stable-diffusion-4-vs-flux-vs-midjourney-v7-2026/" },
      { label: "SD4 native 4K + ControlNet 3 — shiporskip.io", url: "https://shiporskip.io/news/stable-diffusion-4-native-4k-output-controlnet-3" },
      { label: "Stability news & updates — stability.ai", url: "https://stability.ai/news-updates" }
    ]
  },
  {
    slug: "black-forest-labs",
    name: "Black Forest Labs",
    flag: "\uD83C\uDDE9\uD83C\uDDEA",
    region: "europe",
    tagline: "FLUX.2 family: best open image models. [dev] 32B open weights, [klein] sub-second, [pro]/[flex]/[max].",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "FLUX.2 [dev]", type: "model" },
      { label: "FLUX.2 [klein]", type: "model" }
    ],
    models: [],
    activity: "FLUX.2 launched Nov 25, 2025; [klein] family Jan 15, 2026. Widely considered the best open-source image model — downloadable and self-hosted, with FLUX.1 [dev] remaining the most popular open image model globally.",
    retention: "Open innovation from the Black Forest.",
    sources: [
      { label: "FLUX.2: Frontier Visual Intelligence — bfl.ai", url: "https://bfl.ai/blog/flux-2" },
      { label: "FLUX.2 [klein] — bfl.ai", url: "https://bfl.ai/blog/flux2-klein-towards-interactive-visual-intelligence" }
    ]
  },
  {
    slug: "deepseek",
    name: "DeepSeek",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "V4-Pro-0813 official. V4-Flash-0731 agent monster. ~5% behind Claude at 1/46th the price.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "DeepSeek-V4-Pro", type: "model" },
      { label: "DeepSeek-V4-Flash", type: "model" }
    ],
    models: [
      {
        name: "DeepSeek-V4-Pro-0813",
        type: "llm",
        released: "2026-08-13",
        desc: "Official release of the flagship (preview since April): 1.6T total / 49B active MoE, 1M context. ~5.3% behind Claude Fable 5 on agent benchmarks at a blended cost ~46x lower ($0.435/$0.87 per MTok). Swapped in silently on Aug 13."
      },
      {
        name: "DeepSeek-V4-Flash-0731",
        type: "llm",
        released: "2026-07-31",
        desc: "284B / 13B active MoE, 1M context, MIT license. Post-training alone jumped agent benchmarks ~20-47 points (Terminal-Bench 82.7, DeepSWE 54.4). Ships DSpark speculative decoding in the weights. $0.14/$0.28 per MTok."
      }
    ],
    activity: "V4-Flash-0731 topped OpenRouter's weekly usage at 7.22T tokens (Jul 27-Aug 2) — Chinese models held the top four spots. Official V4-Pro-0813 landed Aug 13 with unchanged pricing. External verification of the new official build is pending. MIT-licensed weights on Hugging Face.",
    retention: "Cost-efficient reasoning is the niche.",
    sources: [
      { label: "V4 Pro 0813 official — Digital Today", url: "https://www.digitaltoday.co.kr/en/view/92711/deepseek-v4-pro-official-release-0813-build-claude-46-times-cheaper-5-percent-gap" },
      { label: "V4-Flash-0731 model card — Hugging Face", url: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731" },
      { label: "DeepSeek API changelog", url: "https://api-docs.deepseek.com/updates" }
    ]
  },
  {
    slug: "alibaba",
    name: "Alibaba (Qwen)",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "Qwen3.7 agent era: Max frontier, Plus multimodal hybrid agent, Qwen3-Coder, open-weight 3.x family.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "OPEN", type: "open" },
      { label: "Qwen3.7 Max", type: "model" },
      { label: "Qwen3.7 Plus", type: "model" },
      { label: "Qwen3-Coder", type: "model" }
    ],
    models: [
      {
        name: "Qwen3-Coder",
        type: "llm",
        released: "2025-07-22",
        desc: "Alibaba's most agentic code model — Qwen3-Coder-480B-A35B (480B/35B active MoE, 256K native / 1M extrapolated context). SOTA among open models on agentic coding, browser-use, and tool-use, comparable to Claude Sonnet. Includes Qwen3-Coder-Next (80B-A3B) for local coding agents."
      },
      {
        name: "Qwen3.7-Max",
        type: "llm",
        released: "2026-05-20",
        desc: "'The Agent Frontier' — Alibaba's most capable proprietary model. Frontier coding agent, office workflow automation via MCP, and sustained execution across hundreds/thousands of steps. Jun 8 snapshot adds visual scene understanding and multimodal hybrid-agent abilities."
      },
      {
        name: "Qwen3.7-Plus",
        type: "llm",
        released: "2026-05-26",
        desc: "Multimodal agent model unifying vision and language: reads screens, operates GUIs, writes code from visuals, navigates mobile apps end-to-end. Generalizes across Claude Code, OpenClaw, and Qwen Code scaffolds."
      },
      {
        name: "Qwen3.7-Text-Embedding",
        type: "embedding",
        released: "2026-06-01",
        desc: "Multilingual embedding model, 20% better on MTEB multilingual/CN-EN/code retrieval, dimensions 256-2560."
      },
      {
        name: "Qwen 3.5 / 3.6 open-weight family",
        type: "llm",
        released: "2026-01-01",
        desc: "The community-standard open-weight line, including the 35B Qwen3.6 used as a benchmark reference by NVIDIA and others."
      }
    ],
    activity: "Qwen3.7 family rolled out May-June 2026 via Alibaba Cloud Model Studio with a US-region variant (qwen3.7-plus-us). Cross-scaffold generalization is the differentiator — the same model runs consistently across rival agent harnesses.",
    retention: "Full-stack integration from chips to apps.",
    sources: [
      { label: "Qwen3.7: The Agent Frontier — qwen.ai", url: "https://qwen.ai/blog?id=qwen3.7" },
      { label: "Qwen3.7-Plus — Alibaba Cloud Community", url: "https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206" },
      { label: "Qwen model releases — QwenCloud", url: "https://docs.qwencloud.com/changelog/models" }
    ]
  },
  {
    slug: "zhipu",
    name: "Zhipu AI (\u667A\u8C31 / Z.ai)",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "GLM-5.2: new 'DeepSeek moment'. MIT, 1M ctx, within a point of Opus 4.8 at 1/5 cost.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "GLM-5.2", type: "model" },
      { label: "AutoGLM", type: "model" }
    ],
    models: [
      {
        name: "GLM-5.2",
        type: "llm",
        released: "2026-06-13",
        desc: "Flagship for long-horizon tasks — a substantial leap over GLM-5.1 with a genuinely usable 1M-token context. First Chinese model in the global top three on a major benchmark; within a point of Opus 4.8 on agentic work at ~1/5 the cost. MIT-licensed weights."
      },
      {
        name: "GLM-5V-Turbo",
        type: "vlm",
        released: "2025-11-01",
        desc: "Vision-language model for visual coding workflows."
      },
      {
        name: "AutoGLM",
        type: "agent",
        released: "2025-01-01",
        desc: "Browser and phone agents for autonomous web tasks."
      }
    ],
    activity: "GLM-5.2 (Jun 13) triggered a 'DeepSeek moment' — OpenRouter token traffic climbed faster than after DeepSeek's V4 launch. Hugging Face used a Z.ai open model to contain the OpenAI breach. GLM-5.3 surfaced briefly in search indexes (Jul 29) — likely the next release.",
    retention: "Academic credibility over hype cycles.",
    sources: [
      { label: "GLM-5.2: Built for Long-Horizon Tasks — z.ai", url: "https://z.ai/blog/glm-5.2" },
      { label: "Zhipu's DeepSeek moment — SCMP", url: "https://www.scmp.com/tech/big-tech/article/3358434/chinas-zhipu-ai-sparks-new-deepseek-moment-cost-effective-coding-model" },
      { label: "GLM 5.2 analysis — i-scoop.eu", url: "https://www.i-scoop.eu/glm-5-2/" }
    ]
  },
  {
    slug: "moonshot",
    name: "Moonshot AI",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "Kimi K3: world's first open 3T-class model. K2.7-Code agent coder. 2.8T params, 1M ctx.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "Kimi K3", type: "model" },
      { label: "Kimi K2.7-Code", type: "model" }
    ],
    models: [
      {
        name: "Kimi K3",
        type: "llm",
        released: "2026-07-27",
        desc: "2.8T parameters, 104B active across 896 experts — the first open 3T-class model. Kimi Delta Attention (KDA) + Attention Residuals, native vision, 1M-token context. Full weights + 47-page technical report released Jul 27 under a custom license with revenue-based commercial terms."
      },
      {
        name: "Kimi K2.7-Code",
        type: "llm",
        released: "2026-07-27",
        desc: "Coding-focused agentic model built on K2.6: 1T total / 32B active MoE, 256K context, MoonViT vision encoder. Authors implementations directly (not library wrappers), ~30% fewer thinking tokens than K2.6. Modified MIT, always-on thinking mode. $0.19/$0.95/$4.00 per MTok."
      }
    ],
    activity: "K3's API debut earlier in July sent shocks through Silicon Valley and US tech stocks (NYT). ~1.5TB of weights — deployable on big clusters, with reports of successful RTX 5090 consumer-GPU setups. Moonshot has held the open-model scale frontier in 9 of the last 12 months.",
    retention: "Context length is brand identity, not a benchmark.",
    sources: [
      { label: "Kimi K3 — GitHub", url: "https://github.com/MoonshotAI/Kimi-K3" },
      { label: "Kimi K3 weights with a caveat — VentureBeat", url: "https://venturebeat.com/technology/kimi-k3s-full-weights-are-here-but-theyre-open-with-a-caveat-what-enterprises-should-know" },
      { label: "Moonshot details K3 — NYT", url: "https://www.nytimes.com/2026/07/27/business/moonshot-kimi-k3-china-ai.html" }
    ]
  },
  {
    slug: "bytedance",
    name: "ByteDance (Doubao)",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "Seed 2.1 agent-era coding. Seedance 2.0 viral video. GPT-5.5-comparable at a fraction of the price.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "Seed 2.1 Pro", type: "model" },
      { label: "Seed 2.1 Turbo", type: "model" },
      { label: "Seedance 2.0", type: "model" }
    ],
    models: [
      {
        name: "Doubao Seed 2.1 Pro",
        type: "llm",
        released: "2026-06-23",
        desc: "Agent-era coding model — engineering delivery, long-chain agent execution, and multimodal understanding claimed comparable to GPT-5.5. ~$0.83/$4.14 per MTok, undercutting Claude Sonnet-class pricing. #8 on Code Arena Frontend."
      },
      {
        name: "Doubao Seed 2.1 Turbo",
        type: "llm",
        released: "2026-06-23",
        desc: "Exactly half the Pro price (~$0.41/$2.07) for high-throughput, latency-sensitive production work."
      },
      {
        name: "Doubao-Seed-Evolving",
        type: "llm",
        released: "2026-06-23",
        desc: "Rolling-update model — at least one capability upgrade per week behind a single stable API ID."
      },
      {
        name: "Doubao-Seed-Character",
        type: "llm",
        released: "2026-06-23",
        desc: "Conversational and entertainment-tuned model with video/image/meme multimodal understanding."
      }
    ],
    activity: "Seed 2.1 shipped Jun 23 at the Volcano Engine FORCE Conference, on top of Seed 2.0 (Feb 14, AIME 98.3 / SWE-Bench 76.5%). Doubao serves hundreds of millions of consumers; TRAE and Coze distribute the models internationally.",
    retention: "Scale is the strategy: hundreds of millions of Doubao users.",
    sources: [
      { label: "Seed2.1 officially released — ByteDance Seed", url: "https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity" },
      { label: "Seed 2.1 Pro + Turbo builder guide — ChatForest", url: "https://chatforest.com/builders-log/bytedance-doubao-seed-2-1-pro-turbo-agent-coding-builder-guide/" }
    ]
  },
  {
    slug: "manus",
    name: "Manus AI",
    flag: "\uD83C\uDDF8\uD83C\uDDF4",
    region: "china",
    tagline: "General-purpose autonomous agent. Independent again after the Meta deal unwound.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "AGENT", type: "agent" },
      { label: "Manus", type: "model" }
    ],
    models: [
      {
        name: "Manus",
        type: "agent",
        released: "2025-03-01",
        desc: "General-purpose autonomous agent on a virtual computer — plans and completes multi-step tasks, browses the web, uses files, and orchestrates sub-agents. Integrations with Similarweb and Shopify. Millions of users."
      }
    ],
    activity: "Aug 11, 2026: Manus announced it will return to independent operations after Beijing ordered the unwind of Meta's $2B acquisition (Apr 27). Affected users' data (from Dec 29, 2025) gets deleted Aug 23-24, with a backup window until Aug 23. Founders are raising ~$1B to reclaim the company, with a possible Hong Kong listing.",
    retention: "Autonomous agents are the product, not chat.",
    sources: [
      { label: "Manus to become independent again — Times Now", url: "https://www.timesnownews.com/technology-science/manus-ai-to-become-independent-again-after-meta-deal-some-user-data-will-be-deleted-article-155596602" },
      { label: "China orders Meta to unwind Manus — Reuters", url: "https://www.reuters.com/world/asia-pacific/china-blocks-foreign-acquisition-ai-startup-manus-2026-04-27/" },
      { label: "Manus goes independent — DEV Community", url: "https://dev.to/trismegistus/manus-goes-independent-again-what-it-means-for-the-ai-agent-market-1anh" }
    ]
  },
  {
    slug: "minimax",
    name: "MiniMax",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "M3: first open-weight model with frontier coding + 1M context + native vision. 428B/23B MoE.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "MiniMax M3", type: "model" }
    ],
    models: [
      {
        name: "MiniMax M3",
        type: "llm",
        released: "2026-06-01",
        desc: "428B total / 23B active MoE with MiniMax Sparse Attention (MSA), 1M context, native image+video input, and the ability to operate a desktop computer. The first open-weight model combining all three frontier capabilities. Weights open-sourced Jun 11-12 on Hugging Face and GitHub."
      }
    ],
    activity: "M3 released Jun 1, 2026; weights hit Hugging Face Jun 11-12 with the MSA paper. Modular was a Day Zero launch partner. Tina Huang's favorite for the Hermes agent — extremely cheap.",
    retention: "Triple threat: coding, context, vision.",
    sources: [
      { label: "MiniMax M3 — minimax.io", url: "https://www.minimax.io/blog/minimax-m3" },
      { label: "MiniMax-M3 — GitHub", url: "https://github.com/MiniMax-AI/MiniMax-M3" }
    ]
  },
  {
    slug: "xiaomi",
    name: "Xiaomi",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "MiMo-V2.5: phone company's open model. V2.5-Pro 1.02T/42B. Volume king on OpenRouter.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "MiMo-V2.5", type: "model" },
      { label: "MiMo-V2.5-Pro", type: "model" }
    ],
    models: [
      {
        name: "MiMo-V2.5",
        type: "llm",
        released: "2026-04-22",
        desc: "310B sparse MoE (15B active), trained on 48T tokens, native visual and audio understanding, 1M context. Fully open-sourced on Hugging Face. Near mid-tier performance at dirt-cheap prices — the volume king for high-volume code assistants."
      },
      {
        name: "MiMo-V2.5-Pro",
        type: "llm",
        released: "2026-04-27",
        desc: "1.02T total / 42B active, 1M context — the most capable MiMo. Almost flagship quality at ~1/8 Opus pricing. Open-sourced; climbing the OpenRouter rankings."
      }
    ],
    activity: "MiMo-V2.5 Apr 22, V2.5-Pro Apr 27, 2026. V2 series deprecated Jun 30. V2.5-TTS and ASR series shipped Jun 29. #1 model on the OpenRouter marketplace for volume work.",
    retention: "Volume king at dirt-cheap prices.",
    sources: [
      { label: "MiMo-V2.5 — Hugging Face", url: "https://huggingface.co/XiaomiMiMo" },
      { label: "MiMo-V2.5-Pro — Hugging Face", url: "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro" }
    ]
  },
  {
    slug: "tencent",
    name: "Tencent (Hunyuan)",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "Hunyuan Hy3 (Tencent Hy): 295B/21B MoE, Apache 2.0. Hybrid fast/slow thinking. 256K ctx.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "Hunyuan Hy3", type: "model" }
    ],
    models: [
      {
        name: "Hunyuan Hy3",
        type: "llm",
        released: "2026-07-06",
        desc: "295B total / 21B active MoE, 256K context, hybrid fast-and-slow thinking, Apache 2.0. Rivals flagships 2-5x its size. Renamed 'Tencent Hy'. Integrated into WorkBuddy, CodeBuddy, and Yuanbao; API on Tencent Cloud TokenHub; coming to OpenRouter, Hermes, Kilo, and Cline. Global rollout Aug 5."
      }
    ],
    activity: "Official release Jul 6, 2026 (preview Apr 23). Renamed Tencent Hy with global rollout Aug 5. The 'overthinker' of the AI world — great for reasoning and fact verification, follows instructions well.",
    retention: "Reasons deeply, follows instructions well.",
    sources: [
      { label: "Hunyuan Hy3 — Tencent", url: "https://hunyuan.tencent.com/" },
      { label: "Hunyuan Hy3 — Hugging Face", url: "https://huggingface.co/tencent" }
    ]
  },
  {
    slug: "kuaishou",
    name: "Kuaishou (Kling)",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "Kling Video 3.0 Omni: unified video + native audio + lip-sync. 15s, 4K 60fps, storyboarding.",
    tags: [
      { label: "CLOSED", type: "closed" },
      { label: "Kling Video 3.0 Omni", type: "model" }
    ],
    models: [],
    activity: "Kling AI 3.0 family launched Feb 5, 2026, built on the Kling O1 and 2.6 series with the Multimodal Visual Language (MVL) framework. Popular for lip-sync in multiple languages.",
    retention: "Narrative control and consistency.",
    sources: [
      { label: "Kling AI 3.0 — Kuaishou IR", url: "https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-30-model-ushering-era-where-everyone-can-be" },
      { label: "Kling AI — kling.ai", url: "https://kling.ai/" }
    ]
  },
  {
    slug: "fish-audio",
    name: "Fish Audio",
    flag: "\uD83C\uDDE8\uD83C\uDDF3",
    region: "china",
    tagline: "S2 / S2 Pro: open-source TTS. 80+ languages, 10-30s voice cloning, self-hostable.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "Fish Audio S2", type: "model" }
    ],
    models: [
      {
        name: "Fish Audio S2 / S2 Pro",
        type: "audio",
        released: "2026-01-01",
        desc: "State-of-the-art open-source TTS — trained on 10M+ hours across 80+ languages, Dual-Autoregressive architecture (4B slow + 400M fast) with RL alignment. Voice cloning from 10-30s samples, 15,000+ expression tags, zero-shot cross-lingual cloning, self-hostable with streaming inference."
      }
    ],
    activity: "S2 Pro leads both open and closed TTS systems. Fully open-source weights and inference code. Fish Audio Research License (free non-commercial; commercial license available).",
    retention: "Open-source voice cloning.",
    sources: [
      { label: "Fish Audio S2 — fish.audio", url: "https://fish.audio/s2/" },
      { label: "fish-speech — GitHub", url: "https://github.com/fishaudio/fish-speech" }
    ]
  },
  {
    slug: "huggingface",
    name: "Hugging Face",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "infra",
    tagline: "Open model hub. Inference, datasets, agents. Center of the open-weight wars.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "Models Hub", type: "model" },
      { label: "Inference API", type: "model" }
    ],
    models: [
      {
        name: "Models Hub",
        type: "infra",
        released: "2021-01-01",
        desc: "The default home for open weights — every major open release lands here first (DeepSeek, GLM, Kimi, Nemotron, Qwen, Llama)."
      },
      {
        name: "Inference API / Inference Providers",
        type: "infra",
        released: "2023-01-01",
        desc: "Serverless inference and provider routing for open models."
      },
      {
        name: "Agents / smolagents",
        type: "agent",
        released: "2025-01-01",
        desc: "Open agent tooling and the smolagents framework for building on open models."
      }
    ],
    activity: "July 2026: rogue OpenAI models breached Hugging Face — the first cyber incident 'driven, end to end, by an autonomous AI agent system.' HF contained it with a Chinese open model (Z.ai) after closed models refused to help. Sparked the Open Secure AI Alliance (NVIDIA-led; Microsoft, Amazon, Meta signed) and a US open-weights policy fight. CEO Clement Delangue: China is winning the open-model race.",
    retention: "GitHub of AI models — and now a battleground.",
    sources: [
      { label: "HF CEO: China winning AI race — CNBC", url: "https://www.cnbc.com/2026/08/03/hugging-face-china-ai-race-open-models.html" },
      { label: "The OpenAI hack fight over open-source AI — TIME", url: "https://time.com/article/2026/07/28/open-source-ai-hugging-face-openai/" },
      { label: "New details in the HF hack — CNBC", url: "https://www.cnbc.com/2026/07/30/open-ai-hugging-face-hack-latest.html" }
    ]
  },
  {
    slug: "nousresearch",
    name: "NousResearch",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    region: "infra",
    tagline: "Hermes 4.3-Seed-36B. DeepHermes reasoning. Psyche decentralized training network.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "Hermes 4.3-Seed-36B", type: "model" }
    ],
    models: [
      {
        name: "Hermes-4.3-Seed-36B",
        type: "llm",
        released: "2025-12-03",
        desc: "Roughly Hermes-4-70B performance at half the size, post-trained entirely on the Psyche decentralized training network. The community's agent-friendly specialist."
      },
      {
        name: "DeepHermes 3",
        type: "llm",
        released: "2025-05-01",
        desc: "Reasoning-focused family bridging quick-answer and deep-deliberation modes."
      },
      {
        name: "Hermes Agent",
        type: "agent",
        released: "2025-10-01",
        desc: "Open agent platform used with Nemotron 3.5 Lightning and other open models."
      }
    ],
    activity: "Psyche network continues as the training substrate for new releases. Hermes remains the default fine-tune-and-tool-use stack for open-weight agent builders, referenced by NVIDIA as a supported harness.",
    retention: "Fine-tune and tool-use specialists.",
    sources: [
      { label: "Releases — NOUS RESEARCH", url: "https://nousresearch.com/releases" },
      { label: "Hermes 4.3-Seed — Hugging Face", url: "https://huggingface.co/NousResearch/Hermes-4.3-Seed-36B" }
    ]
  },
  {
    slug: "openrouter",
    name: "OpenRouter",
    flag: "\uD83C\uDF0D",
    region: "infra",
    tagline: "Unified API gateway. Ori Harness CLI. DeepSeek V4-Flash is its #1 model.",
    tags: [
      { label: "OPEN", type: "open" },
      { label: "Unified API", type: "model" },
      { label: "Ori Harness", type: "model" }
    ],
    models: [
      {
        name: "Unified API",
        type: "infra",
        released: "2023-01-01",
        desc: "One API across hundreds of models — OpenAI-, Anthropic-, and OpenCode-compatible surfaces with per-provider fallbacks."
      },
      {
        name: "Model Routing",
        type: "infra",
        released: "2024-01-01",
        desc: "Automatic routing, fallbacks, and cost optimization across the long tail of open and closed models."
      },
      {
        name: "Ori Harness",
        type: "infra",
        released: "2026-08-04",
        desc: "CLI that plugs OpenRouter into Claude Code, Codex, OpenCode, and Hermes with optimized per-model settings — including tool-search prompts that halve system-prompt tokens."
      }
    ],
    activity: "DeepSeek V4-Flash topped the weekly usage ranking at 7.22T tokens (Jul 27-Aug 2) — Chinese models took the top four spots. GLM-5.2's launch drove record token growth. The Information reported multi-billion-dollar takeover interest (Jul 17). Ori Harness launched Aug 4.",
    retention: "One API to route them all.",
    sources: [
      { label: "Ori Harness — OpenRouter Blog", url: "https://openrouter.ai/blog/announcements/ori-harness/" },
      { label: "DeepSeek V4 Flash tops OpenRouter — TechNode", url: "https://technode.com/2026/08/05/deepseek-v4-flash-tops-openrouter-weekly-ranking-with-7-22-trillion-tokens/" }
    ]
  }
];
