"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Word-mask headline reveal — each word rises out of its own clip,
 * staggered. `segments`: [{ text, serif }] — serif renders in italic accent face.
 * `onMount` animates immediately (heroes); otherwise fires on scroll into view.
 */
export default function SplitReveal({
  segments,
  as: Tag = "h1",
  className = "",
  delay = 0,
  stagger = 0.055,
  onMount = false,
  duration = 0.95,
}) {
  const reduce = useReducedMotion();
  const words = [];
  segments.forEach((seg) => {
    seg.text
      .split(" ")
      .filter(Boolean)
      .forEach((w) => words.push({ w, serif: seg.serif }));
  });

  const MTag = motion[Tag] || motion.h1;
  const viewProps = onMount
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-12% 0px" } };

  if (reduce) {
    return (
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className={word.serif ? "serif-accent" : undefined}>
            {word.w}{" "}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <MTag className={className} {...viewProps} aria-label={words.map((x) => x.w).join(" ")}>
      {words.map((word, i) => (
        <span key={i} className="mask-word" aria-hidden>
          <motion.span
            className={`inline-block ${word.serif ? "serif-accent" : ""}`}
            variants={{
              hidden: { y: "115%", rotate: 2.5 },
              show: {
                y: 0,
                rotate: 0,
                transition: { duration, ease: EASE, delay: delay + i * stagger },
              },
            }}
          >
            {word.w}
          </motion.span>
          {" "}
        </span>
      ))}
    </MTag>
  );
}
