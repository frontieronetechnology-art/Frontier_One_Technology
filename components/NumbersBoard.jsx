"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Odometer from "./Odometer";
import Scramble from "./Scramble";

const EASE = [0.16, 1, 0.3, 1];

/* bento rhythm on the 6-column desktop grid — deliberately uneven so the
   board reads as an instrument panel rather than a row of equal boxes */
const SPANS = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

/* ── one readout cell ────────────────────────────────────────────────── */
function Cell({ stat, i, span, reduce }) {
  const numeric = stat.value !== null;

  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, delay: i * 0.06, ease: EASE }}
      className={`spotlight group relative flex flex-col justify-between gap-9 bg-ink p-7 transition-colors duration-500 hover:bg-n800/50 sm:p-8 ${span}`}
    >
      {/* bronze edge sweeps in on hover */}
      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-bronze transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze">
          {stat.label}
        </span>
        <span className="font-mono text-[0.62rem] text-n600">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <p
        className={`display text-n100 ${
          numeric
            ? "text-[clamp(2.75rem,5vw,4rem)]"
            : "text-[clamp(1.6rem,3.1vw,2.6rem)] leading-[1.05]"
        }`}
      >
        {numeric ? (
          <Odometer value={stat.value} suffix={stat.suffix} />
        ) : (
          <Scramble text={stat.display} delay={0.2 + i * 0.06} />
        )}
      </p>

      <div>
        <span className="relative block h-px w-full overflow-hidden bg-n800">
          <motion.span
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 1.1, delay: 0.2 + i * 0.07, ease: EASE }}
            className="absolute inset-0 origin-left bg-bronze/70"
          />
        </span>
        <p className="mt-4 text-[0.83rem] leading-relaxed text-n500">{stat.body}</p>
      </div>
    </motion.div>
  );
}

/**
 * Metrics board — a hairline bento of readouts on ink. Numerals roll in on
 * an odometer, text values decrypt, meters fill, and a bronze scan line
 * tracks the board as it passes through the viewport.
 */
export default function NumbersBoard({ stats }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scanTop = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);
  const scanOpacity = useTransform(scrollYProgress, [0.1, 0.28, 0.72, 0.9], [0, 1, 1, 0]);

  return (
    <div>
      {/* readout header */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-n800 pt-5">
        <span className="flex items-center gap-2.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n500">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-bronze" />
          Frontier One — operating metrics
        </span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n600">
          {stats.length} indicators
        </span>
      </div>

      <div
        ref={ref}
        className="relative mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-n800 bg-n800 sm:grid-cols-2 lg:grid-cols-6"
      >
        {stats.map((stat, i) => (
          <Cell key={stat.label} stat={stat} i={i} span={SPANS[i % SPANS.length]} reduce={reduce} />
        ))}

        {!reduce && (
          <motion.span
            aria-hidden
            style={{ top: scanTop, opacity: scanOpacity }}
            className="pointer-events-none absolute inset-x-0 z-10 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent"
          />
        )}
      </div>
    </div>
  );
}
