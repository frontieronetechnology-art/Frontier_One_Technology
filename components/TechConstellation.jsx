"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { TECHNOLOGIES, TECH_CATEGORIES } from "@/lib/data";

const REPEL_RADIUS = 165; // px — how close the cursor gets before tiles move
const REPEL_FORCE = 28; // px — maximum displacement at point-blank range

const searchUrl = (name) =>
  `https://www.google.com/search?q=${encodeURIComponent(`${name} technology`)}`;

/* ── one brand tile ──────────────────────────────────────────────────── */
function Tile({ tech, i, px, py, dimmed, reduce }) {
  const ref = useRef(null);
  const centre = useRef({ x: 0, y: 0 });

  const ox = useMotionValue(0);
  const oy = useMotionValue(0);
  const x = useSpring(ox, { stiffness: 170, damping: 16, mass: 0.5 });
  const y = useSpring(oy, { stiffness: 170, damping: 16, mass: 0.5 });

  /* Centre is measured against the container (offsetParent), so it stays
     valid while the page scrolls — no per-frame getBoundingClientRect. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      centre.current = {
        x: el.offsetLeft + el.offsetWidth / 2,
        y: el.offsetTop + el.offsetHeight / 2,
      };
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (el.offsetParent) ro.observe(el.offsetParent);
    return () => ro.disconnect();
  }, []);

  const repel = useCallback(() => {
    if (reduce) return;
    const dx = centre.current.x - px.get();
    const dy = centre.current.y - py.get();
    const dist = Math.hypot(dx, dy);
    if (dist > 0 && dist < REPEL_RADIUS) {
      const force = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
      ox.set((dx / dist) * force);
      oy.set((dy / dist) * force);
    } else {
      ox.set(0);
      oy.set(0);
    }
  }, [ox, oy, px, py, reduce]);

  useMotionValueEvent(px, "change", repel);
  useMotionValueEvent(py, "change", repel);

  return (
    <motion.div ref={ref} style={{ x, y }} className="relative">
      {/* idle drift lives on its own layer so it never fights the repel */}
      <div
        className={reduce ? "" : "tech-float"}
        style={{ animationDelay: `${(i % 7) * -0.9}s`, animationDuration: `${6 + (i % 5)}s` }}
      >
        <a
          href={searchUrl(tech.name)}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="Search"
          title={`Search ${tech.name}`}
          className={`group flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-n300 bg-white p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink hover:shadow-[0_20px_40px_-20px_rgba(27,35,51,0.35)] ${
            dimmed ? "opacity-25 grayscale" : "opacity-100"
          }`}
        >
          {tech.slug ? (
            <img
              src={`/tech/${tech.slug}.svg`}
              alt={tech.name}
              loading="lazy"
              className={`${
                tech.wide ? "h-6 w-[70%]" : "h-8 w-8 sm:h-9 sm:w-9"
              } object-contain grayscale-[0.4] transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0`}
            />
          ) : (
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-n200 font-mono text-[0.62rem] font-semibold tracking-wider text-n700 transition-colors duration-500 group-hover:bg-ink group-hover:text-n100 sm:h-9 sm:w-9">
              {tech.mono}
            </span>
          )}
          <span className="text-center text-[0.6rem] font-medium leading-tight text-n600 transition-colors duration-500 group-hover:text-ink sm:text-[0.68rem]">
            {tech.name}
          </span>
        </a>
      </div>
    </motion.div>
  );
}

/**
 * Technology field — real brand marks that drift on their own, scatter away
 * from the cursor, and open a search for that technology when clicked.
 * Category chips filter the field down without moving anything.
 */
export default function TechConstellation() {
  const wrapRef = useRef(null);
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState(null);

  const px = useMotionValue(-9999);
  const py = useMotionValue(-9999);

  const onMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set(e.clientX - r.left);
    py.set(e.clientY - r.top);
  };
  const onLeave = () => {
    px.set(-9999);
    py.set(-9999);
  };

  return (
    <div>
      {/* category chips */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFilter(null)}
          className={`rounded-full border px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
            filter === null
              ? "border-ink bg-ink text-n100"
              : "border-n300 text-n600 hover:border-ink hover:text-ink"
          }`}
        >
          All
        </button>
        {TECH_CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter((f) => (f === c ? null : c))}
            className={`rounded-full border px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
              filter === c
                ? "border-ink bg-ink text-n100"
                : "border-n300 text-n600 hover:border-ink hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto hidden font-mono text-[0.62rem] uppercase tracking-[0.18em] text-n500 sm:block">
          Click a logo to search it
        </span>
      </div>

      <div
        ref={wrapRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4 lg:grid-cols-7"
      >
        {TECHNOLOGIES.map((tech, i) => (
          <Tile
            key={tech.name}
            tech={tech}
            i={i}
            px={px}
            py={py}
            reduce={reduce}
            dimmed={filter !== null && tech.category !== filter}
          />
        ))}
      </div>
    </div>
  );
}
