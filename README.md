# Abhishek Kumar — Portfolio

Personal portfolio built with Next.js 14, Tailwind CSS, and TypeScript.
Blog posts are MDX files. CI via GitHub Actions. Auto-deploys to Vercel on merge.

---

## The Mobile → Deployed Pipeline

This is the main workflow. No laptop needed after initial setup.

**On your phone — open Claude Code and say:**
```
Write a post about how I built JWT refresh token rotation in NestJS. Open a PR.
```

Claude Code will:
1. Create a branch (`post/jwt-refresh-token-rotation`)
2. Write the MDX file in `content/blog/`
3. Commit and push
4. Open a Pull Request on GitHub

**Then on GitHub mobile:**
- You get a notification
- Open the PR — see the diff and the Vercel preview link
- If it looks good, tap **Merge**
- Vercel deploys automatically — **live in ~30 seconds**

That's the entire pipeline. Idea → deployed, from your phone.

### What to say to Claude Code

```
Write a blog post about Kafka consumer groups and open a PR.

Add a new project "Security Dashboard" — NestJS, React, WAF. Open a PR.

Update my skills to include AWS Bedrock. PR please.
```

Claude reads `CLAUDE.md` automatically and knows the branch/commit/PR format.

---

## One-Time Setup (do this once from a laptop)

### 1. Create GitHub repo

```bash
git init
git add .
git commit -m "feat: initial portfolio"
```

Go to [github.com/new](https://github.com/new), create a repo called `portfolio`, then:

```bash
git remote add origin https://github.com/abhi1272/portfolio.git
git branch -M main
git push -u origin main
```

### 2. Connect Vercel

1. Go to [vercel.com](https://vercel.com) → sign in with GitHub
2. **Add New Project** → import `portfolio`
3. Leave all settings default — Vercel detects Next.js automatically
4. Click **Deploy**

Done. From now on: merge a PR → Vercel auto-deploys in ~30 seconds.

**Enable Vercel preview deployments** (optional but great for mobile review):
In Vercel → Settings → Git → enable "Preview Deployments".
Every PR gets its own preview URL — you can see exactly how the post looks before merging.

### 3. Set your domain (optional)

Vercel project → Settings → Domains → add your domain.
Then update `metadataBase` in `app/layout.tsx` and the base URL in `app/sitemap.ts`.

---

## Quick Start (local dev)

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual post page
│   ├── projects/
│   │   ├── page.tsx              # All projects
│   │   └── [slug]/page.tsx       # Case study page
│   ├── tools/page.tsx            # AI Tools Ideas
│   ├── layout.tsx                # Root layout + SEO metadata
│   ├── sitemap.ts                # Auto-generated sitemap
│   └── robots.ts                 # robots.txt
│
├── components/                   # UI components
│
├── content/
│   └── blog/                     # ← Blog posts live here (MDX files)
│       └── *.mdx
│
├── data/index.ts                  # ← All other content: projects, skills, AI tools
├── lib/blog.ts                    # Reads MDX files from content/blog/
├── scripts/new-post.js            # Scaffold a new post: npm run new-post "Title"
├── .github/
│   ├── workflows/ci.yml           # GitHub Actions: lint + build on every PR
│   └── pull_request_template.md   # PR checklist auto-filled on every PR
└── CLAUDE.md                      # Instructions for Claude Code (read this)
```

---

## Commit & Branch Conventions

```
Branches:
  post/slug-of-post        new blog post
  update/what-changed      content update
  feat/feature-name        new feature
  fix/what-was-broken      bug fix

Commits:
  post: title              new blog post
  update: description      content/data update
  feat: description        new feature
  fix: description         bug fix
  style: description       design change
```

---

## Before Going Live Checklist

- [ ] Add profile photo as `public/avatar.jpg`
- [ ] Add OG image as `public/og-image.png` (1200×630px)
- [ ] Update `metadataBase` in `app/layout.tsx` with your real domain
- [ ] Update base URL in `app/sitemap.ts`
- [ ] Set `draft: false` on posts ready to publish
- [ ] Run `npm run build` locally — confirm no errors
