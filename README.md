# AI Model Tracker

Overview of AI companies, models, and retention framework. Updated August 13, 2026.

## Pages
- `index.html` — homepage with search, Text/Image/Audio/Video filters, and stats (JS-rendered)
- `pages/company.html?company=<slug>` — per-company detail page (models, timeline, activity, sources)
- Old `pages/<company>.html` URLs redirect to the new template

## Data
- **`data/companies.js`** — core data: companies plus text/voice/agent/infra models.
- **`data/media/image.js`** / **`data/media/video.js`** — image and video generation
  models, keyed by company slug. Pages load all three files and merge models at render.
- `css/style.css` — shared stylesheet for all pages.

## Adding a company
1. Add an entry to `data/companies.js` (copy an existing one; `slug` must be unique).
   Media-only image/video models go in `data/media/image.js` / `data/media/video.js`.
2. Optionally add a redirect stub at `pages/<slug>.html` for old links.
3. Done — the homepage and company page pick it up automatically.

## Contributing
Feel free to open issues or pull requests.
