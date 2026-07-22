"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];
const DURATION = 0.95;
const AUTOPLAY = 6800;

/* Both halves cross the same distance in the same time — but one travels
   further than the other, and that speed difference is the parallax. */
const half = (dist) => ({
  enter: (d) => ({ y: `${d * dist}%` }),
  center: { y: "0%", transition: { duration: DURATION, ease: EASE } },
  exit: (d) => ({ y: `${-d * dist}%`, transition: { duration: DURATION, ease: EASE } }),
});
const PLATE = half(80);
const DETAIL = half(135);

/* staggered entrance for the copy riding inside each half */
const inner = (delay) => ({
  initial: { y: 26, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: EASE, delay } },
});

/* ── left plate — image when one exists, drafting motif when it doesn't ── */
function Plate({ item, i, total }) {
  const [missing, setMissing] = useState(false);
  const words = item.name.split(" ");
  const tail = words.length > 1 ? words[words.length - 1] : null;
  const lead = tail ? words.slice(0, -1).join(" ") : item.name;

  return (
    <>
      {/* desaturated → full colour, exactly one beat behind the slide */}
      <motion.div
        initial={{ filter: "grayscale(1) brightness(0.5)" }}
        animate={{
          filter: "grayscale(0) brightness(1)",
          transition: { duration: 1, ease: "linear", delay: 0.35 },
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-n800 via-ink to-n900" />
        <div className="grid-paper-invert absolute inset-0" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 400 400" fill="none" className="animate-spin-slow h-full w-full">
            <circle cx="200" cy="200" r="170" stroke="rgba(184,135,58,0.20)" />
            <circle cx="200" cy="200" r="118" stroke="rgba(244,246,250,0.09)" strokeDasharray="2 9" />
            <ellipse cx="200" cy="200" rx="170" ry="58" stroke="rgba(244,246,250,0.07)" />
            <circle cx="370" cy="200" r="3.5" fill="#b8873a" />
          </svg>
        </div>

        {/* optional art — /public/images/industry-<slug>.webp */}
        {!missing && (
          <img
            src={`/images/industry-${item.slug}.webp`}
            alt=""
            loading="lazy"
            onError={() => setMissing(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
      </motion.div>

      {/* copy */}
      <div className="relative flex h-full flex-col justify-between py-6 pl-14 pr-6 sm:py-10 sm:pl-20 sm:pr-10">
        <motion.span {...inner(0.15)} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-n700/80 bg-ink/60 text-bronze backdrop-blur-sm">
            <Icon name={item.icon} />
          </span>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n400">
            Industry {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </motion.span>

        <motion.h3
          {...inner(0.25)}
          className="display text-[1.9rem] leading-[0.98] text-n100 sm:text-[3.4rem]"
        >
          {tail ? (
            <>
              {lead} <em className="serif-accent">{tail}</em>
            </>
          ) : (
            lead
          )}
        </motion.h3>

        <motion.span
          {...inner(0.35)}
          className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-n500"
        >
          Drag or use the rail to browse
        </motion.span>
      </div>
    </>
  );
}

/**
 * Vertical split slider — the plate and the detail panel slide together but
 * at different rates, so each transition parallaxes. Advances on autoplay,
 * drag, the bullet rail, or arrow keys; it never hijacks page scroll.
 */
export default function IndustrySlider({ items }) {
  const total = items.length;
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { margin: "-20% 0px" });
  const [[index, dir], setSlide] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const step = useCallback(
    (delta) => setSlide(([cur]) => [(((cur + delta) % total) + total) % total, delta > 0 ? 1 : -1]),
    [total]
  );
  const jump = useCallback((n) => setSlide(([cur]) => (n === cur ? [cur, 1] : [n, n > cur ? 1 : -1])), []);

  useEffect(() => {
    if (reduce || !inView || paused) return;
    const t = setTimeout(() => step(1), AUTOPLAY);
    return () => clearTimeout(t);
  }, [index, inView, paused, reduce, step]);

  const onKey = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  if (reduce) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Link key={item.slug} href={`/industries#${item.slug}`} className="card flex flex-col gap-6 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-n200 text-ink">
              <Icon name={item.icon} />
            </span>
            <span className="text-[0.95rem] font-semibold tracking-tight">{item.name}</span>
          </Link>
        ))}
      </div>
    );
  }

  const active = items[index];

  return (
    <div
      ref={ref}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Industries we support"
      onKeyDown={onKey}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative max-h-[46rem] min-h-[42rem] w-full overflow-hidden rounded-xl border border-n300 bg-ink outline-none"
      style={{ height: "80vh" }}
    >
      <div className="grid h-full grid-rows-[14rem_minmax(0,1fr)] lg:grid-cols-2 lg:grid-rows-1">
        {/* ── plate ── */}
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={active.slug}
              custom={dir}
              variants={PLATE}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Plate item={active} i={index} total={total} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── detail ── */}
        <div className="relative overflow-hidden bg-n100">
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={active.slug}
              custom={dir}
              variants={DETAIL}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col justify-center gap-5 overflow-y-auto px-6 py-7 sm:gap-7 sm:px-12 sm:py-12"
            >
              <motion.p {...inner(0.2)} className="eyebrow">
                What we deliver
              </motion.p>

              <motion.p
                {...inner(0.3)}
                className="line-clamp-4 max-w-md text-[0.9rem] leading-relaxed text-n700 sm:line-clamp-none sm:text-[0.95rem]"
              >
                {active.description}
              </motion.p>

              <motion.ul {...inner(0.4)} className="max-w-md border-t rule">
                {active.solutions.map((s, k) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-4 border-b rule py-2 text-[0.85rem] text-ink sm:py-2.5"
                  >
                    <span className="font-mono text-[0.6rem] text-bronze-deep">
                      {String(k + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </motion.ul>

              <motion.span {...inner(0.5)}>
                <Link
                  href={`/industries#${active.slug}`}
                  data-cursor="View"
                  className="link-arrow"
                >
                  {active.name} in detail <Icon name="arrow" />
                </Link>
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── bullet rail — sits over the dark plate at every breakpoint ── */}
      <div className="absolute left-4 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2 sm:left-8">
        {items.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => jump(i)}
            aria-label={item.name}
            aria-current={i === index}
            className="relative h-7 w-[3px] rounded-full bg-n100/25 transition-colors duration-300 hover:bg-n100/55"
          >
            {i === index && (
              <motion.span
                layoutId="industry-bullet"
                className="absolute inset-0 rounded-full bg-bronze"
                transition={{ duration: 0.5, ease: EASE }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── step controls ── */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 sm:bottom-8 sm:right-8">
        <span className="font-mono text-[0.65rem] tracking-[0.2em] text-n600">
          {String(index + 1).padStart(2, "0")}
          <span className="text-n400"> / {String(total).padStart(2, "0")}</span>
        </span>
        {[-1, 1].map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => step(d)}
            aria-label={d > 0 ? "Next industry" : "Previous industry"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-n300 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-n100"
          >
            <span className={d > 0 ? "rotate-90" : "-rotate-90"}>
              <Icon name="arrow" />
            </span>
          </button>
        ))}
      </div>

      {/* ── drag surface — pointer devices only, kept clear of the CTA ── */}
      {fine && (
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.12}
          dragMomentum={false}
          onDragEnd={(e, info) => {
            if (info.offset.y < -50 || info.velocity.y < -450) step(1);
            else if (info.offset.y > 50 || info.velocity.y > 450) step(-1);
          }}
          data-cursor="Drag"
          className="absolute inset-x-0 top-0 z-20 h-[14rem] cursor-grab active:cursor-grabbing lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        />
      )}
    </div>
  );
}
