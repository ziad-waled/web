# SteelBridge Engineering

A premium, production-quality marketing website for a fictional structural
engineering and steel fabrication firm. Built with Next.js 15 (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

## Design concept

Dark steel palette (`steel-950` → `steel-50`) with a signal-amber accent
(`amber-500`), built around a recurring **blueprint / technical-drawing**
motif: corner registration marks (`<Frame>`), a faint engineering grid
background, monospace "spec label" tags (e.g. `SX-04.1`), and abstract
SVG line-art standing in for project photography. Display type is
Archivo (condensed, industrial), body copy is Inter, and all data/labels
use JetBrains Mono.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

Fonts are loaded via `next/font/google` at build time, so the **first
build requires an internet connection** to fetch Archivo, Inter, and
JetBrains Mono (they're then self-hosted — no runtime requests to Google).

## Project structure

```
app/                      Routes (App Router)
  layout.tsx              Root layout: fonts, SEO metadata, global chrome
  page.tsx                Home
  projects/page.tsx        Projects (filterable gallery + modal)
  services/page.tsx        Services
  about/page.tsx           About (history, team, certifications, values)
  contact/page.tsx         Contact (form, offices, map)
  sitemap.ts / robots.ts    SEO
  icon.tsx                  Dynamic favicon

components/
  layout/                  Header, Footer, CustomCursor, LoadingScreen,
                           PageTransition, ScrollProgress
  home/                    Hero, StatsSection, FeaturedProjects,
                           ClientLogos, Testimonials, CTASection
  projects/                ProjectFilter, ProjectCard, ProjectModal,
                           ProjectsExplorer (client state)
  services/                ServiceCard
  about/                   Timeline, TeamSection, Certifications, MissionValues
  contact/                 ContactForm, OfficeLocations, MapEmbed, OfficeMapSection
  ui/                      Reusable primitives: Button, Container, Frame,
                           SectionHeading, PageHeader, Reveal, AnimatedCounter,
                           ProjectVisual

lib/
  data/                    All content lives here (projects.ts, services.ts,
                           site.ts). Treat this as your CMS swap-in point —
                           replace these files with calls to a real CMS
                           (Sanity, Contentful, etc.) without touching components.
  types.ts                 Shared TypeScript types
  utils.ts                 `cn()` classname helper
```

## Notable implementation details

- **Custom cursor** — disabled automatically on touch devices and when
  `prefers-reduced-motion` is set.
- **Loading screen** — shown once per session on first load.
- **Page transitions** — an amber wipe transition keyed on `pathname` in
  `PageTransition.tsx`, using Framer Motion's `AnimatePresence`.
- **Scroll-triggered animation** — `<Reveal>` wraps content in a
  `whileInView` fade/slide; `<AnimatedCounter>` drives the stats section.
- **Project gallery** — category filtering and the detail modal are both
  client components (`ProjectsExplorer`, `ProjectModal`) with keyboard
  (Escape to close), focus management, and `aria-*` attributes.
- **Contact form** — client-side validation with inline error messages;
  submission is currently simulated (no backend). Wire `handleSubmit` in
  `components/contact/ContactForm.tsx` to your email/CRM endpoint of choice.
- **Map** — uses a no-API-key Google Maps `output=embed` iframe per office,
  tinted to match the dark theme. Swap in a different provider if preferred.
- **Accessibility** — semantic landmarks, skip-to-content link, visible
  focus rings, reduced-motion handling, and labeled form fields throughout.

## Before going live

1. Update `metadataBase` / the `siteUrl` constant in `app/layout.tsx`,
   `app/sitemap.ts`, and `app/robots.ts` to your real domain.
2. Replace the placeholder content in `lib/data/` with real project,
   team, and office data.
3. Wire the contact form to a real submission endpoint.
4. Optionally swap the abstract `ProjectVisual` line-art for real project
   photography (add `next/image` with your own asset pipeline).
