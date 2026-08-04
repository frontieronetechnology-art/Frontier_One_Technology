"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Odometer from "./Odometer";

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

/* ── word-mask reveal for the non-numeric readouts ──────────────────────
   These used to decrypt character by character. On a proportional display
   face every random glyph is a different width, so the value re-flowed on
   every tick — the readout jittered and dragged the cell's layout with it.
   Rising each word out of its own clip is the same "locks into place"
   gesture, but it is transform-only: no reflow, no repaint, and it lands on
   one smooth curve. */
function MaskedValue({ text, delay = 0 }) {
  const reduce = useReducedMotion();
  const words = text.split(" ").filter(Boolean);

  if (reduce) return <span>{text}</span>;

  return (
    <span aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="mask-word" aria-hidden>
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%" },
                show: {
                  y: 0,
                  transition: { duration: 0.85, ease: EASE, delay: delay + i * 0.07 },
                },
              }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}

/* ── one readout cell ────────────────────────────────────────────────── */
function Cell({ stat, i, span }) {
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
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
      }}
      className={`spotlight group relative flex flex-col justify-between gap-5 bg-dark p-5 transition-colors duration-500 hover:bg-n800/50 sm:gap-9 sm:p-8 ${span}`}
    >
      {/* bronze edge sweeps in on hover */}
      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-bronze-light transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze-light">
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
          <MaskedValue text={stat.display} delay={0.1} />
        )}
      </p>

      <div>
        <span className="relative block h-px w-full overflow-hidden bg-n800">
          <motion.span
            variants={{
              hidden: { scaleX: 0 },
              show: { scaleX: 1, transition: { duration: 1.1, delay: 0.2, ease: EASE } },
            }}
            className="absolute inset-0 origin-left bg-bronze-light/70"
          />
        </span>
        <p className="mt-4 text-[0.83rem] leading-relaxed text-n500">{stat.body}</p>
      </div>
    </motion.div>
  );
}

/**
 * Metrics board — a hairline bento of readouts on ink. Numerals roll in on
 * an odometer, text values rise out of their masks, meters fill, and a bronze
 * scan line tracks the board as it passes through the viewport.
 *
 * The whole board animates from ONE parent variant container: eight separate
 * in-view observers used to fire eight independent timelines that could land
 * out of step with each other, which is what made the panel look like it was
 * assembling itself rather than arriving.
 */
export default function NumbersBoard({ stats }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  /* Percentage translate, not `top` — a motion value written to `top` is a
     layout write on every scroll frame across a grid of eight cells. `y` is
     a transform: composited, no layout, no repaint. The travelling element is
     full-height with the hairline drawn at its top edge, so y 0→100% walks
     the line from the top of the board to the bottom. */
  const scanY = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);
  const scanOpacity = useTransform(scrollYProgress, [0.1, 0.28, 0.72, 0.9], [0, 1, 1, 0]);

  return (
    <div>
      {/* readout header */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-n800 pt-5">
        <span className="flex items-center gap-2.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n500">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-bronze-light" />
          Frontier One — operating metrics
        </span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n600">
          {stats.length} indicators
        </span>
      </div>

      <motion.div
        ref={ref}
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-12% 0px" }}
        variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        /* Two columns from the smallest screen. One column meant eight
           full-width readouts stacked into roughly five phone-screens of
           scrolling for a band that is meant to be scanned in one pass —
           the panel read as something you get stuck in rather than
           something you take in. */
        className="relative mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-n800 bg-n800 lg:grid-cols-6"
      >
        {stats.map((stat, i) => (
          <Cell key={stat.label} stat={stat} i={i} span={SPANS[i % SPANS.length]} />
        ))}

        {!reduce && (
          <motion.span
            aria-hidden
            style={{ y: scanY, opacity: scanOpacity }}
            className="pointer-events-none absolute inset-0 z-10"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent" />
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
