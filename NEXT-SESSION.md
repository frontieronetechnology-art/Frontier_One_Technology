# Next session — start here

Session date: **2026-08-04**. Branch `main`, working tree has uncommitted changes
(nothing was committed — commit when the client signs off).

`npm run build` passes: **37 routes, 0 errors**.

---

## What this session delivered (client change list, 1–9)

| # | Ask | Status | Where |
|---|---|---|---|
| 1 | Why Frontier One → 6 reasons | ✅ | `lib/data.js` `WHY_CARDS`, `components/WhyPinned.jsx` (pin now 78vh/card), lede in `app/page.jsx` |
| 2 | New home section: how clients can work with us | ✅ | `lib/data.js` `ENGAGEMENT_MODELS`, new `components/EngagementModels.jsx`, mounted in `app/page.jsx` between BigMarquee and Our Approach |
| 3 | Full structure on every service page | ✅ | `lib/data.js` `SERVICE_DETAIL`, rewritten `app/services/[slug]/page.jsx`, **new** `app/services/page.jsx` hub |
| 4 | Smoothness (mobile + desktop) | ✅ measured, ⚠ see "unverified" | `app/globals.css`, `components/StackCards.jsx`, `components/Hero.jsx`, `components/Navbar.jsx` |
| 5 | CTA buttons → Explore Our Services / Schedule a Consultation | ✅ | `components/CTASection.jsx` |
| 6 | Remove X/Twitter | ✅ (one caveat) | `components/Footer.jsx`, `app/contact/page.jsx`, `lib/seo.js` |
| 7 | SEO everywhere | ✅ | every `app/**/page.jsx` metadata, `lib/seo.js`, `app/sitemap.js` |
| 8 | Our Approach not readable | ✅ | `components/StackCards.jsx` veil gradients |
| 9 | Statistics shown smoothly | ✅ | `components/NumbersBoard.jsx`, `components/Odometer.jsx` |

### Structural additions worth remembering
- **`/services` hub page now exists** and is in `NAV_LINKS` + `FOOTER_LINKS` + sitemap
  (priority 0.95). Hero CTA and the pre-footer CTA both point at it. Nav link padding
  dropped to `px-3` at `lg` (`xl:px-4`) so six items + the CTA still clear 1024px.
- **Bug fixed:** `.btn` is an *unlayered* rule in `globals.css`, so it beat Tailwind's
  `hidden` utility (utilities live in `@layer utilities`, unlayered CSS always wins).
  The desktop "Schedule a Consultation" button was therefore rendering on phones and
  crushing the logo capsule. Fixed by wrapping it in `<div className="hidden lg:block">`.
  **If any other `.btn` / `.card` / `.cta-chip` ever needs a responsive `hidden`, wrap it —
  do not put `hidden` on the element itself.**

---

## Still open / next actions

1. **Client images** — `public/images/home/why-05.webp` and `why-06.webp` do not exist yet
   (cards 5 and 6 render the deliberate drafting-plate placeholder). The client said they
   will supply them. Everything else on the home page has its image.
2. **`/services` hub hero** reuses `services/cloud-solutions.webp`. A dedicated
   `services/hero.webp` would be better — add it and change `image=` in
   `app/services/page.jsx`.
3. **Unverified visually:** the last change of the session made the metrics board
   **2 columns on mobile** (`components/NumbersBoard.jsx`, was 1 column = ~5 phone-screens
   of scrolling) with tighter `gap-5 / p-5` on small screens. It **builds** but the mobile
   screenshot run was cut short — **check this first next session** at 412px width. If the
   two narrow cells feel cramped, the fallback is `grid-cols-1 min-[420px]:grid-cols-2`.
4. **Real-device perf check.** All the perf work below is structurally correct, but the
   headless harness runs on a desktop GPU and only measures main-thread cost — it cannot
   reproduce mobile GPU cost. Test on an actual mid-range Android before promising the
   client it is fixed.
