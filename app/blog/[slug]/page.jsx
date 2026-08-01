import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Media from "@/components/Media";
import Icon from "@/components/Icons";
import { POSTS, getPost } from "@/lib/blog";

const SITE = "https://frontieronetechnology.com";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${SITE}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

function Block({ block }) {
  if (block.type === "h2") return <h2>{block.text}</h2>;
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "quote") return <blockquote>{block.text}</blockquote>;
  if (block.type === "ul")
    return (
      <ul>
        {block.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    );
  return null;
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = (post.related || []).map(getPost).filter(Boolean);
  const wordCount = post.body
    .map((b) => (b.items ? b.items.join(" ") : b.text || ""))
    .join(" ")
    .split(/\s+/).length;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      dateModified: post.date,
      wordCount,
      timeRequired: `PT${post.readTime}M`,
      keywords: post.keywords.join(", "),
      articleSection: post.category,
      inLanguage: "en-US",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${post.slug}` },
      author: { "@type": "Organization", name: post.author, url: SITE },
      publisher: {
        "@type": "Organization",
        name: "Frontier One Technology",
        url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/logos/icon-512.png` },
      },
      image: `${SITE}/images/${post.image}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `${SITE}/blog/${post.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow={`Insights / ${post.category}`}
        watermark="Insights"
        image={post.image}
        position="center 45%"
        title={[{ text: post.title }]}
        lede={post.excerpt}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-n400">
          <time dateTime={post.date}>{fmt(post.date)}</time>
          <span className="h-px w-6 bg-bronze-light" aria-hidden />
          <span>{post.readTime} min read</span>
          <span className="h-px w-6 bg-bronze-light" aria-hidden />
          <span>{post.author}</span>
        </div>
      </PageHero>

      <article className="container-x pb-20 pt-20 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* ── in-page contents ── */}
          <nav className="lg:col-span-3" aria-label="On this page">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">On This Page</p>
              <ol className="mt-6 space-y-2.5 border-l rule pl-5">
                {post.body
                  .filter((b) => b.type === "h2")
                  .map((b) => (
                    <li key={b.text}>
                      <a
                        href={`#${b.text
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/^-|-$/g, "")}`}
                        className="block text-[0.82rem] leading-snug text-n700 transition-colors hover:text-bronze-deep"
                      >
                        {b.text}
                      </a>
                    </li>
                  ))}
              </ol>

              <div className="mt-10 rounded-xl border rule bg-band p-5">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-n700">
                  Talk it through
                </p>
                <p className="mt-2.5 text-[0.85rem] leading-relaxed text-n700">
                  We run this analysis against real estates every week.
                </p>
                <Link href="/contact#form" className="cta-chip mt-4">
                  Book a consultation <Icon name="arrowUpRight" />
                </Link>
              </div>
            </div>
          </nav>

          {/* ── body ── */}
          <div className="lg:col-span-8 lg:col-start-5">
            <div className="prose-f1 max-w-none">
              {post.body.map((block, i) => (
                <div
                  key={i}
                  id={
                    block.type === "h2"
                      ? block.text
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/^-|-$/g, "")
                      : undefined
                  }
                  className="scroll-mt-32"
                >
                  <Block block={block} />
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap gap-2 border-t rule pt-8">
              {post.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-n300 bg-band px-3.5 py-1.5 text-[0.74rem] text-n700"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* ── RELATED ──────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t rule bg-band py-20 sm:py-24">
          <div className="container-x">
            <p className="eyebrow">Continue Reading</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {related.map((r) => (
                <Reveal key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group card flex h-full flex-col overflow-hidden"
                  >
                    <div className="relative h-44">
                      <Media src={r.image} fill grade="light" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                      <div>
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-n700">
                          {r.category}
                        </p>
                        <h3 className="display mt-3 text-[1.2rem] leading-[1.14]">{r.title}</h3>
                      </div>
                      <span className="cta-chip self-start">
                        Read <Icon name="arrowUpRight" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="pt-16">
        <CTASection />
      </div>
    </>
  );
}
