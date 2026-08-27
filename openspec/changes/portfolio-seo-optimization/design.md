## Context

The portfolio is a Next.js 16 App Router single-page site (`src/app/page.js`) with data centralized in `src/data/portfolio.js`. Current SEO is limited to a two-field `metadata` export in `layout.js` — no `metadataBase`, Open Graph, structured data, sitemap, robots, or AI-crawler files. The site targets personal-brand discovery ("Alamin", "developer Alamin") and topical authority in full-stack SaaS and AI/ML web development.

Constraints:
- No new npm dependencies — use Next.js built-in Metadata API, `sitemap.js`, and `robots.js`
- Preserve existing visual design and terminal-aesthetic UI
- Site URL must be configurable for dev vs production via env var

## Goals / Non-Goals

**Goals:**
- Rank for personal-brand queries: "Alamin developer", "developer Alamin", "Alamin full-stack engineer"
- Surface for topical queries: NestJS, Next.js, React, SaaS development, AI/ML integration, MongoDB, AWS
- Provide machine-readable identity via JSON-LD `Person` and `WebSite` schemas
- Enable search engine crawling via sitemap and robots.txt
- Enable AI search tools (ChatGPT, Perplexity, Claude) to discover and cite the site via `llms.txt`
- Centralize all SEO config in `portfolio.js` for single-source maintenance

**Non-Goals:**
- Blog/content marketing pages or multi-page site expansion
- Paid SEO tools, analytics dashboards, or Google Search Console setup (manual post-deploy step)
- Internationalization / hreflang
- Performance/Core Web Vitals optimization (separate concern)
- Backlink building or off-page SEO strategy

## Decisions

### 1. Centralize SEO config in `portfolio.js`

Add a `seo` object to the existing `site` export:

```js
seo: {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alamin.dev",
  title: "Alamin — Senior Full-Stack Engineer | NestJS · React · AI/ML",
  description: "...",
  keywords: ["Alamin", "developer Alamin", "full-stack developer", ...],
  ogImage: "/images/og-cover.png",  // or reuse existing project image
  twitterHandle: "@alamin",
  jobTitle: "Senior Full-Stack Engineer",
  knowsAbout: ["NestJS", "Next.js", "React", "AI/ML", "SaaS", ...],
}
```

**Rationale:** Single source of truth; metadata, JSON-LD, sitemap, and llms.txt all read from one place.
**Alternative considered:** Separate `seo.js` file — rejected to avoid config fragmentation.

### 2. Use Next.js Metadata API in `layout.js`

Expand `export const metadata` with:
- `metadataBase` from `site.seo.siteUrl`
- `title` with `template` for future pages
- `description`, `keywords`, `authors`, `creator`
- `openGraph` (type: `profile`, locale, images)
- `twitter` (card: `summary_large_image`)
- `robots` (index: true, follow: true)
- `alternates.canonical` pointing to `/`

**Rationale:** Native Next.js approach; no runtime overhead; works with App Router SSR.
**Alternative considered:** `next-seo` package — rejected (unnecessary dependency).

### 3. JSON-LD via a server component `<JsonLd />`

Create `src/components/JsonLd.js` that renders a `<script type="application/ld+json">` with:
- `Person` schema (name, jobTitle, url, sameAs for GitHub/LinkedIn/Twitter, knowsAbout, worksFor)
- `WebSite` schema (name, url, description, author)
- `ProfilePage` schema linking Person to the page

Inject in `layout.js` or `page.js` as a server component (no client JS).

**Rationale:** Google recommends JSON-LD; server-rendered avoids hydration issues.
**Alternative considered:** Microdata attributes on HTML — rejected (harder to maintain in React components).

### 4. App Router file conventions for sitemap and robots

- `src/app/sitemap.js` — exports default function returning `[{ url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 }]`
- `src/app/robots.js` — exports default function returning `{ rules: { userAgent: '*', allow: '/' }, sitemap: siteUrl + '/sitemap.xml' }`

**Rationale:** Next.js 16 auto-serves these at `/sitemap.xml` and `/robots.txt`.
**Alternative considered:** Static files in `public/` — rejected (can't use env-based siteUrl).

### 5. `llms.txt` in `public/` for AI discoverability

Create `public/llms.txt` following the emerging standard (llmstxt.org):
- Site name, description, and URL
- Key sections with summaries (experience, projects, skills, services)
- Links to social profiles and notable projects
- Keyword clusters for AI topic matching

**Rationale:** Growing adoption by AI crawlers; zero runtime cost as a static file.
**Alternative considered:** Dynamic route — rejected (static is simpler and cacheable).

### 6. Semantic HTML and heading improvements (minimal visual change)

- Wrap main content sections in `<article>` or ensure `<section>` has `aria-labelledby`
- Ensure single `<h1>` (already in Hero) with keyword-rich subheadings (`<h2>` per section)
- Add visually-hidden or aria-enhanced text where terminal aesthetic limits visible keywords
- Improve `imageAlt` values in `portfolio.js` to include technology and project context

**Rationale:** On-page signals complement meta/structured data without redesigning UI.
**Alternative considered:** Adding a visible "About" paragraph block — rejected (changes design); use `sr-only` spans instead.

### 7. OG image strategy

Use an existing project screenshot (`/images/asklytics.png`) as default OG image, or add a dedicated `public/images/og-cover.png` during implementation.

**Rationale:** Social shares need a preview image; Asklytics image demonstrates AI expertise.
**Alternative considered:** Dynamic OG image generation (`@vercel/og`) — deferred (adds complexity).

## Risks / Trade-offs

- **[Risk] Generic name "Alamin" is highly competitive** → Mitigation: Combine with qualifiers ("developer Alamin", "full-stack engineer Alamin", location, tech stack) in title, description, keywords, and JSON-LD `alternateName`
- **[Risk] Single-page site limits topical keyword surface area** → Mitigation: Rich `knowsAbout` in Person schema, detailed project/skill descriptions, and comprehensive `llms.txt` content
- **[Risk] `siteUrl` misconfigured in production** → Mitigation: Document `NEXT_PUBLIC_SITE_URL` in README; default to a sensible placeholder; validate in build
- **[Risk] AI discoverability (`llms.txt`) is an emerging standard** → Mitigation: Low cost to add; also benefits from strong structured data and semantic HTML as fallback
- **[Trade-off] Keyword-rich copy vs terminal aesthetic** → Use `sr-only` text and metadata rather than visible marketing copy

## Migration Plan

1. Implement SEO changes on current branch
2. Set `NEXT_PUBLIC_SITE_URL` in production deployment (Vercel/hosting env)
3. Deploy and verify:
   - `/robots.txt` and `/sitemap.xml` resolve
   - View page source for JSON-LD and meta tags
   - Test with Google Rich Results Test and opengraph.xyz
4. Submit sitemap to Google Search Console and Bing Webmaster Tools (manual)
5. No rollback needed — SEO additions are additive; revert by removing new files

## Open Questions

- **Production domain**: Confirm final `siteUrl` (e.g. `alamin.dev`, `alamin.vercel.app`, custom domain) before deploy
- **OG image**: Use existing Asklytics screenshot or create a dedicated branded OG image?
- **Real social URLs**: GitHub/LinkedIn/Twitter URLs in `portfolio.js` appear to be placeholders — confirm real profiles for `sameAs` links
