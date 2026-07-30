import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icons";
import { SERVICES, PROCESS_STEPS } from "@/lib/data";
import { serviceSchema, breadcrumbs } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
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
  const next = SERVICES[(index + 1) % SERVICES.length];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema(service),
            breadcrumbs([
              { name: "Home", path: "" },
              { name: service.title, path: `/services/${service.slug}/` },
            ]),
          ]),
        }}
      />

      <PageHero
        image={`services/${service.slug}.webp`}
        position="center 42%"
        eyebrow={`Services / ${service.title}`}
        watermark="Services"
        title={[
          { text: service.title.split(" ").slice(0, -1).join(" ") + " " },
          { text: service.title.split(" ").slice(-1).join(""), serif: true },
        ]}
        lede={service.short}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn btn-ink">
            Schedule a Consultation <Icon name="arrow" />
          </Link>
          <Link href="/process" className="btn btn-ghost">
            See Our Process
          </Link>
        </div>
      </PageHero>

      {/* ── NARRATIVE ────────────────────────────────────────── */}
      <section className="container-x pb-24 pt-8 sm:pb-28">
        <div className="grid gap-14 lg:grid-cols-12">
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

      {/* ── HOW WE ENGAGE (process tie-in) ───────────────────── */}
      <section className="border-t rule bg-band py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
           
            eyebrow="The Engagement"
            title={
              <>
                Delivered Through Our <em>8-Step Framework</em>
              </>
            }
            lede="Every engagement — including this one — moves through the same disciplined delivery framework, so quality and security are never left to chance."
          />
          <RevealGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border rule bg-n300 sm:grid-cols-4" stagger={0.05}>
            {PROCESS_STEPS.map((step) => (
              <RevealItem key={step.n}>
                <div className="flex h-full flex-col gap-2 bg-band p-5 transition-colors duration-500 hover:bg-white sm:p-6">
                  <span className="font-mono text-[0.68rem] text-bronze-deep">{step.n}</span>
                  <span className="text-[0.9rem] font-semibold tracking-tight">{step.title}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2}>
            <Link href="/process" className="link-arrow mt-10 inline-flex">
              Explore the full process <Icon name="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── NEXT SERVICE ─────────────────────────────────────── */}
      <section className="container-x py-20">
        <Reveal>
          <Link
            href={`/services/${next.slug}`}
            data-cursor="Next"
            className="group flex items-center justify-between gap-6 border-y rule py-10"
          >
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-n600">
                Next Service
              </p>
              <p className="display mt-3 text-3xl transition-colors duration-300 group-hover:text-n700 sm:text-4xl">
                {next.title}
              </p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border rule text-ink transition-all duration-500 group-hover:bg-dark group-hover:text-n100">
              <Icon name="arrow" />
            </span>
          </Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
