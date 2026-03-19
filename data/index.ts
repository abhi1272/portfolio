export const personal = {
  name: "Abhishek Kumar",
  tagline: "Full-Stack & AI Engineer",
  headline: "I build end-to-end systems that ship — fast, scalable, and built to last.",
  about: `I'm Abhishek Kumar — a Full-Stack & AI Engineer with 11 years of experience designing, developing, and shipping production-grade systems for businesses that demand quality at every layer.

I don't define myself by the work I've done. I define myself by the work I want to do next. I prefer to keep learning, keep challenging myself, and invest my energy in problems that actually matter.

Whether it's architecting cloud infrastructure across AWS and Azure, integrating LLMs into real-world products, or leading engineering teams to deliver complex platforms — I bring the full stack to every problem. I work to make a better web: fast, accessible, frustration-free, and built to last.

When I'm not pushing code, you'll find me somewhere around Pune — on a trail.`,
  email: "abhishek.omex@gmail.com",
  github: "https://github.com/abhi1272",
  linkedin: "https://www.linkedin.com/in/abhishek-kumar-b19a4ba1/",
  location: "Pune, India",
  available: true,
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "REST APIs", "Microservices", "JWT Auth", "Kafka"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose", "Redis", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (ECS, EC2, S3, SQS, CloudFront)", "Azure", "Terraform", "Docker", "Nginx", "GitHub Actions", "CI/CD"],
  },
  {
    category: "AI & LLM",
    items: ["LiteLLM", "Langfuse", "OpenAI API", "Gemini", "LangChain", "Guardrails", "Prompt Engineering"],
  },
  {
    category: "Security & Tooling",
    items: ["WAF", "Security Analysis", "Git", "GitHub", "GitLab", "Agile/Scrum"],
  },
];

export const featuredProjects = [
  {
    slug: "pocketkhata",
    title: "PocketKhata",
    subtitle: "Accounting Software for Wholesale Businesses",
    description:
      "A full-featured accounting platform built for wholesale merchants. PocketKhata lets businesses track bills and payments for both customers and their own company accounts, with rich analytics and account health dashboards — replacing manual ledgers with a clean, reliable digital workflow.",
    longDescription: `PocketKhata was built to solve a real pain point: wholesale businesses managing dozens of customer accounts across physical ledgers, prone to errors and impossible to audit.

The platform enables merchants to add incoming and outgoing bills, record payments against invoices, track outstanding balances per customer, and view aggregated stats across their entire book of business. Built with a focus on speed and reliability — because for a business owner, slow software costs money.`,
    tech: ["React", "NestJS", "MongoDB", "AWS S3", "AWS ECS", "CloudFront"],
    role: "Full-Stack Engineer & Cloud Architect",
    highlights: [
      "End-to-end bill & payment tracking per customer and company",
      "Real-time account stats and balance dashboards",
      "Deployed on AWS ECS with CloudFront CDN for performance",
      "Designed for non-technical users — minimal learning curve",
    ],
    category: "Product",
    year: "2023",
  },
  {
    slug: "llm-gateway",
    title: "LLM Gateway",
    subtitle: "Production AI Infrastructure with Observability & Guardrails",
    description:
      "A self-hosted LLM gateway that routes requests across multiple AI providers, enforces content guardrails, tracks cost and quality via Langfuse, and gives teams a single control plane for all AI interactions — built for production, not experimentation.",
    longDescription: `Built to solve the chaos of working with multiple LLM providers in production. The gateway provides a unified API surface, multi-model routing (GPT-4, Claude, Gemini), and full observability into every prompt and completion.

Key features include content moderation pipelines, input/output guardrails, per-model cost tracking, latency dashboards, and experiment tooling to A/B test model outputs. Langfuse integration gives full trace-level visibility into every LLM call.`,
    tech: ["LiteLLM", "Langfuse", "OpenAI API", "Gemini", "NestJS", "Docker", "AWS"],
    role: "AI Infrastructure Engineer",
    highlights: [
      "Multi-model routing: OpenAI, Gemini, Claude via LiteLLM",
      "Full observability with Langfuse — traces, cost, latency",
      "Input/output guardrails and content moderation pipelines",
      "Model comparison tooling for quality evaluation",
      "Centralized prompt management and versioning",
    ],
    category: "AI Infrastructure",
    year: "2024",
  },
];

