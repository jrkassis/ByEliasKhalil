# Elias Khalil — Project Context

Living project brief. **Update this file after every prompt** with any new decisions, feedback, assets, or constraints.

---

## Project overview

- **Client / brand:** By Elias Khalil (official name lockup: **“by Elias Khalil”** with italic *by*)
- **Business:** Luxury wedding & event planning (global creative house)
- **Goal:** Redesign an existing website so it feels **artistic, pretty, professional, premium, and luxurious**
- **Freelancer goal:** Site should be portfolio-worthy, **very fast**, **responsive**, and ready for a **CMS later**
- **Workspace:** `C:\Users\user\Desktop\Freelance\Elias Khalil`

---

## Source material reviewed

Screenshots provided (current AI-generated / preview site):

1. **Home** — Celestial hero with planet lineup, intro, “Our World,” legacy + form, galleries, stats, CTA mansion, footer
2. **Portfolio** — Cream nav, muddy hero, category filters, broken masonry with empty beige tiles, chocolate CTA
3. **About** — Soft/low-quality hero, Elias portrait + bio, values grid, offices + corporate group photo, CTA, footer
4. **Liked section crops** — Stats bar; Conversation CTA + footer; Our World orbital map; Our Presence / 3 Global Offices

User will provide **source code** later so work edits the existing project rather than rebuilding from scratch.

---

## Problems with the current site

- Feels slightly **cheap** — soft / low-quality hero images, abrupt section transitions
- **Literal planet lineup** competes with brand and photography
- Layouts feel **template-like** / blocky; empty portfolio grid tiles look unfinished
- Celestial theme on Home doesn’t carry consistently to Portfolio / About
- Work is not visible **instantly** enough on Home
- Form labels / small type sometimes too faint
- Heavy chocolate bands and hard light↔dark cuts

---

## Agreed design direction

### Positioning

**Couture celestial** — night sky, gold orbits, soft constellation light, filigree — **not** sci-fi / cartoon planets.  
Celestial = **frame / atmosphere**. Event photography = **content**.

### Locked client choices

| Decision | Choice |
|----------|--------|
| Hero concept | **A** — Full-bleed event photo + soft celestial overlay |
| Work placement | Attractive hero, then work **one small scroll down** (right under first viewport) |
| Celestial intensity | **B** — Bolder (WORLD / orbit language), but **premium, not childish or cheap** |
| Preview scope | **All core screens** — Home, Portfolio, About (+ Services on About) |
| Focus for now | **Client approval preview** — all linked pages |
| Brand name | **by Elias Khalil** (italic *by*) |
| Celestial intensity feedback | **Perfect** (confirmed after preview) |
| Hero motion | Prefer **animated still** (Ken Burns) over background video for now |

### Visual system

- **Night** `#0A0908`
- **Cream** `#F4EFE6`
- **Chocolate** `#2C211C`
- **Gold** `#C4A46A` (lines, underlines, orbits — not shiny chrome)
- **Display type:** High-contrast luxury serif (preview uses Cormorant Garamond)
- **UI/body:** Refined sans (preview uses Outfit) — never tiny/faint
- **Celestial vocabulary:** Thin gold orbital arcs, soft star-dust, constellation dots, corner filigree, dark = night sky / cream = daylight gallery
- **Motion (premium):** Gold orbit draw-in; portfolio hover scale; **slow hero/CTA image drift (Ken Burns)**; subtle orbit “breath” on Our World — no spinning planets

---

## Sections to keep & refine (from client screenshots)

Keep these layouts structurally; elevate into the new style (done in preview):

1. **Stats bar** — `250+ Creative Specialists`, `3 Global Offices`, `100+ Interns Trained`, `15+ Years of Excellence`
2. **Conversation CTA + Footer** — email + “Begin the Conversation” over architecture image; 3-column footer (brand / Navigate / Follow)
3. **Our World** — orbital destinations: Dubai, Paris, Beirut, Bodrum, Istanbul, Europe
4. **Our Presence** — 01 Headquarters, 02 Gulf Office, 03 Europe Office (no generic team photo as focal)

