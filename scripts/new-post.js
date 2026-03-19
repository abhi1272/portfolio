#!/usr/bin/env node
/**
 * Usage: npm run new-post "Your Post Title Here"
 * Creates a new MDX blog post in content/blog/ with frontmatter pre-filled.
 */

const fs = require("fs");
const path = require("path");

const title = process.argv[2];

if (!title) {
  console.error("❌  Please provide a post title.");
  console.error('   Usage: npm run new-post "Your Post Title"');
  process.exit(1);
}

// Generate slug from title
const slug = title
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");

const today = new Date().toISOString().split("T")[0];

const template = `---
title: "${title}"
excerpt: "Write a one-paragraph summary of this post here."
date: "${today}"
tags: ["AI", "Engineering"]
draft: false
---

## Introduction

Start your post here. Write in plain Markdown — headings, code blocks, lists all work.

## Section 2

\`\`\`typescript
// Code blocks are supported
const example = "hello world";
console.log(example);
\`\`\`

## Conclusion

Wrap up your post here.

---

*Found this useful? [Get in touch](mailto:abhishek.omex@gmail.com)*
`;

const outputDir = path.join(__dirname, "../content/blog");
const outputPath = path.join(outputDir, `${slug}.mdx`);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

if (fs.existsSync(outputPath)) {
  console.error(`❌  File already exists: content/blog/${slug}.mdx`);
  process.exit(1);
}

fs.writeFileSync(outputPath, template, "utf-8");

console.log(`\n✅  New post created!\n`);
console.log(`   📄  content/blog/${slug}.mdx`);
console.log(`   🔗  Will be live at: /blog/${slug}`);
console.log(`\n   Next steps:`);
console.log(`   1. Open the file and write your content`);
console.log(`   2. Set draft: false when ready to publish`);
console.log(`   3. git add . && git commit -m "post: ${title}"`);
console.log(`   4. git push — Vercel auto-deploys in ~30 seconds\n`);
