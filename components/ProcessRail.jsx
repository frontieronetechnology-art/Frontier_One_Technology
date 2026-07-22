"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1];
const TOTAL = PROCESS_STEPS.length;
const STEP_ANGLE = 360 / TOTAL;

/* ── the dial — an instrument face rather than a drawn line. Ticks sit at
      every phase, a bronze arc sweeps with scroll, and the needle swings
      to whichever step is currently in the reading position. ─────────── */
function Dial({ active, progress }) {
  const arc = useSpring(progress, { stiffness: 90, damping: 24 });
  const needle = useSpring(active * STEP_ANGLE, { stiffness: 70, damping: 18 });

  useEffect(() => {
    needle.set(active * STEP_ANGLE);
  }, [active, needle]);

  return (
    <div className="relative aspect-square w-full max-w-[26rem]">
      <svg viewBox="0 0 200 200" fill="none" className="absolute inset-0 h-full w-full">
        {/* face */}
        <circle cx="100" cy="100" r="94" stroke="var(--color-n300)" />
        <circle cx="100" cy="100" r="72" stroke="var(--color-n300)" strokeDasharray="1 6" />

        {/* phase ticks */}
        {PROCESS_STEPS.map((_, i) => {
          const a = ((-90 + i * STEP_ANGLE) * Math.PI) / 180;
          const reached = i <= active;
          const r1 = reached ? 78 : 84;
          return (
            <line
              key={i}
              x1={100 + r1 * Math.cos(a)}
              y1={100 + r1 * Math.sin(a)}
              x2={100 + 94 * Math.cos(a)}
              y2={100 + 94 * Math.sin(a)}
              stroke={reached ? "var(--color-bronze)" : "var(--color-n400)"}
              strokeWidth={i === active ? 2 : 1}
              className="transition-all duration-500"
            />
          );
        })}

        {/* scroll-driven sweep */}
        <motion.circle
          cx="100"
          cy="100"
          r="86"
          stroke="var(--color-bronze)"
          strokeWidth="2"
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          style={{ pathLength: arc }}
        />

        {/* needle */}
        <motion.g style={{ rotate: needle, transformOrigin: "100px 100px" }}>
          <line x1="100" y1="100" x2="100" y2="26" stroke="var(--color-ink)" strokeWidth="1" />
          <circle cx="100" cy="26" r="4" fill="var(--color-bronze)" />
        </motion.g>
        <circle cx="100" cy="100" r="3" fill="var(--color-ink)" />
      </svg>

      {/* readout at the hub */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 text-center">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="display text-[5.5rem] leading-none text-ink"
        >
          {PROCESS_STEPS[active].n}
        </motion.p>
        <motion.p
          key={`t-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bronze-deep"
        >
          {PROCESS_STEPS[active].title}
        </motion.p>
      </div>
    </div>
  );
}

/**
 * Scroll-driven 8-step process (SRS §5.3.2) —
 * left: a sticky instrument dial that sweeps and points at the live phase;
 * right: the steps themselves on a plain bronze rail.
 */
export default function ProcessRail() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 75%"],
  });
  const rail = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div ref={containerRef} className="relative grid gap-10 lg:grid-cols-12">
      {/* Sticky dial */}
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-32 flex flex-col items-center">
          <Dial active={active} progress={scrollYProgress} />
          <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-n600">
            Phase {active + 1} of {TOTAL}
          </p>
        </div>
      </div>

      {/* Steps + rail */}
      <div className="relative lg:col-span-7">
        <span className="absolute bottom-8 left-[7px] top-8 w-px bg-n300" aria-hidden />
        <motion.span
          style={{ scaleY: rail }}
          className="absolute bottom-8 left-[7px] top-8 w-px origin-top bg-bronze"
          aria-hidden
        />
        <div className="space-y-4">
          {PROCESS_STEPS.map((step, i) => (
            <Step key={step.n} step={step} index={i} onActive={setActive} active={active === i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Step({ step, index, onActive, active }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative pl-12"
    >
      {/* node — a drafting diamond that fills as its phase becomes live */}
      <span
        className={`absolute left-0 top-9 block h-[15px] w-[15px] rotate-45 border transition-all duration-500 ${
          active ? "scale-110 border-bronze bg-bronze" : "border-n400 bg-n100"
        }`}
        aria-hidden
      />

      <div
        className={`card p-7 sm:p-8 ${active ? "!border-n400 !shadow-[0_24px_48px_-24px_rgba(27,35,51,0.16)]" : ""}`}
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-bronze-deep">{step.n}</span>
          <h3 className="display text-2xl">{step.title}</h3>
        </div>
        <p className="mt-3.5 text-[0.92rem] leading-relaxed text-n700">{step.body}</p>
      </div>
    </motion.div>
  );
}
