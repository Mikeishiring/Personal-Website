# Personal Website

A clean, minimalist personal website and blog built with Astro, featuring a dark theme and topic-based content organization.

## ✨ Features

- **Dark Theme** - Sleek dark design with subtle opacity-based color system
- **Topic-Based Blog** - Organize posts by topics (Talent, Product, Writing, Systems, Crypto)
- **Fast Performance** - Built with Astro for optimal loading speeds
- **Responsive Design** - Works beautifully on all devices
- **RSS Feed** - Stay connected with your readers
- **Reading Time** - Automatic reading time estimates
- **Type-Safe** - Full TypeScript support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── PostList.astro
│   │   ├── PostRow.astro
│   │   └── TopicPills.astro
│   ├── content/         # Blog posts and content
│   │   └── posts/
│   ├── layouts/         # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── lib/            # Utility functions
│   │   └── posts.ts
│   ├── pages/          # Routes
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── p/[slug].astro
│   │   ├── t/[topic].astro
│   │   └── rss.xml.js
│   ├── styles/         # Global styles
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 📝 Adding New Posts

Create a new `.md` file in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
date: "2025-01-01"
topic: "Product"
tags: ["tag1", "tag2"]
summary: "A brief summary of your post."
draft: false
---

Your content here...
```

## 🎨 Customization

### Update Site Info
Edit `src/layouts/BaseLayout.astro` to change:
- Site title
- Site description
- Your name

### Update About Page
Edit `src/pages/about.astro` with your bio and links.

### Add/Remove Topics
Edit `src/lib/posts.ts` to modify the `TOPICS` array.

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [MDX](https://mdxjs.com) - Enhanced Markdown

## 📄 License

MIT
