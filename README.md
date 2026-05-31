# beyond elyu

> La Union is not overrated. Look closer.

A single-page editorial site about **La Union** — the surf coast on the
northwest of Luzon that everyone thinks they've already seen from a weekend
day-trip. This is a small love letter arguing the opposite: that past the
crowded breaks and the day-tripper checklist, there's a place worth slowing
down for. The whole site is built to make one point, *look closer*.

This is a **vibe-coded side project** — made for fun, to play with a design
direction and to show off how good La Union actually is, not as a polished
product. Expect things to be a work in progress.

## Design direction — "Coastal Editorial"

Warm, light, and intentional. The palette and type are the voice:

| Role | Token | Color |
|---|---|---|
| Background | `sand` | `#F5F0E6` — warm off-white |
| Primary | `sea` | `#1F4A43` — deep sea green |
| Accent | `terracotta` | `#C0623D` — burnt terracotta |
| Text | `ink` | `#2A2622` |

- **Display type:** Clash Display (self-hosted)
- **Body type:** Geist (self-hosted via the `geist` package)
- Tokens, fonts, an editorial type scale, and generous spacing all live in
  the Tailwind v4 `@theme` block in [`src/app/globals.css`](src/app/globals.css).
  Colors are authored in OKLCH and map 1:1 to the hex values above.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` config)
- [shadcn](https://ui.shadcn.com) components
- Self-hosted fonts via `next/font/local` + the `geist` package (no CDN)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Fonts

Both faces are self-hosted, so nothing is fetched from a CDN at runtime.

- **Clash Display** — the variable `.woff2` lives in
  [`src/app/fonts/`](src/app/fonts) and is wired up in
  [`src/app/layout.tsx`](src/app/layout.tsx). It's free for commercial use
  ([Fontshare](https://www.fontshare.com/fonts/clash-display), by the Indian
  Type Foundry). To swap it, replace that one file.
- **Geist** — comes from the `geist` npm package.

## Status

Early days. The design tokens and self-hosted font setup are in place; the
page sections are still being built. More of La Union to come.

---

Made with warm light and too much coffee, somewhere along the El Niño coast.
