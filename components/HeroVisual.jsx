"use client";

import { motion, useReducedMotion } from "framer-motion";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Engineered orbital system — recreates the client reference's
 * monochrome sphere + floating glass cards entirely in code.
 * Rotating dashed orbits, node satellites, and three signal chips.
 */
export default function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]" aria-hidden>
      {/* Orbit rings */}
      <svg viewBox="0 0 560 560" fill="none" className="absolute inset-0 h-full w-full">
        <circle cx="280" cy="280" r="258" stroke="#C9CFDA" strokeWidth="1" />
        <g className={reduce ? "" : "animate-spin-slow"} style={{ transformBox: "fill-box" }}>
          <circle cx="280" cy="280" r="206" stroke="#C9CFDA" strokeWidth="1" strokeDasharray="3 7" />
          <circle cx="280" cy="74" r="4.5" fill="#1B2333" />
          <circle cx="486" cy="280" r="3" fill="#B8873A" />
        </g>
        <g className={reduce ? "" : "animate-spin-slower"} style={{ transformBox: "fill-box" }}>
          <circle cx="280" cy="280" r="150" stroke="#9EA4AF" strokeWidth="1" strokeDasharray="1 9" />
          <circle cx="130" cy="280" r="4" fill="#1B2333" />
        </g>
        {/* Core sphere — engraved contour lines */}
        <circle cx="280" cy="280" r="92" fill="#E9EDF3" />
        <circle cx="280" cy="280" r="92" stroke="#C9CFDA" strokeWidth="1" />
        <ellipse cx="280" cy="280" rx="92" ry="34" stroke="#C9CFDA" strokeWidth="1" fill="none" />
        <ellipse cx="280" cy="280" rx="92" ry="64" stroke="#DBE0E8" strokeWidth="1" fill="none" />
        <ellipse cx="280" cy="280" rx="34" ry="92" stroke="#C9CFDA" strokeWidth="1" fill="none" />
        <ellipse cx="280" cy="280" rx="64" ry="92" stroke="#DBE0E8" strokeWidth="1" fill="none" />
        <circle cx="280" cy="280" r="7" fill="#1B2333" />
        <circle cx="280" cy="280" r="14" stroke="#B8873A" strokeWidth="1" opacity="0.6" />
      </svg>

      {/* Floating glass chips */}
      <FloatingChip
        className="left-[-4%] top-[16%]"
        delay={0.9}
        drift={!reduce}
        icon="trend"
        title="Efficiency"
        sub="Operations, streamlined"
      />
      <FloatingChip
        className="right-[-6%] top-[42%]"
        delay={1.1}
        drift={!reduce}
        driftDelay="1.8s"
        icon="shield"
        title="Security"
        sub="Embedded from day one"
      />
      <FloatingChip
        className="bottom-[10%] left-[10%]"
        delay={1.3}
        drift={!reduce}
        driftDelay="3.4s"
        icon="layers"
        title="Scale"
        sub="Built for what's next"
      />
    </div>
  );
}

function FloatingChip({ className, delay, icon, title, sub, drift, driftDelay = "0s" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease: EASE }}
      className={`absolute ${className}`}
    >
      <div
        className={`flex items-center gap-3 rounded-lg border border-white/70 bg-white/60 py-3 pl-3 pr-5 shadow-[0_16px_40px_-16px_rgba(27,35,51,0.25)] backdrop-blur-md ${
          drift ? "animate-drift" : ""
        }`}
        style={{ animationDelay: driftDelay }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink text-n100">
          <Icon name={icon} />
        </span>
        <span>
          <span className="block text-[0.83rem] font-semibold tracking-tight text-ink">{title}</span>
          <span className="block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-n600">{sub}</span>
        </span>
      </div>
    </motion.div>
  );
}
