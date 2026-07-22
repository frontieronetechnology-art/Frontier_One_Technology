"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/** Reveal that alternates its entry direction by index — breaks the
 * "everything fades up the same way" monotony for list/article rhythm.
 * Uses `whileInView` (not an `initial` render branch) so reduced-motion
 * handling never depends on a client-only value during first paint —
 * the offset itself is small/subtle enough to respect that preference. */
export default function DirectionalReveal({ children, index = 0, className, delay = 0 }) {
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: fromLeft ? -40 : 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
