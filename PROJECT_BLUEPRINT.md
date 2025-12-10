# Project Blueprint: rishimohan.me

## 📋 Overview
A personal portfolio and blog website built with Next.js, showcasing projects, blog posts, and personal information. The site features dark/light theme support, markdown-based content management, and dynamic routing.

**Live Site:** https://rishimohan.me  
**Tech Stack:** Next.js 13, React 18, TailwindCSS 3, Framer Motion, Markdown-it

---

## 🏗️ Architecture

### **Framework & Core**
- **Next.js 13** - React framework with App Router
- **React 18** - UI library
- **TailwindCSS 3.3** - Utility-first CSS framework
- **Framer Motion 7.6** - Animation library
- **next-themes** - Theme management (dark/light mode)
- **next-seo** - SEO optimization

### **Content Management**
- **Markdown-based** - Blog posts and projects stored as `.md` files
- **gray-matter** - Front matter parsing for metadata
- **markdown-it** - Markdown to HTML conversion

### **Styling**
- **TailwindCSS** with JIT mode
- **SCSS** - Additional stylesheets (`app.scss`, `blog.scss`)
- **PostCSS** - CSS processing
- **Dark mode** - Class-based dark mode support

---

## 📁 Project Structure

```
rishimohan.me/
│
├── 📄 Configuration Files
│   ├── package.json          # Dependencies and scripts
│   ├── next.config.js        # Next.js configuration
│   ├── tailwind.config.js    # TailwindCSS configuration
│   ├── postcss.config.js     # PostCSS configuration
│   ├── jsconfig.json         # JavaScript path aliases
│   └── README.md             # Project documentation
│
├── 📂 pages/                 # Next.js pages (file-based routing)
│   ├── _app.js              # App wrapper (theme, SEO, analytics)
│   ├── _document.js         # Custom HTML document
│   ├── index.js             # Homepage (main portfolio page)
│   ├── map.js               # Site map page
│   ├── pen.jsx              # Pen/experiment page
│   │
│   ├── 📂 api/              # API routes (data fetching utilities)
│   │   ├── blog.js          # Blog post data functions
│   │   ├── projects.js      # Project data functions
│   │   └── og.js            # Open Graph image generation
│   │
│   ├── 📂 blog/             # Blog routes
│   │   ├── index.js         # Blog listing page
│   │   └── [slug].js        # Dynamic blog post page
│   │
│   ├── 📂 projects/         # Projects routes
│   │   ├── index.js         # Projects listing page
│   │   └── [slug].js        # Dynamic project detail page
│   │
│   └── 📂 experiments/      # Experimental pages
│       ├── index.js         # Experiments listing
│       ├── modal.js         # Modal experiment
│       └── splash-screen.js # Splash screen experiment
│
├── 📂 components/            # Reusable React components
│   ├── index.js             # Component exports
│   ├── sidebar.js           # Navigation sidebar
│   ├── blogList.js          # Blog post listing component
│   ├── postContent.js       # Blog post content renderer
│   ├── workList.js          # Projects listing component
│   └── workContent.js       # Project content renderer
│
├── 📂 layouts/               # Layout components
│   └── main.js              # Main layout wrapper (sidebar + footer)
│
├── 📂 ui/                    # UI primitives/components
│   ├── index.js             # UI exports
│   ├── button.js            # Button component
│   ├── container.js         # Content wrapper component
│   └── switch.js            # Theme switch component
│
├── 📂 lib/                   # Utility libraries
│   ├── md2html.js           # Markdown to HTML converter
│   └── icons.js              # Icon utilities
│
├── 📂 data/                  # Content data (markdown files)
│   ├── 📂 blog/             # Blog posts (60+ markdown files)
│   ├── 📂 projects/         # Project descriptions (7 markdown files)
│   └── 📂 pen/              # Pen/experiment content
│
├── 📂 public/                # Static assets
│   ├── images/              # Image assets
│   │   ├── pages/home/      # Homepage images
│   │   ├── posts/           # Blog post images (181 files)
│   │   ├── work/            # Project images
│   │   ├── experiments/     # Experiment assets
│   │   └── site/            # Site-wide images (meta, OG)
│   ├── touch-icons/         # Apple touch icons
│   ├── favicon.ico          # Site favicon
│   ├── robots.txt           # SEO robots file
│   ├── sitemap.xml          # Site map
│   ├── llms.txt             # LLM information file
│   └── resume-april-2023.pdf # Resume PDF
│
├── 📂 styles/                # Stylesheets
│   ├── app.scss             # Main application styles
│   └── blog.scss            # Blog-specific styles
│
└── 📂 scripts/               # Build/utility scripts
    ├── build-sitemap.mjs    # Sitemap generation script
    └── reset.js             # Reset/cleanup script
```

---

## 🔄 Data Flow

### **Blog Posts**
1. Markdown files stored in `data/blog/*.md`
2. `pages/api/blog.js` reads files using `gray-matter`
3. Functions: `getAllPosts()`, `getPostBySlug()`
4. Rendered on `/blog` (list) and `/blog/[slug]` (detail)
5. Converted to HTML via `lib/md2html.js` using `markdown-it`

### **Projects**
1. Markdown files stored in `data/projects/*.md`
2. `pages/api/projects.js` reads files using `gray-matter`
3. Functions: `getAllProjects()`, `getPostBySlug()`
4. Rendered on `/projects` (list) and `/projects/[slug]` (detail)

