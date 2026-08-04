import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProcessRail from "@/components/ProcessRail";
import SpotlightCard from "@/components/SpotlightCard";
import CTASection from "@/components/CTASection";
import Starfield from "@/components/Starfield";
import Media from "@/components/Media";
import Icon from "@/components/Icons";

import { breadcrumbs } from "@/lib/seo";

export const metadata = {
  title: { absolute: "Our Process | 8-Step Technology Delivery Framework" },
  description:
    "How we deliver: an eight-step process — discover, assess, strategize, design, develop, validate, deploy, and support — that keeps every engagement predictable.",
  keywords: [
    "technology delivery process",
    "software development process",
    "IT project methodology",
    "technology consulting approach",
    "project delivery framework",
  ],
  alternates: { canonical: "/process/" },
  openGraph: {
    title: "Our Process | Frontier One Technology",
    description:
      "The eight-step delivery framework behind every Frontier One engagement.",
    url: "/process/",
    type: "website",
  },
};

/* Supplementary principles (SRS §5.3.3 — added per industry best practice) */
const PRINCIPLES = [
  {
    icon: "compass",
    title: "Clear Communication",
    body: "You always know where your project stands. Structured check-ins, transparent reporting, and no surprises at handover.",
  },
  {
    icon: "shield",
    title: "Security at Every Phase",
    body: "Security reviews are built into assessment, design, development, and validation — not appended at the end.",
  },
  {
    icon: "layers",
    title: "Documentation & Handover",
    body: "Every deployment ships with the documentation and knowledge transfer your team needs to own what we build.",
  },
  {
    icon: "trend",
    title: "Measured Outcomes",
    body: "Milestones are tied to business objectives, so progress is measured in results — not just tickets closed.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbs([
              { name: "Home", path: "" },
              { name: "Our Approach", path: "/process/" },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Our Approach"
        watermark="Process"
        image="process/hero.webp"
        imageAlt="The Frontier One Technology eight-step delivery process in practice"
        position="center 45%"
        title={[
          { text: "Building Technology with Purpose, Precision, and " },
          { text: "Long-Term Value", serif: true },
        ]}
        lede="We believe successful technology projects are driven by thoughtful planning, transparent collaboration, and continuous improvement. Our process is designed to deliver reliable solutions that create measurable business impact from day one through long-term growth."
      />

      {/* ── 8-STEP RAIL ──────────────────────────────────────── */}
      {/* NOTE — no `overflow-hidden` here. It made this section the sticky
          containing block, which pinned ProcessRail's dial to a dead spot
          instead of letting it travel down the viewport with the scroll.
          Decoration is clipped by its own wrapper instead. */}
      <section className="relative pb-24 pt-8 sm:pb-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="mesh-glow" />
          {/* the dial used to float in dead space — a sparse star chart gives
              the phase rail something to sit in without adding noise */}
          <Starfield count={110} className="opacity-80" />
        </div>
        <div className="container-x relative">
        <Reveal>
          <p className="mb-14 max-w-2xl border-l-2 border-bronze pl-5 text-[0.95rem] leading-relaxed text-n700">
            A proven process for delivering reliable technology solutions — every project
            follows a structured approach that keeps communication clear, minimizes risk, and
            ensures solutions are built around your business objectives.
          </p>
        </Reveal>
        <ProcessRail />
        </div>
      </section>

      {/* ── PRINCIPLES ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t rule bg-band py-24 sm:py-32">
        <Media
          src="process/principles-bg.webp"
          fill
          grade="light"
          position="center 50%"
          className="opacity-28"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,241,235,0.95) 0%, rgba(251,249,246,0.88) 50%, rgba(245,241,235,0.96) 100%)",
          }}
          aria-hidden
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="How We Hold the Line"
            title={
              <>
                The Discipline Behind <em>the Process</em>
              </>
            }
            lede="Eight steps only work when they're backed by working principles. These four run through every phase of every engagement."
          />
          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <RevealItem key={p.title}>
                <SpotlightCard className="card group h-full p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border rule text-ink transition-colors duration-500 group-hover:bg-dark group-hover:text-n100">
                    <Icon name={p.icon} />
                  </span>
                  <h3 className="mt-7 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-n700">{p.body}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="pt-16">
        <CTASection />
      </div>
    </>
  );
}
