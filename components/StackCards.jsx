"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const NAV_H = 72; // px — matches the fixed navbar height

/* ── figure motif — plots the eight-step framework as a ring and lights
      up every node completed by the current step ─────────────────────── */
function StepDial({ i, total }) {
  const nodes = Array.from({ length: total }, (_, k) => {
    const a = ((-90 + k * (360 / total)) * Math.PI) / 180;
    return { x: 100 + 64 * Math.cos(a), y: 100 + 64 * Math.sin(a) };
  });
  const done = nodes.slice(0, i + 1);
  const path = done.map((n, k) => `${k ? "L" : "M"}${n.x.toFixed(1)} ${n.y.toFixed(1)}`).join(" ");

  return (
    <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
      <circle cx="100" cy="100" r="64" stroke="rgba(244,246,250,0.12)" strokeDasharray="2 6" />
      <circle cx="100" cy="100" r="84" stroke="rgba(244,246,250,0.07)" />
      {done.length > 1 && <path d={path} stroke="#b8873a" strokeWidth="1.25" strokeLinejoin="round" />}
      {nodes.map((n, k) => (
        <g key={k}>
          {k === i && (
            <circle cx={n.x} cy={n.y} r="9.5" stroke="rgba(184,135,58,0.45)" strokeWidth="1" />
          )}
          <circle
            cx={n.x}
            cy={n.y}
            r={k === i ? 4.5 : 2.75}
            fill={k <= i ? "#b8873a" : "#1b2333"}
            stroke={k <= i ? "#b8873a" : "rgba(244,246,250,0.3)"}
            strokeWidth="1"
          />
        </g>
      ))}
    </svg>
  );
}

/* ── one card in the stack ───────────────────────────────────────────── */
function Card({ item, i, total, progress }) {
  const [missing, setMissing] = useState(false);
  const last = i === total - 1;
  const start = i / total;

  // every card but the last shrinks and dims as the ones after it ride over
  const scale = useTransform(progress, [start, 1], [1, last ? 1 : 1 - (total - 1 - i) * 0.03]);
  const dim = useTransform(progress, [start, 1], [0, last ? 0 : 0.45]);

  return (
    <div
      className="sticky flex items-center justify-center"
      style={{ top: NAV_H, height: "clamp(30rem, 70vh, 40rem)" }}
    >
      <motion.article
        style={{ scale, y: i * 13 }}
        className="relative h-[calc(100%-1.5rem)] w-full origin-top overflow-hidden rounded-xl border border-n300 bg-white shadow-[0_32px_64px_-40px_rgba(27,35,51,0.35)]"
      >
        <div className="grid h-full grid-cols-1 grid-rows-[minmax(0,1fr)_9rem] sm:grid-cols-[minmax(0,1fr)_minmax(0,0.68fr)] sm:grid-rows-1">
          {/* ── description ── */}
          <div className="flex flex-col justify-between gap-6 p-6 sm:gap-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze-deep">
                Step {item.n}
              </span>
              <span className="h-px flex-1 bg-n300" />
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n500">
                {item.n} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <div className="min-h-0">
              <h3 className="display text-[1.6rem] leading-[1.02] sm:text-[2.6rem]">{item.title}</h3>
              <p className="mt-4 line-clamp-5 max-w-lg text-[0.85rem] leading-relaxed text-n700 sm:mt-5 sm:line-clamp-none sm:text-[0.92rem]">
                {item.body}
              </p>
            </div>

            {/* phase meter */}
            <div className="flex items-center gap-4">
              <span className="relative h-px flex-1 overflow-hidden bg-n300">
                <span
                  className="absolute inset-y-0 left-0 bg-bronze"
                  style={{ width: `${((i + 1) / total) * 100}%` }}
                />
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-n500">
                {Math.round(((i + 1) / total) * 100)}%
              </span>
            </div>
          </div>

          {/* ── figure ── */}
          <figure className="relative m-0 overflow-hidden bg-ink">
            <div className="grid-paper-invert absolute inset-0" />
            <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 opacity-90">
              <StepDial i={i} total={total} />
            </div>

            {/* optional art — /public/images/process-01.webp … */}
            {!missing && (
              <img
                src={`/images/process-${item.n}.webp`}
                alt=""
                loading="lazy"
                onError={() => setMissing(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            <span className="ghost-num absolute bottom-5 right-6 select-none text-[5.5rem] leading-none sm:text-[7rem]">
              {item.n}
            </span>
          </figure>
        </div>

        {/* recede scrim — depth for the cards already stacked behind */}
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
 * Scroll-stacking cards — each card pins to the top of the viewport and
 * scales down as the next one slides over it, leaving a visible stack of
 * edges behind. Sticky-driven, so it never fights the smooth-scroll layer.
 */
export default function StackCards({ items }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

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
        <Card key={item.n} item={item} i={i} total={items.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}