5. **Responsive image variants — investigated, not done.** Source photos are 1400×1800 /
   1600×900 and are served at full size to phones (`output: export` + `images.unoptimized`).
   Blocking all images made *no* measurable difference to frame times, so this was
   deprioritised — but it is still the right call for data usage and GPU memory. Plan:
   generate `-sm.webp` (900px wide) next to each file with PIL (available, v12.2) and switch
   `components/Media.jsx` to `<picture>` with `<source media="(max-width: 768px)">`.
   `srcset`/`sizes` alone will **not** help — at 2.6× DPR the browser picks the large file anyway.
6. **`twitter:card` meta still in the HTML.** Next 15 derives `twitter:*` from `openGraph`
   and ignores `twitter: null` (tested at root and per page — both no-ops, so the no-op code
   was removed again). There is no X account, link, or handle anywhere on the site. If the
   client insists on zero occurrences of the word, the only route is dropping `openGraph`
   per page, which costs link previews — don't do it without asking.
7. `CONTINUE-HERE.md` still describes the remaining image-generation pipeline (careers,
   about, industries, blog assets). That work is unrelated and untouched.

---

## Perf work done (so it is not redone blindly)

Measured on a throttled Pixel 7 emulation against the **production** export:
frames >50ms went **15 → 3** on mobile; desktop frames >33ms went **30 → 10–18**.

- `dvh → svh` for `.hero-screen` / `.hero-inner` on coarse pointers and for the StackCards
  height. **This is the important one:** `dvh` re-resolves as a phone's address bar
  collapses, so the hero silently changed height mid-scroll and relayouted the document
  under the finger. That is the best explanation for the client's "chipak ke chalti hai".
- `mix-blend-mode` forced to `normal` on coarse pointers (blend = backdrop readback per frame).
- `.mesh-glow` blur dropped to `none` on coarse pointers (the radial already fades out).
- `.grain::after`: `background-size: 256px` (it was resolving a feTurbulence filter across a
  4-viewport plane), overscan `-50% → -12%`, and `translateZ(0)` promotion.
- `will-change: transform` on `.animate-spin-slow` / `-slower` (viewport-scale SVG plates).
- StackCards: recede now resolves over the next **two** cards instead of the whole section,
  so at most 2–3 cards transform per frame instead of all eight; permanent `willChange`
  removed.
- Hero: **every** scroll-linked style now passes through one `motional = isDesktop && !reduce`
  gate (the cutout plate, copy block and trust strip were still transforming on phones).
- NumbersBoard scan line moved from `top` (a layout write every scroll frame across an
  eight-cell grid) to a `y` transform.

**Tried and reverted — do not repeat:** removing the `filter: blur()` settle from
`Reveal` / `RevealItem` / `SplitReveal` made **no** measurable difference, so the blur was
put back to preserve the feel.

---

## Tooling used (scratchpad is temporary — recreate if needed)

Playwright is not a project dep; it was driven from the global install:

```js
import { chromium, devices } from
  "file:///C:/Users/mohit/AppData/Roaming/npm/node_modules/@playwright/mcp/node_modules/playwright/index.mjs";
const browser = await chromium.launch({ executablePath:
  "C:/Users/mohit/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe" });
```
(the bundled browser version is mismatched, hence the explicit `executablePath`)

Scripts written this session, in
`%LOCALAPPDATA%/Temp/claude/D--Client-DataBase-fonttier-web/<session>/scratchpad/`:
`shot.mjs` (scroll to y, screenshot) · `walk.mjs` (find a section by its text, then shoot) ·
`mob.mjs` (same, Pixel 7) · `probe.mjs` (section offsets) · `jank.mjs` (rAF frame times,
mobile) · `jank2.mjs` (real wheel events so Lenis actually runs — **required for desktop**,
`window.scrollBy` is swallowed by Lenis) · `where.mjs` (attributes slow frames to a scrollY band).

### Gotchas that cost time
- **Measure the production export, not `next dev`.** Dev-mode numbers are meaningless.
- Serve it with `cd out && python -m http.server 8099`, and **kill that server before the
  next `npm run build`** — otherwise the build dies with `EBUSY: rmdir 'out'`. Same applies
  to leaving a Bash shell `cd`'d into `out/`.
- Port 3000 is occupied by something else on this machine; `next dev` lands on 3001.
- A `/* … */` comment inside a JSX opening tag **is** valid here (SWC accepts it) — verified
  by a clean build, so no need to keep hoisting them out.