### Refinements applied in preview
- Logo: italic *by* + Elias Khalil
- Our World: gold rings, star field, glowing core, clearer labels, soft ring animation
- Stats: cream-muted band, serif figures, hairline dividers
- Presence: gold top rules, serif titles
- Converse CTA: sharper villa image + Ken Burns + left-aligned CTA
- Footer: liked structure in cream/gold system

---

## Hero motion vs video (decision)

**Use slow Ken Burns on a high-quality still** as default. Video only if client supplies custom footage later.

---

## Tech stack (agreed)

**Next.js (App Router)** — SSG + `next/image`; CMS later via Sanity or Payload. Not plain HTML-only; not a plain React SPA.

---

## Preview artifact

- **Path:** `preview/` — multi-page static preview
  - `index.html` — Home
  - `portfolio.html` — Full portfolio grid
  - `about.html` — Founder, values, offices, services
  - `contact.html` — Split contact page (form + candlelit image side)
  - `styles.css`, `preview.js`
- **Local preview server:** `python -m http.server 8137 --directory preview` → http://localhost:8137
- **Current scope:** All three core screens linked via shared nav + footer
- **Status:** Client-approval ready (premium-frontend-ui pass applied)
- **Premium upgrades (Jul 2026):** Preloader, native scroll (Lenis removed — caused lag), static grain tile, scroll-hide nav, mobile menu, hero word-split, scroll reveals, magnetic CTAs, working portfolio filters, celestial continuity on inner pages
- **Images:** Unsplash placeholders until real assets arrive

### Landing page audit (premium-frontend-ui)

| Gap | Fix applied |
|-----|-------------|
| No entry sequence | Brand preloader with gold line sweep |
| Static nav | Fixed glass header, hides on scroll down |
| No mobile nav | Full-screen mobile menu |
| Flat hero typography | Word-split stagger on brand name |
| No scroll narrative | Intersection Observer section reveals |
| Missing texture | SVG film-grain overlay |
| Small faint UI type | Body 16px base; nav/labels bumped |
| Buttons feel static | Magnetic hover on primary CTAs (pointer devices) |
| No smooth scroll | ~~Lenis via CDN~~ → **native scroll** (Lenis caused severe lag) |
| Portfolio/About missing | New pages with shared design system |

---

## Still needed from client / user

- [ ] Source code of the existing site
- [ ] Best 6–10 approved event photos (hero + featured work quality)
- [ ] Confirm real phone numbers / social handles for footer
- [ ] Optional: more liked-section screenshots
- [ ] Optional later: custom hero video
- [ ] Final copy / project names if replacing placeholders

---

## Build workflow

- **Agent skill:** `github/awesome-copilot@premium-frontend-ui` — immersive UI craftsmanship (motion, typography, scroll narratives, performance guardrails)
- **Install:** Project + user `.agents/skills/premium-frontend-ui/` (CLI clone was slow; installed manually from GitHub)
- **Apply to:** Next.js build — Framer Motion, Lenis smooth scroll, staggered hero entrances, scroll-driven sections, magnetic CTAs, film-grain texture, `prefers-reduced-motion` + touch-safe hover

---

## Conversation log (high level)

1. Home screenshot → critique & direction
2. Portfolio + About screenshots
3. Plan locked (1A, work under viewport, celestial B, Home focus)
4. Preview → celestial/hero approved; Ken Burns chosen
5. Stack → Next.js + future headless CMS
6. `context.md` created
7. Liked sections (stats, converse+footer, Our World, Presence) → refined into preview
8. User chose **premium-frontend-ui** skill for completing the site build
9. Preview completed: Portfolio + About pages; landing page premium-frontend-ui audit applied
10. Perf fix: Lenis removed, grain simplified, no backdrop-filter, translate-only Ken Burns, animations paused while scrolling
11. Contact page added (form + side image); navbar half-hidden bug fixed (full hide offset + 14px scroll hysteresis); all Contact links → `contact.html`

---

## Update rule

After **every** subsequent user prompt, append or revise this file with new decisions, feedback, assets, stack/CMS changes, and open questions. Mark superseded items clearly.

---

## Direction change (2026-08-11) — Home hero redesign

