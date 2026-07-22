"use client";

import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";

/**
 * Kinetic statement marquee — two opposing rows of oversized
 * solid/outline type that skew with scroll velocity.
 */
export default function BigMarquee() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skew = useSpring(useTransform(velocity, [-2200, 2200], [-5, 5]), {
    stiffness: 220,
    damping: 32,
  });

  const rowA = "Engineering Smarter Solutions for Tomorrow";
  const rowB = "Cloud — Software — Security — Data — DevOps — AI";

  return (
    <motion.div style={{ skewY: skew }} className="marquee select-none overflow-hidden py-14 sm:py-20" aria-hidden>
      <div className="marquee-track items-baseline gap-10" style={{ "--marquee-duration": "46s" }}>
        {[0, 1].map((n) => (
          <span key={n} className="flex shrink-0 items-baseline gap-10 pr-10">
            <span className="display whitespace-nowrap text-7xl text-ink sm:text-[7.5rem]">
              {rowA}
            </span>
            <span className="h-3 w-3 shrink-0 rotate-45 self-center bg-bronze" />
            <span className="display text-stroke-ink whitespace-nowrap text-7xl sm:text-[7.5rem]">
              <em>{rowA}</em>
            </span>
            <span className="h-3 w-3 shrink-0 rotate-45 self-center bg-bronze" />
          </span>
        ))}
      </div>
      <div
        className="marquee-track mt-4 items-baseline gap-8"
        style={{ "--marquee-duration": "38s", animationDirection: "reverse" }}
      >
        {[0, 1].map((n) => (
          <span key={n} className="flex shrink-0 items-baseline gap-8 pr-8">
            <span className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em] text-n600 sm:text-base">
              {rowB}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rotate-45 self-center bg-n400" />
          </span>
        ))}
      </div>
    </motion.div>
  );
}
