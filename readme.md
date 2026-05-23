# 🚀 Interactive SaaS Dashboard for AI Analytics

This is Lightweight frontend demo dashboard showcasing UX, animated visuals, and data charts.

---

**Table of Contents**

- [About](#about)
- [Features](#features)
- [Tech & Dependencies](#tech--dependencies)
- [Files & Responsibilities](#files--responsibilities)
- [Run locally](#run-locally)
- [Notes & Known Issues](#notes--known-issues)
- [Future improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## About

This repository contains a single-page interactive dashboard built with HTML, CSS and JavaScript. It demonstrates layout inspection, Chart.js visualizations and a Three.js animated background.

**Author:** Dilip Singh (Frontend Developer)

## Features

- Interactive layout inspector mockup
- Radar chart visualization (Chart.js)
- 3D animated particle background (Three.js)
- Responsive styles and simple UI animations
- Simulated live data updates for demo purposes

## Tech & Dependencies

- HTML, CSS, JavaScript
- Chart.js — included via CDN in `index.html`
- Tailwind (utility CSS) — included via CDN in `index.html`
- Three.js — required by `three-bg.js` (not currently included in `index.html`) 
- (GSAP is mentioned in the README but not used in the current code)

Important: some scripts rely on elements or libraries that need to be present in `index.html` (see Notes & Known Issues).

## Files & Responsibilities

- `index.html` — main UI and inline app initialization
- `style.css` — global styles (legacy dark theme / sidebar styles)
- `app.js` — page interactions (sidebar toggles, smooth scrolling, fake live updates)
- `charts.js` — additional Chart.js instances (expects canvases with ids `revenueChart`, `userChart`, `deviceChart`)
- `three-bg.js` — Three.js background scene (requires Three.js to be loaded)

## Run locally

This project is static and can be opened directly, but some browsers restrict certain features (CORS, module loading, or file:// restrictions). I recommend serving via a simple local HTTP server.

Using Node (recommended):

```bash
npx http-server -c-1 .
# open http://127.0.0.1:8080 in your browser
```

Or with Python 3:

```bash
python -m http.server 8000
# open http://127.0.0.1:8000
```

Opening `index.html` directly (double-click) will work for basic viewing, but run a local server to avoid potential issues with scripts or assets.

## Notes & Known Issues

- `three-bg.js` expects Three.js to be loaded. Add the CDN script tag to `index.html` before `three-bg.js`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r152/three.min.js"></script>
<script src="three-bg.js"></script>
```

- `charts.js` instantiates charts using canvas elements with ids `revenueChart`, `userChart`, and `deviceChart` — these canvases are not present in the current `index.html`. Either add those `<canvas>` elements or remove/adjust `charts.js`.

- `app.js` queries `.sidebar` and `.toggle-btn` elements which are not defined in the current `index.html` markup. If you intend to use the sidebar behavior, add the corresponding DOM elements or update `app.js` to match the markup.

- README previously referenced GSAP though it is not used — remove or add it to `index.html` if animations depend on it.

- The repo link in the old README appears to be a placeholder. Replace with your real GitHub repository URL if available.

## Future improvements

- Add Dark mode toggle
- Create React/Next.js version
- Add API integration for real data
- Improve accessibility and keyboard navigation in the inspector

## Contributing

Feel free to open issues or pull requests. For small fixes, update the relevant file and send a PR. Add an issue for larger features so we can discuss the scope.

## License

Add a license file (e.g., MIT) or specify the license here.

---

If you want, I can: (1) patch `index.html` to include the Three.js CDN and missing canvases, (2) update `app.js` to guard DOM queries, or (3) prepare a minimal `package.json` with a `start` script for `http-server`.