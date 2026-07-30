import PageHero from "./PageHero";
import Reveal from "./Reveal";
import CTASection from "./CTASection";

/**
 * Shared layout for Terms & Privacy.
 *
 * Alignment rebuilt: the old version hung a monospace numeral in a flex row
 * beside the body, so every heading sat on a different optical left edge and
 * long clause titles wrapped under the number. Sections now run on a single
 * measure with the numeral set in the margin on wide screens and above the
 * heading on narrow ones — one consistent text edge the whole way down, and
 * a sticky contents rail so a fourteen-clause document is navigable.
 */
export default function LegalPage({ eyebrow, title, note, sections, image = "legal/hero.webp" }) {
  const slug = (s) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        image={image}
        position="center 45%"
        title={title}
        lede={note}
      />

      <section className="container-x pb-24 pt-20 sm:pb-28">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* ── contents rail ── */}
          <nav className="lg:col-span-3" aria-label="Contents">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Contents</p>
              <ol className="mt-6 space-y-2.5 border-l rule pl-5">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a
                      href={`#${slug(s.title)}`}
                      className="group flex gap-3 text-[0.82rem] leading-snug text-n700 transition-colors hover:text-bronze-deep"
                    >
                      <span className="font-mono text-[0.64rem] text-n500 transition-colors group-hover:text-bronze-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* ── document ── */}
          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal>
              <p className="mb-14 rounded-lg border border-warning/30 bg-warning/5 p-5 text-[0.82rem] leading-relaxed text-n700">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-warning">
                  Draft —{" "}
                </span>
                This document is a standard template pending review by Frontier One
                Technology&rsquo;s legal counsel. Bracketed items require client confirmation
                before launch.
              </p>
            </Reveal>

            <div className="prose-f1 max-w-none">
              {sections.map((s, i) => (
                <Reveal key={s.title}>
                  <section
                    id={slug(s.title)}
                    className="relative border-t rule pt-9 first:border-t-0 first:pt-0"
                  >
                    {/* numeral sits in the margin on wide screens so every
                        heading shares one left edge */}
                    <span
                      className="mb-2 block font-mono text-[0.7rem] text-bronze-deep lg:absolute lg:-left-14 lg:top-9 lg:mb-0"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="!mt-0 !text-[1.35rem]">{s.title}</h2>
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                    {s.list && (
                      <ul>
                        {s.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <div className="h-6" />
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
