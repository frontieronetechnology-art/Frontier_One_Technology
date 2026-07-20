import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import ApplicationForm from "@/components/ApplicationForm";
import SpotlightCard from "@/components/SpotlightCard";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icons";
import { JOBS, BENEFITS, CAREERS_FAQ } from "@/lib/data";

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

        <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-2" stagger={0.06}>
          {JOBS.map((job) => (
            <RevealItem key={job.slug}>
              <Link href={`/careers/${job.slug}`} className="block h-full">
                <SpotlightCard className="card group flex h-full flex-col p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight">{job.title}</h3>
                  <span className="mt-1 shrink-0 text-n500 transition-all duration-500 group-hover:translate-x-1 group-hover:text-bronze-deep">
                    <Icon name="arrowUpRight" />
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag>{job.type}</Tag>
                  <Tag>{job.experience}</Tag>
                  <Tag>{job.location}</Tag>
                </div>
                <p className="mt-5 flex-1 text-[0.88rem] leading-relaxed text-n700">{job.summary}</p>
                <div className="mt-6 flex items-center justify-between border-t rule pt-5">
                  <span className="font-mono text-[0.78rem] text-bronze-deep">{job.salary}</span>
                  <span className="link-arrow text-sm">
                    View Details <Icon name="arrow" />
                  </span>
                </div>
                </SpotlightCard>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
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
          <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border rule bg-n300 sm:grid-cols-2 lg:grid-cols-5" stagger={0.04}>
            {BENEFITS.map((benefit, i) => (
              <RevealItem key={benefit}>
                <div className="flex h-full flex-col gap-4 bg-n50 p-6 transition-colors duration-500 hover:bg-white">
                  <span className="font-mono text-[0.68rem] text-bronze-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9rem] font-medium leading-snug tracking-tight">
                    {benefit}
                  </span>
                </div>
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

function Tag({ children }) {
  return (
    <span className="rounded-full border rule px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-n600">
      {children}
    </span>
  );
}
