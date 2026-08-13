# AI Model Tracker Changelog

## 2026-08-13 — Region filter chips removed
- Removed the America / Europe / China / Infra filter chips and their logic/CSS.
  Filters are now just Text / Image / Audio / Video (+ search). The homepage
  still groups companies into the four region sections for display.

## 2026-08-13 — Media-only companies hidden from default view
- Companies whose models are ALL image/video/audio (Midjourney, Ideogram,
  Runway, Black Forest Labs, Kuaishou, Suno, Udio, ElevenLabs, Fish Audio,
  Stability AI) now appear only when the matching Text/Image/Audio/Video filter
  is active. Default homepage shows the 23 text/agent/infra-focused companies.
- Strict rule: hidden from search too when no type filter is active.

## 2026-08-13 — Type filter now by model kind
- Homepage filter chips changed from Open / Closed / Agents / Enterprise to
  **Text / Image / Audio / Video** (model-kind groups: text = LLM+VLM, image =
  image+3D, audio = audio+voice, video = video). Companies match if they offer
  at least one model in the selected kind; combines with region filters and search.
- Chip active-state colors updated in `css/style.css`. Open/closed/agent counts
  still shown in the stats bar and on company cards (from tags).

## 2026-08-13 — Media models split into data/media/
- Image generation models moved to `data/media/image.js` and video generation
  models to `data/media/video.js` (keyed by company slug). Pages load both files
  and merge the models back into each company at render time — totals unchanged
  (33 companies / 98 models).
- Moved: 10 image models (GPT Image 2, Nano Banana family, Muse Image/Video,
  MAI-Image-2.6, Midjourney V8.2, Ideogram 4.0, Stable Diffusion 4, FLUX.2 ×3)
  and 9 video models (Gemini Omni Flash, Veo 3.1, Cosmos 3, Grok Imagine
  Video 1.5, Gen-4.5, Aleph 2.0, Seedance 2.0, Kling ×2).
- `data/companies.js` now holds core company data + non-media models only;
  header comment updated to document the split.

## 2026-08-13 — Perplexity removed
- Removed the Perplexity entry (Sonar / Sonar Pro, Computer GLM-5.2 post-train,
  Model Council, Personal Computer) — a consumer search/agent product rather than
  a model maker. Updated NVIDIA's activity text that referenced it.
- Totals: 34 → 33 companies, 102 → 98 models (21 open / 16 closed).

## 2026-08-13 — Apple removed
- Removed the Apple entry (AFM 3 Core / Core Advanced / Cloud / Cloud Pro, ADM 3 Cloud)
  — device-feature models, not part of the accessible AI model landscape.
- Totals: 35 → 34 companies, 107 → 102 models (21 open / 17 closed).

## 2026-08-13 — Compare feature removed
- Deleted `pages/compare.html`, removed the Compare nav link from the homepage,
  and stripped the compare-table/legend styles from `css/style.css`.
- Site is now: homepage (search + filters) and per-company pages only.

## 2026-08-13 — Cleanup: superseded & unreleased models removed
- **Rule applied:** keep only the latest accessible model per slot — removed
  superseded generations and models that never shipped generally.
- **Removed (17):**
  - OpenAI: GPT-Realtime-2 (superseded by GPT-Live-1)
  - Anthropic: Claude Mythos 5 (never generally available)
  - Google: Gemini 3.5 Pro (unreleased/delayed)
  - Meta: Llama 4 (superseded by Muse line)
  - Microsoft: MAI Realtime (unreleased), MAI-Image-2.5-Pro (superseded by 2.6)
  - xAI: Grok 4.5 (superseded by 4.6), Grok 5 (still in training)
  - NVIDIA: Nemotron 3 Super / Nano (superseded by 3.5 Lightning)
  - Moonshot: Kimi K2.6 (superseded by K3)
  - DeepSeek: DeepSeek-R1 (legacy API retired Jul 24, 2026)
  - Zhipu: GLM-5.1 (superseded by GLM-5.2)
  - Stability: SD 3.5 (superseded by SD4)
  - Ideogram: 3.0 (superseded by 4.0)
  - Perplexity: R1-1776 (legacy), Cohere: Command A (superseded by Command A+)
  - NousResearch: Hermes 4 (superseded by Hermes-4.3-Seed-36B)
- **Also cleaned:** taglines/tags updated (xAI, Microsoft, NousResearch), stale
  sources referencing removed models dropped (Meta, xAI, Microsoft, NousResearch).
- **Totals:** 35 companies, 124 → 107 models (21 open / 18 closed unchanged).

## 2026-08-13 — model.md cross-check: 13 companies added, 8 entries expanded
- **Source:** Cross-checked every model in `~/Desktop/model.md` (Tina Huang's
  "Every AI Model Explained" update, Aug 2026) against the site; added everything
  missing at its latest researched version.
