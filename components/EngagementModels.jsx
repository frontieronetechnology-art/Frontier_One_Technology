"use client";

import { motion, useReducedMotion } from "framer-motion";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Engagement models — the four commercial ways a client can work with us.
 *
 * Deliberately built as the light-ground twin of the metrics board: one
 * hairline-joined panel rather than four floating cards, so the section reads
 * as a single instrument the visitor scans, and the whole panel arrives on one
 * staggered timeline instead of four independent ones.
 */
export default function EngagementModels({ models }) {
  const reduce = useReducedMotion();

  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border rule bg-n300 lg:grid-cols-2"
    >
      {models.map((m) => (
        <motion.article
          key={m.n}
          onMouseMove={onMove}
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
          }}
          className="spotlight group relative flex flex-col justify-between gap-8 bg-n50 p-7 transition-colors duration-500 hover:bg-white sm:p-9"
        >
          {/* bronze edge sweeps in on hover — same signal as the metrics board */}
          <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-bronze transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

          <div>
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-md border rule text-bronze-deep transition-colors duration-500 group-hover:border-bronze">
                <Icon name={m.icon} />
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n600">
                {m.n} / 04
              </span>
            </div>

            <h3 className="display mt-7 text-[1.5rem] leading-[1.05] sm:text-[1.9rem]">
              {m.title}
            </h3>
            <p className="mt-4 max-w-md text-[0.9rem] leading-relaxed text-n700">{m.body}</p>
          </div>

          <div>
            <p className="flex items-start gap-3 border-t rule pt-5 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-bronze-deep">
              <span className="mt-[0.45em] h-px w-4 shrink-0 bg-bronze" />
              {m.bestFor}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {m.points.map((p) => (
                <span
                  key={p}
                  className="rounded-full border rule px-3 py-1 text-[0.72rem] font-medium text-n700 transition-colors duration-500 group-hover:border-n350"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
