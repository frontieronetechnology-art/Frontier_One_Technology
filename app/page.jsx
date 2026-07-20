import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ScrollFillText from "@/components/ScrollFillText";
import SpotlightCard from "@/components/SpotlightCard";
import ServicesShowcase from "@/components/ServicesShowcase";
import SplitReveal from "@/components/SplitReveal";
import BigMarquee from "@/components/BigMarquee";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/StatsBand";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
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

      {/* ── WHY FRONTIER ONE — spotlight tilt cards ──────────── */}
      <section className="border-t rule bg-n50 py-28 sm:py-36">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              index="02"
              eyebrow="Why Frontier One"
              title={[
                { text: "Why Businesses " },
                { text: "Choose Us", serif: true },
              ]}
            />
            <Reveal delay={0.2}>
              <Link href="/about" className="link-arrow mb-2">
                About the company <Icon name="arrow" />
              </Link>
            </Reveal>
          </div>
          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CARDS.map((card, i) => (
              <RevealItem key={card.title}>
                <SpotlightCard className="card group h-full p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md border rule text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-n100">
                      <Icon name={card.icon} />
                    </span>
                    <span className="font-mono text-xs text-n500">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-n700">{card.body}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
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
            <div className="lg:col-span-4">
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
            <div className="lg:col-span-7 lg:col-start-6">
              <RevealGroup className="grid gap-px overflow-hidden rounded-xl border rule bg-n300 sm:grid-cols-2" stagger={0.06}>
                {PROCESS_STEPS.map((step) => (
                  <RevealItem key={step.n}>
                    <div className="group flex h-full items-baseline gap-4 bg-n100 p-6 transition-colors duration-500 hover:bg-white">
                      <span className="font-mono text-xs text-bronze-deep">{step.n}</span>
                      <div>
                        <h3 className="font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-1.5 line-clamp-2 text-[0.82rem] leading-relaxed text-n600">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES — spotlight grid ──────────────────────── */}
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
            />
            <Reveal delay={0.2}>
              <Link href="/industries" className="link-arrow mb-2">
                See More <Icon name="arrow" />
              </Link>
            </Reveal>
          </div>
          <RevealGroup className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4" stagger={0.06}>
            {INDUSTRIES.map((industry) => (
              <RevealItem key={industry.slug}>
                <Link href={`/industries#${industry.slug}`} className="block h-full">
                  <SpotlightCard className="card group flex h-full flex-col justify-between gap-10 p-6 sm:p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-n200 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-n100">
                      <Icon name={industry.icon} />
                    </span>
                    <span className="flex items-end justify-between gap-3">
                      <span className="text-[0.95rem] font-semibold leading-snug tracking-tight sm:text-base">
                        {industry.name}
                      </span>
                      <span className="text-n500 transition-all duration-500 group-hover:translate-x-1 group-hover:text-bronze-deep">
                        <Icon name="arrowUpRight" />
                      </span>
                    </span>
                  </SpotlightCard>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
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
          <SplitReveal
            as="h2"
            delay={0.1}
            segments={[
              { text: "We Engineer Solutions That " },
              { text: "Outlast the Problem.", serif: true },
            ]}
            className="display mt-8 text-3xl sm:text-5xl"
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
