import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import SpotlightCard from "@/components/SpotlightCard";
import StatsBand from "@/components/StatsBand";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icons";
import { CORE_VALUES } from "@/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Frontier One Technology's mission, values, and approach to building technology that creates lasting business value.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="About Us"
        title={[
          { text: "The Partner Behind the " },
          { text: "Technology", serif: true },
        ]}
        lede="Frontier One Technology partners with startups, growing businesses, and enterprise organizations to design, build, and support modern technology solutions — with transparency, collaboration, and measurable results at the core of every engagement."
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn btn-ink">
            Let&rsquo;s Talk <Icon name="arrow" />
          </Link>
          <Link href="/services/cloud-solutions" className="btn btn-ghost">
            Explore Our Services
          </Link>
        </div>
      </PageHero>

      {/* ── MISSION / VISION ─────────────────────────────────── */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-9 sm:p-12">
              <p className="eyebrow">
                <span className="idx">02</span> Our Mission
              </p>
              <h2 className="display mt-6 text-2xl sm:text-3xl">
                Building Technology That Creates <em>Lasting Business Value</em>
              </h2>
              <p className="mt-6 text-[0.92rem] leading-relaxed text-n700">
                Technology should solve problems, simplify operations, and create opportunities
                for growth. Our mission is to help organizations make confident technology
                decisions by delivering secure, scalable, and practical solutions that generate
                measurable business outcomes.
              </p>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-n700">
                Every project we undertake is driven by transparency, technical excellence, and
                a commitment to building solutions that continue delivering value long after
                deployment.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-[0.625rem] bg-ink p-9 sm:p-12">
              <p className="eyebrow eyebrow-invert">
                <span className="idx">03</span> Our Vision
              </p>
              <h2 className="display mt-6 text-2xl text-n100 sm:text-3xl">
                To Become the Technology Partner Businesses Trust <em>for the Long Term</em>
              </h2>
              <p className="mt-6 text-[0.92rem] leading-relaxed text-n400">
                We envision a future where organizations no longer struggle to keep pace with
                technology because they have a trusted partner guiding every stage of their
                digital journey.
              </p>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-n400">
                Our goal is not simply to deliver projects, but to build lasting relationships
                by helping businesses adapt, innovate, and grow with confidence in an
                ever-changing digital world.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────── */}
      <section className="border-t rule bg-n50 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            index="04"
            eyebrow="Our Core Values"
            title={
              <>
                Principles That Guide <em>Everything We Build</em>
              </>
            }
          />
          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value, i) => (
              <RevealItem key={value.title}>
                <SpotlightCard className="card h-full p-8">
                  <span className="font-mono text-xs text-bronze-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{value.title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-n700">{value.body}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ──────────────────────────── */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="05"
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
          <figure className="relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
            <span
              className="pointer-events-none absolute left-6 top-4 select-none font-serif text-[10rem] italic leading-none text-n800/70"
              aria-hidden
            >
              &ldquo;
            </span>
            <figcaption className="eyebrow eyebrow-invert justify-center">
              <span className="idx">06</span> Our Promise
            </figcaption>
            <blockquote className="relative mx-auto mt-8 max-w-3xl">
              <p className="display text-2xl leading-snug text-n100 sm:text-[2rem]">
                Every recommendation we make will be guided by one simple question:{" "}
                <em className="text-bronze">
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
      <section className="border-t rule bg-n50 py-24 sm:py-32">
        <div className="container-x mx-auto max-w-4xl text-center">
          <SectionHeading
            index="07"
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

      {/* ── JOURNEY ──────────────────────────────────────────── */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          index="08"
          eyebrow="Our Journey"
          title={
            <>
              From an Idea to <em>Frontier One</em>
            </>
          }
          center
        />
        <div className="mt-20">
          <Timeline />
        </div>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-20 max-w-2xl text-center text-[0.95rem] leading-relaxed text-n700 sm:text-base">
            From an idea in 2020 to a growing technology company today, our journey has always
            been driven by one belief:{" "}
            <span className="font-medium text-ink">
              technology should make business simpler, stronger, and ready for what comes next.
            </span>
          </p>
        </Reveal>
      </section>

      <StatsBand index="09" />
      <div className="pt-16">
        <CTASection />
      </div>
    </>
  );
}
