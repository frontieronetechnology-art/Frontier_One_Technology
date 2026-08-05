import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icons";
import { SERVICES, SERVICE_DETAIL, PROCESS_STEPS, INDUSTRIES } from "@/lib/data";
import { serviceSchema, faqPage, breadcrumbs } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  const detail = SERVICE_DETAIL[slug];
  return {
    title: { absolute: `${service.title} Services | Frontier One Technology` },
    description: service.short,
    keywords: [
      `${service.title.toLowerCase()} services`,
      `${service.title.toLowerCase()} consulting`,
      `${service.title.toLowerCase()} company`,
      ...(detail?.tech || []).slice(0, 6).map((t) => `${t} consulting`),
      "enterprise technology consulting",
    ],
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: `${service.title} | Frontier One Technology`,
      description: service.short,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const index = SERVICES.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();
  const service = SERVICES[index];
  const detail = SERVICE_DETAIL[slug];
  const related = [1, 2, 3].map((n) => SERVICES[(index + n) % SERVICES.length]);
  const industries = detail.industries
    .map((s) => INDUSTRIES.find((i) => i.slug === s))
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema(service, detail),
            faqPage(detail.faqs),
            breadcrumbs([
              { name: "Home", path: "" },
              { name: "Services", path: "/services/" },
              { name: service.title, path: `/services/${service.slug}/` },
            ]),
          ]),
        }}
      />

      <PageHero
        image={`services/${service.slug}.webp`}
        imageAlt={`${service.title} services delivered by Frontier One Technology`}
        position="center 42%"
        eyebrow={`Services / ${service.title}`}
        watermark="Services"
        title={[
          { text: service.title.split(" ").slice(0, -1).join(" ") + " " },
          { text: service.title.split(" ").slice(-1).join(""), serif: true },
        ]}
        lede={service.short}
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

      {/* ── 01 · OVERVIEW ────────────────────────────────────── */}
      <section id="overview" className="container-x scroll-mt-28 pb-24 pt-8 sm:pb-28">
        <Reveal>
          <p className="eyebrow">Overview</p>
        </Reveal>
        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="display text-xl leading-normal text-ink sm:text-2xl">
                {service.narrative[0]}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 space-y-6 text-[0.95rem] leading-relaxed text-n700 sm:text-base">
                {service.narrative.slice(1).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Delivery list */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.2}>
              <div className="card relative overflow-hidden p-8 sm:sticky sm:top-28">
                <span className="pointer-events-none absolute -right-4 -top-4 text-n200" aria-hidden>
                  <span className="[&_svg]:h-28 [&_svg]:w-28">
                    <Icon name={service.icon} />
                  </span>
                </span>
                <p className="relative font-mono text-[0.65rem] uppercase tracking-[0.22em] text-n600">
                  How Frontier One Delivers This
                </p>
                <ul className="mt-6 space-y-4">
                  {service.delivers.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.88rem] leading-snug text-n700">
                      <span className="mt-0.5 text-bronze-deep">
                        <Icon name="check" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t rule pt-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-n600">
                    Key Focus Areas
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.focus.map((f) => (
                      <span key={f} className="rounded-full border rule px-3 py-1 text-[0.72rem] font-medium text-n700">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 02 · BUSINESS CHALLENGES ─────────────────────────── */}
      <section id="challenges" className="scroll-mt-28 border-t rule bg-band py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Business Challenges"
            title={[
              { text: "What Usually " },
              { text: "Brings Clients Here", serif: true },
            ]}
            lede={`The patterns we see most often before a ${service.title.toLowerCase()} engagement begins.`}
          />
          <RevealGroup
            className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border rule bg-n300 sm:grid-cols-2"
            stagger={0.07}
          >
            {detail.challenges.map((c, i) => (
              <RevealItem key={c.title}>
                <div className="flex h-full flex-col gap-4 bg-band p-7 transition-colors duration-500 hover:bg-white sm:p-8">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[1.15rem] font-semibold leading-snug tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed text-n700">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 03 · OUR SOLUTION ────────────────────────────────── */}
      <section id="solution" className="container-x scroll-mt-28 py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Our Solution"
              title={[{ text: "How We " }, { text: "Solve It", serif: true }]}
              lede={detail.solutionLede}
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <RevealGroup className="divide-y divide-n300 border-y border-n300" stagger={0.07}>
              {detail.solution.map((s, i) => (
                <RevealItem key={s.title}>
                  <div className="flex gap-6 py-8 sm:gap-9">
                    <span className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="display text-[1.35rem] leading-tight sm:text-[1.6rem]">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-n700">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ── 04 · HOW WE WORK — the 8-step delivery framework ─── */}
      <section id="how-we-work" className="relative scroll-mt-28 overflow-hidden bg-dark py-24 text-n100 sm:py-28">
        <div className="mesh-glow mesh-glow-invert" aria-hidden />
        <div className="grid-paper-invert absolute inset-0" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            invert
            eyebrow="How We Work"
            title={[
              { text: "Delivered Through Our " },
              { text: "8-Step Framework", serif: true },
            ]}
            lede="Every engagement — including this one — moves through the same disciplined delivery framework, so quality, communication, and security are never left to chance."
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

      {/* ── 05 · TECHNOLOGIES WE USE ─────────────────────────── */}
      <section id="technologies" className="container-x scroll-mt-28 py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Technologies We Use"
              title={[{ text: "The " }, { text: "Working Stack", serif: true }]}
              lede="Platforms and tooling we work with day to day on this service. Where you already run something equivalent, we build in it rather than adding another vendor."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <RevealGroup
              className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border rule bg-n300 sm:grid-cols-2"
              stagger={0.04}
            >
              {detail.tech.map((t, i) => (
                <RevealItem key={t}>
                  <div className="flex h-full items-center gap-4 bg-n50 px-6 py-5 transition-colors duration-500 hover:bg-bronze-tint">
                    <span className="font-mono text-[0.6rem] text-bronze-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.95rem] font-medium tracking-tight text-ink">{t}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ── 06 · BUSINESS BENEFITS ───────────────────────────── */}
      <section id="benefits" className="scroll-mt-28 border-t rule bg-band py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Business Benefits"
            title={[{ text: "What Changes for " }, { text: "Your Business", serif: true }]}
            lede="The outcomes this work is measured against — commercial results, not technical milestones."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2" stagger={0.07}>
            {detail.benefits.map((b) => (
              <RevealItem key={b.title}>
                <div className="card flex h-full items-start gap-5 p-7 sm:p-8">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border rule text-bronze-deep">
                    <Icon name="check" />
                  </span>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold tracking-tight text-ink">
                      {b.title}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-n700">{b.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 07 · INDUSTRIES WE SERVE ─────────────────────────── */}
      <section id="industries" className="container-x scroll-mt-28 py-24 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title={[{ text: "Where This Work " }, { text: "Lands Most", serif: true }]}
            lede={`Sectors where our ${service.title.toLowerCase()} engagements are most established — though the discipline applies wherever the problem exists.`}
          />
          <Reveal delay={0.2}>
            <Link href="/industries" className="group mb-2 inline-flex">
              <span className="cta-chip">
                All Industries <Icon name="arrowUpRight" />
              </span>
            </Link>
          </Reveal>
        </div>
        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {industries.map((ind) => (
            <RevealItem key={ind.slug}>
              <Link
                href="/industries"
                className="card group flex h-full items-center gap-4 p-6"
                data-cursor="View"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border rule text-bronze-deep transition-colors duration-500 group-hover:border-bronze">
                  <Icon name={ind.icon} />
                </span>
                <span className="text-[0.98rem] font-semibold tracking-tight text-ink">
                  {ind.name}
                </span>
                <span className="ml-auto text-n500 transition-colors duration-500 group-hover:text-ink">
                  <Icon name="arrowUpRight" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── 08 · FAQs ────────────────────────────────────────── */}
      <section id="faqs" className="scroll-mt-28 border-t rule bg-band py-24 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQs"
              title={[{ text: "Questions About " }, { text: service.title, serif: true }]}
              lede="Straight answers to what clients ask before this engagement starts."
            />
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal delay={0.15}>
              <Accordion items={detail.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 09 · RELATED SERVICES ────────────────────────────── */}
      <section id="related" className="container-x scroll-mt-28 py-24 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Related Services"
            title={[{ text: "Often Delivered " }, { text: "Alongside This", serif: true }]}
          />
          <Reveal delay={0.2}>
            <Link href="/services" className="group mb-2 inline-flex">
              <span className="cta-chip">
                All Services <Icon name="arrowUpRight" />
              </span>
            </Link>
          </Reveal>
        </div>
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {related.map((r) => (
            <RevealItem key={r.slug}>
              <Link
                href={`/services/${r.slug}`}
                data-cursor="View"
                className="card group flex h-full flex-col justify-between gap-8 p-7 sm:p-8"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md border rule text-bronze-deep transition-colors duration-500 group-hover:border-bronze">
                    <Icon name={r.icon} />
                  </span>
                  <h3 className="display mt-7 text-[1.4rem] leading-tight">{r.title}</h3>
                  <p className="mt-3 line-clamp-3 text-[0.88rem] leading-relaxed text-n700">
                    {r.short}
                  </p>
                </div>
                <span className="cta-chip self-start">
                  View Service <Icon name="arrowUpRight" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── 10 · CONTACT CTA ─────────────────────────────────── */}
      <div className="bg-band pt-16">
        <CTASection />
      </div>
    </>
  );
}
