"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];
const CYCLES = 3; // two full spins before the digit lands
const STRIP = Array.from({ length: CYCLES * 10 }, (_, i) => i % 10);
const H = 1.12; // em — glyph box height, gives digits room to breathe

const box = { height: `${H}em`, lineHeight: `${H}em` };

/* ── one rolling column ──────────────────────────────────────────────── */
function Digit({ d, i, play }) {
  const landing = (CYCLES - 1) * 10 + d;
  return (
    <span className="relative inline-block overflow-hidden" style={box}>
      {/* invisible sizer — tabular figures keep every column the same width */}
      <span className="invisible block" style={box}>
        0
      </span>
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col"
        initial={{ y: "0%" }}
        animate={play ? { y: `-${(landing / STRIP.length) * 100}%` } : { y: "0%" }}
        transition={{ duration: 1.15 + i * 0.22, delay: i * 0.05, ease: EASE }}
      >
        {STRIP.map((n, k) => (
          <span key={k} className="block" style={box}>
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

/**
 * Odometer numeral — each digit column spins up and locks in, left to right.
 * Fires once on scroll into view; renders the plain value under reduced motion.
 */
export default function Odometer({ value, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const chars = String(value).split("");

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={`inline-flex tabular-nums ${className}`}
      aria-label={`${value}${suffix}`}
    >
      {chars.map((ch, i) =>
        /\d/.test(ch) ? (
          <Digit key={i} d={Number(ch)} i={i} play={inView} />
        ) : (
          <span key={i} className="inline-block" style={box}>
            {ch}
          </span>
        )
      )}
      {suffix && (
        <span className="inline-block text-[0.55em] text-bronze" style={{ lineHeight: `${H / 0.55}em` }}>
          {suffix}
        </span>
      )}
    </span>
  );
}
