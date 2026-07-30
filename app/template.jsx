"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Route transition — ink curtain lifts, content rises in. Re-runs on every navigation.
 * `reduce` starts false (matching the server render) and is only set after mount,
 * so the first paint never diverges from the SSR output — avoids the hydration
 * mismatch `useReducedMotion()` causes when read directly during render.
 */
export default function Template({ children }) {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[75] bg-dark"
        initial={{ scaleY: reduce ? 0 : 1 }}
        animate={{ scaleY: 0 }}
        style={{ transformOrigin: "top" }}
        transition={reduce ? { duration: 0 } : { duration: 0.85, ease: EASE, delay: 0.05 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[74] bg-bronze/90"
        initial={{ scaleY: reduce ? 0 : 1 }}
        animate={{ scaleY: 0 }}
        style={{ transformOrigin: "top" }}
        transition={reduce ? { duration: 0 } : { duration: 0.85, ease: EASE, delay: 0.14 }}
      />
      <motion.div
        initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </>
  );
}
