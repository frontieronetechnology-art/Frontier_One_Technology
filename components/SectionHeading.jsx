import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";

/**
 * Editorial section header. `title` accepts JSX or a segments array
 * ([{ text, serif }]) — arrays get the word-mask stagger reveal.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  invert = false,
  center = false,
  className = "",
}) {
  const titleClass = `display mt-5 text-[2.5rem] sm:text-5xl lg:text-[3.75rem] ${
    invert ? "text-n100" : "text-ink"
  }`;

  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <Reveal>
        <p className={`eyebrow ${invert ? "eyebrow-invert" : ""} ${center ? "justify-center" : ""}`}>
          {index && <span className="idx">{index}</span>}
          {eyebrow}
        </p>
      </Reveal>
      {Array.isArray(title) ? (
        <SplitReveal as="h2" segments={title} delay={0.08} className={titleClass} />
      ) : (
        <Reveal delay={0.08}>
          <h2 className={titleClass}>{title}</h2>
        </Reveal>
      )}
      {lede && (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
              invert ? "text-n400" : "text-n700"
            } ${center ? "mx-auto" : ""}`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
