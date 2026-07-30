# Continue Here — Frontier One rebuild

## State

**Phase 1 — code: COMPLETE.** `next build` passes, 35 routes, 0 errors, 0 warnings.
**Phase 2 — images: 3 / 81 done.** (`home/hero-city.webp`, `home/hero-city-cutout.png`,
`home/why-01.webp`)

> ### ⚠ BLOCKED — ChatGPT downloads stopped writing to disk
> Partway through this session ChatGPT's **Download** stopped producing a file.
> The Save As dialog opens, accepts the path, and closes cleanly, but nothing is
> written — to the project folder *or* to plain `Downloads`. Quitting and
> relaunching ChatGPT did not clear it.
>
> This is on the Windows side, not the prompt pipeline — the same clicks worked
> for the three assets above. Most likely one of:
> 1. **Controlled Folder Access** (Windows Security → Virus & threat protection →
>    Ransomware protection) blocking the ChatGPT process from writing
> 2. Antivirus silently quarantining the downloaded PNG
> 3. `Downloads` redirected to OneDrive with sync paused or out of quota
>
> Worth testing manually: download any image from ChatGPT to the Desktop. If that
> also produces nothing, it's (1) or (2).
>
> **`home/why-02.webp` is already generated** and sitting in the ChatGPT chat
> *"Photorealistic Architecture Request"* (man reading a printed architecture
> diagram under a warm lamp) — it only needs saving once downloads work.

The site is shippable right now. Every unfilled image slot renders a deliberate
warm drafting-plate placeholder with its own path printed on it, so nothing
looks broken — it looks unfinished on purpose.

---

## What was changed in Phase 1

| Area | Change |
|---|---|
| Colour | Whole site migrated from ink-navy to Brand Colour System v3.0 (ivory `#FBF9F6` canvas, bronze ramp, warm neutrals). All 15 key contrast pairings verified against WCAG 2.1 AA. |
| Logo | Six assets extracted from the supplied PNG into `public/logos/` — transparent lockup, inverse lockup, mark, wordmark, `app/icon.png`, `app/apple-icon.png`. The original's drop shadow was removed (§13 forbids effects on the mark). |
| Preloader | "The Bronze Pour" — `components/Preloader.jsx`. The logo PNG is used as a CSS mask; molten bronze fills the cavity, one 120° specular pass crosses the cooled metal, the wordmark strikes in, the plate lifts. |
| Navbar | Floating capsule pair per the supplied reference. Seating the logo in a solid ivory capsule also satisfies §13's ban on placing the mark directly on photography. |
| Section numbering | Removed everywhere (`SectionHeading` no longer takes `index`). |
| Heroes | All full-viewport via `.hero-screen` / `.hero-inner` (100dvh minus nav). |
| Home | Layered 3-plane hero; orbital field pulled out of the Why cards to section scale; Our Approach is now the page's dark feature band; industry CTAs are visible chips; wireframe globe behind By The Numbers; new Insights section. |
| About | Mission/Vision rebuilt as two asymmetric movements with oversized labels; core values are a 6-panel expand rail; journey route runs across a scroll-reactive 3D ground plane. |
| Process | Phase blocks are no longer boxes — they open on tapering bronze rules; sparse star chart behind the rail. |
| Careers | Benefits rebuilt as two 5-panel expand rails; role rows preview their destination hero on hover. |
| Legal | Single text measure with margin numerals + sticky contents rail. |
| Blog | New `/blog` + 5 long-form SEO articles with BlogPosting / BreadcrumbList schema, linked from home nav and footer. |
| SEO | Root JSON-LD graph (Organization, WebSite, ProfessionalService), FAQPage on home, JobPosting on all 8 roles, Service on all 6 services, BreadcrumbList everywhere, canonicals, OG/Twitter, robots directives, skip-link, richer sitemap. |

New components: `Media`, `ExpandRail`, `OrbitalField`, `GlobeLines`, `Starfield`, `PerspectivePlate`.

---

## How to resume image generation

Full spec: **`IMAGE-MANIFEST.md`** — 80 paths, prompts, dimensions, the global
colour grade, the negative prompt, and the casting rules that keep faces
distinct from averexaplacement.com / infotechplacement.com.

### The working pipeline

1. **New chat** in ChatGPT (fresh chat keeps the image at a predictable position).
2. Paste the manifest prompt for one asset. Wait ~75s.
3. Click the share icon on the image → **Download**.
4. In the Save As dialog: `Ctrl+A`, then type the full destination path, e.g.
   `C:\Users\Utsav Prajapati\Downloads\fonttier\public\images\home\_raw.png`
5. Convert:
   ```
   python3 tools/imgproc.py plate public/images/home/_raw.png public/images/home/why-01.webp
   rm public/images/home/_raw.png
   ```

### Sky cutouts

Do **not** ask ChatGPT for a transparent PNG — it will not give true alpha.
Generate the plate, then:
```
python3 tools/cut2.py <raw.png> <out.png>
```
`cut2.py` finds the roofline by local texture variance, which works at both
dusk and blue hour (brightness thresholding fails at blue hour because sky and
building masses share a tonal band).

### Remaining, in priority order

1. `home/why-01..04` (4) — first thing a visitor scrolls to
2. `home/approach-01..08` (8) — sit under a 93% ivory veil, so compose big and mid-tone
3. `home/approach-bg`, `home/faq-bg` (2)
4. `industries/home-*` (8), `industries/deep-*` (8), `industries/hero` (1)
5. `careers/hero`, `careers/positions-collage`, `careers/role-*` (10)
6. `careers/benefit-01..10` (10)
7. `about/hero`, `about/mission-bg`, `about/journey-terrain`, `about/value-01..06` (9)
8. `process/hero`, `process/principles-bg` (2)
9. `services/*` (6)
10. `blog/hero` + 5 article images (6)
11. `contact/hero`, `legal/terms-hero`, `legal/privacy-hero` (3)
12. `public/og.webp` (1) — note: `public/`, not `public/images/`

---

## Verifying

The mounted Windows folder is too slow for `next build` to run against directly.
`verify.sh` (in the outputs folder) rsyncs the source to local disk, stubs
`next/font` because Google Fonts is unreachable from the sandbox, and builds
there. The real project keeps `next/font` untouched.
