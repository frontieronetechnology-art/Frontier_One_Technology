import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icons";
import Magnetic from "./Magnetic";
import SplitReveal from "./SplitReveal";
import RotatingBadge from "./RotatingBadge";

/** Standard repeating pre-footer CTA block (SRS §4.5) — ink panel, editorial headline. */
export default function CTASection() {
  return (
    <section className="container-x pb-24 pt-8 sm:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl bg-ink px-6 py-20 text-center sm:px-12 sm:py-28">
          {/* engraved concentric arcs */}
          <svg
            className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] opacity-[0.08]"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden
          >
            {[60, 100, 140, 180, 220].map((r) => (
              <circle key={r} cx="200" cy="200" r={r} stroke="#F4F6FA" strokeWidth="1" />
            ))}
          </svg>
          <svg
            className="pointer-events-none absolute -bottom-48 -left-40 h-[30rem] w-[30rem] opacity-[0.06]"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden
          >
            {[70, 120, 170, 220].map((r) => (
              <circle key={r} cx="200" cy="200" r={r} stroke="#F4F6FA" strokeWidth="1" />
            ))}
          </svg>

          <div className="absolute right-6 top-6 hidden sm:block lg:right-10 lg:top-10">
            <RotatingBadge invert />
          </div>

          <p className="eyebrow eyebrow-invert justify-center">
            <span className="idx">→</span> Start the Conversation
          </p>
          <SplitReveal
            as="h2"
            delay={0.1}
            segments={[
              { text: "Ready to Build " },
              { text: "What's Next?", serif: true },
            ]}
            className="display mx-auto mt-6 max-w-3xl text-4xl text-n100 sm:text-5xl lg:text-6xl"
          />
          <p className="mx-auto mt-7 max-w-2xl text-[0.95rem] leading-relaxed text-n400 sm:text-base">
            Technology is changing faster than ever. Having the right technology partner can
            make all the difference. Whether you&rsquo;re launching a new initiative, modernizing
            existing systems, or planning your next phase of growth, Frontier One Technology
            is here to help.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <Link href="/contact" className="btn btn-paper w-full sm:w-auto">
                Let&rsquo;s Talk
                <Icon name="arrow" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link href="/contact" className="btn btn-outline-paper w-full sm:w-auto">
                Contact Our Team
              </Link>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
