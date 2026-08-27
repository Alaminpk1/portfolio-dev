## 1. SEO Configuration

- [x] 1.1 Add `seo` object to `site` export in `src/data/portfolio.js` with `siteUrl`, `title`, `description`, `keywords`, `ogImage`, `twitterHandle`, `jobTitle`, and `knowsAbout` arrays
- [x] 1.2 Confirm real GitHub, LinkedIn, and Twitter URLs in `portfolio.js` for `sameAs` links (update placeholders if needed)
- [x] 1.3 Document `NEXT_PUBLIC_SITE_URL` env var requirement in README

## 2. Metadata & Open Graph (seo-metadata)

- [x] 2.1 Expand `export const metadata` in `src/app/layout.js` with `metadataBase`, title template, description, keywords, authors, and creator
- [x] 2.2 Add `openGraph` config (type: profile, title, description, url, images, locale) in `layout.js`
- [x] 2.3 Add `twitter` card config (summary_large_image, title, description, image) in `layout.js`
- [x] 2.4 Add `alternates.canonical` and `robots` (index/follow) directives in `layout.js`

## 3. Structured Data (structured-data)

- [x] 3.1 Create `src/components/JsonLd.js` server component rendering Person, WebSite, and ProfilePage JSON-LD schemas from `portfolio.js` data
- [x] 3.2 Include `sameAs` social URLs and `knowsAbout` expertise list in Person schema
- [x] 3.3 Inject `<JsonLd />` in `src/app/layout.js` or `src/app/page.js`

## 4. Search Indexing (search-indexing)

- [x] 4.1 Create `src/app/sitemap.js` exporting homepage URL with lastModified, changeFrequency, and priority
- [x] 4.2 Create `src/app/robots.js` allowing all crawlers and referencing sitemap URL
- [x] 4.3 Verify `/sitemap.xml` and `/robots.txt` resolve correctly in dev build

## 5. Semantic Content SEO (semantic-content-seo)

- [x] 5.1 Add `sr-only` expertise summary paragraph to `src/app/page.js` with keyword-rich text ("developer Alamin", full-stack, AI/web)
- [x] 5.2 Ensure each section component (Experience, Projects, Skills, Services, Writing, Contact) uses `<h2>` headings with `id` attributes matching nav anchors
- [x] 5.3 Update project `imageAlt` values in `portfolio.js` to include technology keywords
- [x] 5.4 Add `.sr-only` utility class to `globals.css` if not already present

## 6. AI Discoverability (ai-discoverability)

- [x] 6.1 Create `public/llms.txt` with site identity, expertise topics, project summaries, and social/contact links
- [x] 6.2 Verify `/llms.txt` is accessible as plain text

## 7. Verification & Deploy

- [x] 7.1 Run `pnpm build` and confirm no metadata/SEO errors
- [x] 7.2 View page source and verify JSON-LD, meta tags, canonical, and OG tags
- [ ] 7.3 Test structured data with Google Rich Results Test (post-deploy)
- [ ] 7.4 Submit sitemap to Google Search Console and Bing Webmaster Tools (manual, post-deploy)
