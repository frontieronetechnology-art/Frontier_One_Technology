"use client";

import { useMemo } from "react";

/**
 * Minimal galaxy field.
 *
 * Deterministic (seeded) point scatter along two rotated elliptical arms, so
 * the server and client render identical markup and React never warns about
 * a hydration mismatch. Points twinkle on staggered delays; the arms
 * themselves are static hairlines.
 *
 * Deliberately sparse — §17 rules out "particle fields", so this reads as a
 * drafted star chart rather than a screensaver.
 */
function mulberry(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Starfield({ count = 90, invert = false, className = "" }) {
  const stars = useMemo(() => {
    const rand = mulberry(20260729);
    return Array.from({ length: count }, () => {
      const arm = rand() > 0.45;
      const t = rand() * Math.PI * 2;
      const spread = 0.16 + rand() * 0.5;
      const x = arm
        ? 50 + Math.cos(t) * 46 * spread + (rand() - 0.5) * 14
        : rand() * 100;
      const y = arm
        ? 50 + Math.sin(t) * 22 * spread + (rand() - 0.5) * 10
        : rand() * 100;
      return {
        x: +x.toFixed(2),
        y: +y.toFixed(2),
        r: +(0.35 + rand() * 1.15).toFixed(2),
        d: +(rand() * 4).toFixed(2),
        bronze: rand() > 0.82,
      };
    });
  }, [count]);

  const dim = invert ? "251,249,246" : "61,47,36";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
        {/* two quiet arms so the scatter has a structure to belong to */}
        <ellipse
          cx="50"
          cy="50"
          rx="46"
          ry="22"
          fill="none"
          stroke={`rgba(182,132,77,0.16)`}
          strokeWidth="0.15"
          transform="rotate(-14 50 50)"
          vectorEffect="non-scaling-stroke"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="32"
          ry="14"
          fill="none"
          stroke={`rgba(${dim},0.12)`}
          strokeWidth="0.15"
          strokeDasharray="1 3"
          transform="rotate(16 50 50)"
          vectorEffect="non-scaling-stroke"
        />
        {stars.map((s, i) => (
          <circle
            key={i}
            className="twinkle"
            cx={s.x}
            cy={s.y}
            r={s.r * 0.22}
            fill={s.bronze ? "#B6844D" : `rgba(${dim},0.55)`}
            style={{ animationDelay: `${s.d}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