### **Theme Management**
1. `next-themes` provider in `_app.js`
2. Theme switcher in `layouts/main.js` footer
3. Supports: System, Light, Dark modes
4. Stored in localStorage, synced with system preference

---

## 🎨 Key Features

### **1. Homepage (`pages/index.js`)**
- Personal introduction and timeline
- Photo gallery with travel images
- Recent blog posts preview
- Projects showcase
- Social links (Twitter, Instagram)
- Location information

### **2. Blog System**
- **Listing Page** (`/blog`) - Shows all blog posts
- **Detail Page** (`/blog/[slug]`) - Individual post with markdown rendering
- 60+ blog posts covering:
  - Technical tutorials
  - Personal reflections
  - Travel experiences
  - Product launches

### **3. Projects Portfolio**
- **Listing Page** (`/projects`) - Shows all projects
- **Detail Page** (`/projects/[slug]`) - Individual project details
- 7 projects including:
  - Pika (screenshot tool)
  - Maazi, Qurb, Zinx, Kizie, Lil, Orshot

### **4. Experiments Section**
- Interactive experiments/demos
- Modal and splash screen examples

### **5. SEO & Analytics**
- **next-seo** for meta tags, Open Graph, Twitter cards
- Dynamic canonical URLs
- **Pirsch Analytics** (production only)
- Sitemap generation
- Robots.txt configuration

---

## 🛠️ Build & Development

### **Scripts**
```bash
yarn dev      # Start development server (localhost:3000)
yarn build    # Build for production
yarn start    # Start production server
```

### **Setup Process**
1. Install dependencies: `yarn`
2. Reset/clean: `node ./scripts/reset.js`
3. Run dev server: `yarn dev`

### **Environment Variables**
- `NEXT_PUBLIC_PIRSCH_KEY` - Analytics key (production)

---

## 🎯 Routing Structure

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Main portfolio page |
| `/blog` | Blog Index | List all blog posts |
| `/blog/[slug]` | Blog Post | Individual blog post |
| `/projects` | Projects Index | List all projects |
| `/projects/[slug]` | Project Detail | Individual project |
| `/pen` | Pen | Experiment/playground |
| `/experiments` | Experiments | Experimental features |
| `/map` | Site Map | Site navigation map |

---

## 📦 Dependencies

### **Core**
- `next@^13.0.4` - Framework
- `react@^18.2.0` - UI library
- `react-dom@^18.2.0` - React DOM

### **Styling**
- `tailwindcss@^3.3.5` - CSS framework
- `sass@^1.56.1` - SCSS support
- `postcss@^8.4.31` - CSS processing
- `autoprefixer@^10.4.16` - CSS vendor prefixes

### **Content**
- `gray-matter@^4.0.3` - Front matter parsing
- `markdown-it@^13.0.1` - Markdown rendering

### **UI/UX**
- `framer-motion@^7.6.7` - Animations
- `next-themes@^0.2.1` - Theme management
- `@phosphor-icons/react@^2.1.7` - Icons
- `@radix-ui/react-switch@^1.0.3` - UI primitives

### **SEO**
- `next-seo@^5.14.1` - SEO utilities

### **Utilities**
- `classnames@^2.3.1` - CSS class utilities
- `clsx@^1.2.1` - Conditional classnames
- `globby@^12.0.2` - File globbing

---

## 🔧 Configuration Details

### **TailwindCSS (`tailwind.config.js`)**
- JIT mode enabled
- Content paths: `pages/**/*.js`, `components/*.js`, `layouts/*.js`
- Dark mode: Class-based
- Custom colors: Gray uses neutral palette

### **Next.js (`next.config.js`)**
- Environment variables: Instagram, Twitter handles
- Custom configuration for social links

### **Path Aliases (`jsconfig.json`)**
- Enables absolute imports (e.g., `import from "components"`)

---

## 🎨 Design System

### **Theme Support**
- Light mode (default)
- Dark mode
- System preference detection

### **Color Palette**
- Uses Tailwind's neutral gray scale
- Custom theme colors via Tailwind config

### **Typography**
- System font stack
- Responsive text sizing

### **Layout**
- Sidebar navigation (left)
- Main content area (center)
- Footer with theme switcher

---

## 📊 Content Statistics

- **Blog Posts:** 60+ markdown files
- **Projects:** 7 project descriptions
- **Images:** 181+ image files
- **Experiments:** 3+ experimental pages

---

## 🚀 Deployment

- Likely deployed on **Vercel** (Next.js optimized)
- Production analytics via Pirsch
- Static asset optimization
- Image optimization via Next.js Image component

---

## 🔐 Security & Best Practices

- Environment variables for sensitive data
- SEO best practices (canonical URLs, meta tags)
- Responsive design
- Accessibility considerations
- Performance optimization (JIT Tailwind, code splitting)

---

## 📝 Notes

- Personal portfolio/blog site
- Open source (GitHub link in footer)
- License: Free for learning/personal use
- Attribution required if published online

---

## 🔗 External Integrations

- **Pirsch Analytics** - Privacy-focused analytics
- **Twitter** - @thelifeofrishi
- **Instagram** - @thelifeofrishi
- **GitHub** - Repository link in footer

---

*Last Updated: Based on current codebase structure*

