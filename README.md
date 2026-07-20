# Frontier One Technology — Website

Award-grade minimal enterprise site for **frontieronetechnology.com**, built by
Manhar Creatives. Next.js 15 (App Router, static export) + Tailwind CSS v4 +
Framer Motion.

## Design system — "Engineered Editorial"

- **Palette (locked, Theme Color Doc Direction B):** Ink Navy `#1B2333` on cool
  light neutrals (`#F4F6FA` / `#E9EDF3` / `#CCD4DF`), full 10-step neutral scale,
  **bronze signal accent** `#B8873A` (UI) / `#96691F` (text-safe) used ≤5% —
  eyebrow indices, focus rings, spines, active states. Semantic colors per doc.
- **Type:** Instrument Sans (display + body), Instrument Serif italic (accent
  words in headlines), JetBrains Mono (eyebrows, labels, numerals).
- **Motion:** brand curve `cubic-bezier(0.16,1,0.3,1)` everywhere; scroll-
  triggered reveals, animated counters, scroll-driven 8-step process rail,
  marquee, accordion. `prefers-reduced-motion` fully respected.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out (deploy anywhere)
```

## Structure

- `lib/data.js` — ALL site copy (client-approved text verbatim; edit here only)
- `app/` — routes: home, about, process, industries, careers (+8 job pages),
  services (6 detail pages), contact, terms, privacy, 404, sitemap, robots
- `components/` — Navbar, Footer, CTASection, HeroVisual (code-built orbital
  system), ProcessRail, Timeline, StatsBand, Marquee, Accordion, Chatbot,
  forms, icon set (hand-drawn 1.5px strokes)

## Pre-launch checklist

1. **Contact values** — replace placeholder phone/email/address/socials in
   `components/Footer.jsx`, `app/contact/page.jsx` (pending client input).
2. **Forms** — set `NEXT_PUBLIC_FORM_ENDPOINT` and
   `NEXT_PUBLIC_CAREERS_FORM_ENDPOINT` (e.g., Google Apps Script → Sheets +
   email relay). Add CAPTCHA per SRS §6.5.
3. **Google Maps** — swap `q=United+States` embed for the real office address.
4. **Chatbot** — currently a scripted on-brand widget; swap in the hosted AI
   chatbot platform at launch (SRS §5.9), keep the shell styling.
5. **Images/logos** — see `IMAGE-PROMPTS.md` (all optional; site ships complete
   without them). Official partner logos from vendor press kits only.
6. **Legal** — Terms & Privacy are drafts; client legal counsel must review.
   Bracketed items need confirmation.
7. **Analytics** — add GA4 + GTM snippets; verify GSC and submit `/sitemap.xml`.
