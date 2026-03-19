# CLAUDE.md — Portfolio Repository Guide

This file tells Claude Code exactly how to work in this repo.
Read this before making any changes.

---

## ⚡ Two Pipelines — Pick One

### Pipeline A — GitHub Mobile (no laptop, no Claude Code)
Use this when Abhishek is on the go and just wants to post an idea fast.

```
GitHub mobile app → Actions → "✍️ New Blog Post" → fill form → Run
→ post is live in ~60 seconds, no review step needed
```

The `new-blog-post.yml` workflow writes the MDX file, commits directly to `main`,
Vercel auto-deploys. Done.

### Pipeline B — Claude Code → PR (reviewed before publishing)
Use this for longer, more polished posts or any code/design changes.
Claude Code always works on a branch and opens a PR. Abhishek reviews the diff
and Vercel preview on GitHub mobile, then merges.

```
Claude Code → branch → commit → push → open PR
→ Abhishek merges on GitHub mobile → Vercel deploys
```

**Rule for Pipeline B: never push directly to `main`.**

---

## The Exact Workflow (follow this every time)

### Step 1 — Pull latest main
```bash
git checkout main
git pull origin main
```

### Step 2 — Create a branch
Branch naming:
```
post/slug-of-blog-post       # new blog post
update/what-changed          # content update
feat/feature-name            # new feature or section
fix/what-was-broken          # bug fix
```

```bash
git checkout -b post/my-post-title
```

### Step 3 — Make the change
Write the blog post, update the data, fix the bug — whatever was asked.

### Step 4 — Commit
```bash
git add .
git commit -m "post: My Post Title"
```

Commit conventions:
```
post: title      → new blog post
update: what     → content/data update
feat: what       → new feature
fix: what        → bug fix
style: what      → design change
```

### Step 5 — Push and open PR
```bash
git push origin HEAD

gh pr create \
  --title "post: My Post Title" \
  --body "New blog post: [brief description of what the post covers]" \
  --base main
```

GitHub CLI (`gh`) is available in Claude Code. Use it to open the PR in one command.
Abhishek gets a notification on his phone, reviews the diff, sees the Vercel preview URL, and merges.

---

## Writing a New Blog Post

When Abhishek says "write a post about X":

1. Follow the 5-step workflow above
2. Create the MDX file:

```
content/blog/your-slug.mdx
```

Frontmatter format:
```mdx
---
title: "Post Title"
excerpt: "One-paragraph summary shown in listings and SEO."
date: "YYYY-MM-DD"
tags: ["AI", "NestJS"]
draft: false
---

## Your content here
```

Rules:
- Filename = URL slug (`my-post.mdx` → `/blog/my-post`)
- `draft: true` shows "Coming soon" badge but keeps the post visible
- Tags should be short: `["AI", "LLM", "AWS"]`
- Write real content — Abhishek has 11 years of experience, the posts should reflect that depth

### What makes a good post for this portfolio

- First-person, technical, specific — not generic overviews
- Code samples where relevant
- "Here's the problem I had, here's how I solved it" structure
- Concrete details: tech versions, tradeoffs, what failed first

---

## Updating Projects or Personal Info

Edit `data/index.ts` — this is the single source of truth for:
- `personal` — name, bio, email, GitHub, LinkedIn
- `skills` — grouped skill categories
- `featuredProjects` — case study cards (need a `slug`)
- `otherProjects` — secondary project grid
- `aiToolsIdeas` — ideas on /tools page

After editing, open a PR with branch `update/what-changed`.

---

## Key Files Map

| What | Where |
|------|-------|
| Personal info, projects, skills, AI tools | `data/index.ts` |
| Blog posts | `content/blog/*.mdx` |
| Homepage | `app/page.tsx` |
| Blog listing | `app/blog/page.tsx` |
| Blog post page | `app/blog/[slug]/page.tsx` |
| Project case study | `app/projects/[slug]/page.tsx` |
| MDX file reader | `lib/blog.ts` |
| UI components | `components/` |
| Global styles + design tokens | `app/globals.css` |
| SEO metadata | `app/layout.tsx` |

---

## Design System (don't break these)

Colors:
- Accent: `indigo-600` / `#4F46E5`
- Text: `slate-900`
- Body text: `slate-600`
- Background: `white`

Tailwind utility classes defined in `globals.css`:
```
.container-main     max-width container with padding
.section-padding    vertical section spacing
.heading-xl         large headings (hero, page titles)
.heading-lg         section headings
.heading-md         card titles
.text-body          body copy style
.btn-primary        dark filled button
.btn-secondary      bordered button
.card               bordered card container
.tag                grey pill tag
.tag-accent         indigo pill tag
```

---

## Dev Commands

```bash
npm run dev          # localhost:3000
npm run build        # catch errors before pushing
npm run lint         # ESLint
npm run new-post     # scaffold a blank post (optional shortcut)
```

---

## Do Not

- Push directly to `main` — always use a PR
- Change `next.config.js` or `vercel.json` without asking
- Rename existing routes (breaks SEO and inbound links)
- Change `metadataBase` URL without updating `sitemap.ts` too
- Commit `.env` files or API keys
- Use `git push --force` on `main`
