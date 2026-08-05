import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import EngagementModels from "@/components/EngagementModels";
import Icon from "@/components/Icons";
import {
  SERVICES,
  SERVICE_DETAIL,
  ENGAGEMENT_MODELS,
  SERVICES_FAQ,
  PROCESS_STEPS,
} from "@/lib/data";
import { breadcrumbs, faqPage, itemList } from "@/lib/seo";

export const metadata = {
  title: {
    absolute: "Technology Services | Cloud, Cybersecurity, Software & AI",
  },
  description:
    "Six technology disciplines under one standard — cloud solutions, software engineering, cybersecurity, data and analytics, DevOps automation, and artificial intelligence, delivered for long-term business value.",
  keywords: [
    "technology services",
    "IT services company",
    "cloud consulting services",
    "custom software development services",
    "cybersecurity services",
    "data analytics services",
    "DevOps consulting",
    "AI consulting services",
    "managed IT services",
  ],
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Technology Services | Frontier One Technology",
    description:
      "Cloud, software engineering, cybersecurity, data, DevOps, and AI services engineered for long-term business growth.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            itemList(
              SERVICES.map((s) => ({
                name: s.title,
                description: s.short,
                path: `/services/${s.slug}/`,
              })),
              "Technology services offered by Frontier One Technology"
            ),
            faqPage(SERVICES_FAQ),
            breadcrumbs([
              { name: "Home", path: "" },
              { name: "Services", path: "/services/" },
            ]),
          ]),
        }}
      />

      <PageHero
        eyebrow="Services"
        watermark="Services"
        image="services/cloud-solutions.webp"
        imageAlt="Frontier One Technology consultants delivering enterprise technology services"
        position="center 42%"
        title={[
          { text: "Technology Services for " },
          { text: "Modern Businesses", serif: true },
        ]}
        lede="Six disciplines, one delivery standard. Each service is run by specialists, follows the same eight-step framework, and is measured against a business outcome rather than a technical milestone."
      >
        <Link href="/contact#form" className="btn btn-bronze !rounded-full">
          <span className="flex items-center gap-2.5">
            Schedule a Consultation <Icon name="arrow" />
          </span>
        </Link>
        <Link href="/process" className="btn btn-outline-paper !rounded-full">
          See Our Process
        </Link>
      </PageHero>

      {/* ── SERVICE INDEX ────────────────────────────────────── */}
      <section className="container-x pb-24 pt-8 sm:pb-28">
        <SectionHeading
          eyebrow="What We Do"
          title={[{ text: "Six Disciplines, " }, { text: "One Standard", serif: true }]}
          lede="Most engagements draw on more than one of these. They are listed separately because they are staffed separately — not because they are delivered in isolation."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {SERVICES.map((s, i) => (
            <RevealItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                data-cursor="View"
                className="card group flex h-full flex-col justify-between gap-8 p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md border rule text-bronze-deep transition-colors duration-500 group-hover:border-bronze">
                      <Icon name={s.icon} />
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n600">
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                  </div>
                  <h2 className="display mt-7 text-[1.5rem] leading-tight">{s.title}</h2>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-n700">{s.short}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {(SERVICE_DETAIL[s.slug]?.tech || s.focus).slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="rounded-full border rule px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-n700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="cta-chip self-start">
                  View Service <Icon name="arrowUpRight" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── ENGAGEMENT MODELS ────────────────────────────────── */}
      <section className="border-t rule bg-band py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Engagement Models"
            title={[{ text: "Four Ways to " }, { text: "Work With Us", serif: true }]}
            lede="Every service above can be delivered under any of these commercial models. Choose the one that fits your team, your timeline, and how much of the delivery you want to own."
          />
          <div className="mt-14">
            <EngagementModels models={ENGAGEMENT_MODELS} />
          </div>
        </div>
      </section>

      {/* ── DELIVERY FRAMEWORK ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-dark py-24 text-n100 sm:py-28">
        <div className="mesh-glow mesh-glow-invert" aria-hidden />
        <div className="grid-paper-invert absolute inset-0" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            invert
            eyebrow="How We Work"
            title={[{ text: "One Framework, " }, { text: "Every Engagement", serif: true }]}
            lede="Whichever service you engage us for, the delivery method is the same — eight steps that keep communication clear, risk visible, and the solution tied to a business objective."
          />
          <RevealGroup
            className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-n800 bg-n800 sm:grid-cols-4"
            stagger={0.05}
          >
            {PROCESS_STEPS.map((step) => (
              <RevealItem key={step.n}>
                <div className="flex h-full flex-col gap-2 bg-dark p-5 transition-colors duration-500 hover:bg-n800/60 sm:p-6">
                  <span className="font-mono text-[0.68rem] text-bronze-light">{step.n}</span>
                  <span className="text-[0.9rem] font-semibold tracking-tight text-n100">
                    {step.title}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2}>
            <Link href="/process" className="link-arrow link-arrow-invert mt-10 inline-flex">
              Explore the full process <Icon name="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="container-x py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
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

      <div className="bg-band pt-16">
        <CTASection />
      </div>
    </>
  );
}
