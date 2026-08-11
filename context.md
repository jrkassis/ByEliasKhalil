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

- No new photography supplied yet (still using Unsplash/WhatsApp placeholders per earlier note).

---

## Full home page — Universe extension (2026-08-11, session 2)

**Client ask:** Extend the hero's "Universe" upgrade to the rest of the home page; make sure everything works and looks good.

**Scope decisions (client-confirmed via questions):**
- Cream/daylight sections (Featured Work, Portfolio sample, Presence, Stats) **keep their cream backgrounds** — "bridge with accents" rather than full night takeover, to preserve the day/night pacing and keep photography readable.
- Motion: **moderate** — not CSS-only ambient, not full hero-level choreography (no pointer-parallax or per-section SplitText everywhere). A handful of chosen "premium" moments instead.

**What was built:**
- **Bridging accents on cream sections** — small gold "seam" arc dividers (SVG, draw-in on scroll via the existing `.reveal` system, shared `#seamGrad` gradient defined once near the top of `<body>`) above Featured Work and Presence headings; low-opacity corner star-dust (`::before` pseudo-elements, no markup) on Featured, Portfolio sample, Presence, and Stats; small gold "orbit-node" dot marks on the Stats band.
- **Our World** brought up to hero-level intensity: added `.world-nebula` (violet/rose blur blobs, same `nebulaDrift` keyframes as the hero), a lone `.world-comet`, and two `.orbit-travel` markers that slowly orbit the outer/mid rings (separate from the fixed destination labels) — previously this section only had static rings + a breathing-opacity effect.
- **Converse CTA + footer**: added `.converse-stars` (star-dust layer) and a small gold node mark at the top of the footer, so the page closes in the same register it opens in.
- **Feature cards / portfolio tiles**: added a gold ring reveal on hover (border + inset glow) instead of plain image scale only.
- **New `preview/home.js`** (GSAP, loaded only on `index.html`, after `hero.js`): word-level kinetic reveal on the four big section headings (SplitText, gated behind `document.fonts.ready` to avoid mis-measuring against fallback-font metrics); Stats band count-up (0 → target on scroll-in); Our World orbit "assembles" on scroll-in (rings scale up, core/travel markers/destination labels stagger in); a light scroll-parallax drift on the Converse CTA media wrapper (not the image itself — the image already runs its own Ken Burns CSS animation, so the parallax targets the wrapper to avoid the two fighting over `transform`).
- **Known conflict avoided:** `.orbit-ring` already runs a continuous CSS `orbitBreath` opacity animation; the new GSAP entrance for it animates `scale` only (never opacity/autoAlpha) so the two don't fight over the same property. This was caught and fixed during QA — worth remembering if more motion is layered onto elements that already have a CSS `animation:` in `styles.css`.
- Every new motion piece follows the existing progressive-enhancement pattern: if GSAP fails to load, or the user prefers reduced motion, elements are never hidden via JS in the first place (nothing depends on JS to render), matching `hero.js`'s established approach.

**Verification:** Same Browser-pane compositing limitation as the prior session (screenshot tool reports "not compositing frames") — verified instead via DOM/computed-style/network inspection and by force-advancing `ScrollTrigger` animations to `progress(1)` to confirm end states. All four pages (`index`, `portfolio`, `about`, `contact`) checked for console errors and horizontal overflow at desktop (1280px) and mobile (375px) — none found. **A visual pass in a normal browser is still recommended before client sign-off** (same caveat as the hero session).

**Minor known item (not fixed, low priority):** `hero.js`'s brand-name `SplitText.create()` call still runs without waiting for `document.fonts.ready` (same class of issue fixed in `home.js`'s heading splits) — cosmetic risk only (a possible one-time text-position jitter on very slow font loads), left untouched since the hero was already client-approved and this file wasn't otherwise in scope this session.

---

## Bug fixes — real browser testing (2026-08-11, session 3)

Client tested in an actual browser (first real visual pass — prior sessions could only verify via DOM inspection, see the Browser-pane compositing caveat above) and reported three issues.

