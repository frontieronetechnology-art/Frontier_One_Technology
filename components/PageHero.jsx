"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import Scramble from "./Scramble";

/**
 * Shared inner-page hero — scramble eyebrow, word-mask headline,
 * parallax drift on scroll, ghost index numeral.
 */
export default function PageHero({ eyebrow, index = "01", title, lede, children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="grid-paper grid-paper-fade absolute inset-0" aria-hidden />
      <motion.span
        aria-hidden
        style={reduce ? undefined : { y: ghostY }}
        className="ghost-num pointer-events-none absolute -top-10 right-0 select-none text-[16rem] opacity-60 sm:text-[24rem]"
      >
        {index}
      </motion.span>
      <motion.div style={reduce ? undefined : { y, opacity: fade }} className="container-x relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eyebrow"
        >
          <span className="idx">{index}</span>
          <Scramble text={eyebrow.toUpperCase()} delay={0.35} />
        </motion.p>
        {Array.isArray(title) ? (
          <SplitReveal
            onMount
            delay={0.35}
            segments={title}
            className="display mt-6 max-w-4xl text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-7xl"
          />
        ) : (
          <Reveal delay={0.1}>
            <h1 className="display mt-6 max-w-4xl text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>
        )}
        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-n700 sm:text-lg"
          >
            {lede}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
