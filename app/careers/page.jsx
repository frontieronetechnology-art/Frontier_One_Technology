import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import ApplicationForm from "@/components/ApplicationForm";
import CTASection from "@/components/CTASection";
import RoleBoard from "@/components/RoleBoard";
import ExpandRail from "@/components/ExpandRail";
import Media from "@/components/Media";
import Icon from "@/components/Icons";
import { JOBS, BENEFITS, CAREERS_FAQ } from "@/lib/data";
import { breadcrumbs } from "@/lib/seo";

/* ExpandRail takes objects; the benefit copy itself is unchanged. */
const BENEFIT_ITEMS = BENEFITS.map((title) => ({ title }));

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
  title: { absolute: "Careers | Technology Jobs at Frontier One Technology" },
  description:
    "Build your career with us. Open roles in cloud engineering, software development, cybersecurity, data, DevOps, AI, business analysis, and IT support.",
  keywords: [
    "technology jobs",
    "cloud engineer jobs",
    "software engineer careers",
    "cybersecurity analyst jobs",
    "data engineer jobs",
    "DevOps engineer careers",
  ],
  alternates: { canonical: "/careers/" },
  openGraph: {
    title: "Careers at Frontier One Technology",
    description:
      "Open roles across cloud, software engineering, cybersecurity, data, DevOps, and AI.",
    url: "/careers/",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbs([
              { name: "Home", path: "" },
              { name: "Careers", path: "/careers/" },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Careers"
        watermark="Careers"
        image="careers/hero.webp"
        imageAlt="Careers and open technology roles at Frontier One Technology"
        position="center 35%"
        title={[
          { text: "Build Your Future With " },
          { text: "Frontier One", serif: true },
        ]}
        lede="We believe exceptional technology starts with exceptional people. Whether you're an experienced engineer or an early-career professional looking to grow, Frontier One Technology provides an environment where learning, collaboration, and innovation come together. Join a team where your ideas matter and your career continues to evolve."
      >
        <div className="mt-9">
          <a href="#open-positions" className="btn btn-bronze !rounded-full">
            <span className="flex items-center gap-2.5">
              View Open Positions <Icon name="arrow" />
            </span>
          </a>
        </div>
      </PageHero>

      {/* ── CULTURE MARQUEE ──────────────────────────────────── */}
      <div className="marquee overflow-hidden border-y rule bg-band" aria-hidden>
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
      <section
        id="open-positions"
        className="relative scroll-mt-24 overflow-hidden pb-24 pt-16 sm:pb-28"
      >
        {/* a montage of the eight disciplines, veiled back so the board on
            top of it stays the thing you read */}
        <Media
          src="careers/positions-collage.webp"
          fill
          grade="light"
          position="center"
          className="opacity-25"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(251,249,246,0.97) 0%, rgba(251,249,246,0.9) 40%, rgba(245,241,235,0.95) 100%)",
          }}
          aria-hidden
        />
        <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
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
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────
          Rebuilt. This was ten identical 10.5rem tiles in a 5-column grid —
          the shortest, flattest section on the page, and it ended the page's
          rhythm dead. It is now two expand rails: same ten items, no added
          copy, but the section carries real vertical presence and each
          benefit gets a photograph when you reach for it. */}
      <section className="border-t rule bg-band py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Benefits"
            title={
              <>
                Why Join <em>Frontier One Technology?</em>
              </>
            }
            lede="Ten reasons people stay — hover any panel to open it."
          />
          <Reveal delay={0.12}>
            <div className="mt-14 space-y-3">
              <ExpandRail
                items={BENEFIT_ITEMS.slice(0, 5)}
                imageBase="careers/benefit"
                ratioClass="h-[24rem]"
              />
              <ExpandRail
                items={BENEFIT_ITEMS.slice(5)}
                imageBase="careers/benefit"
                ratioClass="h-[24rem]"
                startIndex={5}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── APPLICATION ──────────────────────────────────────── */}
      <section id="apply" className="container-x scroll-mt-24 py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
             
              eyebrow="Apply"
              title={
                <>
                  Ready to Build <em>Your Career?</em>
                </>
              }
              lede="If you're passionate about technology and want to work on meaningful projects with a collaborative team, we'd love to hear from you."
            />
            <Reveal delay={0.25}>
              <div className="mt-10 rounded-xl border rule bg-band p-7">
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
      <section className="border-t rule bg-band py-24 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
             
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

      <div className="bg-band pt-8">
        <CTASection />
      </div>
    </>
  );
}
