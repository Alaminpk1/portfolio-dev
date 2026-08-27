## Why

The portfolio currently has minimal SEO — only a basic `title` and `description` in `layout.js`, with no structured data, sitemap, robots rules, or AI-crawler signals. As a result, searches for "Alamin", "developer Alamin", or AI/web-development topics are unlikely to surface this site on Google, Bing, or AI search tools (ChatGPT, Perplexity, etc.). High-quality SEO is needed now so the site can rank for personal-brand queries and topical expertise in full-stack, SaaS, and AI/ML development.

## What Changes

- Expand Next.js `metadata` with optimized title templates, descriptions, keywords, Open Graph, Twitter cards, canonical URLs, and `robots` directives
- Add JSON-LD structured data (`Person`, `WebSite`, `ProfilePage`, `BreadcrumbList`) so search engines understand who Alamin is and what the site offers
- Generate `sitemap.xml` and `robots.txt` via Next.js App Router conventions for crawlability
- Add `llms.txt` (and optionally `llms-full.txt`) so AI crawlers can discover and cite the portfolio for relevant queries
- Enrich on-page content with semantic HTML (`<article>`, proper heading hierarchy), keyword-aligned copy, and improved image `alt` text tied to expertise areas
- Centralize SEO configuration in `portfolio.js` (site URL, social handles, keyword clusters) for maintainability
- Add a `metadataBase` and production `siteUrl` so absolute URLs resolve correctly when deployed

## Capabilities

### New Capabilities

- `seo-metadata`: Page-level meta tags, Open Graph, Twitter cards, canonical URLs, and `metadataBase` configuration
- `structured-data`: JSON-LD schemas for personal brand and site identity (`Person`, `WebSite`, `ProfilePage`)
- `search-indexing`: `sitemap.xml`, `robots.txt`, and crawl/index directives for search engines
- `semantic-content-seo`: On-page semantic markup, heading hierarchy, alt text, and keyword-rich content for name and topic discoverability
- `ai-discoverability`: `llms.txt` and AI-crawler-friendly signals so LLM-powered search tools can recommend the site for AI/web topics

### Modified Capabilities

<!-- No existing specs in openspec/specs/ — all capabilities are new -->

## Impact

- **Files**: `src/app/layout.js`, `src/app/page.js`, `src/data/portfolio.js`, new `src/app/sitemap.js`, `src/app/robots.js`, `public/llms.txt`, new SEO utility/component(s) under `src/`
- **Components**: Minor copy/semantic updates in `Hero.js`, `Projects.js`, `Skills.js`, `Services.js`, and `Footer.js` for keyword alignment without changing visual design
- **Dependencies**: None — uses built-in Next.js 16 Metadata API and App Router file conventions
- **Deployment**: Requires a production `siteUrl` env var (e.g. `NEXT_PUBLIC_SITE_URL`) for canonical URLs, sitemap, and OG absolute links
- **External**: Google Search Console and Bing Webmaster Tools submission recommended post-deploy (out of scope for code, noted in tasks)
