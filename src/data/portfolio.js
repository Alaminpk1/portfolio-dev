const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alamin.dev";

export const site = {
  name: "Alamin",
  fullName: "Alamin",
  title: "Senior Full-Stack Engineer",
  tagline:
    "Senior Full-Stack Engineer — NestJS · React · Next.js · MongoDB · AWS · AI/ML",
  bio: "I build multi-tenant SaaS platforms that serve tens of thousands of businesses — currently leading architecture of",
  bioLinks: [
    { label: "RepairCMS", href: "https://repaircms.com" },
    { label: "Asklytics", href: "https://asklytics.app" },
  ],
  bioSuffix:
    ", my own AI analytics product, on the side.",
  email: "dev.alamin@gmail.com",
  whatsapp: "https://wa.me/8801782488123?text=Hi%20Alamin",
  github: "https://github.com/Alaminpk1",
  linkedin: "https://www.linkedin.com/in/alamin/",
  twitter: "https://x.com/alamin",
  themeKey: "alamin-theme",
  seo: {
    siteUrl,
    title: "Alamin — Senior Full-Stack Engineer | NestJS · React · AI/ML",
    description:
      "Alamin, senior full-stack engineer building multi-tenant SaaS with NestJS, React, Next.js, MongoDB, AWS, and AI/ML — creator of RepairCMS and Asklytics.",
    keywords: [
      "Alamin",
      "full-stack developer",
      "senior full-stack engineer",
      "NestJS developer",
      "React developer",
      "Next.js developer",
      "SaaS developer",
      "AI/ML integration",
      "MongoDB",
      "AWS",
      "OpenAI",
      "web development",
    ],
    ogImage: "/images/asklytics.png",
    twitterHandle: "@alamin",
    jobTitle: "Senior Full-Stack Engineer",
    knowsAbout: [
      "NestJS",
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "AWS",
      "SaaS development",
      "AI/ML integration",
      "OpenAI",
      "Stripe",
      "Socket.IO",
      "Full-stack web development",
      "Multi-tenant architecture",
      "NLP",
      "RAG",
    ],
  },
};

export const status = {
  role: "Senior Full-Stack Engineer",
  at: "Candy Melon Software GmbH 🇦🇹",
  exp: "5+ years",
  serving: "60,000+ clients in prod",
  building: "asklytics.app (indie)",
  availability: "● open to senior roles + freelance",
};

export const navLinks = [
  { href: "#experience", label: "./experience" },
  { href: "#projects", label: "./projects" },
  { href: "#skills", label: "./skills" },
  { href: "#services", label: "./services" },
  { href: "#writing", label: "./writing" },
  { href: "#contact", label: "./contact" },
];

export const experience = [
  {
    title: "Senior Full-Stack Engineer",
    period: "Feb 2026 – Present",
    company: "Candy Melon Software GmbH",
    location: "Austria · Remote",
    description:
      "Promoted to Senior. Leading full architecture of RepairCMS — multi-tenant enterprise SaaS for repair/service businesses. Architected CRM, POS, inventory, cashbook, form-builder, quotes, and customer portal; integrated Stripe, Lexware, Typeform, and AWS SES/S3/EC2.",
    tags: ["NestJS", "Next.js", "React", "MongoDB", "TypeScript", "AWS", "Stripe"],
    active: true,
  },
  {
    title: "Full-Stack Engineer",
    period: "Mar 2025 – Feb 2026",
    company: "Candy Melon Software GmbH",
    location: "Austria · Remote",
    description:
      "Joined as team lead for RepairCMS; drove feature delivery across frontend and backend, established CI/CD via GitHub Actions, and managed AWS cloud operations.",
    tags: ["NestJS", "React", "GitHub Actions", "AWS"],
  },
  {
    title: "Full-Stack Developer (MERN)",
    period: "Feb 2023 – Mar 2025",
    company: "Al Jaami Technologies",
    location: "UK · Remote",
    description:
      "Led end-to-end delivery of client-facing platforms — application architecture, React frontends, NestJS backends, HubSpot and Userback integrations.",
    tags: ["NestJS", "React", "Next.js", "MongoDB", "HubSpot"],
  },
  {
    title: "MERN Stack Developer",
    period: "Aug 2021 – Oct 2022",
    company: "BDEMR Solutions Corp.",
    location: "Canada · Remote",
    description:
      "Built patient portal and healthcare data dashboards; developed role-based admin systems (admin, user, super-admin).",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "MERN Stack Developer — Intern",
    period: "Jun – Aug 2021",
    company: "Applore Technologies",
    location: "India · Remote",
    description:
      "Built UI for 'Applore Book Your Test' medical testing booking app — responsive layouts, form validation, RESTful API integrations.",
    tags: ["React", "JavaScript", "SCSS", "REST APIs"],
  },
];

