# Frontier One Technology — Image & Asset Generation Guide

The site is designed **image-light on purpose** — the premium monochrome system
(ink navy + neutrals + bronze) carries the design with typography, engraved SVG
motifs, and motion. Every visual below is **optional polish**, not a blocker:
each slot renders a deliberate drafting-grid placeholder until you drop the file in.

**How it works:** save each generated image as WebP at the exact path listed.
The site picks it up automatically — no code changes.

---

## Global art direction (apply to EVERY prompt)

> Monochrome ink-navy palette only: deep ink navy `#1B2333`, cool light neutrals
> `#F4F6FA` / `#E2E7EF` / `#CCD4DF`, muted slate `#6D7380`. NO blue glow, NO
> purple gradients, NO neon, NO lens flares, NO stock-photo people smiling at
> laptops. Style: premium enterprise editorial — closer to a Financial Times
> illustration or an architectural drafting plate than a tech startup hero.
> Soft studio light, matte surfaces, generous negative space. A single small
> bronze `#B8873A` accent element is allowed per image, never more.

Negative prompt (for all): `neon, glow, purple, blue gradient, cyberpunk, 3d render plastic look, stock photo people, watermark, text, logos, oversaturated`

---

## 1. Brand / logo files → `public/logos/`

The site currently uses a code-built logo (three stepping bars + bronze dot).
When the final brand identity is signed off, export:

| File | Use |
|---|---|
| `public/logos/logo.svg` | Primary logo, light backgrounds |
| `public/logos/logo-invert.svg` | Footer / dark backgrounds |
| `public/favicon.ico` + `app/icon.png` (512×512) | Favicon set |

Tech marquee currently renders **typographic wordmarks** (clean + safe). If the
client wants official partner logos (AWS, Azure, GCP, Okta, Docker, Kubernetes,
Python, React, .NET, Java, Snowflake, Power BI, Microsoft 365), download the
**official brand-approved SVGs** from each vendor's press kit — do NOT generate
these with AI (trademark accuracy matters).

---

## 2. OG / social share image → `public/og.webp` (1200×630)

> Minimal enterprise share card: solid ink navy #1B2333 background, a fine
> light-gray drafting grid barely visible, centered thin-line wireframe sphere
> with orbital rings in light neutral #CCD4DF, one small bronze #B8873A dot on
> the outer orbit. Bottom-left corner clear space for wordmark. Flat, precise,
> engineered look. No text.

After generating, add to `app/layout.jsx` metadata: `openGraph.images: ["/og.webp"]`.

---

## 3. Optional page visuals → `public/images/`

These slots exist in the design system (component `ImageSlot`); the pages ship
without them today and look intentional. Generate only if the client wants
photographic depth added later:

### `public/images/about-team.webp` (4:3)
> Overhead editorial photograph of a clean workspace: matte dark-navy desk
> surface, printed architecture diagrams with fine line work, a closed laptop,
> engineering notebook with grid paper, one bronze pen as the single accent.
> Soft diffused daylight, desaturated cool tones matching #F4F6FA / #CCD4DF.
> No people, no screens glowing.

### `public/images/office.webp` (16:9 — Contact page ambience)
> Minimal enterprise office interior, empty: light gray walls #E2E7EF, floor-to-
> ceiling windows with soft overcast light, dark navy furniture accents, one
> brass/bronze desk lamp. Architectural photography style, straight lines,
> calm and premium. Desaturated, cool color grade.

### Industry section headers (3:2 each) — only if client asks for imagery:
| File | Prompt seed |
|---|---|
| `public/images/industry-financial-services.webp` | abstract macro of an engraved vault wheel in brushed dark metal, navy-gray grade |
| `public/images/industry-healthcare.webp` | minimal pulse line etched into matte light-gray acrylic, single bronze node |
| `public/images/industry-retail-ecommerce.webp` | precise grid of matte navy cubes on light neutral surface, one bronze cube |
| `public/images/industry-manufacturing.webp` | close-up of machined aluminum gears, desaturated cool tones, drafting-plate feel |
| `public/images/industry-technology.webp` | macro of a dark PCB with traces re-imagined as thin engraved lines, no glow |
| `public/images/industry-education.webp` | stacked matte gray books with one bronze bookmark ribbon, editorial still life |
| `public/images/industry-professional-services.webp` | glass meeting-room detail, navy chairs, soft light, architectural minimalism |
| `public/images/industry-logistics.webp` | overhead of shipping containers in navy/gray tones forming a clean grid |

Each with the global art direction + negative prompt appended.

---

## 4. Deliberately NOT AI-generated

- Partner/technology logos (trademark accuracy — use official press kits)
- Team headshots (wait for real photography)
- The hero visual (built in code: animated orbital system — crisper than any
  generated image and matches the client's reference mockup)
