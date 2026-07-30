"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];
const ITEM_H = 300;
const AMP = 22;

function buildPath(n) {
  const pts = [{ x: 50, y: 0 }];
  for (let i = 0; i < n; i++) {
    pts.push({ x: i % 2 === 0 ? 50 - AMP : 50 + AMP, y: i * ITEM_H + ITEM_H * 0.62 });
  }
  pts.push({ x: 50, y: n * ITEM_H });

  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const cur = pts[i];
    const midY = (prev.y + cur.y) / 2;
    d += ` C ${prev.x} ${midY}, ${cur.x} ${midY}, ${cur.x} ${cur.y}`;
  }
  return { d, nodes: pts.slice(1, -1) };
}

/**
 * The company journey as a hand-drafted winding route rather than a
 * straight spine — an SVG path draws itself in as you scroll, a bronze
 * marker travels its length, and milestones sit alternately along the
 * bends instead of stacking in a single vertical line.
 */
export default function JourneyPath({ items }) {
  const ref = useRef(null);
  const pathRef = useRef(null);
  const reduce = useReducedMotion();
  const n = items.length;
  const { d, nodes } = useMemo(() => buildPath(n), [n]);
  const totalH = n * ITEM_H;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.35"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [dot, setDot] = useState(null);
  useMotionValueEvent(pathLength, "change", (v) => {
    const path = pathRef.current;
    if (!path || reduce) return;
    const len = path.getTotalLength();
    const clamped = Math.min(len, Math.max(0, v * len));
    const pt = path.getPointAtLength(clamped);
    setDot(v > 0.004 && v < 0.998 ? { x: pt.x, y: pt.y } : null);
  });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl" style={{ height: totalH }}>
      <svg
        viewBox={`0 0 100 ${totalH}`}
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <path d={d} stroke="#DDD1C4" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
        <motion.path
          ref={pathRef}
          d={d}
          stroke="#B6844D"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: reduce ? 1 : pathLength }}
        />
      </svg>

      {/* traveling marker — a real HTML dot, not an SVG circle, so the
          viewBox's non-uniform scale (preserveAspectRatio="none") can't
          stretch it into an ellipse */}
      {dot && (
        <div
          className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze shadow-[0_0_0_5px_rgba(182,132,77,0.18)]"
          style={{ left: `${dot.x}%`, top: dot.y }}
          aria-hidden
        />
      )}

      {items.map((item, i) => {
        const node = nodes[i];
        const left = node.x < 50;
        return (
          <JourneyNode key={item.year} item={item} y={node.y} left={left} />
        );
      })}
    </div>
  );
}

function JourneyNode({ item, y, left }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: left ? 36 : -36, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.85, ease: EASE }}
      className={`absolute w-[46%] sm:w-[42%] ${left ? "left-0 pr-6 text-right sm:pr-10" : "right-0 pl-6 sm:pl-10"}`}
      style={{ top: y, transform: "translateY(-50%)" }}
    >
      <p className="font-mono text-sm tracking-[0.2em] text-bronze-deep">{item.year}</p>
      <h3 className="display mt-2 text-xl sm:text-2xl">{item.title}</h3>
      <p className="mt-3 text-[0.88rem] leading-relaxed text-n700">{item.body}</p>
    </motion.div>
  );
}
