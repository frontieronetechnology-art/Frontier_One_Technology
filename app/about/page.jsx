import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import JourneyPath from "@/components/JourneyPath";
import DirectionalReveal from "@/components/DirectionalReveal";
import StatsBand from "@/components/StatsBand";
import CTASection from "@/components/CTASection";
import ExpandRail from "@/components/ExpandRail";
import PerspectivePlate from "@/components/PerspectivePlate";
import Media from "@/components/Media";
import Icon from "@/components/Icons";
import { CORE_VALUES, JOURNEY } from "@/lib/data";
import { breadcrumbs } from "@/lib/seo";

export const metadata = {
  title: { absolute: "About Frontier One Technology | Our Mission & Values" },
  description:
    "Who we are, how we work, and why businesses choose us: Frontier One Technology's mission, core values, and approach to building technology that lasts.",
  keywords: [
    "about frontier one technology",
    "technology consulting company",
    "IT consulting firm United States",
    "enterprise technology partner",
    "our mission and values",
  ],
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Frontier One Technology",
    description:
      "Our mission, our values, and the approach behind every engagement we deliver.",
    url: "/about/",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbs([
              { name: "Home", path: "" },
              { name: "About Us", path: "/about/" },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="About Us"
        watermark="About"
        image="about/hero.webp"
        imageAlt="The Frontier One Technology team at work"
        position="center 40%"
        title={[
          { text: "The Partner Behind the " },
          { text: "Technology", serif: true },
        ]}
        lede="Frontier One Technology partners with startups, growing businesses, and enterprise organizations to design, build, and support modern technology solutions — with transparency, collaboration, and measurable results at the core of every engagement."
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact#form" className="btn btn-bronze !rounded-full">
            <span className="flex items-center gap-2.5">
              Let&rsquo;s Talk <Icon name="arrow" />
            </span>
          </Link>
          <Link href="/services/cloud-solutions" className="btn btn-outline-paper !rounded-full">
            Explore Our Services
          </Link>
        </div>
      </PageHero>

      {/* ── MISSION / VISION ─────────────────────────────────────
          Rebuilt. The previous version set both statements as identical
          mirrored columns headed by roman numerals, so the eye read them as
          one repeated block and skipped the second. They are now two
          asymmetric, oppositely-aligned movements with their own oversized
          labels — different shape, different rhythm, both get read. */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Media
          src="about/mission-bg.webp"
          fill
          grade="light"
          position="center 45%"
          className="opacity-40"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(251,249,246,0.96) 0%, rgba(245,241,235,0.9) 46%, rgba(236,228,217,0.86) 100%)",
          }}
          aria-hidden
        />
        <div className="grid-paper absolute inset-0 opacity-60" aria-hidden />

        <div className="container-x relative">
          {/* ── Mission ── */}
          <DirectionalReveal index={0}>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <h2 className="display col-span-full text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.9] lg:col-span-5">
                Our
                <br />
                <em className="text-bronze-deep">Mission</em>
              </h2>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="display text-[1.45rem] leading-[1.25] sm:text-[1.9rem]">
                  Building technology that creates{" "}
                  <em>lasting business value.</em>
                </p>
                <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-n700">
                  Technology should solve problems, simplify operations, and create
                  opportunities for growth. Our mission is to help organizations make confident
                  technology decisions by delivering secure, scalable, and practical solutions
                  that generate measurable business outcomes.
                </p>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-n700">
                  Every project we undertake is driven by transparency, technical excellence,
                  and a commitment to building solutions that continue delivering value long
                  after deployment.
                </p>
              </div>
            </div>
          </DirectionalReveal>

          <div className="rule-bronze my-16 sm:my-20" aria-hidden />

          {/* ── Vision — mirrored, so the pair never reads as a duplicate ── */}
          <DirectionalReveal index={1}>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <h2 className="display col-span-full text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.9] lg:col-span-5 lg:col-start-8 lg:text-right">
                Our
                <br />
                <em className="text-bronze-deep">Vision</em>
              </h2>
              <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
                <p className="display text-[1.45rem] leading-[1.25] sm:text-[1.9rem]">
                  To become the technology partner businesses trust{" "}
                  <em>for the long term.</em>
                </p>
                <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-n700">
                  We envision a future where organizations no longer struggle to keep pace with
                  technology because they have a trusted partner guiding every stage of their
                  digital journey.
                </p>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-n700">
                  Our goal is not simply to deliver projects, but to build lasting
                  relationships by helping businesses adapt, innovate, and grow with confidence
                  in an ever-changing digital world.
                </p>
              </div>
            </div>
          </DirectionalReveal>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────── */}
      <section className="border-t rule bg-band py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
           
            eyebrow="Our Core Values"
            title={
              <>
                Principles That Guide <em>Everything We Build</em>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="mt-16">
              <ExpandRail
                items={CORE_VALUES}
                imageBase="about/value"
                ratioClass="h-[32rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ──────────────────────────── */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
             
              eyebrow="What Makes Us Different"
              title={
                <>
                  We Don&rsquo;t Measure Success by Projects Delivered. We Measure It by Problems
                  That <em>Never Return.</em>
                </>
              }
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <p className="text-[0.95rem] leading-relaxed text-n700 sm:text-base">
                Many technology firms focus on completing projects and moving to the next client.
              </p>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-n700 sm:text-base">
                At Frontier One Technology, we take a different approach. We invest time in
                understanding how your business operates before recommending any solution. By
                identifying the root cause—not just the visible symptoms—we create technology
                that is practical, maintainable, and built for long-term success.
              </p>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-n700 sm:text-base">
                When our work is complete, our goal isn&rsquo;t simply that the project is
                delivered. It&rsquo;s that your team operates more efficiently, your technology
                becomes easier to manage, and the same challenges don&rsquo;t continue resurfacing
                months later.
              </p>
              <p className="mt-5 font-medium text-ink">
                That&rsquo;s the standard we hold ourselves to.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE ──────────────────────────────────────── */}
      <section className="container-x pb-24 sm:pb-32">
        <Reveal>
          <figure className="relative overflow-hidden rounded-2xl bg-dark px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="mesh-glow mesh-glow-invert" aria-hidden />
            <span
              className="pointer-events-none absolute left-6 top-4 select-none font-serif text-[10rem] italic leading-none text-n800/70"
              aria-hidden
            >
              &ldquo;
            </span>
            <figcaption className="eyebrow eyebrow-invert justify-center">
              Our Promise
            </figcaption>
            <blockquote className="relative mx-auto mt-8 max-w-3xl">
              <p className="display text-2xl leading-snug text-n100 sm:text-[2rem]">
                Every recommendation we make will be guided by one simple question:{" "}
                <em className="text-bronze-light">
                  &ldquo;Will this still be the right solution for our client three years from
                  now?&rdquo;
                </em>{" "}
                If the answer is no, we continue looking until we find one that is.
              </p>
            </blockquote>
          </figure>
        </Reveal>
      </section>

      {/* ── WORKING PHILOSOPHY ───────────────────────────────── */}
      <section className="border-t rule bg-band py-24 sm:py-32">
        <div className="container-x mx-auto max-w-4xl text-center">
          <SectionHeading
           
            eyebrow="Our Working Philosophy"
            title={
              <>
                Technology Should Never <em>Feel Complicated.</em>
              </>
            }
            center
          />
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-[0.95rem] leading-relaxed text-n700 sm:text-base">
              Our responsibility is to simplify complexity, provide clear direction, and deliver
              solutions that your business can confidently rely on every day. We believe trust is
              earned through consistent communication, thoughtful engineering, and delivering on
              the commitments we make.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── JOURNEY — a drawn route, not a straight scroll line ── */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* the route now runs across a receding 3D ground plane */}
        <PerspectivePlate src="about/journey-terrain.webp" opacity={0.42} />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-n100 via-n100/55 to-n100"
          aria-hidden
        />
        <div className="container-x relative">
          <SectionHeading
           
            eyebrow="Our Journey"
            title={
              <>
                From an Idea to <em>Frontier One</em>
              </>
            }
            center
          />
        </div>
        <div className="relative mt-20">
          <JourneyPath items={JOURNEY} />
        </div>
        <div className="container-x relative">
          <Reveal delay={0.15}>
            <p className="mx-auto mt-16 max-w-2xl text-center text-[0.95rem] leading-relaxed text-n700 sm:text-base">
              From an idea in 2020 to a growing technology company today, our journey has always
              been driven by one belief:{" "}
              <span className="font-medium text-ink">
                technology should make business simpler, stronger, and ready for what comes next.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <StatsBand />
      <div className="pt-16">
        <CTASection />
      </div>
    </>
  );
}
