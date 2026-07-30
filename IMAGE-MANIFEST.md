# Frontier One Technology — Image Generation Manifest

**80 assets.** Every path below is already wired into the code. Drop a file at
the listed path and it renders automatically; until then the slot shows a warm
drafting-plate placeholder, so the site is shippable at any point during
generation.

Root: `public/images/`

---

## GLOBAL ART DIRECTION — prepend to every prompt

> Photorealistic editorial photography, shot on a full-frame camera with a
> 35mm or 50mm prime, natural available light, shallow-to-medium depth of
> field. **Colour grade: warm white balance 5200–5600K — late-afternoon
> daylight, never fluorescent office light. Saturation reduced 15%. Shadows
> lifted and warmed toward deep bronze-brown (#6A4A30), never crushed to pure
> black. Highlights soft with gentle roll-off, never blown.** Dominant palette:
> warm neutrals, ivory, bone, timber, stone, brushed brass and bronze,
> weathered concrete, glass. Generous negative space, subject placed
> off-centre, room at the top or side for type to sit. Calm, considered,
> expensive. Enterprise-consulting register — closer to a Financial Times
> photo essay or an architectural monograph than a tech-company website.

### NEGATIVE — append to every prompt

> no blue or cyan colour cast, no teal-and-orange grade, no neon, no glow,
> no purple gradients, no cyberpunk, no lens flare, no HUD overlays, no
> particle fields, no holograms, no floating code, no binary rain, no circuit
> boards, no humanoid robots, no glowing brains, no padlock-over-world-map,
> no hexagon grids, no handshakes, no high-fives, no people pointing at a
> monitor together, no staged smiling stock poses, no thumbs up, no
> watermarks, no text, no logos, no lettering of any kind, no oversaturation,
> no HDR halos, no plastic 3D render look

### CAST RULE — non-negotiable

Every human in these images must be **visually distinct from the people shown on
`averexaplacement.com` and `infotechplacement.com`**. To guarantee separation,
specify per-image:

- a **named age band** (e.g. "late 30s", "early 50s") — vary across the set
- an **explicit and varied ethnicity** — rotate across South Asian, East Asian,
  Black, Latino, Middle Eastern, White; never repeat the same combination twice
  in a row within a section
- a **distinguishing feature** — greying temples, close-cropped beard, glasses
  with a specific frame, natural afro, hijab, shaved head, freckles
- **candid, mid-action framing** — people working, thinking, mid-conversation,
  looking away from camera. Never a posed front-facing portrait, which is the
  exact shape the reference sites use.

Faces should be partially turned, in profile, or softly out of focus wherever
the composition allows. Avoid direct eye contact with camera in every image.

### COLOUR RELIEF RULE — added after 24-image audit

Measured across the first 24 assets, mean hue sat between **29.5 deg and 35.7 deg**
on every single frame, with 82-100% warm pixels. Brightness varied well; hue did
not at all. At scroll speed that reads as a sepia filter over the whole site.

So: **roughly 1 in 8 images must carry a controlled non-amber note.** Not a
different grade -- the warm base stays -- but one deliberate secondary colour
occupying maybe 15-30% of the frame, so the eye gets relief.

Permitted relief colours (never blue or cyan as a cast):

- **Deep forest / olive green** -- foliage, a green glass lampshade, green
  leather, a planted courtyard seen through glass
- **Oxblood / burgundy** -- leather binding, a chair, a book spine
- **Sage / eucalyptus** -- soft, bright, airy rooms
- **Genuinely cool desaturated slate** -- overcast daylight, raw concrete, bare
  steel, saturation under 12% so it reads as neutral relief, not a blue cast

Assets designated to carry relief (mark the colour explicitly in the prompt):

| Asset | Relief note |
|---|---|
| `industries/deep-healthcare.webp` | soft sage-green wall and scrubs |
| `industries/deep-education.webp` | deep green chalkboard, green leather seats |
| `about/value-04.webp` | green glass banker's lamp over the desk |
| `careers/benefit-02.webp` | heavy foliage green, plant-filled home study |
| `services/devops-automation.webp` | cool bare steel, near-neutral, minimal warmth |
| `blog/legacy-modernization.webp` | cool overcast grey sky against warm stone |
| `services/cybersecurity.webp` | cool grey cloth dominant, brass as the only warm note |
| `careers/benefit-07.webp` | planted balcony, green dominant over the gold |

### COMPOSITION VARIETY RULE — added after 24-image audit

The first 24 were nearly all: single subject, mid-distance, eye-level, placed
centre or centre-left. Rotate deliberately from here. **No two consecutive
images may share a camera position.** Cycle through:

1. **Extreme wide** -- subject small, architecture dominant
2. **Very tight** -- hands, an object, part of a face; no full body
3. **High angle** -- looking down on a desk or a room
4. **Low angle** -- looking up, subject against ceiling or sky
5. **Subject at extreme frame edge** -- 80% of frame empty
6. **Over-the-shoulder** -- we see what they see
7. **Through a doorway / between objects** -- natural framing device
8. **Reflection** -- glass, polished stone, a window

Also vary distance to camera hard: some frames should be a full room, some
should be 30cm from the subject.

### GROUP RULE — REWRITTEN after 29-image audit

Audit of the first 29: **zero images with three or more people.** Four had two.
Seventeen showed one person alone. The site reads as a company where everybody
works in a separate room. That is the opposite of a consulting firm.

**Target: about a third of all people-images must show 3-5 people.**
Roughly another third show 2. The rest may be solo or object-only.

Groups must look **alive, not arranged**:

- mid-conversation, mid-disagreement, mid-explanation — never posed
- one person talking while two listen; someone leaning in over a document;
  someone half-turned away thinking while the others continue
- overlapping bodies, natural occlusion, someone partly cut by the frame edge
- varied eyelines — nobody looks at camera, and they do not all look at the
  same thing either
- a laugh, a raised hand, a pen mid-gesture, a chair pushed back
- mixed ages and ethnicities within the same frame, seated and standing mixed

**Never:** a row of people facing camera, a circle of smiling faces, everyone
pointing at one monitor, a handshake, applause.

#### Regenerate as groups (already shot solo, high traffic)

| Asset | Change |
|---|---|
| `home/why-01.webp` | woman presenting to 2 colleagues, mid-discussion |
| `home/approach-01.webp` | 3-person discovery session, one listening hard |
| `home/approach-03.webp` | 3 people at the roadmap, mid-disagreement |
| `home/approach-06.webp` | 2 reviewing results together, one sceptical |

#### Remaining assets designated multi-person

`about/hero` (3) · `about/value-01` (2) · `about/value-06` (4) ·
`process/hero` (3) · `careers/positions-collage` (groups throughout) ·
`careers/role-cloud-engineer` (3 at whiteboard) ·
`careers/role-business-analyst` (4 in workshop) ·
`careers/role-devops-engineer` (3 mid-conversation) ·
`careers/role-it-support-engineer` (2) · `careers/benefit-06` (5) ·
`careers/benefit-09` (3) · `careers/benefit-03` (2 on the stair) ·
`services/software-engineering` (3) · `services/artificial-intelligence` (2) ·
`services/data-analytics` (2 over the charts) · `blog/hero` (3 at the table) ·
`industries/deep-professional-services` (3) · `industries/deep-logistics` (2)

### FORMAT

- `.webp`, quality 82, sRGB
- Backgrounds/heroes: **2400 × 1350** (16:9)
- Card / rail images: **1400 × 1800** (portrait 7:9) — these open vertically
- Cutout: **PNG with true alpha**, 2400 × 1400

---

# 1 · HOME

### `home/hero-city.webp` — **DONE** ✅
> Late blue hour, ten minutes after sunset. A dense cluster of modern corporate
> towers seen from a low elevated position across an empty plaza, longer lens so
> the towers compress and feel monumental. Graphite glass, bone limestone,
> brushed steel. Sky is a deep desaturated slate-to-bone gradient — almost
> monochrome, no orange, no sunset. The only warmth in the frame is scattered
> interior office lighting. Weighted to the right two thirds; the left third is
> open and darker so headline type sits there. Dark and moody overall.

### `home/hero-city-cutout.png` — **DONE** ✅ *(generated, not prompted)*
> Not produced by ChatGPT. The sky is removed from the plate above by
> `tools/cut2.py`, which finds the roofline by local texture variance rather
> than brightness — brightness thresholding fails at blue hour because sky and
> building masses share a tonal band. This is far more reliable than asking an
> image model for true alpha, and it guarantees the two planes share a viewpoint.
>
> `python3 tools/cut2.py <raw.png> public/images/home/hero-city-cutout.png`

*Layering note: plate sits at z0, the words FRONTIER ONE TECHNOLOGY rise
between, this cutout stands in front at z3. Generate both from the same
viewpoint or the parallax will not read.*

---

## Why Businesses Choose Us — 4 plates · 1400×1800 portrait

Realistic, senior, international. One subtle designed overlay per image
(a thin drafting annotation, a faint plan line) — minimal, never a HUD.

| Path | Card | Prompt |
|---|---|---|
| `home/why-01.webp` | Business First | Late-40s Black woman in a charcoal blazer, standing at a glass wall marked with dry-erase business diagrams, mid-sentence, gesturing at a flow of boxes. Seen at three-quarters from behind her shoulder so her face is partly turned. Warm afternoon light from the left. Faint bronze annotation line traced along one diagram edge. |
| `home/why-02.webp` | Experienced Engineers | Early-30s South Asian man with a close-cropped beard and thin metal glasses, seated at a matte walnut desk, reading a printed architecture diagram rather than a screen. A dark monitor is angled away, off-focus. Warm lamp light. A thin bronze rule overlays one corner of the printed page. |
| `home/why-03.webp` | Long-Term Partnership | Two colleagues — a late-50s White man with greying temples and an early-30s East Asian woman — walking a bright ivory corridor in conversation, both in profile, mid-stride, neither facing camera. Floor-to-ceiling windows, soft overcast light, deep negative space above. |
| `home/why-04.webp` | Future Ready | Early-40s Latina woman in a bone-coloured shirt, alone, standing at a window looking out over a city at golden hour, notebook held at her side. Shot from behind and to the side; face barely visible. Contemplative, forward-looking, unhurried. |

---

## Our Approach — 8 step cards · 1400×1800 portrait

**These sit under a 93% ivory veil.** Compose for it: strong simple shapes,
clear focal subject, mid-tone exposure. Fine detail and faces in shadow will
disappear under the wash — keep the subject large in frame.

| Path | Step | Prompt |
|---|---|---|
| `home/approach-01.webp` | 01 Discover | Early-50s Middle Eastern man with a shaved head, listening intently across a small table from an unseen client, hands folded, notebook open. Warm window light. Listening, not presenting. |
| `home/approach-02.webp` | 02 Assess | Overhead of a matte walnut table covered in printed system diagrams, a technical audit checklist, a bronze mechanical pencil and a pair of reading glasses. No people, no screens. Late-afternoon light raking across from the right. |
| `home/approach-03.webp` | 03 Strategize | Late-30s East Asian woman with a natural bob and tortoiseshell glasses, standing at a large printed roadmap pinned to an ivory wall, one hand tracing a milestone, seen in profile. Warm light, deep negative space above. |
| `home/approach-04.webp` | 04 Design | Close overhead macro of hands — early-30s, brown skin, no jewellery — drafting a system architecture in fine black pen on grid paper. Only hands and forearms. Warm raking light, visible paper texture. |
| `home/approach-05.webp` | 05 Develop | Two engineers at a shared standing desk, screens deliberately dark and reflective rather than glowing, one pointing at a printed spec on the desk between them. Late-20s Black man and early-40s White woman with a shaved undercut, both in profile. Warm interior. |
| `home/approach-06.webp` | 06 Validate | Early-40s South Asian woman in a hijab reviewing printed test results against a large wall-mounted board of quality metrics; the board is legible as structure but its content is out of focus. Composed, methodical, warm light. |
| `home/approach-07.webp` | 07 Deploy | Wide, quiet interior of a modern data facility shot as architecture — clean rack aisles receding, warm neutral concrete and brushed metal, **no blue LEDs, no glowing lights**, a single small warm amber status lamp far down the aisle. No people. |
| `home/approach-08.webp` | 08 Support & Evolve | Late-30s Latino man with a short beard at a calm operations desk, wearing a headset, mid-conversation and half-smiling at something off-frame. Warm lamp, matte surfaces, plant softly out of focus behind him. |

---

### `home/approach-bg.webp` — 2400×1350 · **dark feature section**
> Wide interior of a premium enterprise workspace at dusk shot as
> architecture: deep timber floor, ivory walls, a long empty walnut conference
> table, floor-to-ceiling windows showing a city at blue hour graded warm
> amber rather than blue. Two figures very small and distant near the far
> window, in silhouette, unidentifiable. Heavily shadowed and moody — this
> renders at 45% opacity behind dark type. Nothing important above the lower
> third.

### `home/faq-bg.webp` — 2400×1350 · **light section, 30% opacity**
> Minimal architectural interior detail: a bright ivory wall meeting a pale
> stone floor, a single tall window casting a long soft diagonal of light, one
> bronze door handle as the only warm metal note. Completely empty of people
> and furniture. Extremely quiet, high-key, almost abstract.

---

## Industries — home slider · 8 plates · 2400×1350 landscape

**These are the "collage" cuts.** Each is a single frame composed of two or
three overlapping planes within one photograph — a foreground working detail,
a mid-ground person at work, and a receding architectural context — so the
frame reads as a montage without being a literal grid of photos.

| Path | Industry | Prompt |
|---|---|---|
| `industries/home-financial-services.webp` | Financial Services | Foreground: a brushed-bronze vault dial in sharp macro. Mid: an early-50s Black woman in a charcoal suit walking a marble banking hall, in profile, softly out of focus. Background: coffered stone ceiling receding. Warm stone, no blue screens. |
| `industries/home-healthcare.webp` | Healthcare | Foreground: a clean stainless instrument tray, macro. Mid: a late-30s South Asian doctor in scrubs reviewing a chart at a nurses' station, three-quarters turned away. Background: a bright, warm, uncluttered hospital corridor. Warm ivory and brushed steel, absolutely no clinical blue. |
| `industries/home-retail-ecommerce.webp` | Retail & E-commerce | Foreground: a stack of unbranded kraft shipping cartons, macro edge. Mid: an early-30s East Asian woman with a clipboard checking stock in a bright warm-lit fulfilment aisle. Background: warehouse racking receding into warm haze. |
| `industries/home-manufacturing.webp` | Manufacturing | Foreground: machined aluminium components on a workbench, macro. Mid: a late-40s White man with greying stubble in safety glasses inspecting a part, in profile. Background: a clean, warm-lit modern production floor. Desaturated steel with amber light. |
| `industries/home-technology.webp` | Technology | Foreground: a matte dark circuit board photographed as *texture*, warm-graded, absolutely no glow. Mid: an early-30s Middle Eastern engineer at a bench, hands in frame, face turned down. Background: a calm warm-lit lab. |
| `industries/home-education.webp` | Education | Foreground: a stack of matte books with one bronze bookmark ribbon. Mid: a late-20s Black woman lecturer at a warm-lit seminar table, mid-sentence, in profile. Background: tall arched windows with soft daylight. |
| `industries/home-professional-services.webp` | Professional Services | Foreground: a fountain pen and a bound document on walnut. Mid: two consultants — early-40s Latina woman, late-50s East Asian man — in a glass meeting room, seen through the glass, mid-discussion. Background: an ivory office floor plate. |
| `industries/home-logistics.webp` | Logistics | Foreground: a weathered container corner casting, macro. Mid: a late-30s Black man in a hi-vis vest with a tablet, in profile at a terminal gate. Background: an aerial-feeling grid of stacked containers in warm desaturated tones. |

---

# 2 · INDUSTRIES PAGE

### `industries/hero.webp` — 2400×1350
> Aerial view at golden hour of a working port and the freight rail and highway
> corridors behind it — the physical infrastructure that eight different
> industries actually run on. Shot as landscape architecture, warm and
> desaturated, deep haze at the horizon. Left half quieter for type.

## Deep-dive plates · 8 × 2400×1350 — **must not repeat the home cuts**

Where the home slider used montage, these are **single-subject, human-centred,
emotionally direct frames**. Different lens language, different people,
different moment.

| Path | Prompt |
|---|---|
| `industries/deep-financial-services.webp` | Tight, quiet: an early-60s Black woman, silver locs, alone in a boardroom before anyone arrives, one hand resting on a closed folder, looking out of frame. Warm morning light through slatted blinds. Weight of responsibility. |
| `industries/deep-healthcare.webp` | A late-40s Latina nurse pausing at the end of a corridor at shift change, half-lit by warm window light, exhaling. Shot from a respectful distance, three-quarters turned. Dignified, human, not sentimental. |
| `industries/deep-retail-ecommerce.webp` | An early-30s Middle Eastern shop owner locking up at dusk, warm street light, one hand on the door, city reflected in the glass. Hopeful and tired at once. |
| `industries/deep-manufacturing.webp` | A late-50s South Asian floor supervisor with greying hair and safety glasses pushed up on his head, hands on a rail, surveying a quiet production line at end of shift. Golden light through high windows. |
| `industries/deep-technology.webp` | A late-20s East Asian engineer alone in a warm-lit office at night, chair turned away from a dark screen, thinking, notebook on knee. Only a desk lamp. Calm rather than frantic. |
| `industries/deep-education.webp` | An early-40s White woman with freckles and glasses in an empty warm-lit lecture room after class, gathering papers, sunlight raking across empty seats. |
| `industries/deep-professional-services.webp` | A late-30s Black man in shirtsleeves standing at a window of a quiet office, coffee in hand, city at golden hour, seen from behind. Reflective. |
| `industries/deep-logistics.webp` | A late-40s Latino dispatcher in a warm-lit control room at dawn, in profile, watching a board of routes rendered as warm amber lines. No blue screens. |

---

# 3 · ABOUT

### `about/hero.webp` — 2400×1350
> Three colleagues walking together through the ivory atrium of a modern
> building, mid-conversation, all in motion and none facing camera — a late-40s
> Black woman leading, an early-30s South Asian man, a late-50s White woman
> with silver hair. Warm daylight from a high glazed roof, deep negative space
> above their heads. Reads as a firm, not a stock photo.

### `about/mission-bg.webp` — 2400×1350 · **light → slightly dark, 40% opacity**
> A large ivory wall meeting deep warm timber, lit so the frame runs bright on
> the upper left and falls into soft warm shadow at the lower right. One
> bronze architectural detail. Empty, abstract, textural — this sits behind
> body copy and must never compete with it.

## Core Values — 6 expand-rail plates · 1400×1800 portrait

| Path | Value | Prompt |
|---|---|---|
| `about/value-01.webp` | Integrity Before Everything | An early-50s East Asian man in a quiet office delivering difficult news across a table, hands open, expression serious and steady. Seen three-quarters from behind the listener's shoulder. Warm, honest light. |
| `about/value-02.webp` | Technology with Purpose | Overhead of a walnut desk: a printed business plan, a single closed laptop, a bronze pen, a coffee cup. The business document is on top of the technology, deliberately. No people. |
| `about/value-03.webp` | Accountability at Every Step | A late-30s Black woman standing alone at a wall of project milestones, marking one complete with a bronze pen, in profile. Early morning light, empty office. |
| `about/value-04.webp` | Continuous Learning | A late-20s South Asian woman with a long braid at a warm-lit desk at night, handwritten notes and a technical book open beside her, absorbed and looking down. |
| `about/value-05.webp` | Security by Design | Macro of a precision brass lock mechanism disassembled on a matte grey cloth, every component laid out in order. Warm raking light. Craft and deliberation, **not a padlock icon**. |
| `about/value-06.webp` | Stronger Together | Four colleagues of visibly different ages and ethnicities around a small round table, leaning in over one shared printed document, all looking down at it rather than at camera. Warm overhead light. |

### `about/journey-terrain.webp` — 2400×1350 · **laid into 3D perspective**
> Directly overhead aerial of a warm arid landscape crossed by a single winding
> road — sand, ochre, weathered stone, long low sun casting long shadows.
> Shot straight down so the plane can be tilted into perspective in code.
> Even exposure edge to edge, no vignette, no horizon in frame. The road runs
> roughly vertically through the centre.

---

# 4 · PROCESS

### `process/hero.webp` — 2400×1350
> An architect's studio at golden hour: a long table of large-format technical
> drawings, scale models in pale card, brass drafting instruments. Two people
> at the far end, small and out of focus, in discussion. Warm, precise,
> deliberate. Left third clear for type.

### `process/principles-bg.webp` — 2400×1350 · **light, 28% opacity**
> Macro of a brass drafting rule and set square resting on cream grid paper,
> raking warm light picking out the engraved graduations. Almost abstract,
> extremely quiet, no people.

---

# 5 · CAREERS

### `careers/hero.webp` — 2400×1350 · **emotionally direct**
> A young engineer — early 20s, Black woman, natural afro — pausing at the top
> of a bright stairwell on her first week, looking up toward the light,
> messenger bag on her shoulder. Shot from below and behind. Warm morning sun.
> Optimism and beginning, not corporate confidence. Deep space above her.

### `careers/positions-collage.webp` — 2400×1350 · **25% opacity, montage**
> A single composed frame reading as an eight-part montage of technical
> disciplines: overlapping planes showing a whiteboard of architecture, a
> server aisle, a security operations desk, a data dashboard printed on paper,
> a laptop with a dark screen, a project board, a support headset, and a
> notebook of code. Soft-edged transitions between planes, warm neutral grade
> throughout, no hard grid lines, no people in focus.

## Role plates · 8 × 2400×1350
*Each doubles as the row-hover preview on the careers board and the hero of
that role's page — so they must read at both full size and at 30% opacity.*

| Path | Role | Prompt |
|---|---|---|
| `careers/role-software-engineer.webp` | Software Engineer | Early-30s Latina woman at a warm-lit desk, reviewing a printed pull-request diff, screen dark and angled away, in profile. |
| `careers/role-cloud-engineer.webp` | Cloud Engineer | Late-30s Black man at a whiteboard sketching a network topology in black marker, back mostly to camera, warm side light. |
| `careers/role-cybersecurity-analyst.webp` | Cybersecurity Analyst | Early-40s Middle Eastern woman in a calm warm-lit operations room, studying a printed incident timeline, monitors deliberately dark. No red alerts, no glowing screens. |
| `careers/role-data-engineer.webp` | Data Engineer | Late-20s East Asian man at a desk with large-format printed data flow diagrams spread out, tracing a pipeline with a finger. Warm lamp. |
| `careers/role-devops-engineer.webp` | DevOps Engineer | Early-30s White man with a shaved head and forearm tattoo at a standing desk, mid-conversation with someone off-frame, hands mid-gesture. Warm daylight. |
| `careers/role-ai-ml-engineer.webp` | AI/ML Engineer | Late-20s South Asian woman writing equations on a glass wall in dry-erase marker, seen through the glass, softly out of focus behind it. |
| `careers/role-business-analyst.webp` | Business Analyst | Early-50s Black woman in a meeting facilitating with sticky notes on a wall, mid-gesture, in profile, warm room light. |
| `careers/role-it-support-engineer.webp` | IT Support Engineer | Late-30s Latino man helping a colleague at their desk, both looking at a laptop, shot from behind so neither face is fully visible. Warm, unhurried, genuinely helpful. |

## Benefits — 10 expand-rail plates · 1400×1800 portrait

| Path | Benefit | Prompt |
|---|---|---|
| `careers/benefit-01.webp` | Competitive Compensation | Macro of a bronze fountain pen resting on a signed document on warm walnut, soft window light. No text legible. |
| `careers/benefit-02.webp` | Flexible Work Environment | A late-30s East Asian woman working from a warm sunlit home study, plants, timber desk, mug — relaxed posture, looking down at work. |
| `careers/benefit-03.webp` | Career Growth Opportunities | A bright warm stairwell photographed looking up, one figure ascending, small in frame, motion-blurred. |
| `careers/benefit-04.webp` | Hands-On Project Experience | Close on hands assembling and labelling hardware at a warm-lit bench; forearms only, brown skin, sleeves rolled. |
| `careers/benefit-05.webp` | Technical Learning & Certification | A warm desk still life: a stack of technical books, handwritten notes, a bronze bookmark, reading glasses. No people. |
| `careers/benefit-06.webp` | Collaborative Team Culture | Five colleagues of mixed ages and ethnicities around a table mid-discussion, seen from above at an angle so faces are foreshortened. Warm light. |
| `careers/benefit-07.webp` | Paid Time Off | An empty warm-lit balcony at golden hour with a single chair and a closed book — the absence of work, rendered calmly. |
| `careers/benefit-08.webp` | Health & Wellness | An early-40s Black man walking outdoors between meetings in warm low sun, jacket over shoulder, in profile, unhurried. |
| `careers/benefit-09.webp` | Performance-Based Recognition | A small warm-lit moment: a senior colleague, late-50s White woman, congratulating a junior, early-20s South Asian man, both in profile, genuine and unstaged. |
| `careers/benefit-10.webp` | Modern Technology Stack | Overhead of a clean warm-toned developer desk: mechanical keyboard, notebook, brass lamp, one dark screen. No visible interfaces. |

---

# 6 · SERVICES · 6 × 2400×1350

| Path | Prompt |
|---|---|
| `services/cloud-solutions.webp` | Quiet modern data facility shot as architecture — warm concrete, brushed steel racks receding, a single amber status lamp. No blue LEDs. No people. |
| `services/software-engineering.webp` | Late-30s Black woman and early-30s Middle Eastern man reviewing a printed architecture diagram pinned to an ivory wall, both in profile. Warm daylight. |
| `services/cybersecurity.webp` | Macro of a precision brass lock mechanism on matte grey, disassembled and ordered. Warm raking light. Craft, not iconography. |
| `services/data-analytics.webp` | Overhead of large-format printed charts and a laptop with a dark screen on warm walnut, a bronze pen resting across one chart. No people. |
| `services/devops-automation.webp` | Macro of precision machined gear trains in warm desaturated steel, shot as an engineering plate. Shallow depth of field. |
| `services/artificial-intelligence.webp` | Early-40s South Asian woman at a glass wall covered in hand-written model notation, seen through the glass, thinking. Warm room. No robots, no brains, no glow. |

---

# 7 · BLOG · 6 × 2400×1350

| Path | Article | Prompt |
|---|---|---|
| `blog/hero.webp` | Insights index | A warm-lit reading room: long table, printed reports, brass lamps, tall windows. One person far down the table, out of focus, reading. Editorial and calm. |
| `blog/cloud-migration.webp` | Cloud Migration Strategy | Aerial at golden hour of a highway interchange resolving into ordered lanes — movement, sequencing, planned infrastructure. Warm desaturated. |
| `blog/security-by-design.webp` | Security by Design | Macro of a building's steel frame under construction against a warm dusk sky — structure being designed in, not added on. |
| `blog/devops-return.webp` | DevOps Cost & Return | Macro of a mechanical watch movement, brass and steel, warm raking light. Precision and continuous motion. |
| `blog/legacy-modernization.webp` | Legacy Modernization | A historic stone building with a modern glass extension joining it, photographed at the seam, golden hour. Continuity rather than demolition. |
| `blog/ai-use-case.webp` | AI Use Case Selection | Overhead of a chess board mid-game on warm timber, one hand — early 40s, brown skin — hovering over a piece. Judgment and selection. |

---

# 8 · CONTACT · LEGAL · SOCIAL

### `contact/hero.webp` — 2400×1350
> **Deliberately not the usual contact-page picture.** An empty, beautiful
> meeting room at golden hour with two chairs turned slightly toward each
> other across a small walnut table, one bronze lamp lit, tall windows behind.
> The room is set and waiting. No people, no phones, no headsets, no
> receptionist, no map.

### `legal/terms-hero.webp` — 2400×1350
> Macro of a bound printed document on warm timber, a brass paperweight
> resting on it, raking window light picking out paper fibre. Text present but
> completely illegible through depth of field. Serious, quiet, non-generic.

### `legal/privacy-hero.webp` — 2400×1350
> Macro of a bank of warm timber archive drawers with one drawer fractionally
> open, brass pulls catching the light. Custody and care of records. Warm,
> analogue, no locks, no shields, no binary.

### `legal/hero.webp` — 2400×1350 · *fallback for the shared legal layout*
> Duplicate of `legal/terms-hero.webp` is acceptable, or an alternate crop of
> the same setup.

### `og.webp` — **1200×630** → save to `public/og.webp` (not `images/`)
> Ivory ground (#FBF9F6) with a barely-visible warm drafting grid. Lower-right
> third: a soft-focus warm architectural detail in bronze tones. Left two
> thirds intentionally empty for the wordmark to be composited. Flat,
> precise, engineered. No text.

---

## Coverage checklist

| Group | Count |
|---|---|
| Home hero (plate + PNG cutout) | 2 |
| Why Businesses Choose Us | 4 |
| Our Approach cards | 8 |
| Home section backgrounds (approach, FAQ) | 2 |
| Industries — home slider | 8 |
| Industries — page hero + deep dives | 9 |
| About (hero, mission, terrain) | 3 |
| About core values | 6 |
| Process (hero, principles) | 2 |
| Careers (hero, collage) | 2 |
| Careers role plates | 8 |
| Careers benefits | 10 |
| Services | 6 |
| Blog (hero + 5 articles) | 6 |
| Contact | 1 |
| Legal | 3 |
| **Total under `public/images/`** | **80** |
| Plus `public/og.webp` | 1 |
