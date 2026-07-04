# China Medical Guides

A lightweight, SEO-optimized English information portal for global patients seeking medical care in China. Built with Next.js 14 (App Router) and Tailwind CSS, statically exported for zero-server deployment.

## Overview

This project provides transparent, well-structured information to help international patients navigate China's healthcare system with confidence. The site covers top hospitals, costs, visa guidance, and step-by-step medical visit walkthroughs.

**Core Mission**: Bridge the information gap between international patients and world-class healthcare in China.

**Target Audience**:
- Foreign patients planning to seek medical treatment in China
- Expats already living in China who need medical care
- Anyone interested in learning about China's healthcare system

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 14+ (App Router) | SSG, SEO-friendly routing, static export |
| Build Mode | `output: 'export'` | Pure static HTML/CSS/JS, no server required |
| Styling | Tailwind CSS | Responsive UI with medical-themed design system |
| Language | TypeScript | Type safety and better maintainability |
| Content | JSON + Markdown | Structured hospital data + long-form articles |
| Icons | lucide-react | Consistent linear icon set |
| Markdown | react-markdown + remark-gfm | Article content rendering |
| Deployment | Vercel (recommended) | GitHub integration + global CDN |

## Project Structure

```
med-guides-china/
├── src/
│   ├── app/                      # App Router pages
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles + Tailwind
│   │   ├── hospitals/
│   │   │   ├── page.tsx          # Hospital directory + filters
│   │   │   └── [slug]/page.tsx   # Hospital detail page
│   │   ├── guide/page.tsx        # 6-step medical guide
│   │   ├── articles/
│   │   │   ├── page.tsx          # Article list + category filter
│   │   │   └── [slug]/page.tsx   # Article detail (Markdown)
│   │   └── faq/page.tsx          # FAQ with accordion
│   ├── components/               # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HospitalCard.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── FilterBar.tsx
│   │   ├── FaqItem.tsx
│   │   └── GuideStep.tsx
│   ├── data/                     # All content data
│   │   ├── hospitals.json        # Hospital directory data
│   │   ├── articles.json         # Article index
│   │   ├── faq.json              # FAQ questions & answers
│   │   ├── cities.json           # City medical hub info
│   │   ├── patient-stories.json  # Patient testimonials
│   │   ├── guide-steps.json      # 6-step guide content
│   │   └── articles/             # Markdown article files
│   ├── types/                    # TypeScript type definitions
│   └── lib/                      # Utility functions
├── public/                       # Static assets
├── next.config.js                # Next.js config (static export)
├── tailwind.config.ts            # Tailwind theme (medical palette)
├── tsconfig.json
└── package.json
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Brand intro, cost/time comparison, featured hospitals, cities, patient stories, featured articles |
| Hospital Directory | `/hospitals` | Filterable hospital list (city, tier, type, specialty) with search |
| Hospital Detail | `/hospitals/[slug]` | Complete hospital info: specialties, costs, insurance, transportation, services |
| Medical Guide | `/guide` | 6-step roadmap: preparation → appointment → registration → consultation → payment → follow-up |
| Article List | `/articles` | All articles with category filter and search |
| Article Detail | `/articles/[slug]` | Full Markdown-rendered article with prev/next navigation |
| FAQ | `/faq` | 10 most common questions with accordion-style answers |

## Design System

**Color Palette** (medical theme):
- Primary: Deep Medical Blue `#0B3C5D`
- Secondary: Soft Cyan `#328CC1`
- Background: Pure White / Very Light Gray `#F8F9FA`
- Text: Deep Slate `#1F2937`

**Style Principles**:
- Professional and trustworthy aesthetic
- Minimalist with generous whitespace
- Card-based layout with clear information hierarchy
- Smooth micro-interactions and hover states
- Desktop-first, fully responsive down to mobile

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm (or pnpm / yarn)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build (Static Export)

```bash
npm run build
```

The static site will be generated in the `out/` directory, ready to deploy to any static hosting service.

### Linting

```bash
npm run lint
```

## Deployment

The site is configured for **static export** (`output: 'export'`), meaning it can be deployed to any static hosting platform:

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project in Vercel
3. Deploy — zero configuration needed

### Other Platforms

- **Netlify**: Deploy the `out/` directory
- **GitHub Pages**: Publish `out/` to a `gh-pages` branch
- **Cloudflare Pages**: Connect Git repo and deploy

## Data Management

All content is stored as local JSON and Markdown files in `src/data/`. No database required.

- **hospitals.json** — Structured hospital data
- **articles.json** — Article metadata
- **articles/*.md** — Full article content in Markdown
- **faq.json** — FAQ items
- **cities.json** — City medical hub info
- **patient-stories.json** — Patient testimonials
- **guide-steps.json** — 6-step guide content

To add new content, simply add to the corresponding JSON/Markdown file and rebuild.

## Content Sources

Information is compiled from:
- Hospital international department official websites
- Beijing Municipal Health Commission
- 114 appointment platform
- Publicly available hospital quality rankings

All data should be verified and updated regularly.

## Features

- ✅ Fully static site (zero server cost)
- ✅ SEO-optimized with proper metadata
- ✅ Responsive design (mobile → desktop)
- ✅ Multi-dimensional hospital filtering
- ✅ Markdown article rendering
- ✅ Interactive FAQ accordion
- ✅ Step-by-step guide with timeline
- ✅ Patient testimonials section
- ✅ Cost and wait time comparison visualizations
- ✅ Smooth animations and micro-interactions
- ✅ Semantic HTML for accessibility
