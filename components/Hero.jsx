"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Magnetic from "./Magnetic";
import Scramble from "./Scramble";
import SplitReveal from "./SplitReveal";
import Media from "./Media";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];
const TRUST_LINE = [
  "Cloud Engineering",
  "Software Development",
  "Cybersecurity",
  "Data & AI",
  "DevOps",
];

/**
 * Layered depth hero.
 *
 * Four planes, back to front:
 *   0. hero-city.webp          full-bleed skyline plate — the ground
 *   1. grade scrims            centre-weighted, so the top stays open
 *   2. FRONTIER ONE TECHNOLOGY set high and faint, and on scroll it *descends*
 *   3. hero-city-cutout.png    the same skyline with its sky removed
 *   10. copy                   centred, held to the lower half
 *
 * The wordmark is the whole trick. It opens near the top of the frame at low
 * opacity, then travels downward as you scroll while the cutout rises to meet
 * it — so the type slides in behind the rooflines and is eaten by the city
 * rather than merely fading. Plane 3 is what does the eating; without the
 * sky-removed cutout there is nothing for the letters to disappear behind.
 *
 * Copy is centred and pushed to the lower half deliberately: it leaves the
 * top, left and right open, which is what makes the frame feel composed
 * rather than filled.
 */
export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setLit((n) => (n + 1) % TRUST_LINE.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const plateY = useTransform(scrollYProgress, [0, 1], [0, 96]);
  /* The wordmark descends into the skyline. This has to be a large viewport-
     relative travel, not a percentage of the type's own height: the section
     itself is scrolling up ~100vh, so a small descent nets out as "drifts off
     the top" and the letters vanish behind the navbar instead of behind the
     buildings. 52vh puts them squarely into the cutout's roofline band while
     the section is still on screen, which is where the occlusion reads. */
  const markY = useTransform(scrollYProgress, [0, 1], ["0vh", "52vh"]);
  const markFade = useTransform(scrollYProgress, [0, 0.5, 0.72], [1, 0.7, 0]);
  /* the cutout rises to meet it, closing the gap */
  const cutoutY = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="hero-screen relative flex flex-col overflow-hidden bg-dark text-n100"
    >
      {/* ── PLANE 0 — the skyline plate ─────────────────────────── */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: plateY }}
        className="absolute inset-x-0 -bottom-24 top-0 z-0"
      >
        <Media src="home/hero-city.webp" fill grade="dark" priority position="center 35%" />
      </motion.div>

      {/* ── PLANE 1 — grade scrims ──────────────────────────────
          Centre-weighted, not left-to-right: the copy is centred now, and the
          upper third must stay relatively clear so the wordmark reads. */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 85% at 50% 88%, rgba(45,34,24,0.92) 0%, rgba(45,34,24,0.66) 42%, rgba(45,34,24,0.18) 78%, rgba(45,34,24,0) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-dark/70 via-transparent to-dark"
        aria-hidden
      />
      <div className="grid-paper-invert absolute inset-0 z-[1]" aria-hidden />

      {/* ── PLANE 2 — the wordmark, high and faint ──────────────── */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: markY, opacity: markFade }}
        className="pointer-events-none absolute inset-x-0 top-[10%] z-[2] flex justify-center px-4 sm:top-[12%]"
      >
        {/* 6.1vw is the largest size at which all 23 characters still clear the
            viewport with margin. The previous 12.4vw overflowed hard and the
            wordmark read as a cropped fragment — the single biggest reason the
            frame looked chaotic. Sized to fit, it becomes a quiet band of type
            instead of debris. */}
        <motion.span
          initial={reduce ? false : { opacity: 0, letterSpacing: "0.14em" }}
          animate={{ opacity: 1, letterSpacing: "0.02em" }}
          transition={{ duration: 2.2, delay: 0.5, ease: EASE }}
          className="block select-none whitespace-nowrap text-center font-sans text-[6.1vw] font-semibold uppercase leading-[0.9]"
          style={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(180deg, rgba(231,211,181,0.26) 0%, rgba(200,154,97,0.17) 52%, rgba(140,98,57,0.08) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Frontier One Technology
        </motion.span>
      </motion.div>

      {/* ── PLANE 3 — sky-removed skyline, standing in front ────── */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: cutoutY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[54%]"
      >
        <motion.div
          initial={reduce ? false : { y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.9, delay: 0.7, ease: EASE }}
          className="relative h-full w-full"
        >
          <Media src="home/hero-city-cutout.png" fill grade="dark" position="center bottom" />
        </motion.div>
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark to-transparent"
          aria-hidden
        />
      </motion.div>

      {/* ── COPY — centred, rebalanced toward true optical centre ── */}
      <div className="container-x hero-inner relative z-10 flex flex-col items-center pt-[calc(var(--nav-h)+1rem)]">
        {/* trimmed from flex-[1.35]: the block now sits nearer centre
            instead of pinned to the floor of the frame */}
        <div className="flex-1" />

        <motion.div
          style={reduce ? undefined : { y: contentY, opacity: fade }}
          className="flex w-full max-w-4xl flex-col items-center text-center"
        >
          {/* kicker tick — a single drawn line to anchor the composition
              before the eyebrow reads; keeps an all-centred frame from
              feeling like a default template hero */}
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            className="h-px w-9 origin-center bg-bronze-light/70"
            aria-hidden
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow eyebrow-invert mt-5"
          >
            <Scramble text="TECHNOLOGY CONSULTING & IT SERVICES" delay={0.4} />
          </motion.p>

          <SplitReveal
            onMount
            delay={0.35}
            segments={[
              { text: "Building Technology That Moves Businesses " },
              { text: "Forward", serif: true },
            ]}
            className="display mt-6 text-balance text-[clamp(2.3rem,3.1vw+1.1rem,5rem)] leading-[0.98] tracking-[-0.04em] text-n100 sm:mt-7"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="mt-6 flex flex-col items-center gap-7 sm:mt-7"
          >
            <p className="max-w-xl text-pretty text-[0.95rem] leading-relaxed text-n400 sm:text-base">
              Whether you&rsquo;re modernizing your infrastructure, strengthening security, or
              developing your next digital product, Frontier One Technology delivers practical
              technology solutions designed for long-term business growth.
            </p>

            {/* primary/secondary now carry different weight — one filled
                action plus one quiet inline link, instead of two equal
                pills sitting side by side */}
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
              <Magnetic>
                <Link href="/services/cloud-solutions" className="btn btn-bronze !rounded-full">
                  <span className="flex items-center gap-2.5">
                    Explore Our Services <Icon name="arrow" />
                  </span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link
                  href="/contact"
                  data-cursor="Contact"
                  className="link-arrow link-arrow-invert"
                >
                  Schedule a Consultation <Icon name="arrow" />
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex-1" />

        {/* trust strip — unchanged */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
          style={reduce ? undefined : { opacity: fade }}
          className="relative z-10 flex w-full items-center justify-between gap-6 border-t border-dark-border/70 pb-7 pt-5"
        >
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {TRUST_LINE.map((item, i) => (
              <li key={item} className="flex items-center gap-6">
                {i > 0 && <span className="h-px w-3 bg-n600" aria-hidden />}
                <span
                  className={`font-mono text-[0.62rem] uppercase tracking-[0.2em] transition-colors duration-700 ${
                    lit === i ? "text-bronze-light" : "text-n500"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 sm:flex" aria-hidden>
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-n500">
              Scroll
            </span>
            {/* a drawn capsule with a travelling dot reads as an instrument
                rather than a bouncing glyph */}
            <span className="relative h-8 w-4 rounded-full border border-n600">
              <motion.span
                className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-bronze-light"
                animate={reduce ? {} : { y: [0, 12, 0], opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
