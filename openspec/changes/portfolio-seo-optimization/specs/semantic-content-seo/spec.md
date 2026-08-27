## ADDED Requirements

### Requirement: Single H1 with personal brand name
The homepage SHALL have exactly one `<h1>` element containing "Alamin" as the primary heading.

#### Scenario: One H1 on page
- **WHEN** the homepage DOM is inspected
- **THEN** exactly one `h1` element exists with text "Alamin"

### Requirement: Section headings use H2
Each major content section (Experience, Projects, Skills, Services, Writing, Contact) SHALL use an `<h2>` heading for proper document outline.

#### Scenario: Section H2 hierarchy
- **WHEN** the homepage DOM is inspected
- **THEN** each `<section>` or equivalent landmark has a corresponding `h2` descendant

### Requirement: Image alt text describes project and technology
All project images SHALL have `alt` attributes that include the project name and relevant technologies (not generic "Screenshot of X").

#### Scenario: Descriptive alt on project images
- **WHEN** project image elements are inspected
- **THEN** each `alt` attribute mentions the project name and at least one technology keyword

### Requirement: Screen-reader accessible keyword context
The site SHALL include visually hidden (`sr-only`) text on the homepage providing keyword-rich context about Alamin's expertise for crawlers and assistive technology without altering visible design.

#### Scenario: Hidden expertise summary present
- **WHEN** the homepage HTML is fetched
- **THEN** an element with `sr-only` class contains a summary mentioning "developer Alamin", full-stack engineering, and AI/web development

### Requirement: Semantic landmarks
The page SHALL use semantic HTML landmarks: `<main>` for primary content, `<nav>` for navigation, and `<footer>` for footer content.

#### Scenario: Landmark elements present
- **WHEN** the homepage DOM is inspected
- **THEN** `main`, `nav`, and `footer` elements are present

### Requirement: Internal anchor links crawlable
Navigation links to page sections SHALL use standard `href` anchor links (`#experience`, `#projects`, etc.) that crawlers can follow.

#### Scenario: Nav links use hash anchors
- **WHEN** navigation links are inspected
- **THEN** each link uses an `href` starting with `#` pointing to a section ID