**Client feedback:** Site felt "too simple," not artistic or "Universe"-like. **Client explicitly does not care about conversions, SEO, or work-visibility timing** — priority is pure artistic/aesthetic impact. This *supersedes* the earlier locked choice that work must appear "one small scroll down."

### New home hero concept — "Universe" set piece

Replaced the old full-bleed photo + thin gold-orbit overlay with a genuine cosmic scene:

- **Cosmic backdrop:** layered nebula clouds (violet/rose/indigo blurred blobs), 3-depth parallax starfield, occasional comet sweeps, a rotating gold orbital ring system (3 rings, different speeds/directions) with glowing destination dots — all always-on via CSS keyframes (works even with no JS).
- **Portal, not full-bleed photo:** the event photography now lives in a large circular "portal" (gold ring border, glow, Ken Burns drift) floating to the right of the headline on desktop, above it on mobile — the photo reads as a window into the universe rather than a flat background.
- **Kinetic typography:** brand name ("by Elias Khalil") now does a GSAP SplitText character-by-character reveal instead of the old word-by-word split.
- **Layout:** asymmetric split (text left, portal right) on desktop ≥1000px; stacked (portal above text) on mobile — more editorial than the old centered layout.
- New CSS variables: `--violet`, `--violet-soft`, `--rose`, `--nebula-blue` (nebula palette, kept low-opacity so night/gold still dominates — not garish).

### Tech: GSAP added

- Added GSAP 3.13.0 (core, ScrollTrigger, SplitText) via jsdelivr CDN in `index.html`. SplitText is free since the Webflow acquisition (no Club GSAP needed) — **must use gsap@3.13.0+**, not 3.12.x (SplitText wasn't public before 3.13).
- New `preview/hero.js`: entrance timeline (SplitText char reveal, portal/eyebrow/tagline/actions stagger), pointer parallax across depth layers (`gsap.quickTo`), scroll-scrubbed parallax (ScrollTrigger, `scrub: true`, no pin), ambient pulse on orbit destination dots. Wrapped in `gsap.matchMedia()` with `reduceMotion`/`finePointer` conditions.
- **Architecture principle:** ambient motion (nebula drift, star twinkle, ring spin, comets) is pure CSS `@keyframes` — always renders even if the GSAP CDN fails or JS is blocked. GSAP only adds the choreographed entrance, kinetic text split, and parallax on top. Progressive enhancement, not a hard dependency.
- Preloader (`preview.js`) now dispatches a `preloader:done` window event when it hides; `hero.js` waits for that event before starting the entrance timeline, so the reveal plays out in view instead of finishing behind the preloader unseen.
- Renamed hero-scoped CSS classes to avoid collision with the generic scroll-reveal system: `.hero-content .reveal` → `.hero-content .hero-reveal`.

### Local preview server

- `python`/`python3` are not runnable from this machine's PowerShell (Windows Store alias issue). Added `preview/serve.js` (plain Node static file server, no deps) and `.claude/launch.json` pointing at it (`node preview/serve.js`, port 8137) — serves from the project root so both `/preview/*` and `/images/*` resolve. Use this instead of the old `python -m http.server` instructions.

### Verified (this session)

- Desktop (1280px) and mobile (375px) layout/order via computed styles — correct grid columns, portal sizing, text alignment.
- All image requests 200 OK, no console errors from the animation code (one stale `SplitText is not defined` console entry traced to an earlier CDN-version test — not a live bug, confirmed via direct runtime checks and by fast-forwarding `gsap.globalTimeline`).
- Could **not** capture an actual pixel screenshot this session — the Browser pane reported "not displayed / not compositing" throughout (client-side panel state, outside tool control). Verification was done via DOM/computed-style/network inspection instead. **Recommend a visual pass in a normal browser before client sign-off.**

### Still open

- Full home page (Featured Worlds, Our World, Portfolio sample, Stats, Presence, Converse CTA) was **not** redesigned this pass — only the hero, per the client's "especially the hero" emphasis. These sections still use the pre-existing celestial-B styling and may now feel visually inconsistent with the bolder hero; likely the next thing to revisit if the client approves this direction.
- No new photography supplied yet (still using Unsplash/WhatsApp placeholders per earlier note).
