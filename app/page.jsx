import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ScrollFillText from "@/components/ScrollFillText";
import ServicesShowcase from "@/components/ServicesShowcase";
import BigMarquee from "@/components/BigMarquee";
import Marquee from "@/components/Marquee";
import StatsBand from "@/components/StatsBand";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import WhyPinned from "@/components/WhyPinned";
import EngagementModels from "@/components/EngagementModels";
import StackCards from "@/components/StackCards";
import IndustrySlider from "@/components/IndustrySlider";
import ScrollFillHeading from "@/components/ScrollFillHeading";
import Media from "@/components/Media";
import Icon from "@/components/Icons";
import {
  WHY_CARDS,
  PROCESS_STEPS,
  INDUSTRIES,
  SERVICES_FAQ,
  ENGAGEMENT_MODELS,
} from "@/lib/data";
import { sortedPosts } from "@/lib/blog";
import { faqPage, breadcrumbs } from "@/lib/seo";

const LATEST_POSTS = sortedPosts().slice(0, 3);

export const metadata = {
  title: "Frontier One Technology | Enterprise Technology Consulting",
  description:
    "Enterprise technology consulting across cloud, cybersecurity, software engineering, data, AI, and DevOps — practical solutions engineered for long-term business growth.",
  keywords: [
    "technology consulting company",
    "enterprise IT consulting services",
    "cloud solutions provider",
    "cybersecurity consulting firm",
    "custom software development company",
    "data analytics consulting",
    "DevOps automation services",
    "AI consulting services",
    "managed IT services provider",
    "digital transformation partner",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Frontier One Technology | Enterprise Technology Consulting",
    description:
      "Cloud, cybersecurity, software engineering, data, AI, and DevOps — engineered for long-term business growth.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqPage(SERVICES_FAQ),
            breadcrumbs([{ name: "Home", path: "" }]),
          ]),
        }}
      />

      {/* ── HERO — layered plate, magnetic CTAs ── */}
      <Hero />

      {/* ── TECHNOLOGY MARQUEE ───────────────────────────────── */}
      <Marquee />

      {/* ── WHO WE ARE — scroll-fill statement ───────────────── */}
      <section className="container-x py-28 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
             
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
      <section className="relative border-t rule bg-band">
        <div className="container-x pt-28 sm:pt-36">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
             
              eyebrow="Why Frontier One"
              title={[
                { text: "Why Businesses " },
                { text: "Choose Us", serif: true },
              ]}
              lede="Keep scrolling — the panel holds while six reasons technology partners stay with us step through, one at a time."
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
           
            eyebrow="Services"
            title={[
              { text: "Technology Services for " },
              { text: "Modern Businesses", serif: true },
            ]}
            lede="Six disciplines, one standard — hover each service to preview it, click through for the full engagement detail."
          />
          <Reveal delay={0.2}>
            <Link href="/services" className="group mb-2 inline-flex">
              <span className="cta-chip">
                All Services <Icon name="arrowUpRight" />
              </span>
            </Link>
          </Reveal>
        </div>
        <div className="mt-16">
          <ServicesShowcase />
        </div>
      </section>

      {/* ── KINETIC STATEMENT MARQUEE ────────────────────────── */}
      <section className="overflow-hidden border-y rule bg-band">
        <BigMarquee />
      </section>

      {/* ── ENGAGEMENT MODELS — how a client can work with us ──
          Sits between the service index (what we do) and the delivery
          process (how we run the work), which is exactly where a buyer
          starts asking "and how would I actually engage you?" */}
      <section className="container-x py-28 sm:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Engagement Models"
            title={[
              { text: "Four Ways to " },
              { text: "Work With Us", serif: true },
            ]}
            lede="Every organization buys technology differently. Choose the commercial model that fits your team, your timeline, and how much of the delivery you want to own."
          />
          <Reveal delay={0.2}>
            <Link href="/contact#form" className="group mb-2 inline-flex">
              <span className="cta-chip">
                Discuss Your Model <Icon name="arrowUpRight" />
              </span>
            </Link>
          </Reveal>
        </div>
        <div className="mt-16">
          <EngagementModels models={ENGAGEMENT_MODELS} />
        </div>
      </section>

      {/* ── OUR APPROACH — the page's dark feature section (§05.2 L3) ── */}
      {/* NOTE — no `overflow-hidden` on this section. An `overflow` value other
          than `visible` on any ancestor makes that ancestor the sticky
          containing block, which silently kills the card stack inside
          StackCards (and the sticky heading column). The decorative
          background is therefore clipped by its own wrapper instead. */}
      <section className="relative bg-dark py-28 text-n100 sm:py-36">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <Media
            src="home/approach-bg.webp"
            fill
            grade="dark"
            position="center 30%"
            className="opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
          <div className="grid-paper-invert absolute inset-0" />
          <div className="mesh-glow mesh-glow-invert" />
        </div>

        <div className="container-x relative">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                invert
                eyebrow="Our Approach"
                title={[
                  { text: "A Proven Process, " },
                  { text: "Eight Steps", serif: true },
                ]}
                lede="Every project follows a structured approach that keeps communication clear, minimizes risk, and ensures solutions are built around your business objectives."
              />
              <Reveal delay={0.25}>
                <Link href="/process" className="btn btn-bronze mt-10 !rounded-full">
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
      <section className="border-t rule bg-band py-28 sm:py-36">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
             
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
      <StatsBand />

      {/* ── USP HIGHLIGHT ────────────────────────────────────── */}
      <section className="container-x py-28 sm:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              Our Standard
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
      <section className="relative overflow-hidden border-t rule bg-band py-28 sm:py-36">
        {/* the FAQ column used to sit on a bare band; a veiled architectural
            plate gives it a floor without competing with the copy */}
        <Media
          src="home/faq-bg.webp"
          fill
          grade="light"
          position="center 55%"
          className="opacity-30"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,241,235,0.94) 0%, rgba(251,249,246,0.9) 45%, rgba(245,241,235,0.96) 100%)",
          }}
          aria-hidden
        />
        <div className="container-x relative grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
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

      {/* ── INSIGHTS ─────────────────────────────────────────── */}
      <section className="container-x py-28 sm:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Insights"
            title={[
              { text: "What We've Learned " },
              { text: "Doing the Work", serif: true },
            ]}
            lede="Perspectives written for the people who fund the decision — cloud economics, security posture, delivery cost, and where enterprise AI actually pays."
          />
          <Reveal delay={0.2}>
            <Link href="/blog" className="group mb-2 inline-flex">
              <span className="cta-chip">
                All Articles <Icon name="arrowUpRight" />
              </span>
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_POSTS.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group card flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-48">
                  <Media src={post.image} alt={post.title} fill grade="light" />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                  <div>
                    <p className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-n700">
                      {post.category}
                      <span className="h-px w-5 bg-bronze" />
                      {post.readTime} min
                    </p>
                    <h3 className="display mt-4 text-[1.2rem] leading-[1.14]">{post.title}</h3>
                    <p className="mt-3 text-[0.86rem] leading-relaxed text-n700">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="cta-chip self-start">
                    Read Article <Icon name="arrowUpRight" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <div className="bg-band pt-16">
        <CTASection />
      </div>
    </>
  );
}
