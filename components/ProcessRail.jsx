"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Scroll-driven 8-step process (SRS §5.3.2) —
 * left: sticky oversized ghost numeral that swaps as you scroll;
 * right: steps along a bronze progress spine.
 */
export default function ProcessRail() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 75%"],
  });
  const spine = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div ref={containerRef} className="relative grid gap-10 lg:grid-cols-12">
      {/* Sticky numeral */}
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-32">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="ghost-num text-[13rem] leading-none xl:text-[16rem]"
          >
            {PROCESS_STEPS[active].n}
          </motion.p>
          <motion.p
            key={`t-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-bronze-deep"
          >
            Phase {active + 1} of 8 — {PROCESS_STEPS[active].title}
          </motion.p>
        </div>
      </div>

      {/* Steps + spine */}
      <div className="relative lg:col-span-7">
        <div className="absolute bottom-8 left-[7px] top-8 w-px bg-n300" aria-hidden />
        <motion.div
          className="absolute left-[7px] top-8 w-px origin-top bg-bronze"
          style={{ scaleY: spine, height: "calc(100% - 4rem)" }}
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
      {/* node */}
      <span
        className={`absolute left-0 top-9 flex h-[15px] w-[15px] items-center justify-center rounded-full border transition-colors duration-500 ${
          active ? "border-bronze bg-bronze/15" : "border-n400 bg-n100"
        }`}
        aria-hidden
      >
        <span
          className={`h-[5px] w-[5px] rounded-full transition-colors duration-500 ${
            active ? "bg-bronze" : "bg-n400"
          }`}
        />
      </span>

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
