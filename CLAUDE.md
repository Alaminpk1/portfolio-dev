# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (Turbopack) at localhost:3000
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint (`eslint-config-next/core-web-vitals`)

No test suite is configured.

## Architecture

Single-page Next.js 16 App Router portfolio (JS, not TS). Almost everything is server-rendered — the only client component is `src/components/ThemeToggle.js`.

- **Content lives entirely in `src/data/portfolio.js`** — a `site` object plus arrays (`experience`, `projects`, `moreProjects`, `skills`, `services`, `writing`, `navLinks`, `status`). Components under `src/components/` are presentation-only and map over this data; resume content, project entries, and SEO copy (`site.seo`) get edited there, not in the components.
- `src/app/page.js` composes the section components in order (Nav → Hero → Experience → Projects → Skills → Services → Writing → Contact → Footer) inside one `<main>`.
- `src/app/layout.js` builds the `metadata`/`viewport` exports from `site.seo`, loads fonts via `next/font/google`, and renders `<JsonLd />` (Person/WebSite/ProfilePage structured data in `src/components/JsonLd.js`, also driven by `site.seo`). `src/app/sitemap.js` and `robots.js` also read `site.seo.siteUrl`.
- Theme (dark default / light) is a class toggle on `<html>` (`.light`), set by an inline blocking script in `layout.js`'s `<head>` (prevents FOUC) and flipped client-side by `ThemeToggle.js`, persisted to `localStorage` under `site.themeKey`. Colors are CSS custom properties in `globals.css` (`:root` vs `:root.light`) — reference the variable, don't hardcode a color.
- **Styling is Tailwind v4 (CSS-first, `@import "tailwindcss"` + `@theme inline` in `globals.css`), but components don't use Tailwind utility classes** — they use a hand-rolled utility layer defined in `globals.css` (`.fx`, `.col`, `.ac`, `.gap12`, `.card`, `.sec`, `.chip`, etc.), composed like `className="fx ac gap12 wrap"`. Follow this existing convention for new markup rather than introducing Tailwind utilities.
- Animation is plain CSS in `globals.css`, no animation library: scroll-driven reveal (`.reveal`, `animation-timeline: view()`, gated behind `@supports` + `prefers-reduced-motion: no-preference`) plus hover/transition polish on `.card`/`.btn`/etc. Any new animation must also be added to the `@media (prefers-reduced-motion: reduce)` override block.
- `NEXT_PUBLIC_SITE_URL` controls the canonical `siteUrl` used for metadata/sitemap/OG (defaults to `https://alamin.dev` — see `src/data/portfolio.js`).
- `openspec/changes/` tracks feature work as proposal/design/tasks specs — check there for in-flight or already-completed context before assuming a capability is unbuilt.
