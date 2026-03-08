# Jayani Immidi — Portfolio Website

A **competition-ready** personal portfolio website for Jayani Immidi — AI & Software Developer. Built with Next.js 14, Tailwind CSS, and Framer Motion for premium animations and glassmorphism UI.

---

## ✨ Features

- 🌑 **Ultra-dark premium dark theme** (`#020210` base)
- 🫧 **Glassmorphism** — frosted glass cards with backdrop-blur
- 🌈 **Gradient accents** — purple → cyan → indigo palette
- 🎭 **Framer Motion animations** — scroll-triggered, staggered, spring-based
- 🖱️ **Custom cursor** — glowing dot + ring that follows the mouse
- ⚡ **Loading screen** — animated entry with spinning ring
- 📱 **Fully responsive** — mobile-first, works on all screen sizes
- 🎯 **Active section detection** in navbar
- 🔍 **Project filtering** by category
- 🪟 **Project modals** — detailed expandable view for every project
- ⌨️ **Typewriter animation** in hero section
- 🌊 **Parallax scrolling** in hero
- 🧭 **Timeline** for Experience & Achievements section
- 📬 **Contact form** with toast notifications

---

## 🗂️ Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, animations, utilities
│   ├── layout.tsx           # Metadata, fonts, root layout
│   └── page.tsx             # Main page — composes all sections
│
├── components/
│   ├── LoadingScreen.tsx    # Animated entry loading screen
│   ├── CustomCursor.tsx     # Custom mouse cursor with spring physics
│   ├── Navbar.tsx           # Fixed nav with active section + mobile menu
│   ├── Hero.tsx             # Hero section with parallax + typewriter
│   ├── About.tsx            # About section with stats + code card
│   ├── Skills.tsx           # Filterable skills grid
│   ├── Projects.tsx         # Project cards + modal detail view
│   ├── Experience.tsx       # Alternating timeline
│   ├── Contact.tsx          # Contact form + social links
│   └── Footer.tsx           # Footer
│
├── data/
│   ├── projects.ts          # All 7 project definitions
│   └── skills.ts            # All skills with categories
│
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

You need **Node.js v18+** installed.

**Install Node.js:**
- Download from [nodejs.org](https://nodejs.org) — choose the LTS version
- Or use NVM (recommended): [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

```powershell
# Verify Node.js installed correctly
node --version   # should be v18+
npm --version    # should be v9+
```

### Installation

```powershell
# Navigate to project folder
cd "d:\PROJECTS\Portfolio"

# Install all dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```powershell
npm run build
npm start
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#020210` | Page base |
| Surface | `rgba(255,255,255,0.03)` | Cards |
| Border | `rgba(255,255,255,0.07)` | Card borders |
| Purple | `#a855f7` | Primary accent |
| Cyan | `#22d3ee` | Secondary accent |
| Pink | `#f472b6` | Tertiary accent |
| Indigo | `#818cf8` | Fourth accent |

### Typography

- **Display/Headings**: Space Grotesk (700–800 weight)
- **Body**: Inter (400–500 weight)
- **Code/Mono**: System monospace

### CSS Utilities (in `globals.css`)

```css
.gradient-text       /* Purple → cyan gradient text */
.glass               /* Glassmorphism card surface */
.glass-medium        /* Stronger glassmorphism */
.glow-purple         /* Purple box-shadow glow */
.glow-cyan           /* Cyan box-shadow glow */
.dot-grid            /* Dot pattern background */
.line-grid           /* Line grid background */
.gradient-border-card /* Card with animated gradient border on hover */
.btn-primary         /* Gradient primary button */
.input-field         /* Form input with glow focus */
.section-badge       /* Section label pill */
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 14.2.3 | React framework |
| `framer-motion` | ^11.2 | Animations |
| `react-type-animation` | ^3.2 | Typewriter effect |
| `lucide-react` | ^0.378 | Icons |
| `react-hot-toast` | ^2.4 | Toast notifications |
| `tailwindcss` | ^3.4 | Utility CSS |
| `clsx` | ^2.1 | Conditional classnames |
| `tailwind-merge` | ^2.3 | Tailwind class merging |

---

## 🖥️ Sections Overview

1. **Hero** — Full-viewport with animated floating orbs, typewriter role animation, and parallax effect
2. **About** — Split layout with storytelling text, stats grid, and JSON-style tech card
3. **Skills** — 36 technologies organized into AI/ML, Backend, Frontend, Tools — with filter tabs
4. **Projects** — 7 projects in filterable grid — each card opens a detailed modal
5. **Experience** — Alternating timeline of education, achievements, and milestones
6. **Contact** — Contact form with validation + social links + availability status
7. **Footer** — Clean footer with navigation + social icons

---

## 🏆 Projects Featured

1. **NeuroGPT** — Emotion-Aware AI Chatbot (LangChain, Wav2Vec, EmoBERT)
2. **Decentralized Health Wallet** — Blockchain Medical Records (IPFS, AES, NFTs)
3. **AI DevOps Agent** — Autonomous GitHub Analyzer (LLMs, Security Scans)
4. **Lesson-to-Story AI Tutor** — Educational AI (Multi-agent, LangChain)
5. **SalAIry** — Salary Intelligence System (LLMs, FastAPI, Analytics)
6. **BrokeNoMore** — Smart Expense Tracker (React, Node.js, MongoDB)
7. **FunDaMentals** — Gamified Java Learning Platform (MVC, JavaFX)

---

## ⚙️ Customization

### Update personal info
- Edit `components/Hero.tsx` — name, tagline, social links
- Edit `app/layout.tsx` — SEO metadata
- Edit `components/About.tsx` — bio text, stats, focus areas

### Update projects
- Edit `data/projects.ts` — add/modify project entries

### Update skills
- Edit `data/skills.ts` — add/modify skill entries

### Update experience
- Edit `components/Experience.tsx` — `timelineEntries` array

### Update contact + social links
- Edit `components/Contact.tsx` — `socialLinks` array + email
- Edit `components/Footer.tsx` — social links

### Change color theme
- Edit `app/globals.css` — update CSS custom properties
- Edit `tailwind.config.ts` — update theme extension colors

---

*Built with ❤️ for Jayani Immidi's competition portfolio — Next.js 14 + Tailwind CSS + Framer Motion*
