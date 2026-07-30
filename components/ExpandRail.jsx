"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Media from "./Media";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Horizontal expand rail.
 *
 * At rest every panel is a narrow spine carrying only its index and a
 * vertical title. Hover (or keyboard focus) opens one panel, which reveals
 * its photograph and body copy while the others compress. The row height
 * never changes, so nothing below it reflows — which is what makes this
 * usable as a section rather than a gimmick.
 *
 * Touch and reduced-motion users get a plain responsive grid with every
 * image visible, because a hover-only interaction would hide content there.
 */
export default function ExpandRail({
  items,
  imageBase,
  ratioClass = "h-[30rem]",
  eager = 0,
  startIndex = 0,
}) {
  const num = (i) => String(startIndex + i + 1).padStart(2, "0");
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  /* ── fallback: stacked cards, all content visible ── */
  if (reduce) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <article key={item.title} className="card relative overflow-hidden">
            <div className="relative h-40">
              <Media src={`${imageBase}-${num(i)}.webp`} fill />
            </div>
            <div className="p-6">
              <span className="font-mono text-[0.62rem] tracking-[0.2em] text-bronze-deep">
                {num(i)}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
              {item.body && (
                <p className="mt-2 text-[0.88rem] leading-relaxed text-n700">{item.body}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* ── mobile: every panel open, scroll to browse ─────────── */}
      <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {items.map((item, i) => (
          <article
            key={item.title}
            className="relative overflow-hidden rounded-xl border border-n300 bg-dark"
          >
            <div className="relative h-52">
              <Media
                src={`${imageBase}-${num(i)}.webp`}
                fill
                grade="dark"
                priority={i < eager}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-bronze-light">
                {num(i)}
              </span>
              <h3 className="mt-2 text-[1.05rem] font-semibold tracking-tight text-n100">
                {item.title}
              </h3>
              {item.body && (
                <p className="mt-2 text-[0.83rem] leading-relaxed text-n400">{item.body}</p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* ── desktop: the rail ──────────────────────────────────── */}
      <div className={`hidden gap-3 lg:flex ${ratioClass}`}>
        {items.map((item, i) => {
          const active = open === i;
          return (
            <motion.article
              key={item.title}
              tabIndex={0}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              animate={{ flexGrow: active ? 5.2 : 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{ flexBasis: 0 }}
              className={`relative min-w-[4.5rem] cursor-pointer overflow-hidden rounded-xl border transition-colors duration-500 ${
                active ? "border-bronze bg-dark" : "border-n300 bg-n50"
              }`}
            >
              {/* photograph — only paints once the panel is open */}
              <motion.div
                animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 1.08 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="absolute inset-0"
              >
                <Media
                  src={`${imageBase}-${num(i)}.webp`}
                  fill
                  grade="dark"
                  priority={i < eager}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/15" />
                <div className="grid-paper-invert absolute inset-0" />
              </motion.div>

              {/* collapsed spine */}
              <motion.div
                animate={{ opacity: active ? 0 : 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 flex flex-col items-center justify-between py-6"
              >
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-bronze-deep">
                  {num(i)}
                </span>
                <span
                  className="whitespace-nowrap text-[0.95rem] font-semibold tracking-tight text-ink"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {item.title}
                </span>
                <span className="h-6 w-px bg-bronze/50" aria-hidden />
              </motion.div>

              {/* expanded content */}
              <motion.div
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 16 }}
                transition={{ duration: 0.6, ease: EASE, delay: active ? 0.18 : 0 }}
                className="absolute inset-x-0 bottom-0 p-7"
              >
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-bronze-light">
                  {num(i)}
                </span>
                <h3 className="mt-3 max-w-md text-[1.35rem] font-semibold leading-tight tracking-tight text-n100">
                  {item.title}
                </h3>
                {item.body && (
                  <p className="mt-3 max-w-md text-[0.88rem] leading-relaxed text-n400">
                    {item.body}
                  </p>
                )}
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </>
  );
}