1. **Portal (hero circle) disappeared almost immediately on scroll.** Root cause: `hero.js`'s scroll-scrubbed portal tween used `gsap.to(portal, {...})`, created synchronously on load — *before* the entrance timeline had run. GSAP captured the tween's implicit "from" state at that moment, which was the portal's pre-entrance hidden state (`autoAlpha:0` from an earlier `gsap.set`). Once the entrance later animated the portal to visible and the user started scrolling, this second tween re-asserted its own interpolation *from that stale 0*, snapping the portal back toward invisible on the very first bit of scroll. Fixed by switching to `gsap.fromTo(portal, {yPercent:0, scale:1, autoAlpha:1}, {...})` with explicit values, removing the dependency on load-order/timing entirely.
2. **Scroll became erratic/fast in Featured Work and Portfolio.** Root cause: `home.js` was using GSAP `SplitText` to split the four section headings into one `<div>` per word for a kinetic reveal. Restructuring text into inline-block divs can shift a heading's line-wrap and height right as it happens, which invalidates every `ScrollTrigger` positioned below it on the page — causing recalculation jumps mid-scroll. Fixed by dropping `SplitText` from these headings entirely in favor of a plain whole-element fade/rise (no DOM restructuring, no layout-shift risk). Also added a defensive one-time `ScrollTrigger.refresh()` on `window.load` as insurance against any other layout drift (e.g. from images). `hero.js`'s own brand-name `SplitText` is untouched — short single-line text, not implicated, low risk.
3. **Portal enhancement (requested):** added a slowly rotating gold conic-gradient halo ring, two small satellite dots orbiting the portal at different radii/speeds (reusing the "current position" marker language from Our World's orbit-travel dots), and a breathing glow pulse on the existing ring — the portal now reads as its own small "world" rather than a static photo-in-a-circle. New classes: `.portal-halo`, `.portal-satellite` (`-a`/`-b`), `portalGlowPulse`/`portalHaloSpin` keyframes. All paused during scroll (existing `body.is-scrolling` perf pattern) and covered by the global `prefers-reduced-motion` kill-switch.

**Verified via:** forcing each `ScrollTrigger`'s animation to specific `.progress()` values directly (bypasses the pane's non-compositing limitation) — confirmed portal opacity now interpolates smoothly 1 → 0.75 across the hero's scroll range with no dip toward 0, confirmed headings have zero child elements (no SplitText DOM restructuring) and still reveal correctly, confirmed no horizontal overflow or console errors at desktop (1280px) and mobile (375px).

---

## Round 2 fixes + Careers page (2026-08-11, session 4)

Client re-tested (screenshot showed the Our World section, apparently on a narrow/mobile-ish viewport) and reported the scroll issue was **still happening**, plus a new visual bug, plus two new feature requests.

**1. Scroll still fast at Featured Work / Portfolio, despite the session-3 fix.** The SplitText removal fixed one real bug but evidently wasn't the whole story. Applied GSAP's documented fix for this exact class of symptom: `ScrollTrigger.config({ ignoreMobileResize: true })`, added at the top of `hero.js` (applies globally to all ScrollTrigger instances regardless of which script created them). On mobile, the browser address bar hiding/showing mid-scroll fires a `resize` event that isn't a real viewport change; ScrollTrigger's default is to recalculate all trigger positions on resize, and doing that mid-scroll produces exactly the "sudden jump" the client described. Also added `loading="lazy"` + `decoding="async"` to every below-the-fold `<img>` on the home page (Featured Work's 4, Portfolio sample's 6, Converse's 1) as a secondary mitigation — the placeholder images are large (several are 500KB–1.4MB, unoptimized camera originals) and simultaneous decode of several of them as a grid scrolls into view is a plausible contributor to jank on slower devices. **If this recurs, the next thing to check is real device/CPU-throttled profiling** — this tool's Browser pane can't capture frame timing, so root-causing beyond this point needs the client's actual browser devtools (Performance tab, "record" while scrolling through Featured Work).
**2. Our World's rings/core rendered as ovals, not circles** (visible in the client's screenshot). Root cause: `.orbit-map` intentionally goes non-square below 640px (`aspect-ratio: 0.85`, to give the stacked destination labels more vertical room), but `.orbit-ring`, `.orbit-core`, and the new `.orbit-travel` markers were sized with independent `width`/`height` percentages — percentages resolve against the container's width and height separately, so a non-square container stretched them into ellipses. Fixed by switching all of them to `width: X%; aspect-ratio: 1;` (dropping the explicit `height`) so they're always true circles regardless of the container's own proportions. Verified via `getBoundingClientRect()` at 375px width: all rings/core/travel elements now report equal width and height.
**3. New "Careers" page** (`preview/careers.html`) — client wants a place for applicants to apply, doesn't need to be functionally wired yet. Built reusing the existing design system end-to-end, no new page-level CSS beyond a small file-input skin:
   - `page-hero` (same pattern as About/Portfolio/Contact)
   - "Why Join Us" — reuses `.values`/`.values-grid`/`.value-card` (4 cards: Creative Ownership, Global Placements, Mentorship & Training, Room to Grow)
   - "Areas we're building" — reuses `.services-strip`/`.service-row` (Event Production & Operations, Design & Styling, Client Relations & Sales, Marketing/Content & Social, Internship Program)
   - Application form — reuses `.contact-page`/`.contact-form`/`.field` (same split layout as Contact). Fields: name, email, phone, area-of-interest select, portfolio/LinkedIn URL, resume/CV file upload, message. Same `mailto:` preview-form pattern as `contact.html` (`action="mailto:careers@byeliaskhalil.com"`), with an honest form-note that resume upload specifically won't transmit via a mailto form and both need real backend wiring later.
   - Added `.field input[type="file"]::file-selector-button` styling so the native file picker button matches the gold/serif system instead of looking like raw browser chrome.
   - "Careers" added to every page's header nav, mobile nav, and footer Navigate column (`index.html`, `about.html`, `portfolio.html`, `contact.html`, plus itself) — checked nav doesn't overflow/collide with the logo down to 900px (the narrowest width where desktop nav is still shown before the mobile menu takes over at 860px).
   - New image keys in `images.js`: `careersHero` → `IMG_8517.jpeg`, `careersVisual` → `IMG_8552.jpeg` (previously-unused placeholders, picked for variety — swap for real team/office photos when available).

