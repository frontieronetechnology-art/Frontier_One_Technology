import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ScrollFillText from "@/components/ScrollFillText";
import ServicesShowcase from "@/components/ServicesShowcase";
import BigMarquee from "@/components/BigMarquee";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/StatsBand";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import WhyPinned from "@/components/WhyPinned";
import StackCards from "@/components/StackCards";
import IndustrySlider from "@/components/IndustrySlider";
import ScrollFillHeading from "@/components/ScrollFillHeading";
import Icon from "@/components/Icons";
import { WHY_CARDS, PROCESS_STEPS, INDUSTRIES, SERVICES_FAQ } from "@/lib/data";

export const metadata = {
  title: "Frontier One Technology | Enterprise Technology Consulting",
  description:
    "Practical cloud, security, and software solutions engineered for long-term business growth. Schedule a consultation with Frontier One Technology.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO — kinetic type, magnetic CTAs, tilt orbital ── */}
      <Hero />

      {/* ── TECHNOLOGY MARQUEE ───────────────────────────────── */}
      <Marquee />

      {/* ── WHO WE ARE — scroll-fill statement ───────────────── */}
      <section className="container-x py-28 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              index="01"
              eyebrow="Who We Are"
              title={[
                { text: "Technology Built Around " },
                { text: "Business Goals", serif: true },
              ]}
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ScrollFillText
              className="display text-2xl leading-snug sm:text-3xl lg:text-[2.1rem]"
              text="At Frontier One Technology, we believe technology should simplify operations — not complicate them. We partner with startups, growing businesses, and enterprise organizations to design, build, and support modern technology solutions that solve real business challenges."
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-[0.95rem] leading-relaxed text-n700">
                Our team combines technical expertise with practical thinking, helping
                organizations improve efficiency, strengthen security, and accelerate digital
                transformation.
              </p>
              <p className="mt-6 border-l-2 border-bronze pl-5 text-[0.95rem] font-medium leading-relaxed text-ink">
                Every engagement is built on transparency, collaboration, and measurable results.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHY FRONTIER ONE — pinned tab-scroll panel ───────── */}
      <section className="relative border-t rule bg-n50">
        <div className="container-x pt-28 sm:pt-36">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              index="02"
              eyebrow="Why Frontier One"
              title={[
                { text: "Why Businesses " },
                { text: "Choose Us", serif: true },
              ]}
              lede="Keep scrolling — the panel holds while four reasons technology partners stay with us step through, one at a time."
            />
            <Reveal delay={0.2}>
              <Link href="/about" className="link-arrow mb-2" data-cursor="About">
                About the company <Icon name="arrow" />
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="mt-14 pb-16 sm:mt-16">
          <WhyPinned cards={WHY_CARDS} />
        </div>
      </section>

      {/* ── SERVICES — hover showcase index ──────────────────── */}
      <section className="container-x py-28 sm:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="03"
            eyebrow="Services"
            title={[
              { text: "Technology Services for " },
              { text: "Modern Businesses", serif: true },
            ]}
            lede="Six disciplines, one standard — hover each service to preview it, click through for the full engagement detail."
          />
        </div>
        <div className="mt-16">
          <ServicesShowcase />
        </div>
      </section>

      {/* ── KINETIC STATEMENT MARQUEE ────────────────────────── */}
      <section className="overflow-hidden border-y rule bg-n50">
        <BigMarquee />
      </section>

      {/* ── OUR APPROACH (PREVIEW) ───────────────────────────── */}
      <section className="py-28 sm:py-36">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                index="04"
                eyebrow="Our Approach"
                title={[
                  { text: "A Proven Process, " },
                  { text: "Eight Steps", serif: true },
                ]}
                lede="Every project follows a structured approach that keeps communication clear, minimizes risk, and ensures solutions are built around your business objectives."
              />
              <Reveal delay={0.25}>
                <Link href="/process" className="btn btn-ink mt-10">
                  <span className="flex items-center gap-2.5">
                    See the Full Process <Icon name="arrow" />
                  </span>
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <StackCards items={PROCESS_STEPS} />
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES — auto-scrolling belt, not a static grid ── */}
      <section className="border-t rule bg-n50 py-28 sm:py-36">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              index="05"
              eyebrow="Industries"
              title={[
                { text: "Industries We " },
                { text: "Support", serif: true },
              ]}
              lede="Eight sectors, each with its own constraints — drag the panel or use the rail to move through them."
            />
            <Reveal delay={0.2}>
              <Link href="/industries" className="link-arrow mb-2">
                See More <Icon name="arrow" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 sm:mt-16">
            <IndustrySlider items={INDUSTRIES} />
          </div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────── */}
      <StatsBand index="06" />

      {/* ── USP HIGHLIGHT ────────────────────────────────────── */}
      <section className="container-x py-28 sm:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span className="idx">07</span> Our Standard
            </p>
          </Reveal>
          <ScrollFillHeading
            text="We Engineer Solutions That"
            accent="Outlast the Problem."
            className="display mt-8 text-4xl leading-[1.05] sm:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-8 text-[0.95rem] leading-relaxed text-n700 sm:text-base">
              Most companies deliver software. Others deliver infrastructure. We deliver
              technology that continues creating value long after implementation. Every
              architecture decision, every line of code, and every recommendation is made with
              one objective: building solutions your business won&rsquo;t outgrow in a year.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 font-medium text-ink">
              That means fewer redesigns, fewer recurring issues, and technology that evolves
              alongside your organization—not against it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="border-t rule bg-n50 py-28 sm:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              index="08"
              eyebrow="FAQ"
              title={[{ text: "Common " }, { text: "Questions", serif: true }]}
              lede="Straight answers about how we work, what we deliver, and how to get started."
            />
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal delay={0.15}>
              <Accordion items={SERVICES_FAQ} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <div className="bg-n50 pt-16">
        <CTASection />
      </div>
    </>
  );
}
