## ADDED Requirements

### Requirement: Page title optimized for personal brand
The site SHALL expose a `<title>` tag containing "Alamin" and role keywords (e.g. "Senior Full-Stack Engineer") so searches for "Alamin developer" match the page.

#### Scenario: Title renders on homepage
- **WHEN** a crawler or browser loads the homepage
- **THEN** the document title contains "Alamin" and at least one expertise keyword (NestJS, React, Next.js, or AI/ML)

### Requirement: Meta description with expertise summary
The site SHALL include a `<meta name="description">` tag between 120–160 characters summarizing Alamin's role, tech stack, and notable products (RepairCMS, Asklytics).

#### Scenario: Description present in head
- **WHEN** the homepage HTML is fetched
- **THEN** a meta description element exists with content mentioning full-stack development and AI/ML

### Requirement: Keywords meta tag
The site SHALL include a `<meta name="keywords">` tag with personal-brand terms ("Alamin", "developer Alamin") and topical terms (NestJS, React, Next.js, SaaS, AI/ML, MongoDB, AWS).

#### Scenario: Keywords meta rendered
- **WHEN** the homepage HTML is fetched
- **THEN** a keywords meta element lists at least 8 relevant search terms

### Requirement: metadataBase for absolute URLs
The site SHALL set `metadataBase` to the production site URL so relative OG/image paths resolve to absolute URLs.

#### Scenario: OG image uses absolute URL
- **WHEN** social crawlers read Open Graph tags
- **THEN** the `og:image` URL is an absolute HTTPS URL derived from `metadataBase`

### Requirement: Open Graph profile tags
The site SHALL include Open Graph tags with `og:type` set to `profile`, plus `og:title`, `og:description`, `og:url`, `og:image`, and `og:locale`.

#### Scenario: OG tags in page head
- **WHEN** the homepage is shared on social platforms
- **THEN** Open Graph meta tags are present with type "profile" and a preview image

### Requirement: Twitter card tags
The site SHALL include Twitter card meta tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) for link preview support.

#### Scenario: Twitter card meta present
- **WHEN** the homepage HTML is fetched
- **THEN** `twitter:card` is set to `summary_large_image`

### Requirement: Canonical URL
The site SHALL include a `<link rel="canonical">` pointing to the homepage absolute URL to prevent duplicate-content issues.

#### Scenario: Canonical link in head
- **WHEN** the homepage HTML is fetched
- **THEN** a canonical link element points to the configured `siteUrl` root

### Requirement: Author and creator metadata
The site SHALL set `authors` and `creator` metadata fields to "Alamin" for authorship signals.

#### Scenario: Author metadata set
- **WHEN** Next.js metadata is resolved
- **THEN** authors array includes name "Alamin"

### Requirement: Robots indexing directive in metadata
The site SHALL set `robots` metadata to allow indexing and following links (`index: true`, `follow: true`).

#### Scenario: Indexing allowed via metadata
- **WHEN** search engine crawlers read page metadata
- **THEN** robots directive permits indexing and link following
