import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icons";
import { INDUSTRIES, TECH_STACK } from "@/lib/data";

export const metadata = {
  title: "Industries We Serve",
  description:
    "Technology solutions tailored for financial services, healthcare, retail, manufacturing, education, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Industries We Serve"
        title={[
          { text: "Delivering Technology Solutions Across " },
          { text: "Diverse Industries", serif: true },
        ]}
        lede="Every industry has its own operational challenges, compliance requirements, and technology priorities. At Frontier One Technology, we develop practical, scalable solutions that help organizations improve efficiency, strengthen security, and accelerate digital transformation."
      />

      {/* ── INDUSTRY DETAIL SECTIONS ─────────────────────────── */}
      <section className="container-x pb-24 pt-8 sm:pb-28">
        <div className="space-y-5">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.slug}>
              <article
                id={industry.slug}
                className="card grid scroll-mt-28 gap-8 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-n200 text-ink">
                      <Icon name={industry.icon} />
                    </span>
                    <span className="font-mono text-xs text-bronze-deep">
                      {String(i + 1).padStart(2, "0")} / 08
                    </span>
                  </div>
                  <h2 className="display mt-7 text-2xl sm:text-3xl">{industry.name}</h2>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-n700">
                    {industry.description}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-n600">
                    Solutions Include
                  </p>
                  <ul className="mt-5 space-y-3">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-center gap-3 border-b rule pb-3 text-[0.88rem] text-n700">
                        <span className="text-bronze-deep">
                          <Icon name="check" />
                        </span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── WHY ORGANIZATIONS CHOOSE US ──────────────────────── */}
      <section className="bg-ink py-24 sm:py-28">
        <div className="container-x mx-auto max-w-4xl text-center">
          <SectionHeading
            index="02"
            eyebrow="Why Organizations Choose Frontier One"
            title={
              <>
                Trusted Across <em>Every Sector</em>
              </>
            }
            invert
            center
          />
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-3xl text-[0.95rem] leading-relaxed text-n400 sm:text-base">
              Businesses across multiple industries trust us because we focus on delivering
              technology solutions that solve real operational challenges. Our approach combines
              technical expertise, scalable architecture, and long-term support to help
              organizations adapt to changing business needs while maintaining security,
              performance, and reliability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TECHNOLOGY EXPERIENCE (MARQUEE) ──────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="container-x mb-10">
          <SectionHeading
            index="03"
            eyebrow="Technology Experience"
            title={
              <>
                Platforms We Work With, <em>Hands-On</em>
              </>
            }
          />
        </div>
        <Marquee />
      </section>

      {/* ── TECHNOLOGY STACK ─────────────────────────────────── */}
      <section className="container-x pb-24 sm:pb-28">
        <SectionHeading
          index="04"
          eyebrow="Technology Stack"
          title={
            <>
              Technologies We <em>Work With</em>
            </>
          }
        />
        <RevealGroup className="mt-14 overflow-hidden rounded-xl border rule bg-white">
          {TECH_STACK.map((row) => (
            <RevealItem key={row.category}>
              <div className="grid gap-4 border-b rule p-7 last:border-b-0 sm:grid-cols-12 sm:items-center sm:p-8">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-bronze-deep sm:col-span-3">
                  {row.category}
                </p>
                <div className="flex flex-wrap gap-2.5 sm:col-span-9">
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border rule px-4 py-1.5 text-[0.82rem] font-medium text-n700 transition-colors duration-300 hover:border-ink hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CTASection />
    </>
  );
}
