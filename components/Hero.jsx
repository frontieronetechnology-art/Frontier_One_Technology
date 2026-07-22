"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Magnetic from "./Magnetic";
import Scramble from "./Scramble";
import SplitReveal from "./SplitReveal";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];
const TRUST_LINE = ["Cloud Engineering", "Software Development", "Cybersecurity", "Data & AI", "DevOps"];
const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4";

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [lit, setLit] = useState(0);

  // the discipline line breathes — one specialism lit at a time
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setLit((n) => (n + 1) % TRUST_LINE.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  /* Cursor torch: an extra ink layer covers the whole hero and is masked
     away around the pointer, so the footage only reads bright where the
     visitor is actually looking. Two CSS vars, no re-renders. */
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--tx", `${e.clientX - r.left}px`);
    el.style.setProperty("--ty", `${e.clientY - r.top}px`);
  };

  // scroll parallax — video + content drift at different speeds, content fades as you leave
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      onMouseMove={reduce ? undefined : onMove}
      style={{ "--tx": "72%", "--ty": "42%" }}
      className="relative overflow-hidden bg-ink text-n100"
    >
      {/* ── full-bleed background video, no frame, no clutter ───── */}
      <motion.div aria-hidden style={reduce ? undefined : { y: videoY }} className="absolute inset-0 z-0">
        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
          className="h-[calc(100%+140px)] w-full object-cover"
          style={{ filter: "grayscale(0.2) contrast(1.1) brightness(0.62) saturate(0.8)" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </motion.video>
      </motion.div>

      {/* single clean color-grade scrim — a left-to-right ink wash for
          legibility, plus a soft top/bottom vignette. No blur layers. */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-ink via-ink/70 to-ink/20 sm:via-ink/60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/70 via-transparent to-ink/25"
        aria-hidden
      />
      <div className="grid-paper absolute inset-0 z-[1] opacity-[0.05]" aria-hidden />

      {/* cursor torch — punched out of an extra ink wash */}
      {!reduce && (
        <div
          className="pointer-events-none absolute inset-0 z-[2] hidden bg-ink/55 sm:block"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle 240px at var(--tx) var(--ty), transparent 0%, rgba(0,0,0,0.55) 55%, black 100%)",
            maskImage:
              "radial-gradient(circle 240px at var(--tx) var(--ty), transparent 0%, rgba(0,0,0,0.55) 55%, black 100%)",
          }}
          aria-hidden
        />
      )}
      {!reduce && (
        <div
          className="pointer-events-none absolute inset-0 z-[2] hidden sm:block"
          style={{
            background:
              "radial-gradient(circle 240px at var(--tx) var(--ty), rgba(184,135,58,0.10), transparent 70%)",
          }}
          aria-hidden
        />
      )}

      {/* giant ghost wordmark drifting behind the copy */}
      <motion.p
        aria-hidden
        style={
          reduce
            ? { WebkitTextStroke: "1px rgba(244,246,250,0.12)" }
            : { y: contentY, WebkitTextStroke: "1px rgba(244,246,250,0.12)" }
        }
        className="pointer-events-none absolute -bottom-6 left-0 z-[1] select-none whitespace-nowrap font-sans text-[24vw] font-semibold leading-none tracking-tighter text-transparent opacity-[0.45] lg:text-[19vw]"
      >
        FRONTIER
      </motion.p>

      <div className="container-x relative z-10 flex min-h-[94vh] flex-col justify-center gap-14 pb-24 pt-40 lg:min-h-screen lg:pb-24 lg:pt-28">
        <motion.div style={reduce ? undefined : { y: contentY, opacity: fade }} className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="eyebrow eyebrow-invert"
          >
            <span className="idx shimmer-text">EST. 2026</span>
            <Scramble text="TECHNOLOGY CONSULTING & IT SERVICES" delay={0.35} />
          </motion.p>

          <SplitReveal
            onMount
            delay={0.3}
            segments={[
              { text: "Building Technology That Moves Businesses " },
              { text: "Forward", serif: true },
            ]}
            className="display mt-7 text-[clamp(2.9rem,3.4vw+2rem,6.75rem)] leading-[0.98] tracking-[-0.04em] text-n100"
          />

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="mt-8 max-w-lg text-base leading-relaxed text-n400 sm:text-lg"
          >
            Whether you&rsquo;re modernizing your infrastructure, strengthening security, or
            developing your next digital product, Frontier One Technology delivers practical
            technology solutions designed for long-term business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Magnetic>
              <Link href="/services/cloud-solutions" className="btn btn-bronze" data-cursor="Explore">
                <span className="flex items-center gap-2.5">
                  Explore Our Services <Icon name="arrow" />
                </span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link href="/contact" className="btn btn-outline-paper">
                Schedule a Consultation
              </Link>
            </Magnetic>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            {TRUST_LINE.map((item, i) => (
              <li key={item} className="flex items-center gap-5">
                {i > 0 && <span className="h-1 w-1 rotate-45 bg-bronze/70" aria-hidden />}
                <span
                  className={`font-mono text-[0.68rem] uppercase tracking-[0.18em] transition-colors duration-700 ${
                    lit === i ? "text-bronze" : "text-n500"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={reduce ? undefined : { opacity: fade }}
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        aria-hidden
      >
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.34em] text-n500">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-n800">
          <motion.span
            className="absolute left-0 top-0 h-1/2 w-px bg-bronze"
            animate={reduce ? {} : { y: ["-100%", "220%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
