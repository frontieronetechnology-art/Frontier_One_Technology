import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Media from "@/components/Media";
import Icon from "@/components/Icons";
import { sortedPosts } from "@/lib/blog";

const SITE = "https://frontieronetechnology.com";

export const metadata = {
  title: "Insights — Technology Consulting Perspectives",
  description:
    "Practical perspectives on cloud migration, security by design, DevOps economics, legacy modernization, and enterprise AI — written for the people who fund the decision.",
  alternates: { canonical: "/blog" },
  keywords: [
    "technology consulting insights",
    "cloud migration strategy",
    "security by design",
    "enterprise devops",
    "legacy modernization",
    "enterprise AI strategy",
  ],
  openGraph: {
    title: "Insights | Frontier One Technology",
    description:
      "Practical perspectives on cloud, security, DevOps, modernization, and enterprise AI.",
    url: `${SITE}/blog`,
    type: "website",
  },
};

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogIndex() {
  const posts = sortedPosts();
  const [lead, ...rest] = posts;

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Frontier One Technology Insights",
    url: `${SITE}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Frontier One Technology",
      url: SITE,
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url: `${SITE}/blog/${p.slug}`,
      author: { "@type": "Organization", name: p.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />

      <PageHero
        eyebrow="Insights"
        watermark="Insights"
        image="blog/hero.webp"
        position="center 40%"
        title={[
          { text: "Perspectives on Technology That " },
          { text: "Earns Its Keep", serif: true },
        ]}
        lede="Written for the people who fund the decision, not just the people who implement it. No vendor pitches, no maturity models — just what we have learned delivering the work."
      />

      {/* ── LEAD ARTICLE ─────────────────────────────────────── */}
      <section className="container-x pb-16 pt-20 sm:pt-24">
        <Reveal>
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-n300 bg-white transition-colors duration-500 hover:border-bronze lg:grid-cols-2"
          >
            <div className="relative min-h-[16rem] lg:min-h-[26rem]">
              <Media src={lead.image} fill grade="light" priority />
              <span className="absolute left-5 top-5 rounded-full bg-n100/92 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-bronze-deep backdrop-blur">
                Latest
              </span>
            </div>
            <div className="flex flex-col justify-between gap-8 p-7 sm:p-10">
              <div>
                <p className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-n700">
                  {lead.category}
                  <span className="h-px w-6 bg-bronze" />
                  {lead.readTime} min read
                </p>
                <h2 className="display mt-6 text-[1.75rem] leading-[1.05] sm:text-[2.5rem]">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-n700">
                  {lead.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <time
                  dateTime={lead.date}
                  className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-n700"
                >
                  {fmt(lead.date)}
                </time>
                <span className="cta-chip">
                  Read Article <Icon name="arrowUpRight" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* ── ARCHIVE ──────────────────────────────────────────── */}
      <section className="border-t rule bg-band py-20 sm:py-24">
        <div className="container-x">
          <p className="eyebrow">All Articles</p>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {rest.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group card flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-52">
                    <Media src={post.image} fill grade="light" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                    <div>
                      <p className="flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-n700">
                        {post.category}
                        <span className="h-px w-5 bg-bronze" />
                        {post.readTime} min
                      </p>
                      <h3 className="display mt-4 text-[1.3rem] leading-[1.12]">{post.title}</h3>
                      <p className="mt-3 text-[0.88rem] leading-relaxed text-n700">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <time
                        dateTime={post.date}
                        className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-n700"
                      >
                        {fmt(post.date)}
                      </time>
                      <span className="cta-chip">
                        Read <Icon name="arrowUpRight" />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="pt-16">
        <CTASection />
      </div>
    </>
  );
}
