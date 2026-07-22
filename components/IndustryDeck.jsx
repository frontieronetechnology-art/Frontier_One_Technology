"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Icon from "./Icons";

const NAV_H = 72; // px — matches the fixed navbar height

/* ── background plate — the artwork sits behind the copy, full bleed ─── */
function Plate({ industry, i }) {
  const [missing, setMissing] = useState(false);
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-n800 via-ink to-n900" />
      <div className="grid-paper-invert absolute inset-0" />

      <div
        className={`absolute top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 ${
          i % 2 === 0 ? "right-[-8rem]" : "left-[-8rem]"
        }`}
      >
        <svg viewBox="0 0 400 400" fill="none" className="animate-spin-slow h-full w-full">
          <circle cx="200" cy="200" r="186" stroke="rgba(184,135,58,0.18)" />
          <circle cx="200" cy="200" r="134" stroke="rgba(244,246,250,0.07)" strokeDasharray="2 10" />
          <ellipse cx="200" cy="200" rx="186" ry="64" stroke="rgba(244,246,250,0.06)" />
          <circle cx="386" cy="200" r="3.5" fill="#b8873a" />
        </svg>
      </div>

      {/* drop /public/images/industry-<slug>.webp and it takes the panel over */}
      {!missing && (
        <img
          src={`/images/industry-${industry.slug}.webp`}
          alt=""
          loading="lazy"
          onError={() => setMissing(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* legibility scrim — biased to whichever side the copy sits on */}
      <div
        className={`absolute inset-0 ${
          i % 2 === 0
            ? "bg-gradient-to-r from-ink via-ink/85 to-ink/40"
            : "bg-gradient-to-l from-ink via-ink/85 to-ink/40"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
    </>
  );
}

/* ── one panel in the deck ───────────────────────────────────────────── */
function Panel({ industry, i, total, progress }) {
  const last = i === total - 1;
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, last ? 1 : 0.94]);
  const dim = useTransform(progress, [start, 1], [0, last ? 0 : 0.55]);

  return (
    <div
      className="sticky"
      style={{ top: NAV_H, height: `calc(100vh - ${NAV_H}px)`, zIndex: i + 1 }}
    >
      <motion.article
        id={industry.slug}
        style={{ scale }}
        className="relative h-full w-full origin-top overflow-hidden border-t border-n800 bg-ink"
      >
        <Plate industry={industry} i={i} />

        <div className="container-x relative flex h-full items-center">
          <div
            className={`w-full max-w-xl ${i % 2 === 0 ? "" : "ml-auto text-right"}`}
          >
            <div
              className={`flex items-center gap-3 ${i % 2 === 0 ? "" : "justify-end"}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md border border-n700/80 bg-ink/50 text-bronze backdrop-blur-sm">
                <Icon name={industry.icon} />
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-n400">
                Industry {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <h2 className="display mt-7 text-[2.4rem] leading-[0.98] text-n100 sm:text-[3.6rem]">
              {industry.name}
            </h2>

            <p className="mt-6 text-[0.92rem] leading-relaxed text-n400 sm:text-[0.98rem]">
              {industry.description}
            </p>

            <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze">
              Solutions include
            </p>
            <div
              className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "" : "justify-end"}`}
            >
              {industry.solutions.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-n700 px-3.5 py-1.5 text-[0.76rem] font-medium text-n300 transition-colors duration-500 hover:border-bronze hover:text-n100"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* oversized index, corner-set */}
        <span
          className={`ghost-num pointer-events-none absolute bottom-4 select-none text-[9rem] leading-none sm:text-[13rem] ${
            i % 2 === 0 ? "right-8" : "left-8"
          }`}
          aria-hidden
        >
          {String(i + 1).padStart(2, "0")}
        </span>

        {/* dim as the next panel rides over */}
        <motion.div
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 bg-ink"
          aria-hidden
        />
      </motion.article>
    </div>
  );
}

/**
 * Industry deck — each sector is a full-screen panel that pins to the top
 * while the next slides over it, alternating sides so the eye keeps moving.
 * Artwork sits full-bleed behind the copy; a drafting motif holds the frame
 * until an image is supplied.
 */
export default function IndustryDeck({ items }) {
  const ref = useRef(null);
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
