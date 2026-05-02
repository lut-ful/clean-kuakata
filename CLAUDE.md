@AGENTS.md

# Plastic-Free Kuakata — Project Guide

## What This Is

A single-page marketing and registration website for **Plastic-Free Kuakata**, Bangladesh's national beach clean-up event on World Environment Day, June 5, 2026. Organized by **Active Mind** and **QualFix**.

The site does three things: recruit volunteers, attract sponsors, and establish national credibility for the event. Every design and copy decision should serve one of those three goals.

Full content and design specification: [docs/plasticfreekuakata.md](docs/plasticfreekuakata.md)
Social media strategy: [docs/fb_event_plan.md](docs/fb_event_plan.md) · [docs/insta_event_plan.md](docs/insta_event_plan.md)

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16.2.4 | App Router. Read `node_modules/next/dist/docs/` before writing code — this version has breaking changes. |
| UI | React 19.2.4 | React Compiler is enabled (`reactCompiler: true` in next.config.ts). Do not write manual `useMemo`/`useCallback` — the compiler handles it. |
| Styling | Tailwind CSS v4 | **No `tailwind.config.js`**. Uses `@theme inline` in CSS. Config lives in [src/app/globals.css](src/app/globals.css). |
| Language | TypeScript 5, strict mode | |
| Linting | ESLint 9 (flat config) | `eslint.config.mjs` |

### Key breaking changes in this stack vs. common training data
- **Tailwind v4**: `@theme inline { }` block in CSS replaces `theme.extend` in config. Custom colors/fonts go there.
- **Next.js 16 App Router**: `use client` directive required for any component with hooks or browser APIs (countdown timer, scroll effects, form state).
- **React Compiler**: no manual memoization. The compiler optimizes automatically.

---

## Commands

```bash
npm run dev      # dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

---

## Architecture

This is a **single page** despite being a Next.js app. All content lives in `src/app/page.tsx` (or section components it imports). There is no routing — every nav link is an anchor scroll.

```
src/
  app/
    layout.tsx       # Root layout — fonts, metadata, global providers
    page.tsx         # The one and only page — imports all sections
    globals.css      # Tailwind v4 theme config + base styles
    favicon.ico
```

As sections are built, extract each into its own component:
```
src/
  components/
    nav/
    hero/
    stats/
    about/
    crisis/
    event/
    sponsors/
    volunteer/
    media/
    organizers/
    footer/
```

---

## Design System

### Colors
Define all of these in `globals.css` under `@theme inline`:

| Token | Hex | Use |
|---|---|---|
| `--color-teal` | `#0B6E4F` | Primary — nav, section backgrounds, headings |
| `--color-sand` | `#E8C97A` | Accent — stat numbers, highlights, CTA borders |
| `--color-coral` | `#D84040` | Alert/action — primary CTA buttons, urgency |
| `--color-offwhite` | `#F8F6F0` | Page background |
| `--color-charcoal` | `#1E1E1E` | Body text |

### Typography
- **Headings**: Playfair Display (serif, Google Fonts) — editorial, emotional weight
- **Body**: Inter (clean, readable, Google Fonts)
- Load both via `next/font/google` in `layout.tsx`. Remove Geist.

### Mobile-First
Most Bangladesh traffic is mobile on 4G. Design for 375px first. Performance targets: LCP < 2.5s on 4G, no unnecessary JS.

---

## Page Sections (in order)

| # | ID | Name | Notes |
|---|---|---|---|
| 1 | `#about` | Sticky Nav | Transparent → solid teal on scroll. Requires `use client`. |
| 2 | — | Hero | Full-viewport. Countdown timer to `2026-06-05T07:00:00+06:00`. Two CTAs. |
| 3 | — | Stats Bar | Full-width teal. 4–5 stats. |
| 4 | `#about` | About the Event | Three icon cards. |
| 5 | `#crisis` | The Crisis | Two-column. UNEP callout box. |
| 6 | `#event` | Event Details | 2×2 grid + timeline. |
| 7 | `#sponsors` | Sponsorship | 4 tiers + CTA box + logo strip. |
| 8 | `#volunteer` | Volunteer | Form (Google Form embed or Tally). 4 roles. |
| 9 | — | Media & Press | Two buttons + contact. |
| 10 | — | Organizers | Two org cards + supporting strip. |
| 11 | — | Footer | 3-column + bottom bar. |

---

## Forms

- **Volunteer form**: Embed Tally.so or Google Form iframe. ID: TBD when form is created.
- **Sponsor interest form**: Separate Tally/Google Form. ID: TBD.
- Do not build custom form backend. These forms handle storage.

---

## Countdown Timer

Target: `2026-06-05T07:00:00+06:00` (Bangladesh Standard Time, event registration opens)

The timer component must be `use client`. Use `setInterval` with 1-second ticks. Display: Days / Hours / Mins / Secs in sand-colored boxes.

---

## Analytics & Tracking

- Google Analytics 4 (add to `layout.tsx` via `<Script>` with `strategy="afterInteractive"`)
- Meta Pixel for Facebook ad tracking (same approach)
- No cookies beyond these two. Keep cookie banner minimal.

---

## SEO / OpenGraph

Add to `layout.tsx` metadata export:
- `og:title`: "Plastic-Free Kuakata — World Environment Day Beach Clean-Up 2026"
- `og:description`: "Join Bangladesh's biggest beach clean-up on June 5, 2026. 500+ volunteers. Kuakata Beach. UN-registered."
- `og:image`: Event hero image (1200×630)
- `og:url`: `https://plasticfreekuakata.com`

---

## WhatsApp Floating Button

Fixed bottom-right. Links to `https://wa.me/880XXXXXXXXX`. Coral background. Only show after hero section scrolls out of view.

---

## Bengali Language Toggle

A toggle in the nav (EN / বাং) that swaps all text content. Implement as a client-side context (`LanguageContext`) with a flat JSON object of all strings in both languages. No i18n library needed for a single-page site with two languages.

---

## Performance Rules

- Images: use `next/image` with explicit `width`/`height`. Hero image must have `priority`.
- Fonts: loaded via `next/font/google` (automatic optimization, no FLIT).
- No heavy animation libraries. CSS transitions and `@keyframes` only.
- No client-side data fetching. All content is static.

---

## Key Contacts

- **Organizer contact**: kabir@qualfix.net (QualFix)
- **General**: hello@plasticfreekuakata.com
- **Sponsors**: sponsor@plasticfreekuakata.com
- **Media**: media@plasticfreekuakata.com
- **Volunteers**: volunteer@plasticfreekuakata.com
