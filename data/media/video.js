/* AI Video Generation Models — separate data file.
 * Loaded alongside data/companies.js on every page; models are merged back
 * into their company at render time.
 * Shape: window.AI_VIDEO_MODELS = { <company slug>: [ model, ... ] }
 */
window.AI_VIDEO_MODELS = {
  "google-ai": [
    {
      name: "Gemini Omni Flash",
      type: "video",
      released: "2026-05-19",
      url: "https://gemini.google.com",
      desc: "First Omni family model: creates and edits high-quality video from any combination of text, image, audio, and video — 'Nano Banana for video.' Live in the Gemini app, Google Flow, and YouTube Shorts."
    },
    {
      name: "Veo 3.1 / Veo 3.1 Lite",
      type: "video",
      released: "2026-04-08",
      url: "https://deepmind.google/models/veo/",
      desc: "Google's leading video generation family — high-quality, high-resolution video with synchronized audio from text or images. Veo 3.1 Lite adds a faster, more efficient variant for Gemini API, AI Studio, Vertex AI, and Flow."
    }
  ],
  nvidia: [
    {
      name: "Cosmos 3",
      type: "video",
      released: "2026-03-01",
      url: "https://build.nvidia.com/nvidia/cosmos3-nano",
      desc: "World models for physical AI — robotics and autonomous systems trained on simulation-native video."
    }
  ],
  grok: [
    {
      name: "Grok Imagine Video 1.5",
      type: "video",
      released: "2026-06-01",
      url: "https://grok.com",
      desc: "Image-to-video model that took the top spot on the image-to-video leaderboard this summer."
    }
  ],
  runway: [
    {
      name: "Gen-4.5",
      type: "video",
      released: "2025-11-01",
      url: "https://app.runwayml.com/",
      desc: "#1 on the Artificial Analysis Text-to-Video benchmark (1,247 Elo). Cinematic, photorealistic output with precise prompt adherence, advanced motion quality, and temporal consistency. Text-to-video and image-to-video, developed entirely on NVIDIA GPUs."
    },
    {
      name: "Aleph 2.0",
      type: "video",
      released: "2026-01-01",
      url: "https://app.runwayml.com/",
      desc: "AI video editor in Edit Studio — change a backdrop, restyle footage, swap a product or update lighting across real and AI-generated clips up to 30s at 1080p. Only touches what you describe, across cuts and scene transitions."
    }
  ],
  bytedance: [
    {
      name: "Seedance 2.0",
      type: "video",
      released: "2026-02-01",
      url: "https://www.doubao.com/",
      desc: "ByteDance's viral AI video model — top raw quality with natural physics, anatomy, and expressive movement. Excels at realistic UGC content and lip-sync; all-in-one generation of video, images, music, and effects in a single ecosystem. Up to 15s clips, multi-shot storytelling, built-in audio."
    }
  ],
  kuaishou: [
    {
      name: "Kling Video 3.0 Omni",
      type: "video",
      released: "2026-02-05",
      url: "https://klingai.com/app",
      desc: "Unified multimodal architecture (Omni One) — video, native audio, character voice consistency, and in-timeline editing in a single model. Up to 15s clips, native 4K at 60fps, multi-shot storyboarding, reference-based character consistency, and lip-sync across languages (Japanese, Korean, Spanish and more)."
    },
    {
      name: "Kling Video 3.0 / Image 3.0",
      type: "video",
      released: "2026-02-05",
      url: "https://klingai.com/app",
      desc: "Cinematic-quality video with element consistency and reference-video support; Image 3.0 / 3.0 Omni add 2K and 4K ultra-high-definition output."
    }
  ]
};
