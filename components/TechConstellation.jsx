"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { TECHNOLOGIES, TECH_CATEGORIES } from "@/lib/data";

const searchUrl = (name) =>
  `https://www.google.com/search?q=${encodeURIComponent(`${name} technology`)}`;

/* ── one brand tile — a pill, not a boxed grid cell ──────────────────── */
function Tile({ tech }) {
  return (
    <a
      href={searchUrl(tech.name)}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Search"
      title={`Search ${tech.name}`}
      className="group flex shrink-0 items-center gap-3 rounded-2xl border border-n300 bg-white/85 px-5 py-3.5 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-bronze hover:bg-white hover:shadow-[0_22px_44px_-22px_rgba(45,34,24,0.4)]"
    >
      {tech.slug ? (
        <img
          src={`/tech/${tech.slug}.svg`}
          alt={tech.name}
          loading="lazy"
          className={`${
            tech.wide ? "h-6 w-16" : "h-7 w-7"
          } shrink-0 object-contain grayscale-[0.35] transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0`}
        />
      ) : (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-n200 font-mono text-[0.6rem] font-semibold tracking-wider text-n700 transition-colors duration-500 group-hover:bg-dark group-hover:text-n100">
          {tech.mono}
        </span>
      )}
      <span className="whitespace-nowrap text-[0.85rem] font-medium text-n700 transition-colors duration-500 group-hover:text-ink">
        {tech.name}
      </span>
    </a>
  );
}

/* ── one category rail — an infinite marquee, direction alternating
      row to row so the plate has real rhythm instead of a static grid ── */
function Row({ category, items, index, dimmed }) {
  const reverse = index % 2 === 1;
  // Short categories (as few as 3 logos) would otherwise leave a visible gap
  // once the -50% loop point comes around, since the doubled track wouldn't
  // be wide enough to cover the row at every point in the cycle. Padding the
  // base set up to a minimum count — before it gets doubled for the seamless
  // loop — keeps every row dense at every frame, never showing empty rail.
  const MIN_TILES = 9;
  const padded =
    items.length >= MIN_TILES
      ? items
      : Array.from({ length: MIN_TILES }, (_, k) => items[k % items.length]);
  const duration = Math.max(20, padded.length * 4.5);
  const looped = [...padded, ...padded];

  return (
    <div className="flex items-center gap-5">
      <span className="hidden w-32 shrink-0 items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-n500 sm:flex">
        <span className="h-px w-4 bg-bronze/60" aria-hidden />
        {category}
      </span>
      {/* no hover-pause here on purpose — this rail runs continuously */}
      <div
        className="relative min-w-0 flex-1 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className={`marquee-track items-center gap-4 pr-4 transition-opacity duration-500 ${
            reverse ? "marquee-track-reverse" : ""
          } ${dimmed ? "opacity-25" : "opacity-100"}`}
          style={{ "--marquee-duration": `${duration}s` }}
        >
          {looped.map((tech, i) => (
            <Tile key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Technology stack — a bordered instrument plate holding one infinite
 * marquee rail per category (direction alternates row to row), instead of
 * a flat grid of identical boxes. Category chips isolate a row rather than
 * dimming scattered tiles; every tile still opens a search for that
 * technology on click.
 */
export default function TechConstellation() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState(null);

  const grouped = TECH_CATEGORIES.map((category) => ({
    category,
    items: TECHNOLOGIES.filter((t) => t.category === category),
  }));

  return (
    <div>
      {/* category chips */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFilter(null)}
          className={`rounded-full border px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
            filter === null
              ? "border-ink bg-dark text-n100"
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
                ? "border-ink bg-dark text-n100"
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

      {/* the plate */}
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-n300 bg-n100/70 py-9 sm:py-10">
        <div className="grid-paper absolute inset-0 opacity-40" aria-hidden />
        <div className="mesh-glow" aria-hidden />

        {reduce ? (
          <div className="relative space-y-7 px-6 sm:px-9">
            {grouped.map(({ category, items }) => (
              <div key={category}>
                <p className="mb-3 flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-n500">
                  <span className="h-px w-4 bg-bronze/60" aria-hidden />
                  {category}
                </p>
                <div
                  className={`flex flex-wrap gap-3 transition-opacity duration-500 ${
                    filter !== null && filter !== category ? "opacity-25" : "opacity-100"
                  }`}
                >
                  {items.map((tech) => (
                    <Tile key={tech.name} tech={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative space-y-6">
            {grouped.map((g, i) => (
              <Row
                key={g.category}
                category={g.category}
                items={g.items}
                index={i}
                dimmed={filter !== null && filter !== g.category}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
