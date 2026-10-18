export const profile = {
  name: "Hooman Ramin",
  role: "Senior Frontend Engineer",
  stack: ["React", "Next.js", "TypeScript"],
  summary:
    "7+ years building scalable React and Next.js applications across SaaS, social commerce, 3D visualization, logistics and analytics platforms. I focus on frontend architecture, performance, type-safe systems and reusable UI foundations — turning complex product workflows into reliable, maintainable interfaces.",
  links: {
    email: "hoomanramin@gmail.com",
    linkedin: "https://linkedin.com/in/hoomanramin",
    github: "https://github.com/hoomanramin",
  },
};

export const stats = [
  { value: "7+", label: "years shipping frontend" },
  { value: "+35%", label: "avg FPS on complex 3D assets" },
  { value: "2,000+", label: "active enterprise users served" },
  { value: "+41%", label: "partner adoption on logistics panels" },
];

export type Job = {
  company: string;
  url: string;
  location: string;
  type: string;
  title: string;
  period: string;
  blurb: string;
  points: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    company: "Nodey",
    url: "https://nodey.nz/",
    location: "Auckland, New Zealand",
    type: "Contract",
    title: "Senior Software Engineer",
    period: "Jan 2026 — Jul 2026",
    blurb:
      "AI-powered structural engineering software for residential and light-commercial design automation.",
    points: [
      "Architected a scalable Next.js frontend for complex engineering workflows.",
      "Built real-time collaborative drawing and markup tools over SignalR, letting multiple users work on plans at once.",
      "Implemented interactive PDF/CAD visualization for structural analysis and project collaboration.",
      "Optimized rendering for large datasets and real-time calculation and reporting flows.",
    ],
    tags: ["Next.js", "TypeScript", "Zustand", "React Query", "SignalR"],
  },
  {
    company: "Apollo",
    url: "https://apollord.com/",
    location: "Vancouver, Canada",
    type: "Remote",
    title: "Senior Frontend Engineer",
    period: "Mar 2025 — Jan 2026",
    blurb:
      "Immersive, interactive 3D visualization web apps for real estate developers.",
    points: [
      "Built high-fidelity web apps enabling real-time 3D navigation across property models.",
      "Shipped performance-optimized rendering pipelines, improving average FPS by 35%.",
      "Designed and deployed a PWA admin and client portal with offline reliability.",
      "Kept 3D environments and UI consistent alongside Unreal Engine teams.",
    ],
    tags: ["React", "Vite", "TypeScript", "Zustand", "PWA"],
  },
  {
    company: "Abroadin",
    url: "https://abroadin.com/",
    location: "Vancouver, Canada",
    type: "Remote",
    title: "Senior Frontend Engineer",
    period: "Feb 2023 — Mar 2025",
    blurb: "AI-powered study abroad platform for students and consultants.",
    points: [
      "Migrated the platform to Next.js 14 and the App Router with React Query caching.",
      "Designed secure chat and file collaboration modules for counselor–student communication.",
      "Established a reusable Material UI design system across dashboards.",
      "Maintained quality with unit, integration and E2E tests in Jest and Playwright.",
    ],
    tags: ["Next.js 14", "React Query", "MUI", "Jest", "Playwright"],
  },
  {
    company: "Analyxa (7Sang)",
    url: "https://7sangteam.ir/",
    location: "Tehran, Iran",
    type: "Hybrid",
    title: "Frontend Developer",
    period: "Oct 2021 — Jan 2023",
    blurb:
      "HR analytics tools that help enterprises make data-driven workforce decisions.",
    points: [
      "Led the multi-language architecture and responsive redesign, lifting engagement 25%.",
      "Introduced Redux Toolkit for state management, cutting load times 5%.",
      "Delivered B2B dashboards for 2,000+ active enterprise users.",
    ],
    tags: ["React", "Redux Toolkit", "i18n"],
  },
  {
    company: "Ronad",
    url: "https://ronad.co/",
    location: "Tehran, Iran",
    type: "On-site",
    title: "Frontend Developer",
    period: "Sep 2019 — Sep 2021",
    blurb:
      "Logistics and warehouse management system connecting suppliers, drivers and partners.",
    points: [
      "Built multi-panel logistics and warehouse systems in TypeScript, boosting partner adoption 41%.",
      "Championed responsive UI patterns and accessibility compliance.",
      "Maintained Git-based CI/CD workflows with a peer review culture.",
    ],
    tags: ["TypeScript", "React", "CI/CD", "a11y"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript (ES2020+)", "React Query", "Zustand", "Tailwind", "MUI", "SSR / SSG"],
  },
  { group: "Performance", items: ["Core Web Vitals", "Lighthouse", "DevTools", "Caching strategies"] },
  { group: "Testing", items: ["Jest", "React Testing Library", "Cypress", "Playwright"] },
  { group: "DevOps", items: ["Git", "CI/CD", "Docker basics", "Agile / Scrum"] },
  { group: "Other", items: ["REST APIs", "PWA", "Accessibility (WCAG)", "Data structures"] },
];

export const certifications = [
  { name: "JavaScript — The Complete Guide", issuer: "Udemy", year: "2023" },
  { name: "Next.js Dev to Deployment", issuer: "Udemy", year: "2022" },
  { name: "React Front to Back", issuer: "Udemy", year: "2021" },
  { name: "React Certificate", issuer: "University of Tehran", year: "2019" },
  { name: "ACCP Certificate", issuer: "Aptech Computer Education", year: "2008" },
];
