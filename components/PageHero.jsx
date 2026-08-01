"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import Scramble from "./Scramble";
import Media from "./Media";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Shared inner-page hero.
 *
 * Composed to the same grammar as the home hero so the set reads as one
 * system: a faint watermark high in the frame, the copy centred and held to
 * the lower half, and the top/left/right left deliberately open. The old
 * version bottom-left-anchored everything against a left-to-right scrim,
 * which filled the frame edge to edge and left nothing composed about it.
 *
 * The watermark is the page's own name — it does for inner pages what the
 * company wordmark does on the home hero, and it is what stops these heroes
 * reading as a generic photo with a caption.
 *
 * A two-axis scrim (§09.4 Image Scrim) still guarantees the h1 clears 4.5:1
 * over any plate.
 */
/* Only the copy block (eyebrow / h1 / lede / CTAs) moves with `align` — the
   watermark and the scroll cue always stay dead-centre, so the page name
   still reads as the frame's anchor regardless of which side the copy sits
   on. Every inner page uses "left" so the whole set reads as one deliberate
   composition instead of each page repeating the home hero's centring. */
const ALIGN = {
  center: { outer: "items-center", inner: "items-center text-center", btn: "items-center" },
  left: { outer: "items-start", inner: "items-start text-left", btn: "items-start" },
  right: { outer: "items-end", inner: "items-end text-right", btn: "items-end" },
};

export default function PageHero({
  eyebrow,
  image,
  title,
  lede,
  children,
  position,
  watermark,
  align = "left",
}) {
  const a = ALIGN[align] || ALIGN.left;
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const plateY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const markY = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const markFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const mark = (watermark || eyebrow || "").toUpperCase();
  /* keep the watermark inside the viewport whatever its length */
  const markSize = mark.length > 14 ? "7vw" : mark.length > 9 ? "9vw" : "11vw";

  return (
    <section
      ref={ref}
      className="hero-screen relative flex flex-col overflow-hidden bg-dark text-n100"
    >
      {image && (
        <motion.div
          aria-hidden
          style={reduce ? undefined : { y: plateY }}
          className="absolute inset-x-0 -bottom-24 top-0 z-0"
        >
          <Media src={image} fill grade="dark" priority position={position || "center"} />
        </motion.div>
      )}

      {/* centre/bottom-weighted scrim — the upper third stays readable so the
          watermark and the plate itself both survive */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 88% at 50% 90%, rgba(45,34,24,0.93) 0%, rgba(45,34,24,0.70) 40%, rgba(45,34,24,0.22) 76%, rgba(45,34,24,0) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-dark/68 via-transparent to-dark"
        aria-hidden
      />
      <div className="grid-paper-invert absolute inset-0 z-[1]" aria-hidden />

      {/* ── watermark — the page's own name, high and faint ─────── */}
      {mark && (
        <motion.div
          aria-hidden
          style={reduce ? undefined : { y: markY, opacity: markFade }}
          className="pointer-events-none absolute inset-x-0 top-[11%] z-[2] flex justify-center px-4"
        >
          <motion.span
            initial={reduce ? false : { opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.05em" }}
            transition={{ duration: 2, delay: 0.45, ease: EASE }}
            className="block select-none whitespace-nowrap text-center font-sans font-semibold uppercase leading-[0.9]"
            style={{
              fontSize: markSize,
              color: "transparent",
              backgroundImage:
                "linear-gradient(180deg, rgba(231,211,181,0.24) 0%, rgba(200,154,97,0.15) 52%, rgba(140,98,57,0.07) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            {mark}
          </motion.span>
        </motion.div>
      )}

      <div
        className={`container-x hero-inner relative z-10 flex flex-col pt-[calc(var(--nav-h)+1rem)] ${a.outer}`}
      >
        <div className="flex-[1.3]" />

        <motion.div
          style={reduce ? undefined : { y, opacity: fade }}
          className={`flex w-full max-w-4xl flex-col ${a.inner}`}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow eyebrow-invert"
          >
            <Scramble text={eyebrow.toUpperCase()} delay={0.35} />
          </motion.p>

          {Array.isArray(title) ? (
            <SplitReveal
              as="h1"
              onMount
              delay={0.35}
              segments={title}
              className="display mt-7 text-balance text-[clamp(2.2rem,2.1vw+1.75rem,4.9rem)] leading-[1.0] tracking-[-0.035em] text-n100"
            />
          ) : (
            <Reveal delay={0.1}>
              <h1 className="display mt-7 text-balance text-[clamp(2.2rem,2.1vw+1.75rem,4.9rem)] leading-[1.0] tracking-[-0.035em] text-n100">
                {title}
              </h1>
            </Reveal>
          )}

          {lede && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
              className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-n400 sm:text-lg"
            >
              {lede}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
              className={`mt-9 flex flex-col gap-4 sm:flex-row sm:items-center ${a.btn}`}
            >
              {children}
            </motion.div>
          )}
        </motion.div>

        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          style={reduce ? undefined : { opacity: fade }}
          className="hidden w-full items-center justify-center gap-3 border-t border-dark-border/70 pb-7 pt-5 sm:flex"
          aria-hidden
        >
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-n500">
            Scroll
          </span>
          <motion.span
            className="text-sm leading-none text-n500"
            animate={reduce ? {} : { y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
