const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alamin.dev";

export const site = {
  name: "Alamin",
  fullName: "Alamin Pramanik",
  title: "Frontend Developer",
  tagline:
    "Frontend Developer — React · Next.js · TypeScript · Redux Toolkit · Tailwind CSS",
  bio: "I build fast, accessible frontends for multi-tenant SaaS — currently owning the frontend of",
  bioLinks: [{ label: "RepairCMS", href: "https://repaircms.com" }],
  bioSuffix: ", serving 1,100+ repair and service businesses in Austria.",
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
  exp: "3+ years",
  serving: "1,100+ businesses in prod",
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
    title: "Frontend Developer — Intern",
    period: "Jan – Mar 2023",
    company: "Al Jaami Technologies",
    location: "UK · Remote",
    description:
      "Supported the frontend team — built UI components, fixed bugs, and ramped up on the React/Next.js codebase before converting to the full-time Frontend Developer role.",
    tags: ["React", "Next.js", "JavaScript"],
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
    name: "RepairCMS B2B",
    category: "business console",
    url: "https://b2b.repaircms.com",
    urlLabel: "b2b.repaircms.com",
    description:
      "The console repair & service businesses run day-to-day — schema-driven intake forms with device pattern-lock capture, barcode/QR labeling, PDF quotes and invoices, SEPA payment QR codes, and a KPI dashboard, in four languages.",
    metrics: [
      { value: "4", label: "languages (i18n)" },
      { value: "PDF/QR", label: "quotes & barcodes" },
    ],
    tags: ["React", "Redux Toolkit", "i18next", "Chart.js"],
  },
  {
    name: "RepairCMS Customer Portal",
    category: "customer portal",
    url: "https://tracking.repaircms.com",
    urlLabel: "tracking.repaircms.com",
    description:
      "The self-service portal RepairCMS's end customers use to track repair status in real time, book appointments, and pay invoices via SEPA QR.",
    metrics: [
      { value: "real-time", label: "status updates" },
      { value: "SEPA QR", label: "invoice payments" },
    ],
    tags: ["Next.js", "Redux Toolkit", "next-intl", "Socket.IO"],
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
    name: "LSOE CRM",
    stack: "React · Next.js · Socket.IO",
    url: "https://app.londonschoolofexcellence.com/",
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
