import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProcessRail from "@/components/ProcessRail";
import SpotlightCard from "@/components/SpotlightCard";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icons";

export const metadata = {
  title: "Our Approach",
  description:
    "A proven 8-step process — discover, assess, strategize, design, develop, validate, deploy, support — for reliable technology delivery.",
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
      <PageHero
        index="01"
        eyebrow="Our Approach"
        title={[
          { text: "Building Technology with Purpose, Precision, and " },
          { text: "Long-Term Value", serif: true },
        ]}
        lede="We believe successful technology projects are driven by thoughtful planning, transparent collaboration, and continuous improvement. Our process is designed to deliver reliable solutions that create measurable business impact from day one through long-term growth."
      />

      {/* ── 8-STEP RAIL ──────────────────────────────────────── */}
      <section className="relative container-x pb-24 pt-8 sm:pb-32">
        <div className="mesh-glow" aria-hidden />
        <div className="relative">
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
      <section className="border-t rule bg-n50 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            index="02"
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
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border rule text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-n100">
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
