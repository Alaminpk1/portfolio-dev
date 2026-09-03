# portfolio-dev

Personal portfolio site of **Alamin Pramanik** — Frontend Developer (React · Next.js · TypeScript).

Single-page, server-rendered portfolio built with the Next.js App Router. All content is data-driven from one file, styling is a hand-rolled CSS utility layer on top of Tailwind v4, and the whole site is tuned for SEO, AI discoverability and Core Web Vitals.

**Live:** [https://alamin.dev](https://alamin-alpha.vercel.app/)

---

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, JavaScript — not TypeScript) |
| UI | React 19, server components by default |
| Styling | Tailwind CSS v4 (CSS-first `@theme inline`) + custom utility layer in `globals.css` |
| Fonts | `next/font/google` |
| Animation | Plain CSS — scroll-driven `animation-timeline: view()`, no animation library |
| Analytics | `@vercel/analytics` |
| Tooling | ESLint (`eslint-config-next/core-web-vitals`), pnpm |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # eslint
```

> No test suite is configured yet.

## Environment Variables

| Variable | Required | Default | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | `https://alamin.dev` | Canonical site URL used for metadata, `sitemap.xml`, `robots.txt` and absolute Open Graph image URLs |

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Project Structure

```
src/
  app/
    layout.js       # metadata + viewport from site.seo, fonts, theme anti-FOUC script, <JsonLd />
    page.js         # composes every section in order
    globals.css     # design tokens, utility layer, animations
    sitemap.js      # generated from site.seo.siteUrl
    robots.js       # crawl rules
  components/       # presentation-only section components
  data/
    portfolio.js    # ← ALL content lives here
public/
  llms.txt          # AI-crawler summary of the site
  images/           # project screenshots
openspec/           # change proposals, designs and task specs
```

## Editing Content

**Everything you'd want to change lives in `src/data/portfolio.js`.** Components under `src/components/` are presentation-only and simply map over that data.

Exported from `portfolio.js`:

- `site` — name, title, tagline, bio, social links, `themeKey`, and the whole `seo` block (title, description, keywords, OG image, `knowsAbout`)
- `status` — role, company, years of experience, availability
- `navLinks` — anchor nav items
- `experience` · `projects` · `moreProjects` · `skills` · `services` · `writing`

Update your resume entries, project cards or SEO copy there — not in the components.

## Page Composition

`src/app/page.js` renders one `<main>`:

```
Nav → Hero → Experience → Projects → Skills → Services → Writing → Contact → Footer
```

Plus a skip-link, a `CursorGlow` layer, and a screen-reader-only summary paragraph for accessibility and search context.

## Conventions

Read [`CLAUDE.md`](./CLAUDE.md) before contributing — it is the source of truth for how this codebase is written. Key rules:

- **Styling:** components do *not* use Tailwind utility classes. They compose the hand-rolled utilities defined in `globals.css` — `.fx`, `.col`, `.ac`, `.gap12`, `.card`, `.sec`, `.chip` — e.g. `className="fx ac gap12 wrap"`. Follow this for new markup.
- **Colors:** reference the CSS custom properties in `globals.css` (`:root` vs `:root.light`). Never hardcode a color.
- **Theme:** dark is the default; light is a `.light` class on `<html>`, set by an inline blocking script in `layout.js` (prevents FOUC), toggled by `ThemeToggle.js` and persisted to `localStorage` under `site.themeKey`. `ThemeToggle.js` is the only client component.
- **Motion:** every new animation must also be handled in the `@media (prefers-reduced-motion: reduce)` override block.
- **Next.js 16:** APIs and conventions differ from older versions — check `node_modules/next/dist/docs/` before writing code (see [`AGENTS.md`](./AGENTS.md)).

## SEO & Discoverability

The `portfolio-seo-optimization` change under `openspec/changes/` is implemented:

- Full Metadata API config (title template, description, keywords, canonical, Open Graph, Twitter cards, robots directives) built from `site.seo`
- JSON-LD structured data — `Person`, `WebSite`, `ProfilePage` — in `src/components/JsonLd.js`
- `sitemap.xml` and `robots.txt` via App Router file conventions
- `public/llms.txt` so LLM-powered search tools can read and cite the site
- Semantic HTML, heading hierarchy and keyword-aligned alt text throughout

After deploying to a new domain, set `NEXT_PUBLIC_SITE_URL` and submit the sitemap to Google Search Console and Bing Webmaster Tools.

## Specs & Change Tracking

Feature work is tracked in `openspec/changes/<change-name>/` as `proposal.md`, `design.md`, `tasks.md` and per-capability `specs/`. Check there for in-flight or already-completed context before assuming something is unbuilt.

## Deployment

Deploys as a standard Next.js app (Vercel recommended). Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical URLs, the sitemap and OG images resolve absolutely.

## License

Private — personal portfolio. Code is not licensed for reuse.
