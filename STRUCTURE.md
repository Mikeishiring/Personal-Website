# Project Structure

```
personal-website/
│
├── 📄 Configuration Files
│   ├── astro.config.mjs       # Astro framework configuration
│   ├── tailwind.config.mjs    # Tailwind CSS design tokens
│   ├── tsconfig.json          # TypeScript configuration
│   ├── package.json           # Dependencies and scripts
│   └── .gitignore            # Git ignore rules
│
├── 📚 Documentation
│   ├── README.md             # Project overview and setup
│   ├── CONTRIBUTING.md       # Contribution guidelines
│   └── CHANGELOG.md          # Version history
│
├── 🎨 Source (src/)
│   │
│   ├── 🧩 Components/        # Reusable UI components
│   │   ├── PostList.astro   # Displays list of posts
│   │   ├── PostRow.astro    # Individual post item
│   │   └── TopicPills.astro # Topic filter navigation
│   │
│   ├── 📐 Layouts/           # Page layouts
│   │   ├── BaseLayout.astro # Main layout wrapper
│   │   └── PostLayout.astro # Individual post layout
│   │
│   ├── 📄 Pages/             # Routes (file-based routing)
│   │   ├── index.astro      # Homepage (/)
│   │   ├── about.astro      # About page (/about)
│   │   ├── rss.xml.js       # RSS feed (/rss.xml)
│   │   ├── p/
│   │   │   └── [slug].astro # Post detail (/p/:slug)
│   │   └── t/
│   │       └── [topic].astro # Topic filter (/t/:topic)
│   │
│   ├── 📝 Content/           # Blog posts
│   │   └── posts/
│   │       ├── beyond-the-resume.md
│   │       ├── mev-and-the-value-layer.md
│   │       └── shipping-with-constraints.md
│   │
│   ├── 🛠️ Lib/               # Utility functions
│   │   └── posts.ts         # Post-related utilities
│   │
│   ├── 🎨 Styles/            # Global styles
│   │   └── global.css       # Base styles and prose
│   │
│   ├── ⚙️ Configuration
│   │   ├── config.ts        # Site-wide constants
│   │   ├── types.ts         # TypeScript types
│   │   └── content.config.ts # Content schema
│   │
│
└── 🌐 Public/                # Static assets
    └── favicon.svg          # Site favicon
```

## Key Files Explained

### Core Configuration
- **`src/config.ts`** - Central place for all site metadata, topics, and social links
- **`src/types.ts`** - TypeScript type definitions for type safety
- **`src/content.config.ts`** - Schema for blog posts (frontmatter validation)

### Styling
- **`src/styles/global.css`** - Base styles, typography, and content styling
- **`tailwind.config.mjs`** - Custom color palette and design tokens

### Utilities
- **`src/lib/posts.ts`** - Helper functions for:
  - Calculating reading time
  - Sorting posts by date
  - Filtering published posts
  - Grouping by topic/year

## Routing Structure

```
/                    → Homepage (all posts)
/about              → About page
/p/:slug            → Individual post
/t/:topic           → Posts filtered by topic
/rss.xml            → RSS feed
```

## Data Flow

```
Content (.md files)
    ↓
content.config.ts (validates schema)
    ↓
getCollection('posts')
    ↓
lib/posts.ts (utility functions)
    ↓
Pages (index, topic, post)
    ↓
Components (PostList, PostRow)
    ↓
Rendered HTML
```


