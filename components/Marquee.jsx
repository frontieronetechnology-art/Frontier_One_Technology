import { TECH_MARQUEE } from "@/lib/data";

/**
 * Technology partner marquee — typographic wordmarks separated by
 * bronze diamonds. Drop official SVG logos into /public/logos to
 * replace text with images later (see IMAGE-PROMPTS.md).
 */
export default function Marquee({ label = "Technology Experience", invert = false }) {
  const row = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <div className={`marquee overflow-hidden border-y ${invert ? "border-n800" : "rule"}`}>
      <div className="relative py-7">
        <div className="marquee-track items-center gap-14 pr-14">
          {row.map((name, i) => (
            <span key={i} className="flex items-center gap-14">
              <span
                className={`whitespace-nowrap font-mono text-sm tracking-[0.14em] uppercase ${
                  invert ? "text-n500" : "text-n600"
                }`}
              >
                {name}
              </span>
              <span className="h-1 w-1 rotate-45 bg-bronze/70" aria-hidden />
            </span>
          ))}
        </div>
        <span className="sr-only">{label}: {TECH_MARQUEE.join(", ")}</span>
      </div>
    </div>
  );
}
