## ADDED Requirements

### Requirement: XML sitemap generation
The site SHALL serve a valid `sitemap.xml` at `/sitemap.xml` listing the homepage with `lastModified`, `changeFrequency`, and `priority`.

#### Scenario: Sitemap accessible
- **WHEN** a crawler requests `/sitemap.xml`
- **THEN** the response is valid XML containing the homepage URL with priority 1.0

### Requirement: Robots.txt generation
The site SHALL serve a `robots.txt` at `/robots.txt` allowing all user agents to crawl `/` and referencing the sitemap URL.

#### Scenario: Robots.txt accessible
- **WHEN** a crawler requests `/robots.txt`
- **THEN** the response allows all agents and includes a `Sitemap:` directive

### Requirement: Sitemap uses production site URL
The sitemap entry URLs SHALL use the configured `siteUrl` (from `NEXT_PUBLIC_SITE_URL` or default), not localhost.

#### Scenario: Production URL in sitemap
- **WHEN** the sitemap is generated in production
- **THEN** listed URLs use the HTTPS production domain

### Requirement: Homepage included in sitemap
The sitemap SHALL include exactly the homepage route (`/`) since the site is single-page.

#### Scenario: Single entry sitemap
- **WHEN** the sitemap is parsed
- **THEN** it contains one `<url>` entry for the root path
