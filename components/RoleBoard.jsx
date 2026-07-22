"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$–/";

/* ── split-flap cell — characters riffle once, then settle ───────────── */
function Flap({ text, active, className = "" }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);

  const riffle = () => {
    if (reduce) return;
    let frame = 0;
    const total = 8;
    const id = setInterval(() => {
      frame++;
      if (frame >= total) {
        clearInterval(id);
        setDisplay(text);
        return;
      }
      const locked = Math.floor((frame / total) * text.length);
      setDisplay(
        text
          .split("")
          .map((ch, i) =>
            ch === " " || i <= locked ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          )
          .join("")
      );
    }, 34);
  };

  return (
    <span
      onMouseEnter={riffle}
      className={`block truncate transition-colors duration-500 ${
        active ? "text-n100" : "text-n600"
      } ${className}`}
    >
      {display}
    </span>
  );
}

/**
 * Open-roles board — a departure board rather than a list. Columns are fixed
 * and monospaced, the hovered row fills ink and its cells riffle like split
 * flaps, and the whole row is the link through to the full posting.
 */
export default function RoleBoard({ jobs }) {
  const [hover, setHover] = useState(null);
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-xl border border-n300 bg-white">
      {/* column headings */}
      <div className="hidden grid-cols-[3rem_minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)_3rem] items-center gap-4 border-b border-n300 bg-n50 px-6 py-3.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-n500 lg:grid">
        <span>№</span>
        <span>Role</span>
        <span>Type</span>
        <span>Experience</span>
        <span>Compensation</span>
        <span className="text-right">Go</span>
      </div>

      {jobs.map((job, i) => {
        const active = hover === i;
        return (
          <Link
            key={job.slug}
            href={`/careers/${job.slug}`}
            data-cursor="View"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            className="relative block border-b border-n300 last:border-b-0"
          >
            {/* ink fill sweeps in from the left */}
            <motion.span
              initial={false}
              animate={{ scaleX: active ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 0.55, ease: EASE }}
              className="absolute inset-0 origin-left bg-ink"
              aria-hidden
            />

            <div className="relative grid grid-cols-[2rem_minmax(0,1fr)_2.5rem] items-center gap-4 px-5 py-5 lg:grid-cols-[3rem_minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)_3rem] lg:px-6">
              <span
                className={`font-mono text-[0.7rem] transition-colors duration-500 ${
                  active ? "text-bronze" : "text-bronze-deep"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span
                  className={`display block truncate text-xl transition-colors duration-500 sm:text-2xl ${
                    active ? "text-n100" : "text-ink"
                  }`}
                >
                  {job.title}
                </span>
                {/* stacked meta for narrow screens */}
                <span
                  className={`mt-1.5 block truncate font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-colors duration-500 lg:hidden ${
                    active ? "text-n400" : "text-n500"
                  }`}
                >
                  {job.type} · {job.experience} · {job.salary}
                </span>
              </span>

              <span className="hidden min-w-0 font-mono text-[0.72rem] uppercase tracking-[0.12em] lg:block">
                <Flap text={job.type} active={active} />
              </span>
              <span className="hidden min-w-0 font-mono text-[0.72rem] uppercase tracking-[0.12em] lg:block">
                <Flap text={job.experience} active={active} />
              </span>
              <span className="hidden min-w-0 font-mono text-[0.72rem] tracking-[0.04em] lg:block">
                <Flap text={job.salary} active={active} />
              </span>

              <span
                className={`flex h-9 w-9 items-center justify-center justify-self-end rounded-full border transition-all duration-500 ${
                  active
                    ? "rotate-45 border-bronze bg-bronze text-ink"
                    : "border-n300 text-n600"
                }`}
              >
                <Icon name="arrowUpRight" />
              </span>
            </div>

            {/* location strip, revealed only for the live row */}
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                  className="relative overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[0.82rem] leading-relaxed text-n400 lg:px-6 lg:pl-[4.75rem]">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-bronze">
                      {job.location}
                    </span>
                    <span className="mt-2 block max-w-2xl">{job.summary}</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        );
      })}
    </div>
  );
}
