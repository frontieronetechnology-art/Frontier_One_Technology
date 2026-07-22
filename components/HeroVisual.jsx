"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];
const CX = 280;
const CY = 280;

// three schematic connector lines radiating toward the floating chips —
// engineering-drawing "callout leader" motif, drawn on with pathLength.
const CONNECTORS = [
  { angle: 197, r1: 130, r2: 244 }, // toward Efficiency chip (upper-left)
  { angle: -8, r1: 150, r2: 260 }, // toward Security chip (right)
  { angle: 148, r1: 128, r2: 236 }, // toward Scale chip (lower-left)
];

function pt(angleDeg, r) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

/**
 * Engineered orbital system — an oversized monochrome sphere with
 * dashed orbit rings, schematic leader lines that "draw themselves"
 * on mount, and floating glass data chips. Ink/neutral palette with
 * restrained bronze accents, matching the locked brand system.
 */
export default function HeroVisual() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  const draw = (delay, duration = 1.1) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration, delay, ease: EASE },
        };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[38rem]" aria-hidden>
      {/* atmospheric glow behind the sphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(184,135,58,0.10), rgba(27,35,51,0.04) 55%, transparent 72%)",
          filter: "blur(28px)",
        }}
      />

      <svg viewBox="0 0 560 560" fill="none" className="relative h-full w-full">
        {/* outer static ring */}
        <motion.circle
          cx={CX} cy={CY} r="258" stroke="#C9CFDA" strokeWidth="1"
          {...draw(0.1, 1.6)}
        />

        {/* schematic leader lines + terminal nodes — drawn on like a blueprint */}
        {CONNECTORS.map((c, i) => {
          const a = pt(c.angle, c.r1);
          const b = pt(c.angle, c.r2);
          return (
            <g key={i}>
              <motion.line
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="#B8873A" strokeWidth="1" strokeDasharray="3 4" opacity="0.55"
                {...draw(1.0 + i * 0.12, 0.9)}
              />
              <motion.circle
                cx={b.x} cy={b.y} r="3" fill="#B8873A"
                initial={reduce ? {} : { scale: 0, opacity: 0 }}
                animate={reduce ? {} : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.75 + i * 0.12, ease: EASE }}
              />
            </g>
          );
        })}

        {/* rotating orbit rings */}
        <motion.g
          className={reduce ? "" : "animate-spin-slow"}
          style={{ transformBox: "fill-box" }}
          {...draw(0.35, 1.4)}
        >
          <circle cx={CX} cy={CY} r="206" stroke="#C9CFDA" strokeWidth="1" strokeDasharray="3 7" />
          <circle cx={CX} cy="74" r="4.5" fill="#1B2333" />
          <circle cx="486" cy={CY} r="3" fill="#B8873A" />
        </motion.g>
        <motion.g
          className={reduce ? "" : "animate-spin-slower"}
          style={{ transformBox: "fill-box" }}
          {...draw(0.5, 1.4)}
        >
          <circle cx={CX} cy={CY} r="150" stroke="#9EA4AF" strokeWidth="1" strokeDasharray="1 9" />
          <circle cx="130" cy={CY} r="4" fill="#1B2333" />
        </motion.g>

        {/* inner fine measurement ring */}
        <motion.circle
          cx={CX} cy={CY} r="112" stroke="#DBE0E8" strokeWidth="1" strokeDasharray="1 5"
          {...draw(0.65, 1.2)}
        />

        {/* core sphere — engraved contour lines */}
        <motion.g {...draw(0.2, 1.3)}>
          <circle cx={CX} cy={CY} r="92" fill="#E9EDF3" />
          <circle cx={CX} cy={CY} r="92" stroke="#C9CFDA" strokeWidth="1" />
          <ellipse cx={CX} cy={CY} rx="92" ry="34" stroke="#C9CFDA" strokeWidth="1" fill="none" />
          <ellipse cx={CX} cy={CY} rx="92" ry="64" stroke="#DBE0E8" strokeWidth="1" fill="none" />
          <ellipse cx={CX} cy={CY} rx="34" ry="92" stroke="#C9CFDA" strokeWidth="1" fill="none" />
          <ellipse cx={CX} cy={CY} rx="64" ry="92" stroke="#DBE0E8" strokeWidth="1" fill="none" />
        </motion.g>
        <motion.circle
          cx={CX} cy={CY} r="7" fill="#1B2333"
          initial={reduce ? {} : { scale: 0 }}
          animate={reduce ? {} : { scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1, ease: EASE }}
        />
        <motion.circle
          cx={CX} cy={CY} r="14" stroke="#B8873A" strokeWidth="1" opacity="0.6"
          {...draw(1.2, 0.8)}
        />

        {/* fine crosshair ticks — drafting-plate signature */}
        <motion.g stroke="#C9CFDA" strokeWidth="1" {...draw(0.4, 1)}>
          <path d="M280 8v20M280 532v20M8 280h20M532 280h20" />
        </motion.g>
      </svg>

      {/* Floating glass chips */}
      <FloatingChip
        className="left-[-4%] top-[16%]"
        delay={1.0}
        drift={!reduce}
        icon="trend"
        title="Efficiency"
        sub="Operations, streamlined"
      />
      <FloatingChip
        className="right-[-6%] top-[42%]"
        delay={1.2}
        drift={!reduce}
        driftDelay="1.8s"
        icon="shield"
        title="Security"
        sub="Embedded from day one"
      />
      <FloatingChip
        className="bottom-[10%] left-[10%]"
        delay={1.4}
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
