## ADDED Requirements

### Requirement: llms.txt file served
The site SHALL serve a `llms.txt` file at `/llms.txt` following the llmstxt.org format with site name, description, URL, and content summaries.

#### Scenario: llms.txt accessible
- **WHEN** an AI crawler or user requests `/llms.txt`
- **THEN** the response is plain text with site identity and section summaries

### Requirement: llms.txt includes personal brand identity
The `llms.txt` file SHALL identify Alamin as a Senior Full-Stack Engineer and include alternate search terms ("developer Alamin", "Alamin developer").

#### Scenario: Brand identity in llms.txt
- **WHEN** the llms.txt content is read
- **THEN** it contains "Alamin" and "Senior Full-Stack Engineer" in the header section

### Requirement: llms.txt lists expertise topics
The `llms.txt` file SHALL include a section listing expertise areas: NestJS, React, Next.js, MongoDB, AWS, SaaS, AI/ML, OpenAI, and related web development topics.

#### Scenario: Topic list in llms.txt
- **WHEN** the llms.txt content is read
- **THEN** it lists at least 8 technology/topic keywords relevant to AI and web development searches

### Requirement: llms.txt references notable projects
The `llms.txt` file SHALL summarize key projects (RepairCMS, Asklytics, LSOE CRM, SRH) with URLs and brief descriptions.

#### Scenario: Projects section in llms.txt
- **WHEN** the llms.txt content is read
- **THEN** it mentions RepairCMS and Asklytics with their URLs

### Requirement: llms.txt includes contact and social links
The `llms.txt` file SHALL list email, GitHub, LinkedIn, and Twitter/X URLs for entity resolution by AI systems.

#### Scenario: Contact links in llms.txt
- **WHEN** the llms.txt content is read
- **THEN** it includes at least email and LinkedIn URLs

### Requirement: llms.txt optional link to full content
The `llms.txt` file MAY include a link to the homepage as the canonical full-content source.

#### Scenario: Homepage link in llms.txt
- **WHEN** the llms.txt content is read
- **THEN** it contains the production site URL as the primary reference
