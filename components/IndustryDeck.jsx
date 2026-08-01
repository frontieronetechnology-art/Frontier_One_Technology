"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Icon from "./Icons";
import Media from "./Media";
import OrbitalField from "./OrbitalField";

const NAV_H = 84;

/* ── background plate ─────────────────────────────────────────────── */
function Plate({ industry, i }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-n800 via-dark to-n900" />

      {/* deep-dive imagery — deliberately a different cut from the home
          slider's plates so the two sections never feel duplicated */}
      <Media
        src={`industries/deep-${industry.slug}.webp`}
        fill
        grade="dark"
        position="center 40%"
      />

      <div className="grid-paper-invert absolute inset-0" />

      <OrbitalField
        invert
        className={`absolute top-1/2 hidden h-[46rem] w-[46rem] -translate-y-1/2 opacity-80 lg:block ${
          i % 2 === 0 ? "right-[-8rem]" : "left-[-8rem]"
        }`}
      />

      <div
        className={`absolute inset-0 ${
          i % 2 === 0
            ? "bg-gradient-to-r from-dark via-dark/85 to-dark/40"
            : "bg-gradient-to-l from-dark via-dark/85 to-dark/40"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
    </>
  );
}

/* ── single calendar page ─────────────────────────────────────────── */
function Panel({ industry, i, total, progress }) {
  const n = total;

  /*
   * Diary / top-bound calendar flip.
   *
   * Panel i flips from –90° (folded up, edge-on) → 0° (flat, open)
   * during the scroll slice:  (i-1)/n  →  i/n
   *
   * Panel 0: range is (–1/n → 0) — already past at scroll=0, so
   *          rotateX clamps to 0 and stays flat the whole time.  ✓
   */
  const rotateX = useTransform(
    progress,
    [(i - 1) / n, i / n],
    [-90, 0]
  );

  /*
   * Drop-shadow that peaks mid-flip to sell the paper depth,
   * then settles to a resting shadow once flat.
   */
  const shadow = useTransform(
    progress,
    [Math.max(0, (i - 1) / n), Math.max(0, (i - 0.5) / n), i / n],
    [
      "0px 0px 0px 0px rgba(0,0,0,0)",
      "0px 32px 72px 0px rgba(0,0,0,0.72)",
      "0px 6px 20px 0px rgba(0,0,0,0.28)",
    ]
  );

  /* dim overlay — subtle darkening as the next page folds on top */
  const dimOpacity = useTransform(
    progress,
    [i / n, Math.min((i + 1) / n, 1)],
    [0, i === n - 1 ? 0 : 0.38]
  );

  return (
    <div
      className="sticky"
      style={{ top: NAV_H, height: `calc(100dvh - ${NAV_H}px)`, zIndex: i + 1 }}
    >
      {/* perspective must live on a parent — not on the rotating element itself */}
      <div style={{ perspective: "1400px", height: "100%", width: "100%" }}>
        <motion.article
          id={industry.slug}
          style={{
            rotateX,
            boxShadow: shadow,
            transformOrigin: "top center",
            backfaceVisibility: "hidden",
            willChange: "transform",
          }}
          className="relative h-full w-full overflow-hidden border-t border-n800 bg-dark"
        >
          <Plate industry={industry} i={i} />

          <div className="container-x relative flex h-full items-center">
            <div className={`w-full max-w-xl ${i % 2 === 0 ? "" : "ml-auto text-right"}`}>
              <div className={`flex items-center gap-3 ${i % 2 === 0 ? "" : "justify-end"}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-md border border-n700/80 bg-dark/50 text-bronze-light backdrop-blur-sm">
                  <Icon name={industry.icon} />
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-n400">
                  Industry {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                </span>
              </div>

              <h2 className="display mt-7 text-[2.4rem] leading-[0.98] text-n100 sm:text-[3.6rem]">
                {industry.name}
              </h2>

              <p className="mt-6 text-[0.92rem] leading-relaxed text-n400 sm:text-[0.98rem]">
                {industry.description}
              </p>

              <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze-light">
                Solutions include
              </p>
              <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "" : "justify-end"}`}>
                {industry.solutions.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-n700 px-3.5 py-1.5 text-[0.76rem] font-medium text-n300 transition-colors duration-500 hover:border-bronze-light hover:text-n100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <span
            className={`ghost-num pointer-events-none absolute bottom-4 select-none text-[9rem] leading-none sm:text-[13rem] ${
              i % 2 === 0 ? "right-8" : "left-8"
            }`}
            aria-hidden
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* dim veil — next page is opening over this one */}
          <motion.div
            style={{ opacity: dimOpacity }}
            className="pointer-events-none absolute inset-0 bg-dark"
            aria-hidden
          />
        </motion.article>
      </div>
    </div>
  );
}

/**
 * Industry deck — each sector is a full-screen panel that flips in
 * from the top like a page of a top-bound diary or desk calendar.
 * Hinge is at the top edge; each page opens downward and lands flat.
 */
export default function IndustryDeck({ items }) {
  const ref    = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (reduce) {
    return (
      <div className="container-x grid gap-4">
        {items.map((industry, i) => (
          <article key={industry.slug} id={industry.slug} className="card scroll-mt-28 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-md border rule text-ink">
              <Icon name={industry.icon} />
            </span>
            <h2 className="display mt-6 text-2xl">{industry.name}</h2>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-n700">{industry.description}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      {items.map((industry, i) => (
        <Panel
          key={industry.slug}
          industry={industry}
          i={i}
          total={items.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}
