import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ApplicationForm from "@/components/ApplicationForm";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icons";
import { JOBS } from "@/lib/data";
import { jobPosting, breadcrumbs } from "@/lib/seo";

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} — Careers`,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
    openGraph: {
      title: `${job.title} — Careers | Frontier One Technology`,
      description: job.summary,
      url: `/careers/${job.slug}`,
      type: "website",
    },
  };
}

export default async function JobPage({ params }) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jobPosting(job),
            breadcrumbs([
              { name: "Home", path: "" },
              { name: "Careers", path: "/careers/" },
              { name: job.title, path: `/careers/${job.slug}/` },
            ]),
          ]),
        }}
      />

      <PageHero
        eyebrow="Careers / Open Role"
        watermark="Careers"
        image={`careers/role-${job.slug}.webp`}
        position="center 40%"
        title={[{ text: job.title, serif: true }]}
        lede={job.summary}
      >
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#apply" className="btn btn-bronze !rounded-full">
            <span className="flex items-center gap-2.5">
              Apply Now <Icon name="arrow" />
            </span>
          </a>
          <Link href="/careers" data-cursor="Back" className="btn btn-outline-paper !rounded-full">
            All Open Roles
          </Link>
        </div>
      </PageHero>

      <section className="container-x pb-24 pt-8 sm:pb-28">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Details */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border rule bg-n300 sm:grid-cols-4">
                <Meta label="Employment" value={job.type} />
                <Meta label="Experience" value={job.experience} />
                <Meta label="Salary" value={job.salary} />
                <Meta label="Location" value={job.location} />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display mt-14 text-2xl">
                What You&rsquo;ll <em>Do</em>
              </h2>
              <ul className="mt-6 space-y-4">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 border-b rule pb-4 text-[0.92rem] leading-relaxed text-n700">
                    <span className="mt-0.5 text-bronze-deep">
                      <Icon name="check" />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display mt-14 text-2xl">
                What You&rsquo;ll <em>Bring</em>
              </h2>
              <ul className="mt-6 space-y-4">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 border-b rule pb-4 text-[0.92rem] leading-relaxed text-n700">
                    <span className="mt-0.5 text-bronze-deep">
                      <Icon name="check" />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-12 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-n600">
                Key Skills
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span key={s} className="rounded-full border rule bg-white px-4 py-1.5 text-[0.82rem] font-medium text-n700">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Apply form */}
          <div id="apply" className="scroll-mt-28 lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="card sticky top-28 p-8">
                <p className="eyebrow">
                  <span className="text-bronze-deep">→</span> Apply for this role
                </p>
                <div className="mt-7">
                  <ApplicationForm role={job.title} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Meta({ label, value }) {
  return (
    <div className="bg-white p-5">
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-n600">{label}</p>
      <p className="mt-2 text-[0.85rem] font-semibold leading-snug tracking-tight">{value}</p>
    </div>
  );
}
