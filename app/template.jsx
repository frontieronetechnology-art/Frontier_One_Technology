"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/** Route transition — ink curtain lifts, content rises in. Re-runs on every navigation. */
export default function Template({ children }) {
  const reduce = useReducedMotion();
  if (reduce) return children;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[75] bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.85, ease: EASE, delay: 0.05 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[74] bg-bronze/90"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 0.85, ease: EASE, delay: 0.14 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </>
  );
}
