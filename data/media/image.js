/* AI Image Generation Models — separate data file.
 * Loaded alongside data/companies.js on every page; models are merged back
 * into their company at render time.
 * Shape: window.AI_IMAGE_MODELS = { <company slug>: [ model, ... ] }
 */
window.AI_IMAGE_MODELS = {
  openai: [
    {
      name: "GPT Image 2",
      type: "image",
      released: "2026-04-21",
      desc: "State-of-the-art image generation and editing model powering ChatGPT Images 2.0. Thinking capabilities: web search, visual explainers from uploaded files, reasoning through image structure before generating. #1 on the image Arena leaderboard."
    }
  ],
  "google-ai": [
    {
      name: "Nano Banana family",
      type: "image",
      released: "2026-01-01",
      desc: "Gemini's native image generation and editing models: Nano Banana Pro (Gemini 3 Pro Image, studio-quality), Nano Banana 2 (Gemini 3.1 Flash Image, 4K workhorse), Nano Banana 2 Lite (Gemini 3.1 Flash-Lite Image, fastest/cheapest). Up to 14 reference images, 1K-4K output, Search grounding."
    }
  ],
  meta: [
    {
      name: "Muse Image / Muse Video",
      type: "image",
      released: "2025-10-01",
      desc: "Meta's creative generation models for image and video, shipping across Instagram, WhatsApp, and Ray-Ban Meta surfaces."
    }
  ],
  microsoft: [
    {
      name: "MAI-Image-2.6",
      type: "image",
      released: "2026-08-10",
      desc: "Text-to-image model now ranked #2 on the Arena leaderboard behind GPT-Image-2 (+79 Elo over 2.5). Better text rendering, portraits, 3D imagery, and multi-reference grounding."
    }
  ],
  midjourney: [
    {
      name: "Midjourney V8.2",
      type: "image",
      released: "2026-07-24",
      desc: "Default since Jul 24, 2026 — focused on aesthetics, image quality, and Personalization. V8.1 (Jun 11) added HD mode (2x size, 4x resolution of V7) and 4s SD / 12s HD renders. V7 introduced Draft Mode (10x speed) and Omni Reference for consistent characters."
    }
  ],
  ideogram: [
    {
      name: "Ideogram 4.0",
      type: "image",
      released: "2026-06-03",
      desc: "9.3B open-weight text-to-image model under a commercial license, trained from scratch. Frontier multilingual text rendering, bounding-box layout control, 2K photoreal output. #2 overall / #1 open on designer-preference ELO (1062). Foundation for a layer-based generation stack (transparent layers, editable text)."
    }
  ],
  "stability-ai": [
    {
      name: "Stable Diffusion 4",
      type: "image",
      released: "2026-02-01",
      desc: "14B diffusion transformer with native 4K output (no upscaling), a retrained text encoder, and ControlNet 3 structural controls. Weights released under Creative ML OpenRAIL-M+, with an Apache 2.0 open-sourcing reported in June. One of the only local-first 4K image models."
    }
  ],
  "black-forest-labs": [
    {
      name: "FLUX.2 [dev]",
      type: "image",
      released: "2025-11-25",
      desc: "32B open-weight model — the most powerful open image generation and editing model: text-to-image, single-reference and multi-reference editing in a single checkpoint. Runs on consumer GPUs via an optimized fp8 reference implementation with NVIDIA and ComfyUI."
    },
    {
      name: "FLUX.2 [pro] / [flex] / [max]",
      type: "image",
      released: "2025-11-25",
      desc: "Managed API tiers: [pro] rivals the best closed models with faster, cheaper generation; [flex] exposes step/guidance controls and excels at text rendering; [max] is the top-quality variant. 4MP photorealistic output with multi-reference control."
    },
    {
      name: "FLUX.2 [klein]",
      type: "image",
      released: "2026-01-15",
      desc: "Fastest image models — 9B and 4B variants with sub-second inference, unifying generation and editing in a compact architecture. Apache 2.0 on 4B; runs in ~13GB VRAM on consumer GPUs. FP8/NVFP4 quantized versions with NVIDIA."
    }
  ]
};