export const otherProjects = [
  {
    title: "E-Pharmacy Platform",
    description:
      "E-commerce pharmacy with cart management, user accounts, order history, and ML-powered delivery time prediction.",
    tech: ["React", "NestJS", "MongoDB", "Machine Learning"],
    category: "E-commerce",
    year: "2022",
  },
  {
    title: "OLX-Style Marketplace",
    description:
      "B2C/C2C marketplace with dynamic category forms, bidding system with time extensions, NLP-powered search, and AI price prediction.",
    tech: ["React", "NestJS", "MongoDB", "LangChain", "Kafka"],
    category: "Marketplace",
    year: "2023",
  },
  {
    title: "Textile Enquiry Portal",
    description:
      "Industry-specific B2B enquiry management system for the textile sector, streamlining supplier-buyer communication and quote workflows.",
    tech: ["React", "NestJS", "MongoDB"],
    category: "B2B SaaS",
    year: "2022",
  },
  {
    title: "ESOP & Rewards System",
    description:
      "Employee stock ownership and rewards management platform with approval workflows, vesting schedules, and employee dashboards.",
    tech: ["React", "NestJS", "MongoDB", "AWS"],
    category: "HR Tech",
    year: "2023",
  },
  {
    title: "Real Estate Listings",
    description:
      "Property listing platform with advanced search, filters, dynamic category-based forms, and location-aware browsing.",
    tech: ["React", "NestJS", "MongoDB", "AWS S3"],
    category: "PropTech",
    year: "2022",
  },
  {
    title: "Cloud Infra & DevOps",
    description:
      "End-to-end infrastructure design across AWS and Azure using Terraform. Includes WAF, security analysis, CI/CD pipelines, and GitHub Actions automation.",
    tech: ["AWS", "Azure", "Terraform", "GitHub Actions", "WAF", "Nginx"],
    category: "Infrastructure",
    year: "2023–24",
  },
];

export const blogPosts = [
  {
    slug: "building-production-llm-gateway",
    title: "Building a Production LLM Gateway: Routing, Guardrails & Observability",
    excerpt:
      "How I built a self-hosted AI gateway that routes across GPT-4, Claude, and Gemini — with full cost tracking, content moderation, and trace-level observability using LiteLLM and Langfuse.",
    date: "2024-11-10",
    readTime: "8 min read",
    tags: ["AI", "LLM", "LiteLLM", "Langfuse", "Infrastructure"],
    draft: true,
  },
  {
    slug: "natural-language-to-mongodb-queries",
    title: "Natural Language to MongoDB Queries: How I Built It",
    excerpt:
      "A deep dive into building an NLP-to-query pipeline using LangChain and Gemini that lets non-technical users query a MongoDB database in plain English.",
    date: "2024-09-22",
    readTime: "6 min read",
    tags: ["AI", "MongoDB", "LangChain", "NLP", "Backend"],
    draft: true,
  },
  {
    slug: "litellm-langfuse-ai-cost-quality",
    title: "LiteLLM + Langfuse: My Stack for AI Cost & Quality Control",
    excerpt:
      "Running LLMs in production gets expensive fast. Here's the observability and routing stack I use to monitor costs, catch quality regressions, and keep AI features reliable.",
    date: "2024-08-05",
    readTime: "5 min read",
    tags: ["AI", "LiteLLM", "Langfuse", "DevOps", "Cost Optimization"],
    draft: true,
  },
];

export const aiToolsIdeas = [
  {
    title: "LedgerAI",
    tagline: "Ask your accounts anything.",
    description:
      "A natural language layer on top of accounting data. Business owners type questions like 'Who owes me the most this month?' and get instant answers — no dashboards needed.",
    tags: ["LLM", "Finance", "NLP"],
    status: "Concept",
  },
  {
    title: "DocGuard",
    tagline: "Moderation infrastructure for AI-generated content.",
    description:
      "A plug-and-play content moderation API for teams building LLM-powered apps. Combines rule-based guardrails with model-based classification to catch harmful outputs before they reach users.",
    tags: ["AI Safety", "Guardrails", "API"],
    status: "In Exploration",
  },
  {
    title: "SheetMind",
    tagline: "Query your Excel files in plain English.",
    description:
      "Upload a spreadsheet, ask a question, get an answer. Built for non-technical analysts who live in Excel but want the power of SQL-style queries without writing a single formula.",
    tags: ["LLM", "Excel", "Data", "LangChain"],
    status: "Concept",
  },
];
