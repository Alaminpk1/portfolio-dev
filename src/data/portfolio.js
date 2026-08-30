const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alamin.dev";

export const site = {
  name: "Alamin",
  fullName: "Alamin Pramanik",
  title: "Frontend Developer",
  tagline:
    "Frontend Developer — React · Next.js · TypeScript · Redux Toolkit · Tailwind CSS",
  bio: "I build fast, accessible frontends for multi-tenant SaaS — currently owning the frontend of",
  bioLinks: [
    { label: "RepairCMS", href: "https://repaircms.com" },
    { label: "Asklytics", href: "https://asklytics.app" },
  ],
  bioSuffix: ", my AI analytics side project, on the side.",
  email: "dev.alaminpk@gmail.com",
  whatsapp: "https://wa.me/8801782488123?text=Hi%20Alamin",
  github: "https://github.com/Alaminpk1",
  linkedin: "https://www.linkedin.com/in/devalaminpramanik/",
  twitter: "https://x.com/alamin",
  themeKey: "alamin-theme",
  seo: {
    siteUrl,
    title: "Alamin Pramanik — Frontend Developer | React · Next.js · TypeScript",
    description:
      "Alamin Pramanik, frontend developer building React and Next.js interfaces for multi-tenant SaaS — design systems, performance, and accessibility at RepairCMS and beyond.",
    keywords: [
      "Alamin Pramanik",
      "frontend developer",
      "React developer",
      "Next.js developer",
      "TypeScript developer",
      "UI engineer",
      "design systems",
      "web performance",
      "Redux Toolkit",
      "Tailwind CSS",
      "Core Web Vitals",
      "SEO",
    ],
    ogImage: "/images/repaircms.png",
    twitterHandle: "@alamin",
    jobTitle: "Frontend Developer",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "Design Systems",
      "UI/UX Design",
      "Web Accessibility (WCAG)",
      "Core Web Vitals",
      "Component Architecture",
      "Performance Optimization",
      "Node.js",
      "NestJS",
      "MongoDB",
      "AWS",
    ],
  },
};

export const status = {
  role: "Frontend Developer",
  at: "Candy Melon Software GmbH 🇦🇹",
  exp: "5+ years",
  serving: "1,100+ businesses in prod",
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
    title: "Frontend Developer",
    period: "Mar 2025 – Present",
    company: "Candy Melon Software GmbH",
    location: "Austria · Remote",
    description:
      "Own the RepairCMS frontend, serving 1,100+ repair and service businesses. Cut perceived load time 35% through optimization, architected an internationalization layer across four languages, built and maintain the design system, shipped a schema-driven form builder, and redesigned the KPI dashboard.",
    tags: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    active: true,
  },
  {
    title: "Frontend Developer",
    period: "Mar 2023 – Mar 2025",
    company: "Al Jaami Technologies",
    location: "UK · Remote",
    description:
      "Delivered three client-facing platforms, promoted twice in two years. Built a virtualized search experience over 20M+ records, an SEO-focused Next.js marketing site, and PortfolioPro (a project showcase app); optimized 100+ images and integrated HubSpot analytics and Socket.IO real-time collaboration.",
    tags: ["React", "Next.js", "TypeScript", "Redux", "Socket.IO"],
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
      "Multi-tenant SaaS for repair & service businesses. I own the frontend — design system, four-language i18n layer, a schema-driven form builder, and a KPI dashboard redesign, serving 1,100+ businesses in production.",
    metrics: [
      { value: "1,100+", label: "businesses served" },
      { value: "35%", label: "faster load time" },
    ],
    tags: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    image: "/images/repaircms.png",
    imageAlt:
      "RepairCMS enterprise SaaS dashboard frontend built with React, Next.js, TypeScript, and Redux Toolkit",
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
      "Education CRM frontend with a 5-tier role-based access system and real-time collaboration via Socket.IO — multiple consultants editing the same student record with live updates.",
    metrics: [
      { value: "5-tier", label: "RBAC system" },
      { value: "live", label: "Socket.IO collab" },
    ],
    tags: ["React", "Next.js", "Socket.IO", "TypeScript"],
    image: "/images/lsoe-crm.png",
    imageAlt:
      "LSOE CRM education platform frontend with Socket.IO real-time collaboration built with React and Next.js",
  },
  {
    name: "SRH",
    category: "client platform",
    url: "https://www.srhlabsa.com",
    urlLabel: "srhlabsa.com",
    description:
      "Arabic-first, RTL bilingual (AR/EN) platform for a Saudi geotechnical and materials testing consultancy — 14 service pages, blog, careers, and a consultation flow. Owned technical SEO and Core Web Vitals.",
    metrics: [
      { value: "14", label: "service pages" },
      { value: "AR/EN", label: "RTL bilingual" },
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    image: "/images/srh-homepage.png",
    imageAlt:
      "SRH engineering consultancy platform, Arabic-first RTL bilingual site built with Next.js, React, and TypeScript",
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
      "React · Next.js (SSR/SSG/App Router) · TypeScript · Redux Toolkit & RTK Query · React Hook Form · Tailwind CSS · SCSS · Framer Motion",
  },
  {
    group: "design/",
    items:
      "Figma · UI/UX Design · Design Systems · Responsive & Mobile-First Layout · Data Visualization",
  },
  {
    group: "quality/",
    items:
      "Component Architecture · Web Accessibility (WCAG) · Core Web Vitals · Performance Optimization · Jest/RTL",
  },
  {
    group: "integrations/",
    items: "REST APIs · WebSockets/Socket.IO · JWT Authentication · Stripe",
  },
  {
    group: "backend+cloud/",
    items:
      "Node.js · Express · NestJS · MongoDB/Mongoose · AWS EC2/S3/SES · Nginx · GitHub Actions CI/CD · Linux",
  },
];

export const services = [
  {
    id: "01 · frontend",
    title: "Frontend Application Development",
    description:
      "React & Next.js apps — SSR/SSG/App Router, design systems, reusable component architecture, state management with Redux Toolkit.",
    tags: ["React", "Next.js", "TypeScript", "Redux Toolkit"],
  },
  {
    id: "02 · design-systems",
    title: "Design Systems & UI Engineering",
    description:
      "Figma-to-code component libraries, responsive & mobile-first layouts, accessible interfaces built to scale across products.",
    tags: ["Figma", "Design Systems", "Tailwind CSS", "WCAG"],
  },
  {
    id: "03 · performance-seo",
    title: "Performance & SEO Engineering",
    description:
      "Core Web Vitals tuning, image/bundle optimization, and technical SEO — from 100+ image optimizations to virtualized search over 20M+ records.",
    tags: ["Core Web Vitals", "SEO", "next/image", "Performance"],
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
