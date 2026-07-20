import Counter from "./Counter";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import { STATS } from "@/lib/data";

/** Site-wide statistics band — ink panel, animated counters (SRS §5.1.8). */
export default function StatsBand({ index = "06" }) {
  return (
    <section className="bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index={index}
          eyebrow="By the Numbers"
          title={
            <>
              Proof, <em>Not Promises</em>
            </>
          }
          invert
        />
        <RevealGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-n800 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <RevealItem key={s.label} className="bg-ink p-8 transition-colors duration-500 hover:bg-n800/60">
              <p className="display text-4xl text-n100 lg:text-[2.6rem]">
                {s.value !== null ? (
                  <Counter value={s.value} suffix={s.suffix} />
                ) : (
                  <span>{s.display}</span>
                )}
              </p>
              <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-bronze">
                {s.label}
              </p>
              <p className="mt-3 text-[0.83rem] leading-relaxed text-n500">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
