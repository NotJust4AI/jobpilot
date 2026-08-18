# JobPilot

Job-search / recruiting SaaS, built on Next.js 14 (App Router) + TypeScript.

The current codebase is the **Sassio** Next.js template (AliThemes v2.0) extracted into the
repo root as a starting point — the 65 routes under `app/` are still template demo pages.
The original purchased archive is kept tracked at the repo root as the reference copy.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build (69 static routes) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint via `next lint` |

## Structure

- `app/` — App Router routes; `app/layout.tsx` loads global CSS and the Work Sans font
- `components/layout/Layout.tsx` — page shell, switches between 11 header/footer variants
- `components/sections/` — page sections (`homepage/`, `blog/`)
- `public/css/` — all styling (`main.css`, `vendors.css`, `animate.min.css`); no Tailwind
- `public/img/` — template imagery

See [CLAUDE.md](./CLAUDE.md) for conventions, known template quirks, and files to leave alone.
