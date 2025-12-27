# Contributing Guide

Thank you for considering contributing to this project!

## 📝 Adding a New Blog Post

1. Create a new `.md` file in `src/content/posts/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
topic: "Product" # One of: Talent, Product, Writing, Systems, Crypto
tags: ["tag1", "tag2"] # Optional
summary: "A brief summary of your post"
draft: false
---

Your content here...
```

3. Run `npm run dev` to preview
4. Commit and push your changes

## 🎨 Customizing the Site

### Site Information
Edit `src/config.ts` to update:
- Site name and description
- Social media links
- Topics and their descriptions

### Styling
- **Colors**: Edit `tailwind.config.mjs`
- **Typography**: Modify `src/styles/global.css`
- **Layout**: Adjust components in `src/components/` and `src/layouts/`

### Adding a New Topic
1. Add the topic to `TOPICS` array in `src/config.ts`
2. Add description to `TOPIC_DESCRIPTIONS`
3. Update the schema in `src/content.config.ts`

## 🧪 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npm run check

# Build for production
npm run build

# Preview build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── content/        # Blog posts
├── layouts/        # Page layouts
├── lib/           # Utility functions
├── pages/         # Routes (file-based routing)
├── styles/        # Global styles
├── config.ts      # Site configuration
└── types.ts       # TypeScript type definitions
```

## 🎯 Code Style

- Use TypeScript for type safety
- Add JSDoc comments for functions
- Follow existing patterns for consistency
- Use meaningful component and variable names

## 🐛 Found a Bug?

1. Check if it's already reported in Issues
2. Open a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

## 💡 Have an Idea?

Open an issue to discuss new features before implementing them!

