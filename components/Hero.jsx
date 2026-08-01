"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
 * Planes, back to front:
 *   0. hero-city.webp          full-bleed skyline plate — the ground (LCP).
 *                              Single bottom-up scrim + bronze duotone blend.
 *   1. FRONTIER ONE TECHNOLOGY faint ambient texture, descends on scroll.
 *   2. hero-city-cutout.png    the same skyline with its sky removed.
 *   10. copy                   left-composed, docked just above the trust strip.
 *
 * The wordmark opens near the top of the frame at very low opacity, then
 * travels downward as you scroll while the cutout rises to meet it — so the
 * type slides in behind the rooflines. It is decorative only (aria-hidden,
 * pointer-events-none, select-none) and hidden below md.
 *
 * Copy is left-composed and docked above the strip: it leaves the top, left
 * and right of the frame open, which is what makes it feel composed rather
 * than filled. Entrance is a staggered chain (eyebrow → headline → subhead →
 * CTAs → trust strip) resolving in ~1.1–1.3s; parallax is desktop-only and
 * both are skipped under prefers-reduced-motion.
 */
export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [lit, setLit] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setLit((n) => (n + 1) % TRUST_LINE.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  /* parallax is desktop-only — the photographic drift reads as a bug on
     phones, so gate it behind a matchMedia check rather than vw heuristics */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* background plate lags the scroll at ~0.15x viewport speed (desktop) */
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0vh", "15vh"]);
  /* the wordmark descends into the skyline. Large viewport-relative travel:
     the section itself scrolls ~100vh, so a small descent nets out as "drifts
     off the top" behind the navbar instead of behind the buildings. 52vh puts
     it squarely into the cutout's roofline band while the section is on
     screen, which is where the occlusion reads. */
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["0vh", "52vh"]);
  const wordmarkFade = useTransform(scrollYProgress, [0, 0.5, 0.72], [1, 0.7, 0]);
  /* the cutout rises to meet it, closing the gap */
  const cutoutY = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  /* entrance chain — eyebrow → headline → subhead → CTAs → trust strip.
     ~110ms between groups, all resolved by ~1.3s. Reduced motion collapses
     every step to an instant opacity fade. */
  const st = reduce ? 0 : 0.11;
  const t = (delay, dur = 0.6) =>
    reduce ? { duration: 0.01 } : { duration: dur, delay, ease: EASE };

  return (
    <section
      ref={ref}
      className="hero-screen relative flex flex-col overflow-hidden bg-dark text-n100"
    >
      {/* ── PLANE 0 — the skyline plate (LCP) ─────────────────────── */}
      <motion.div
        aria-hidden
        style={isDesktop && !reduce ? { y: parallaxY } : undefined}
        className="absolute inset-x-0 -bottom-24 top-0 z-0"
      >
        <Image
          src="/images/home/hero-city.webp"
          alt=""
          priority
          width={2400}
          height={1350}
          sizes="100vw"
          fetchPriority="high"
          className="img-grade-dark h-full w-full object-cover object-[center_40%] md:object-[center_32%]"
        />
      </motion.div>

      {/* ── PLANE 1 — grade scrims ──────────────────────────────
          A single bottom-up scrim (darkest behind the copy at the bottom,
          lighter toward the top of the frame) plus a bronze duotone blend
          so the photography reads as part of the brand palette. */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.6) 45%, rgba(10,8,6,0.92) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-overlay"
        style={{ background: "rgba(182,132,77,0.10)" }}
        aria-hidden
      />
      <div className="grid-paper-invert absolute inset-0 z-[1] opacity-60" aria-hidden />

      {/* ── PLANE 2 — the wordmark: faint ambient texture, not a
          second headline. Decorative only, hidden below md. ──────── */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: wordmarkY, opacity: wordmarkFade }}
        className="pointer-events-none absolute inset-x-0 top-[var(--nav-h)] bottom-[54%] z-[2] hidden select-none items-center justify-center px-4 md:flex"
      >
        <motion.span
          initial={reduce ? false : { opacity: 0, letterSpacing: "0.16em" }}
          animate={{ opacity: 1, letterSpacing: "0.05em" }}
          transition={{ duration: 2.2, delay: 0.5, ease: EASE }}
          className="block whitespace-nowrap text-center font-sans text-[6.1vw] font-light uppercase leading-[0.9]"
          style={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(180deg, rgba(231,211,181,0.06) 0%, rgba(200,154,97,0.045) 52%, rgba(140,98,57,0.025) 100%)",
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

      {/* ── COPY — left-composed, docked just above the trust strip ── */}
      <div className="container-x hero-inner relative z-10 flex flex-col pt-[calc(var(--nav-h)+1rem)]">
        {/* grows to push the whole block down so it sits right above the strip */}
        <div className="flex-1" />

        <motion.div
          style={reduce ? undefined : { y: contentY, opacity: fade }}
          className="w-full"
        >
          {/* eyebrow — anchored to the strip's left edge */}
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t(0.1, 0.5)}
            className="eyebrow eyebrow-invert"
          >
            <Scramble text="TECHNOLOGY CONSULTING & IT SERVICES" delay={reduce ? 0 : 0.1} />
          </motion.p>

          {/* headline — left-set, fluid clamp; span runs to the strip line's
              right end */}
          <SplitReveal
            onMount
            delay={reduce ? 0 : 0.2}
            stagger={reduce ? 0 : 0.06}
            duration={reduce ? 0.01 : 0.8}
            segments={[
              { text: "Building Technology That Moves Businesses " },
              { text: "Forward", serif: true },
            ]}
            className="display mt-7 max-w-[24ch] text-balance text-left text-[clamp(2.2rem,4.5vw+1rem,5rem)] leading-[0.98] tracking-[-0.04em] text-n100"
          />

          {/* below the headline — description on the left, actions on the right */}
          <div className="mt-9 grid gap-9 lg:mt-11 lg:grid-cols-12 lg:items-end">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={t(0.32, 0.7)}
              className="lg:col-span-7 xl:col-span-6"
            >
              <p className="max-w-xl text-pretty text-left text-[0.95rem] leading-relaxed text-n400 sm:text-base">
                Whether you&rsquo;re modernizing your infrastructure, strengthening security, or
                developing your next digital product, Frontier One Technology delivers practical
                technology solutions designed for long-term business growth.
              </p>
            </motion.div>

            {/* one filled action plus one quiet inline link — set to the right.
                Full-width stacked on mobile for 44px+ tap targets. */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={t(0.43, 0.7)}
              className="flex flex-col gap-4 sm:flex-row sm:items-center lg:col-span-5 lg:justify-end xl:col-span-6"
            >
              <Magnetic>
                <Link
                  href="/services/cloud-solutions"
                  className="btn btn-bronze hero-cta hero-focus w-full !rounded-full sm:w-auto"
                >
                  <span className="flex items-center gap-2.5">
                    Explore Our Services <Icon name="arrow" />
                  </span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link
                  href="/contact"
                  data-cursor="Contact"
                  className="link-arrow link-arrow-invert hero-cta-secondary hero-focus inline-flex min-h-[2.75rem] w-full items-center justify-center sm:w-auto sm:justify-start"
                >
                  Schedule a Consultation <Icon name="arrow" />
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>

        {/* gap between the copy and the strip — the copy holds "right above" it */}
        <div className="pt-10 sm:pt-14" />

        {/* trust strip — wraps with dot separators; scroll cue bounces gently */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={t(0.55, 0.8)}
          style={reduce ? undefined : { opacity: fade }}
          className="relative z-10 flex w-full items-center justify-between gap-6 border-t border-dark-border/70 pb-7 pt-5"
        >
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
            {TRUST_LINE.map((item, i) => (
              <li key={item} className="flex items-center gap-6">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-n600" aria-hidden />}
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

          <motion.div
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden shrink-0 items-center gap-3 sm:flex"
            aria-hidden
          >
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-n500">
              Scroll
            </span>
            {/* a drawn capsule with a travelling dot reads as an instrument
                rather than a bouncing glyph */}
            <span className="relative h-8 w-4 rounded-full border border-n600">
              <motion.span
                className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-bronze-light"
                animate={reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