- **New companies added (13):**
  - MiniMax (M3 — first open-weight model with frontier coding + 1M ctx + native vision)
  - Xiaomi (MiMo-V2.5 / V2.5-Pro — volume king on OpenRouter)
  - Tencent (Hunyuan Hy3 / "Tencent Hy" — 295B/21B MoE, Apache 2.0)
  - Thinking Machines (Inkling / Inkling-Small — America's open-weights answer)
  - Black Forest Labs (FLUX.2 [dev]/[pro]/[flex]/[max]/[klein])
  - Midjourney (V8.2 default since Jul 24, 2026)
  - Ideogram (4.0 — first open-weight frontier image model, 9.3B, commercial license)
  - Runway (Gen-4.5 #1 text-to-video + Aleph 2.0 editor)
  - Kuaishou (Kling Video 3.0 Omni — unified video + native audio + lip-sync)
  - Suno (v5.5), Udio (v1.5 + licensed Starstruck platform), ElevenLabs (Eleven v3)
  - Fish Audio (S2 / S2 Pro open-source TTS)
- **Existing entries expanded (8):**
  - OpenAI: + GPT Image 2, GPT-Live-1/mini voice, gpt-oss-120b/20b open weights
  - Google: + Gemini 3.1 Pro flagship, Veo 3.1, Nano Banana family, Gemma 4, Lyria 3
  - Microsoft: + Phi-4 family
  - Mistral: + Mistral Large 3 (675B MoE), Devstral 2 / Devstral Small 2
  - Moonshot: + Kimi K2.7-Code
  - Perplexity: + Sonar / Sonar Pro search models
  - ByteDance: + Seedance 2.0 video model
  - Alibaba: + Qwen3-Coder (480B-A35B)
- **Totals:** 22 → 35 companies, 87 → 124 models (21 open / 18 closed).
- **Unresolved:** "Voxro TTS" from the video could not be confidently identified
  (possibly a transcription of VoxCPM or VoxRox) — left out rather than guessed.

## 2026-08-13 — Major rebuild: data-driven architecture + content refresh
- **Architecture:** All company/model data moved to a single source of truth
  (`data/companies.js`). Homepage, company pages, and compare table render from it —
  future updates are one-file edits instead of editing 19 HTML pages.
- **Homepage:** Added live search, region filters (America/Europe/China/Infra),
  status filters (Open/Closed/Agents/Enterprise), and a stats bar
  (companies, models, open/closed counts, latest release).
- **Company pages:** Replaced 17 hand-written pages with one template
  (`pages/company.html?company=<slug>`) featuring model cards, a release timeline,
  activity context, retention hook, and sources. Old URLs redirect automatically.
- **New page:** `pages/compare.html` — side-by-side comparison of all companies.
- **Design:** Shared stylesheet (`css/style.css`) replaces 19 copies of inline CSS;
  responsive layout, consistent top nav, title fixed to "AI Model Tracker".
- **Content refresh (as of Aug 13, 2026):**
  - OpenAI: GPT-5.6 Sol Aug-6 chat update + Luna free expansion, Jul-30 price cuts
  - Anthropic: Claude Opus 5 (Jul 24), Sonnet 5 permanent pricing, Fable 5 restrictions
  - Google: Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber, Omni Flash, 3.5 Pro delay
  - Meta: Muse Spark 1.2 + Muse Code (Aug 5), Muse Glimmer open weights, open-model pivot
  - Microsoft: MAI-Image-2.6 (#2 Arena), MAI Code 1.1 Flash, MAI-Voice-2-Flash, MAI Realtime
  - NVIDIA: Nemotron 3.5 Lightning + NeMo Switchyard (Aug 11), Nemotron 3 Ultra
  - xAI: Grok 4.6 (Aug 12), Grok 4.5 (Jul 8), Grok 5 still in training
  - DeepSeek: V4-Pro-0813 official, V4-Flash-0731 agent release
  - Qwen 3.7 Max/Plus, Zhipu GLM-5.2, Moonshot Kimi K3 (open 3T-class), ByteDance Seed 2.1
  - Mistral Shieldstral, Stability SD4 + Stable Audio 3.0, Manus independence saga
- **New companies added (6):** Amazon (Nova 2), Apple (AFM 3), Cohere (Command A+),
  Perplexity (Computer/Model Council), ByteDance (Doubao Seed 2.1), plus expanded
  Hugging Face / NousResearch / OpenRouter entries.

## 2026-07-24
- Refresh all company pages to current model lineup.
- Updated pages: OpenAI, Anthropic, Google AI, Meta, Microsoft, DeepSeek, xAI/Grok, Alibaba/Qwen, Mistral, Moonshot, Zhipu.
- Final consistency pass: NVIDIA, Stability AI, Hugging Face, NousResearch, OpenRouter, Smaller Labs, Manus.
- Homepage footer now shows last-updated date.