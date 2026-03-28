# Project Plan — melihyabas.github.io

> **Status:** Pre-Development · Source of Truth  
> **Last Updated:** March 28, 2026  
> **Author:** Melih Yabaş

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Architecture](#2-tech-stack--architecture)
3. [Site Map & Page Specifications](#3-site-map--page-specifications)
4. [Design Language](#4-design-language)
5. [Typography & Color System](#5-typography--color-system)
6. [Animation & Interaction Guidelines](#6-animation--interaction-guidelines)
7. [Data Structure & Content Strategy](#7-data-structure--content-strategy)
8. [Component Architecture](#8-component-architecture)
9. [Deployment & Infrastructure](#9-deployment--infrastructure)
10. [File & Folder Structure](#10-file--folder-structure)
11. [Development Phases](#11-development-phases)
12. [Open Questions & Future Scope](#12-open-questions--future-scope)

---

## 1. Project Overview

### Vision

A sophisticated, authentic, and philosophical personal website built in the style of a **Digital Journal**. This is not a generic developer portfolio — it is a curated window into the mind of a software engineer who thinks deeply about consciousness, discipline, and craft. Every pixel should feel intentional, every transition should feel like turning a page.

### Identity

- **Name:** Melih Yabaş
- **Age:** 28
- **Location:** Bursa, Turkey
- **Profession:** Software Engineer
- **Core Pillars:** Technical precision, philosophical inquiry, disciplined living
- **Perspective:** First-person, reflective, unapologetically authentic — the "Main Character" of his own narrative

### Tone & Philosophy

The website communicates from a **"Main Character" perspective** — not in an egotistical sense, but in the literary sense. The visitor is reading someone's story. The language is confident but contemplative. The design whispers rather than shouts.

Key tonal qualities:
- **Contemplative** — Every section invites the reader to slow down
- **Precise** — Clean code, clean prose, clean layout
- **Warm but Reserved** — Approachable yet maintains intellectual distance
- **Timeless** — Avoids trendy design patterns that age poorly

---

## 2. Tech Stack & Architecture

### Core Framework

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js 14+** (App Router) | SSG/SSR hybrid, file-based routing, React Server Components |
| Styling | **Tailwind CSS 3.4+** | Utility-first, rapid prototyping, dark mode built-in |
| Animation | **Framer Motion 11+** | Declarative animations, scroll-triggered effects, layout animations |
| Language | **TypeScript** | Type safety, better DX, self-documenting code |
| Package Manager | **pnpm** | Fast, disk-efficient |

### No Backend

This is a **purely frontend / serverless** project. There is no Spring Boot, no database, no authentication. All dynamic data comes from:

- RSS feed parsing (at build time or client-side)
- Static JSON/TS data files
- YouTube embed URLs (hardcoded or from a static config)

### Key Architectural Decisions

1. **Static Site Generation (SSG)** as the default rendering strategy. Pages are pre-rendered at build time for performance and SEO.
2. **Incremental Static Regeneration (ISR)** for the Blog page (to periodically re-fetch the RSS feed without full rebuilds).
3. **Client Components** only where interactivity is required (animations, video embeds, interactive timelines).
4. **No CMS.** Content is managed through local data files (`/data/*.ts`) and the external Blogspot RSS feed.

---

## 3. Site Map & Page Specifications

### 3.1 Navigation Structure

```
Home  ·  Blog  ·  YouTube  ·  About  ·  Experiences
```

The navigation is a **minimal horizontal bar** fixed at the top. On mobile, it collapses into a **slide-in drawer** from the right. The current page is indicated by a subtle underline or dot — no heavy active states.

---

### 3.2 Home (`/`)

**Purpose:** First impression. Introduce Melih as a person and professional in under 10 seconds of reading.

**Layout:**

```
┌─────────────────────────────────────────────┐
│                  [Nav Bar]                  │
├─────────────────────────────────────────────┤
│                                             │
│         "Melih Yabaş"                       │
│         Software Engineer · Bursa           │
│                                             │
│    A one-line philosophical tagline that    │
│    rotates or fades between 3-4 variants    │
│                                             │
│         [ Explore ↓ ]                       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│   Brief intro paragraph (2-3 sentences)     │
│   connecting technical craft with           │
│   philosophical curiosity                   │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│   3-column card grid:                       │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│   │  Code   │ │  Think  │ │  Live   │     │
│   │ Angular │ │  Blog   │ │ Guitar  │     │
│   │  Java   │ │ Philos. │ │ Fitness │     │
│   └─────────┘ └─────────┘ └─────────┘     │
│                                             │
├─────────────────────────────────────────────┤
│                 [Footer]                    │
└─────────────────────────────────────────────┘
```

**Content Details:**

- **Hero Section:** Full viewport height. Name in large serif font. Subtitle in a lighter weight. A rotating philosophical tagline using Framer Motion's `AnimatePresence`.
  - Example taglines:
    - *"Precision in code, presence in thought."*
    - *"Building systems. Questioning everything."*
    - *"28 years of curiosity, compiled."*
- **Intro Section:** A short, literary paragraph. Not a resume summary — more like the opening of an essay.
- **Pillar Cards:** Three cards representing the three dimensions of identity. Each has a subtle icon, a title, 2-3 keywords, and links to the relevant page. Cards have a slight hover lift animation.

**Interactions:**
- Smooth scroll-down CTA
- Tagline rotation every 5 seconds with crossfade
- Cards stagger-animate into view on scroll

---

### 3.3 Blog (`/blog`)

**Purpose:** Surface blog posts from the existing Blogspot blog via RSS integration.

**Data Source:** `https://birmiktarfikir.blogspot.com/feeds/posts/default?alt=rss`

**Layout:**

```
┌─────────────────────────────────────────────┐
│  Blog                                       │
│  "A Fistful of Thoughts" — birmiktarfikir   │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  Post Title                         │    │
│  │  Published: Jan 15, 2026            │    │
│  │  First 150 chars of content...      │    │
│  │  [Read on Blogspot →]               │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  Post Title                         │    │
│  │  Published: Dec 3, 2025             │    │
│  │  First 150 chars of content...      │    │
│  │  [Read on Blogspot →]               │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ... (paginated or infinite scroll)         │
│                                             │
└─────────────────────────────────────────────┘
```

**Specifications:**

- Parse RSS feed at build time using a utility function (e.g., `rss-parser` or custom XML parsing).
- Display: **title**, **publication date**, **excerpt** (first ~150 characters of content, stripped of HTML), and a **"Read on Blogspot →"** link that opens in a new tab.
- Posts are displayed as **stacked cards** in a single column, sorted by date (newest first).
- Each card fades/slides in on scroll.
- Revalidation: Use ISR with `revalidate: 3600` (1 hour) so the blog list updates without manual redeployment.
- If RSS fetch fails, show a graceful fallback message with a direct link to the Blogspot.

**No full-text rendering on-site.** The website acts as a curated index pointing back to Blogspot.

---

### 3.4 YouTube Shorts (`/youtube`)

**Purpose:** Showcase video content (YouTube Shorts or regular videos) in a visually engaging grid.

**Layout:**

```
┌─────────────────────────────────────────────┐
│  YouTube                                    │
│  "Frames in Motion"                         │
│                                             │
│  ┌───────┐  ┌───────┐  ┌───────┐          │
│  │       │  │       │  │       │          │
│  │ Short │  │ Short │  │ Short │          │
│  │   1   │  │   2   │  │   3   │          │
│  │       │  │       │  │       │          │
│  └───────┘  └───────┘  └───────┘          │
│                                             │
│  ┌───────┐  ┌───────┐  ┌───────┐          │
│  │       │  │       │  │       │          │
│  │ Short │  │ Short │  │ Short │          │
│  │   4   │  │   5   │  │   6   │          │
│  └───────┘  └───────┘  └───────┘          │
│                                             │
└─────────────────────────────────────────────┘
```

**Specifications:**

- **3-column responsive grid** (3 cols on desktop, 2 on tablet, 1 on mobile).
- Each cell contains a YouTube embed (`<iframe>`) or a **thumbnail with play overlay** that expands into a modal/lightbox player on click.
- Video data is stored in a **static data file** (`/data/youtube.ts`) as an array of objects:

```typescript
interface YouTubeVideo {
  id: string;           // YouTube video ID
  title: string;
  description?: string;
  publishedAt: string;  // ISO date string
  isShort: boolean;     // true for Shorts, false for regular
}
```

- Shorts use a **9:16 aspect ratio** container; regular videos use **16:9**.
- Cards have a subtle scale-on-hover effect.
- Placeholder data should be included for development (6-9 sample entries).

**Thumbnail Strategy:**
- Use YouTube's thumbnail API: `https://img.youtube.com/vi/{VIDEO_ID}/hqdefault.jpg`
- Lazy-load thumbnails with Next.js `<Image>` component and blur placeholder.

---

### 3.5 About Me (`/about`)

**Purpose:** A rich, narrative-driven page that weaves together all dimensions of Melih's identity. This is the soul of the website.

**Layout:**

```
┌─────────────────────────────────────────────┐
│  About                                      │
│  "The Unabridged Version"                   │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  § The Engineer                     │    │
│  │  Narrative about software journey   │    │
│  │  Angular · Java · SQL · ...         │    │
│  │  Tech stack pills/badges            │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  § The Musician                     │    │
│  │  8 years of guitar, Rock/Pop       │    │
│  │  What music means philosophically   │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  § The Athlete                      │    │
│  │  Fitness discipline, running        │    │
│  │  Connection to mental clarity       │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  § The Analyst                      │    │
│  │  Financial markets, reading charts  │    │
│  │  Pattern recognition as philosophy  │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │  § The Thinker                      │    │
│  │  Philosophy, consciousness,         │    │
│  │  human experience. Blog tie-in.     │    │
│  └─────────────────────────────────────┘    │
│                                             │
└─────────────────────────────────────────────┘
```

**Specifications:**

- Each section is a **prose block** with a serif heading, followed by 1-2 paragraphs in a literary, first-person voice.
- Sections scroll-reveal one at a time with a stagger effect.
- **Tech stack** in "The Engineer" section is shown as subtle pill badges (not flashy skill bars).
- Technologies to highlight: **Angular, Java, Spring Boot, SQL, TypeScript, JavaScript, HTML/CSS, Git**.
- "The Musician" section can optionally include an embedded Spotify playlist or a small audio waveform visual.
- "The Analyst" section should mention interest in **financial markets, technical analysis, macro trends**.
- Each section can have a subtle **section divider** — perhaps a thin horizontal rule with a small decorative element (e.g., a centered dot or asterisk `✦`).

**Content Data:** Stored in `/data/about.ts` as structured objects for each section, allowing easy editing:

```typescript
interface AboutSection {
  id: string;
  title: string;
  subtitle: string;
  icon?: string;
  content: string[];   // Array of paragraphs (supports markdown-like formatting)
  tags?: string[];      // Optional skill/interest tags
}
```

---

### 3.6 Experiences & Travel (`/experiences`)

**Purpose:** A visual timeline documenting significant life events, travels, and milestones.

**Layout:**

```
┌─────────────────────────────────────────────┐
│  Experiences                                │
│  "Coordinates & Chapters"                   │
│                                             │
│         ┌──────────────────┐                │
│    2026 │  Prague Trip      │───── ✈        │
│         │  Upcoming · May   │               │
│         └──────────────────┘                │
│              │                              │
│              │                              │
│         ┌──────────────────┐                │
│    2025 │  [Experience]     │───── ◆        │
│         │  Description      │               │
│         └──────────────────┘                │
│              │                              │
│              │                              │
│         ┌──────────────────┐                │
│    2024 │  [Experience]     │───── ◆        │
│         └──────────────────┘                │
│                                             │
│              ...                            │
└─────────────────────────────────────────────┘
```

**Specifications:**

- **Vertical timeline** with alternating left-right cards on desktop; single column on mobile.
- Each entry has: **year**, **title**, **date range or specific date**, **short description**, **category tag** (Travel / Career / Personal / Milestone), and an optional **image**.
- Timeline line is a thin vertical stroke with small circular markers at each node.
- Cards animate in from the side (left entries slide from left, right entries slide from right) as the user scrolls.
- **Upcoming events** (like Prague) are styled differently — perhaps a dashed border or a subtle glow to indicate "future."

**Content Data:** Stored in `/data/experiences.ts`:

```typescript
interface Experience {
  id: string;
  title: string;
  date: string;           // "May 2026" or "2024"
  description: string;
  category: 'travel' | 'career' | 'personal' | 'milestone';
  location?: string;
  imageUrl?: string;
  isUpcoming: boolean;
}
```

**Placeholder Entries for Development:**

1. **Prague Trip** — May 2026, Travel, Upcoming
2. Additional placeholder entries spanning 2018–2025 covering career starts, guitar milestones, fitness achievements, etc.

---

## 4. Design Language

### The "Authentic" Aesthetic

This site does not look like a SaaS landing page. It does not look like a generic developer portfolio. It looks like a **beautifully typeset journal** that happens to live on the internet.

### Guiding Principles

1. **Parchment in the Dark** — The background is not pure black (#000). It's a deep, warm charcoal with the faintest hint of brown or sepia. Think aged paper in a dimly lit room.

2. **Serif Authority** — Headings use a refined serif typeface. Body text uses a clean sans-serif for readability. The contrast between the two creates visual hierarchy and a literary feel.

3. **Breathing Room** — Generous whitespace (or rather, "dark-space"). Sections don't crowd each other. Content feels like it's floating in space.

4. **Subtle Texture** — An optional very faint noise/grain overlay on the background (CSS-based, not an image) to give the surface a tactile quality.

5. **Minimal Chrome** — No heavy borders, no drop shadows (except very subtle ones), no gradient backgrounds. Borders are thin and low-contrast.

6. **Main Character Energy** — The site speaks in first person. It doesn't apologize for existing. The photography (if any) is cinematic. The copy is thoughtful. The overall impression: "This person has depth."

---

## 5. Typography & Color System

### Typography

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Headings** (h1–h3) | **Playfair Display** or **Lora** | 600–700 | Georgia, serif |
| **Body Text** | **Inter** or **Source Sans 3** | 400 | system-ui, sans-serif |
| **Monospace** (code, tags) | **JetBrains Mono** | 400 | monospace |
| **Accent / Taglines** | **Cormorant Garamond** (italic) | 400i | Georgia, serif |

Load via **Google Fonts** with `next/font/google` for optimal performance (no layout shift).

### Font Sizes (Desktop / Mobile)

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero Name | 4rem (64px) | 2.5rem (40px) |
| Page Title (h1) | 2.5rem (40px) | 1.75rem (28px) |
| Section Title (h2) | 1.75rem (28px) | 1.375rem (22px) |
| Body | 1.125rem (18px) | 1rem (16px) |
| Small / Caption | 0.875rem (14px) | 0.8125rem (13px) |

### Color Palette

```
Background Tokens:
  --bg-primary:       #1a1814    (warm near-black, parchment-dark)
  --bg-secondary:     #22201b    (slightly lighter, for cards)
  --bg-tertiary:      #2a2722    (hover states, elevated surfaces)

Text Tokens:
  --text-primary:     #e8e2d6    (warm off-white, like aged paper)
  --text-secondary:   #a89f91    (muted, for subtitles and metadata)
  --text-tertiary:    #6b6358    (very muted, for timestamps and captions)

Accent Tokens:
  --accent-primary:   #c9a96e    (warm gold — links, highlights)
  --accent-hover:     #d4b87a    (lighter gold for hover states)
  --accent-muted:     #8a7a5a    (subtle gold for borders, dividers)

Semantic Tokens:
  --border:           #3a362f    (subtle border color)
  --divider:          #2e2a24    (section dividers)
  --overlay:          rgba(26, 24, 20, 0.85)  (modal overlays)
```

### Dark Mode Only

There is **no light mode toggle**. The site is designed exclusively for dark mode. This is an intentional aesthetic choice, not a limitation.

---

## 6. Animation & Interaction Guidelines

### Library: Framer Motion

All animations are handled by Framer Motion. No raw CSS animations except for very simple transitions (hover color changes, etc.).

### Animation Principles

1. **Subtle Over Spectacular** — Animations should feel like natural movement, not a tech demo.
2. **Purpose-Driven** — Every animation serves a purpose: directing attention, providing feedback, or creating continuity.
3. **Consistent Easing** — Use a custom easing curve throughout: `[0.25, 0.1, 0.25, 1]` (a refined ease-out).
4. **Duration Range** — Most animations are between `0.4s` and `0.8s`. Nothing faster than `0.2s`, nothing slower than `1.2s`.

### Specific Animations

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Page transition | Fade + slight upward slide | Route change | 0.5s |
| Hero tagline | Crossfade rotation | Timer (5s interval) | 0.8s |
| Section reveal | Fade in + translate Y (20px → 0) | Scroll into viewport | 0.6s |
| Card hover | Slight scale (1.02) + shadow increase | Mouse enter | 0.3s |
| Timeline cards | Slide from left/right + fade | Scroll into viewport | 0.5s |
| Navigation underline | Width expand from center | Route/hover | 0.3s |
| Blog post cards | Stagger fade-in (0.1s delay between) | Page load / scroll | 0.4s each |
| YouTube grid | Stagger scale-in | Page load | 0.3s each |

### Scroll Animations

Use Framer Motion's `useInView` hook with `{ once: true, margin: "-100px" }` so elements animate in when they're ~100px into the viewport, and only animate once (no re-triggering on scroll up).

---

## 7. Data Structure & Content Strategy

### 7.1 RSS Feed Integration (Blog)

**Source:** `https://birmiktarfikir.blogspot.com/feeds/posts/default?alt=rss`

**Parsing Strategy:**

```typescript
// /lib/rss.ts

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;       // Raw date string from RSS
  formattedDate: string; // Formatted for display (e.g., "January 15, 2026")
  excerpt: string;       // First ~150 chars of content, HTML stripped
  categories?: string[]; // Tags from RSS <category> elements
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  // 1. Fetch RSS XML from Blogspot
  // 2. Parse XML (using rss-parser or custom DOMParser)
  // 3. Map to BlogPost interface
  // 4. Sort by pubDate descending
  // 5. Return array
}
```

**Build-Time Fetching:**
- In the Blog page's server component, call `fetchBlogPosts()` during SSG.
- Use Next.js `revalidate: 3600` for ISR (re-fetch every hour).

**Error Handling:**
- If fetch fails → show static fallback message: *"Posts are temporarily unavailable. Visit [birmiktarfikir.blogspot.com](https://birmiktarfikir.blogspot.com) directly."*
- If RSS returns 0 items → show: *"No posts yet. Stay tuned."*

### 7.2 YouTube Video Data

**Source:** Static data file (no API calls).

**File:** `/data/youtube.ts`

```typescript
export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "dQw4w9WgXcQ",       // Replace with actual video IDs
    title: "Sample Short #1",
    description: "Description here",
    publishedAt: "2026-01-15",
    isShort: true,
  },
  // ... more entries
];
```

**Why Static?**
- YouTube Data API has quota limits and requires API keys.
- For a personal site with occasional video posts, manually adding entries to a data file is simpler and more reliable.
- Future enhancement: Could add a build script that fetches from YouTube API and writes to this file.

### 7.3 About Content

**File:** `/data/about.ts`

Content is structured as an array of `AboutSection` objects (see Section 3.5). This keeps content separate from presentation and makes future edits trivial.

### 7.4 Experiences Content

**File:** `/data/experiences.ts`

Content is an array of `Experience` objects (see Section 3.6), sorted by date descending.

### 7.5 Site Metadata & SEO

**File:** `/data/metadata.ts`

```typescript
export const siteMetadata = {
  title: "Melih Yabaş — Software Engineer",
  description: "Personal website and digital journal of Melih Yabaş. Software engineering, philosophy, music, and life.",
  url: "https://melihyabas.github.io",
  locale: "en_US",
  author: {
    name: "Melih Yabaş",
    email: "...",        // Optional
    github: "https://github.com/melihyabas",
    linkedin: "...",     // Optional
    blogspot: "https://birmiktarfikir.blogspot.com",
  },
  ogImage: "/og-image.jpg",   // Open Graph preview image
};
```

---

## 8. Component Architecture

### Shared / Layout Components

| Component | Path | Description |
|-----------|------|-------------|
| `RootLayout` | `app/layout.tsx` | HTML shell, font loading, global styles, metadata |
| `Navbar` | `components/layout/Navbar.tsx` | Fixed top nav with links, mobile drawer |
| `MobileDrawer` | `components/layout/MobileDrawer.tsx` | Slide-in nav for mobile (Framer Motion) |
| `Footer` | `components/layout/Footer.tsx` | Minimal footer with social links and copyright |
| `PageHeader` | `components/layout/PageHeader.tsx` | Reusable page title + subtitle component |
| `SectionDivider` | `components/ui/SectionDivider.tsx` | Decorative `✦` divider between sections |
| `PageTransition` | `components/layout/PageTransition.tsx` | Framer Motion wrapper for route transitions |

### Page-Specific Components

| Component | Path | Used On |
|-----------|------|---------|
| `HeroSection` | `components/home/HeroSection.tsx` | Home |
| `RotatingTagline` | `components/home/RotatingTagline.tsx` | Home |
| `PillarCard` | `components/home/PillarCard.tsx` | Home |
| `BlogPostCard` | `components/blog/BlogPostCard.tsx` | Blog |
| `BlogPostList` | `components/blog/BlogPostList.tsx` | Blog |
| `VideoCard` | `components/youtube/VideoCard.tsx` | YouTube |
| `VideoGrid` | `components/youtube/VideoGrid.tsx` | YouTube |
| `VideoModal` | `components/youtube/VideoModal.tsx` | YouTube |
| `AboutSection` | `components/about/AboutSection.tsx` | About |
| `TechBadge` | `components/about/TechBadge.tsx` | About |
| `Timeline` | `components/experiences/Timeline.tsx` | Experiences |
| `TimelineCard` | `components/experiences/TimelineCard.tsx` | Experiences |

### Utility Components

| Component | Path | Description |
|-----------|------|-------------|
| `ScrollReveal` | `components/motion/ScrollReveal.tsx` | Reusable scroll-triggered animation wrapper |
| `StaggerContainer` | `components/motion/StaggerContainer.tsx` | Stagger-animates children on mount/scroll |
| `FadeIn` | `components/motion/FadeIn.tsx` | Simple fade-in animation wrapper |

---

## 9. Deployment & Infrastructure

### Hosting

**Primary:** GitHub Pages (since the repo is `melihyabas.github.io`)

**Deployment Strategy:**
- Use `next export` (static export) or Next.js static output mode (`output: 'export'` in `next.config.js`) to generate a fully static site.
- GitHub Actions workflow: On push to `master`, build → export → deploy to GitHub Pages.

**Custom Domain:** If `CNAME` file currently points to a custom domain, preserve it.

### Important Constraints for GitHub Pages

1. No server-side features (no API routes, no middleware, no ISR on GitHub Pages).
2. All data fetching must happen at **build time**.
3. RSS feed is fetched during `next build` — the blog page is re-generated on each deployment.
4. If ISR is needed, consider migrating to **Vercel** (free tier) in the future.

### Alternative: Vercel

If dynamic features (ISR for blog) are desired:
- Deploy to Vercel (free for personal projects).
- Point `melihyabas.github.io` or a custom domain to Vercel.
- Enables ISR, edge functions, and preview deployments.

### Environment Variables

```env
# .env.local (not committed to git)
NEXT_PUBLIC_SITE_URL=https://melihyabas.github.io
```

No secrets or API keys required for the initial version.

---

## 10. File & Folder Structure

```
melihyabas.github.io/
├── app/
│   ├── layout.tsx                 # Root layout (fonts, global providers)
│   ├── page.tsx                   # Home page
│   ├── blog/
│   │   └── page.tsx               # Blog listing page
│   ├── youtube/
│   │   └── page.tsx               # YouTube grid page
│   ├── about/
│   │   └── page.tsx               # About me page
│   ├── experiences/
│   │   └── page.tsx               # Experiences timeline page
│   ├── globals.css                # Tailwind directives + custom CSS
│   └── not-found.tsx              # Custom 404 page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileDrawer.tsx
│   │   ├── Footer.tsx
│   │   ├── PageHeader.tsx
│   │   └── PageTransition.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── RotatingTagline.tsx
│   │   └── PillarCard.tsx
│   ├── blog/
│   │   ├── BlogPostCard.tsx
│   │   └── BlogPostList.tsx
│   ├── youtube/
│   │   ├── VideoCard.tsx
│   │   ├── VideoGrid.tsx
│   │   └── VideoModal.tsx
│   ├── about/
│   │   ├── AboutSection.tsx
│   │   └── TechBadge.tsx
│   ├── experiences/
│   │   ├── Timeline.tsx
│   │   └── TimelineCard.tsx
│   ├── motion/
│   │   ├── ScrollReveal.tsx
│   │   ├── StaggerContainer.tsx
│   │   └── FadeIn.tsx
│   └── ui/
│       └── SectionDivider.tsx
│
├── data/
│   ├── about.ts                   # About page content
│   ├── experiences.ts             # Timeline entries
│   ├── youtube.ts                 # YouTube video entries
│   ├── metadata.ts                # Site-wide metadata & SEO
│   └── navigation.ts              # Nav link definitions
│
├── lib/
│   ├── rss.ts                     # RSS feed fetching & parsing
│   ├── utils.ts                   # General utility functions
│   └── constants.ts               # Animation constants, config values
│
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg               # Open Graph preview image
│   └── images/                    # Static images (experiences, etc.)
│
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions deployment workflow
│
├── tailwind.config.ts             # Tailwind configuration (colors, fonts)
├── next.config.js                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json
├── pnpm-lock.yaml
├── .gitignore
├── .env.local                     # Environment variables (not committed)
├── CNAME                          # Custom domain (preserve if exists)
├── project-plan.md                # This file
└── README.md
```

---

## 11. Development Phases

### Phase 1: Foundation (Priority: Critical)

- [ ] Initialize Next.js project with TypeScript and Tailwind CSS
- [ ] Configure `tailwind.config.ts` with custom colors, fonts, and spacing
- [ ] Set up font loading (`next/font/google`)
- [ ] Create `RootLayout` with global styles and font application
- [ ] Build `Navbar` component (desktop + mobile drawer)
- [ ] Build `Footer` component
- [ ] Create reusable animation components (`ScrollReveal`, `FadeIn`, `StaggerContainer`)
- [ ] Set up `PageTransition` wrapper
- [ ] Create shared `PageHeader` and `SectionDivider` components

### Phase 2: Home Page (Priority: Critical)

- [ ] Build `HeroSection` with name, subtitle, and CTA
- [ ] Implement `RotatingTagline` with Framer Motion `AnimatePresence`
- [ ] Build intro paragraph section
- [ ] Create `PillarCard` component and 3-card grid
- [ ] Scroll animations for all sections

### Phase 3: Blog Integration (Priority: High)

- [ ] Implement RSS fetching utility (`/lib/rss.ts`)
- [ ] Build `BlogPostCard` component
- [ ] Build `BlogPostList` with stagger animations
- [ ] Create Blog page with server-side data fetching
- [ ] Error/fallback handling

### Phase 4: YouTube Page (Priority: High)

- [ ] Create YouTube data file with placeholder content
- [ ] Build `VideoCard` component (thumbnail + hover play overlay)
- [ ] Build `VideoGrid` with responsive 3-column layout
- [ ] Implement `VideoModal` lightbox player
- [ ] Grid stagger animations

### Phase 5: About Page (Priority: High)

- [ ] Create About content data file
- [ ] Build `AboutSection` component with prose layout
- [ ] Build `TechBadge` component
- [ ] Implement section-by-section scroll reveal
- [ ] Section dividers

### Phase 6: Experiences Page (Priority: Medium)

- [ ] Create Experiences data file with placeholder entries
- [ ] Build `Timeline` component (vertical line + nodes)
- [ ] Build `TimelineCard` with alternating layout
- [ ] Implement left/right slide-in animations
- [ ] Style "upcoming" events differently

### Phase 7: Polish & SEO (Priority: Medium)

- [ ] Custom 404 page
- [ ] Open Graph and Twitter meta tags
- [ ] `robots.txt` and `sitemap.xml` generation
- [ ] Accessibility audit (keyboard nav, ARIA labels, color contrast)
- [ ] Performance optimization (image lazy loading, code splitting)
- [ ] Lighthouse score > 90 on all metrics

### Phase 8: Deployment (Priority: High)

- [ ] Configure `next.config.js` for static export
- [ ] Create GitHub Actions deploy workflow
- [ ] Test build and deployment
- [ ] Verify CNAME / custom domain setup
- [ ] Final cross-browser and mobile testing

---

## 12. Open Questions & Future Scope

### Open Questions

1. **Custom domain?** Is `melihyabas.github.io` the final domain, or will a custom domain (e.g., `melihyabas.com`) be used?
2. **Photography/Images?** Should the About and Experiences pages include personal photos? If so, where will they be sourced?
3. **Blog language?** The Blogspot blog appears to be in Turkish. Should the RSS excerpts on this English site be displayed in their original Turkish, or should there be a note indicating the language?
4. **YouTube channel URL?** What is the actual YouTube channel to link to?
5. **Social links?** Which social profiles should be in the footer (GitHub, LinkedIn, Twitter/X, Instagram, etc.)?

### Future Enhancements (Post-Launch)

- **Contact form** — Simple form using Formspree or EmailJS (no backend needed)
- **Reading list / Bookshelf** — A curated list of influential books
- **Music corner** — Spotify embed of favorite playlists or guitar covers
- **Internationalization (i18n)** — Turkish language toggle
- **Analytics** — Privacy-respecting analytics (Plausible, Umami, or Vercel Analytics)
- **Blog migration** — Eventually host blog content natively on the site (MDX-based)
- **Dark/Light mode toggle** — If user demand exists (not planned for v1)
- **Resume/CV download** — PDF generation from structured data

---

> *"Every system is perfectly designed to get the results it gets."*  
> *This document is the system. The website is the result.*

---

**End of Project Plan**
