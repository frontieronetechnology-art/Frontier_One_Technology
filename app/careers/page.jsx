import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import ApplicationForm from "@/components/ApplicationForm";
import CTASection from "@/components/CTASection";
import RoleBoard from "@/components/RoleBoard";
import SpotlightCard from "@/components/SpotlightCard";
import Icon from "@/components/Icons";
import { JOBS, BENEFITS, CAREERS_FAQ } from "@/lib/data";

const CULTURE_WORDS = [
  "Ownership",
  "Curiosity",
  "Craft",
  "Growth",
  "Collaboration",
  "Trust",
  "Momentum",
];

export const metadata = {
  title: "Careers",
  description:
    "Join Frontier One Technology. Explore open roles in cloud, software engineering, cybersecurity, data, and AI.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Careers"
        title={[
          { text: "Build Your Future With " },
          { text: "Frontier One", serif: true },
        ]}
        lede="We believe exceptional technology starts with exceptional people. Whether you're an experienced engineer or an early-career professional looking to grow, Frontier One Technology provides an environment where learning, collaboration, and innovation come together. Join a team where your ideas matter and your career continues to evolve."
      >
        <div className="mt-9">
          <a href="#open-positions" className="btn btn-ink">
            View Open Positions <Icon name="arrow" />
          </a>
        </div>
      </PageHero>

      {/* ── CULTURE MARQUEE ──────────────────────────────────── */}
      <div className="marquee overflow-hidden border-y rule bg-n50" aria-hidden>
        <div className="relative py-6">
          <div className="marquee-track items-baseline gap-10" style={{ "--marquee-duration": "32s" }}>
            {[0, 1].map((n) => (
              <span key={n} className="flex shrink-0 items-baseline gap-10 pr-10">
                {CULTURE_WORDS.map((w) => (
                  <span key={w} className="flex items-baseline gap-10">
                    <span className="display whitespace-nowrap text-3xl text-ink sm:text-4xl">{w}</span>
                    <span className="h-2 w-2 shrink-0 rotate-45 self-center bg-bronze" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── OPEN POSITIONS ───────────────────────────────────── */}
      <section id="open-positions" className="container-x scroll-mt-24 pb-24 pt-8 sm:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="Open Positions"
            title={
              <>
                Current & Upcoming <em>Opportunities</em>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-n600">
              {JOBS.length} Open Roles
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <RoleBoard jobs={JOBS} />
          </div>
        </Reveal>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <section className="border-t rule bg-n50 py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            index="03"
            eyebrow="Benefits"
            title={
              <>
                Why Join <em>Frontier One Technology?</em>
              </>
            }
          />
          <RevealGroup
            className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
            stagger={0.04}
          >
            {BENEFITS.map((benefit, i) => (
              <RevealItem key={benefit}>
                <SpotlightCard className="bracket group flex h-full min-h-[10.5rem] flex-col justify-between overflow-hidden border border-n300 bg-white p-6">
                  <span
                    className="ghost-num pointer-events-none select-none text-[3.5rem] leading-none transition-colors duration-500 group-hover:text-bronze/30"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.92rem] font-semibold leading-snug tracking-tight text-ink">
                    {benefit}
                  </span>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── APPLICATION ──────────────────────────────────────── */}
      <section id="apply" className="container-x scroll-mt-24 py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="04"
              eyebrow="Apply"
              title={
                <>
                  Ready to Build <em>Your Career?</em>
                </>
              }
              lede="If you're passionate about technology and want to work on meaningful projects with a collaborative team, we'd love to hear from you."
            />
            <Reveal delay={0.25}>
              <div className="mt-10 rounded-xl border rule bg-n50 p-7">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-n600">
                  Don&rsquo;t see your role?
                </p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-n700">
                  Join our talent network — submit the form with a note about the kind of work
                  you&rsquo;re looking for, and we&rsquo;ll reach out when a matching role opens.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <ApplicationForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CAREERS FAQ ──────────────────────────────────────── */}
      <section className="border-t rule bg-n50 py-24 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              index="05"
              eyebrow="Careers FAQ"
              title={
                <>
                  Questions About <em>Joining Us</em>
                </>
              }
            />
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal delay={0.15}>
              <Accordion items={CAREERS_FAQ} />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="bg-n50 pt-8">
        <CTASection />
      </div>
    </>
  );
}