export const projects = [
  {
    name: "RepairCMS",
    category: "enterprise saas",
    url: "https://repaircms.com",
    urlLabel: "repaircms.com",
    description:
      "Multi-tenant SaaS for repair & service businesses, architected from the ground up. Stripe subscription billing with webhooks, Lexware accounting sync, transactional email via AWS SES.",
    metrics: [
      { value: "7", label: "core modules" },
      { value: "5+", label: "integrations" },
    ],
    tags: ["NestJS", "Next.js", "MongoDB", "Stripe", "AWS"],
    image: "/images/repaircms.png",
    imageAlt:
      "RepairCMS enterprise SaaS dashboard built with NestJS, Next.js, MongoDB, Stripe, and AWS",
  },
  {
    name: "Asklytics",
    category: "indie product",
    url: "https://asklytics.app",
    urlLabel: "asklytics.app",
    description:
      "AI-driven analytics SaaS I built solo — a natural-language query engine that turns plain-English business questions into instant data insights. No dashboards required.",
    metrics: [
      { value: "NL→SQL", label: "query engine" },
      { value: "solo", label: "design → prod" },
    ],
    tags: ["NestJS", "OpenAI", "Next.js", "MongoDB"],
    image: "/images/asklytics.png",
    imageAlt:
      "Asklytics AI analytics platform with OpenAI natural-language query engine built with NestJS and Next.js",
  },
  {
    name: "LSOE CRM",
    category: "client platform",
    url: "https://app.londonschoolofexcellence.com/",
    urlLabel: "londonschoolofexcellence.com",
    description:
      "Education CRM with a 5-tier role-based access system and real-time collaboration via Socket.IO — multiple consultants editing the same student record with live updates.",
    metrics: [
      { value: "5-tier", label: "RBAC system" },
      { value: "live", label: "Socket.IO collab" },
    ],
    tags: ["NestJS", "Socket.IO", "Next.js", "MongoDB"],
    image: "/images/lsoe-crm.png",
    imageAlt:
      "LSOE CRM education platform with NestJS, Socket.IO real-time collaboration, and Next.js frontend",
  },
  {
    name: "SRH",
    category: "client platform",
    url: "https://www.srhlabsa.com",
    urlLabel: "srhlabsa.com",
    description:
      "Corporate platform for a Saudi engineering & construction consultancy — structural investigations, geotechnical analysis, and environmental assessments.",
    metrics: [
      { value: "60k+", label: "clients served" },
      { value: "70k+", label: "projects delivered" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn UI", "AWS"],
    image: "/images/srh-homepage.png",
    imageAlt:
      "SRH corporate engineering platform built with Next.js, TypeScript, Tailwind CSS, and AWS",
  },
];

export const moreProjects = [
  {
    year: "2025",
    name: "Signaly",
    stack: "Next.js · NestJS · RazorPay",
    url: "https://signaly.io",
  },
  {
    year: "2024",
    name: "Royal Hair Wigs",
    stack: "React · Node · Stripe",
    url: "https://royalhairwigs.com/",
  },
  {
    year: "2023",
    name: "Sakani",
    stack: "MERN · Google Maps",
    url: "https://sakani.tn",
  },
  {
    year: "2022",
    name: "Dreamland",
    stack: "MERN · Stripe · Socket.io",
    url: "https://dreamland-bd.com/",
  },
];

export const skills = [
  {
    group: "frontend/",
    items:
      "React (expert) · Next.js · Redux Toolkit · TanStack Query · Tailwind · Shadcn UI · Jest/RTL",
  },
  {
    group: "backend/",
    items:
      "NestJS (expert) · Node/Express (expert) · Socket.IO · class-validator · REST & webhooks",
  },
  {
    group: "data+cloud/",
    items:
      "MongoDB/Mongoose (expert) · Firebase · AWS EC2/S3/SES · Nginx · PM2 · GitHub Actions CI/CD",
  },
  {
    group: "payments/",
    items: "Stripe · RazorPay · SSLCOMMERZ · NOWPayments · crypto gateways",
  },
  {
    group: "ai-ml/",
    items:
      "OpenAI integration · Python (FastAPI/Flask) · TensorFlow · PyTorch · NLP · RAG (exploring)",
  },
  {
    group: "integrations/",
    items:
      "Typeform · Lexware · HubSpot · Cloudinary · Telegram Bot API · Sender",
  },
];

export const services = [
  {
    id: "01 · saas",
    title: "SaaS Application Development",
    description:
      "Multi-tenant architecture, auth flows & role-based access, Stripe subscription billing with webhooks, CI/CD to AWS.",
    tags: ["NestJS", "Next.js", "MongoDB", "Stripe", "AWS"],
  },
  {
    id: "02 · ai-ml",
    title: "AI / ML Integration",
    description:
      "ML microservices with FastAPI/Flask, NLP pipelines, predictive analytics, and RAG-powered search — wired into NestJS/React apps.",
    tags: ["Python", "OpenAI", "NLP", "RAG", "FastAPI"],
  },
  {
    id: "03 · perf",
    title: "Performance Engineering",
    description:
      "Tokenized search over 20M+ records with sub-second response, MongoDB aggregation tuning, Redis caching, load balancing.",
    tags: ["MongoDB", "Redis", "Nginx", "PM2"],
  },
];

export const writing = [
  {
    year: "2024",
    title:
      "Comprehensive Guide to Setting Up a CI/CD Pipeline for a MERN Stack Application Using GitHub Actions and VPS",
    url: "https://medium.com/",
    source: "medium ↗",
  },
  {
    year: "2024",
    title:
      "Setting Up a VPS for MERN Stack Application and Installing SSL Certificate",
    url: "https://medium.com/",
    source: "medium ↗",
  },
];
