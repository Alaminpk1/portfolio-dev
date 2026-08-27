## ADDED Requirements

### Requirement: Person JSON-LD schema
The site SHALL embed a JSON-LD `Person` schema with `name`, `jobTitle`, `url`, `email`, `sameAs` (GitHub, LinkedIn, Twitter), and `knowsAbout` listing core technologies.

#### Scenario: Person schema in page source
- **WHEN** the homepage HTML is fetched
- **THEN** a `<script type="application/ld+json">` block contains `@type: "Person"` with name "Alamin"

### Requirement: WebSite JSON-LD schema
The site SHALL embed a JSON-LD `WebSite` schema with `name`, `url`, `description`, and `author` referencing the Person entity.

#### Scenario: WebSite schema present
- **WHEN** the homepage HTML is fetched
- **THEN** a JSON-LD block contains `@type: "WebSite"` with the site URL and description

### Requirement: ProfilePage JSON-LD schema
The site SHALL embed a JSON-LD `ProfilePage` schema linking the page to the Person entity via `mainEntity`.

#### Scenario: ProfilePage links to Person
- **WHEN** Google Rich Results Test parses the page
- **THEN** a `ProfilePage` schema is detected with `mainEntity` referencing the Person

### Requirement: sameAs social profile links
The Person schema `sameAs` array SHALL include URLs for GitHub, LinkedIn, and Twitter/X profiles from `portfolio.js`.

#### Scenario: Social profiles in sameAs
- **WHEN** the Person JSON-LD is parsed
- **THEN** `sameAs` contains at least 3 external profile URLs

### Requirement: knowsAbout topical expertise
The Person schema `knowsAbout` array SHALL list at least 10 expertise areas including NestJS, React, Next.js, MongoDB, AWS, AI/ML, SaaS, and OpenAI integration.

#### Scenario: Expertise topics listed
- **WHEN** the Person JSON-LD is parsed
- **THEN** `knowsAbout` includes entries for SaaS development and AI/ML integration
