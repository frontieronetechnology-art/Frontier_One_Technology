"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Media from "./Media";

const NAV_H = 84; // px — matches the floating navbar capsule height

/* ── one card in the stack ───────────────────────────────────────────── */
/* Card height is expressed in `svh`, not `dvh`: dvh re-resolves as a phone's
   address bar collapses, which would resize all eight pinned cards — and
   relayout the document around them — in the middle of a scroll. */
function Card({ item, i, total, progress, fraction, fine }) {
  const last = i === total - 1;
  const start = i / total;

  // Every card but the last shrinks and dims as the ones after it ride over.
  // On touch both deltas collapse to 0 — the sticky cards still step through
  // one at a time natively, but no transform changes per scroll frame and no
  // extra GPU layers are promoted, so scrolling stays buttery.
  //
  // The recede resolves over the next two cards rather than over the rest of
  // the section. Running it to `1` meant all eight cards were re-scaling on
  // every single scroll frame, and a scale change on a card this size forces
  // the compositor to re-rasterize the photograph, four gradient veils and
  // the drafting grid inside it. That was the hitch measurable in the middle
  // of this section. Windowed, at most two or three cards are ever in motion,
  // and the settled stack looks the same.
  const end = Math.min(1, (i + 2) / total);
  const scale = useTransform(progress, [start, end], [1, last ? 1 : 1 - (total - 1 - i) * fraction]);
  const dim = useTransform(progress, [start, end], [0, last ? 0 : fine ? 0.45 : 0]);

  return (
    <div
      className="sticky flex items-center justify-center"
      style={{ top: NAV_H, height: "clamp(30rem, 70svh, 40rem)" }}
    >
      <motion.article
        style={fine ? { scale, y: i * 13 } : { y: i * 13 }}
        className="relative h-[calc(100%-1.5rem)] w-full origin-top overflow-hidden rounded-xl border border-n300 bg-white shadow-[0_32px_64px_-40px_rgba(45,34,24,0.35)]"
      >
        {/* photographic ground.
            The veil has to match the layout it sits under, which the old
            single diagonal gradient didn't: below `sm` the description row
            spans the card's FULL width (stacked above the figure strip), so
            a horizontal fade left the right half of every wrapped line
            sitting almost bare over the photo. Above `sm` the description
            column is 61.7% of the width (1fr of 1.62fr), and the old fade
            started clearing at 46% — inside that column — so the last third
            of the text sat on a nearly-transparent veil too. Both are fixed
            below: the mobile veil runs top → bottom (matching the stacked
            rows), the desktop veil now stays dense through the full 62%
            text column before clearing over the figure side. A multiply
            pass underneath still deepens the overall grade. */}
        <Media
          src={`home/approach-${item.n}.webp`}
          alt={`${item.title} — step ${item.n} of the Frontier One Technology delivery process`}
          fill
          grade="light"
          position="center 45%"
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(160deg, rgba(45,34,24,0.22) 0%, rgba(45,34,24,0.05) 55%, rgba(45,34,24,0.18) 100%)",
          }}
          aria-hidden
        />
        {/* One evenly-calibrated veil is what actually carries legibility
            here — per-element text-shadow halos were tried and made the
            heading look like it had a glowing outline (bold, not smooth)
            while leaving the small mono labels (Step NN, NN/08, the phase
            %) under-protected, since a halo strong enough for thin small
            type reads as an artefact on large bold type. A single gradient,
            calibrated once, is smooth and treats every piece of copy in
            the column the same way — dense enough to hold contrast for the
            smallest label, not so dense the photo disappears. */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(251,249,246,0.96) 0%, rgba(251,249,246,0.94) 46%, rgba(251,249,246,0.82) 62%, rgba(245,241,235,0.4) 78%, rgba(236,228,217,0.08) 93%)",
          }}
          aria-hidden
        />
        {/* The veil has to be opaque for as long as the copy column runs and
            only then feather. The earlier calibration started clearing at
            40% — inside the 62% text column — which left the body paragraph
            sitting on bare photography and effectively unreadable. It now
            holds through the column and releases across 66→86%, so the
            photograph still opens up on the figure side. */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(251,249,246,0.96) 0%, rgba(251,249,246,0.94) 44%, rgba(251,249,246,0.83) 57%, rgba(245,241,235,0.46) 67%, rgba(236,228,217,0.15) 78%, rgba(236,228,217,0) 88%)",
          }}
          aria-hidden
        />
        <div className="grid-paper absolute inset-0 opacity-40" aria-hidden />

        <div className="relative grid h-full grid-cols-1 grid-rows-[minmax(0,1fr)_9rem] sm:grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)] sm:grid-rows-1">
          {/* ── description ── */}
          <div className="flex flex-col justify-between gap-6 p-6 sm:gap-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze-deep">
                Step {item.n}
              </span>
              <span className="h-px flex-1 bg-n350" />
              {/* this badge sits at the column's far edge, past where the
                  (now much lighter, left-weighted) veil still has any
                  strength — a tiny chip of its own keeps it legible without
                  widening the veil back out toward the middle */}
              <span className="shrink-0 rounded-full bg-n100/75 px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n700">
                {item.n} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <div className="min-h-0">
              <h3 className="display text-ink text-[1.6rem] leading-[1.02] sm:text-[2.6rem]">
                {item.title}
              </h3>
              <p className="mt-4 line-clamp-6 max-w-lg text-[0.85rem] leading-relaxed text-n700 sm:mt-5 sm:line-clamp-none sm:text-[0.92rem]">
                {item.body}
              </p>
            </div>

            {/* phase meter */}
            <div className="flex items-center gap-4">
              <span className="relative h-px flex-1 overflow-hidden bg-n350">
                <span
                  className="absolute inset-y-0 left-0 bg-bronze"
                  style={{ width: `${((i + 1) / total) * 100}%` }}
                />
              </span>
              <span className="shrink-0 rounded-full bg-n100/75 px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-n700">
                {Math.round(((i + 1) / total) * 100)}%
              </span>
            </div>
          </div>

          {/* ── figure — just the photograph, with the numeral carrying
              its own drop-shadow so it holds contrast without a
              pasted-on backing plate ── */}
          <figure className="relative m-0 flex items-center justify-center">
            <span
              className="ghost-num absolute bottom-4 right-6 select-none text-[5.5rem] leading-none sm:text-[7rem]"
              style={{
                filter:
                  "drop-shadow(0 1px 1px rgba(255,255,255,0.5)) drop-shadow(0 6px 18px rgba(45,34,24,0.4))",
              }}
            >
              {item.n}
            </span>
          </figure>
        </div>

        {/* recede scrim — depth for the cards already stacked behind */}
        <motion.div
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 bg-dark"
          aria-hidden
        />
      </motion.article>
    </div>
  );
}

/**
 * Scroll-stacking cards — each card pins to the top of the viewport and
 * scales down as the next one slides over it, leaving a visible stack of
 * edges behind. Sticky-driven, so it never fights the smooth-scroll layer.
 */
export default function StackCards({ items }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const fraction = fine ? 0.03 : 0;

  if (reduce) {
    return (
      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item.n} className="card p-7">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze-deep">
              Step {item.n}
            </span>
            <h3 className="display mt-3 text-2xl">{item.title}</h3>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-n700">{item.body}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      {items.map((item, i) => (
        <Card key={item.n} item={item} i={i} total={items.length} progress={scrollYProgress} fraction={fraction} fine={fine} />
      ))}
    </div>
  );
}
