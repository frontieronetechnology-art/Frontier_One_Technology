"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Big scroll-scrubbed headline — text fills solid ink left-to-right as
 * the section crosses the viewport, driven directly by scroll position
 * (not a one-shot trigger). Pass plain text; use `accent` for the
 * trailing serif-italic phrase.
 */
export default function ScrollFillHeading({ text, accent, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.15"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const fillPct = useTransform(fill, (v) => v);

  return (
    <motion.h2
      ref={ref}
      className={`fill-text ${className}`}
      style={{ "--fill": fillPct }}
    >
      {text} {accent && <em className="serif-accent">{accent}</em>}
    </motion.h2>
  );
}
