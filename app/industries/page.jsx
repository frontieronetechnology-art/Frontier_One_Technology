import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import CTASection from "@/components/CTASection";
import IndustryDeck from "@/components/IndustryDeck";
import TechConstellation from "@/components/TechConstellation";
import { INDUSTRIES } from "@/lib/data";

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

      {/* ── INDUSTRY DECK — full-screen panels, artwork behind the copy ── */}
      <section className="pb-24 pt-8 sm:pb-28">
        <IndustryDeck items={INDUSTRIES} />
      </section>

      {/* ── WHY ORGANIZATIONS CHOOSE US ──────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
        <div className="mesh-glow mesh-glow-invert" aria-hidden />
        <div className="container-x relative mx-auto max-w-4xl text-center">
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
        <TechConstellation />
      </section>

      <CTASection />
    </>
  );
}