**Still open:**
- The scroll-speed fix is a strong, well-documented candidate but not 100% confirmed against the client's exact device — flagged above for a follow-up check if it's still not fully smooth.
- Careers form is `mailto:`-based like Contact's, not a real backend — same caveat as Contact already had.

---

## New photography integrated (2026-08-11, session 4 cont'd)

Client's new photos turned out to already be on disk at `images/new_images/` (17 files, mostly 26–205KB — much lighter than the original placeholder photography, which was 500KB–1.4MB per file; this should also help the scroll-jank mitigation above). Confirmed with client: the man in black in several shots **is Elias Khalil**; captions use placeholder event details ("2026 · Private Estate") until real event name/city/year are provided.

**What they show:** a real celestial/space-themed gala — a monumental astronaut sculpture, mirrored sphere "planet" installations, a suspended moon prop, candlelit black tablescapes in a floodlit rock canyon — plus a separate bright oceanfront sunset wedding reception, and a plain logo wordmark (not used as content).

**Placements:**
| Key | File | Used for |
|---|---|---|
| `homeHero` | `4.02.47 PM (1).jpeg` (oceanfront sunset) | Home hero portal |
| `featuredMurexGala` | `5.50.01 PM (1).jpeg` (astronaut + spheres + Elias) | Featured card, renamed **"Celestial Gala"** |
| `featuredAtelierRunway` | `5.50.04 PM.jpeg` (aerial S-curve table + moon) | Featured card, renamed **"Under a Borrowed Moon"** |
| `aboutHero` | `5.50.06 PM.jpeg` (wide aerial, spotlights + moon) | About page-hero background |
| `aboutPortrait` | `5.50.07 PM.jpeg` (Elias, front-facing, by the astronaut) | About founder portrait |
| `portfolioHero` | `5.50.00 PM.jpeg` (aerial S-curve, no moon) | Portfolio page-hero background |
| `careersHero` | `5.50.09 PM.jpeg` (aerial wide, alt framing) | Careers page-hero background |
| `careersVisual` | `5.50.10 PM.jpeg` (Elias walking through the setup, candid) | Careers form-side image |

All alt text updated to match. Verified 200 OK network responses and zero console errors on all five pages after the swap.

**Not yet used** (still in `images/new_images/`, available for more placements — portfolio.html's masonry grid is the obvious next spot): 2 more oceanfront-sunset angles, the second aerial S-curve variant (`5.50.01 PM.jpeg`), 2 more tablescape/candle detail shots (`5.50.02 PM.jpeg`, `5.50.03 PM.jpeg`), a second man-among-spheres close-up (`5.50.02 PM (1).jpeg`, `5.50.04 PM (1).jpeg`), and 2 more Elias portraits near the moon prop (`5.50.08 PM.jpeg`, `5.50.08 PM (1).jpeg`).
