# Changelog

## [2026-02-08] — Domain Update

### Modified
- **`src/lib/constants.ts`**: Updated `SITE_CONFIG.url` from `https://noel.dev` to `https://me.berjalanbersama.com`. All canonical URLs, sitemap, robots, JSON-LD, and OpenGraph references now point to the correct domain.

---

## [2026-02-08] — SEO Optimization for Google Discoverability

### Added
- **JSON-LD Structured Data**: Person, WebSite, Service, Project, Contact, and BreadcrumbList schemas injected per-page for rich Google results.
- **Comprehensive SEO Keywords**: Language-specific keywords (EN/ID) targeting freelance developer search queries like "jasa pembuatan website", "full-stack developer", "ERP developer", etc.
- **Per-Page Meta Tags**: Each page (`/services`, `/projects`, `/contact`) now has its own canonical URL, alternate language links, and OpenGraph tags.
- **Enhanced Sitemap**: Added `hreflang` alternate language references and `x-default` for proper international SEO indexing.
- **Web Manifest** (`manifest.json`): PWA-ready manifest for better search engine signals and installability.
- **Robots.txt Improvements**: Added Googlebot-specific rules, host directive, and blocked internal routes (`/api/`, `/_next/`).
- **Semantic HTML Enhancements**: Footer uses `<nav>` with `aria-label`, social links have `rel="me"` for identity verification with Google.
- **Breadcrumb Schema**: Every page includes BreadcrumbList JSON-LD for Google breadcrumb display in search results.

### Modified
- **`src/lib/constants.ts`**: Added `fullName`, `profileImage`, and `keywords` (EN/ID) to site config.
- **`src/app/[locale]/layout.tsx`**: Added JSON-LD injection (Person + WebSite), manifest link, theme-color meta, preconnect hints, and enhanced meta tags (authors, creator, publisher, keywords, twitter creator).
- **`src/app/[locale]/page.tsx`**: Added Breadcrumb JSON-LD.
- **`src/app/[locale]/services/page.tsx`**: Added Services JSON-LD, Breadcrumb JSON-LD, canonical URLs, and language alternates.
- **`src/app/[locale]/projects/page.tsx`**: Added Projects JSON-LD, Breadcrumb JSON-LD, canonical URLs, and language alternates.
- **`src/app/[locale]/contact/page.tsx`**: Added Contact JSON-LD, Breadcrumb JSON-LD, canonical URLs, and language alternates.
- **`src/app/sitemap.ts`**: Enhanced with hreflang alternate links and priority tuning.
- **`src/app/robots.ts`**: Enhanced with multiple rules and host directive.
- **`src/components/layout/Footer.tsx`**: Improved semantic HTML with `<nav>`, `aria-label`, and `rel="me"` on social links.

### New Files
- `src/lib/jsonLd.ts` — All JSON-LD schema generators (Person, WebSite, Services, Projects, Contact, Breadcrumb).
- `public/manifest.json` — Web app manifest for PWA signals.

---

## [2026-02-08] — Previous Changes (cumulative)

### Added
- Initial project setup: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.
- Full website structure: Hero, About, Services, Tech Stack, Featured Projects, Work Style, CTA sections.
- Extra pages: `/projects`, `/services`, `/contact`.
- Multilingual support (English & Indonesian) with i18n routing and dictionary files.
- Profile photo (`me.png`) displayed in Hero and About sections.
- Image upload spaces for profile and project images.
- CI/CD pipeline for Vercel deployment (GitHub Actions).
- Contact information: email, WhatsApp, GitHub linked throughout.

