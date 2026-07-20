import PageHero from "./PageHero";
import Reveal from "./Reveal";
import CTASection from "./CTASection";

/** Shared layout for Terms & Privacy — numbered legal sections, editorial rhythm. */
export default function LegalPage({ eyebrow, title, note, sections }) {
  return (
    <>
      <PageHero index="§" eyebrow={eyebrow} title={title} lede={note} />
      <section className="container-x pb-24 pt-4 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-12 rounded-lg border border-warning/30 bg-warning/5 p-5 text-[0.82rem] leading-relaxed text-n700">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-warning">
                Draft —{" "}
              </span>
              This document is a standard template pending review by Frontier One
              Technology&rsquo;s legal counsel. Bracketed items require client confirmation
              before launch.
            </p>
          </Reveal>
          <div className="space-y-12">
            {sections.map((s, i) => (
              <Reveal key={s.title}>
                <div className="flex gap-6 border-t rule pt-8 sm:gap-10">
                  <span className="font-mono text-sm text-bronze-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">{s.title}</h2>
                    {s.body.map((p, j) => (
                      <p key={j} className="mt-3 text-[0.9rem] leading-relaxed text-n700">
                        {p}
                      </p>
                    ))}
                    {s.list && (
                      <ul className="mt-4 space-y-2">
                        {s.list.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-n700">
                            <span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-bronze" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
