"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import Icon from "./Icons";
import Media from "./Media";
import OrbitalField from "./OrbitalField";

const NAV_H = 84; // px — matches the floating navbar capsule height
const EASE = [0.16, 1, 0.3, 1];

/* ── segmented scroll tick — fills as its slice of the section passes ── */
function Tick({ i, total, progress }) {
  const scaleX = useTransform(progress, [i / total, (i + 1) / total], [0, 1]);
  return (
    <span className="relative h-px flex-1 overflow-hidden bg-n700">
      <motion.span style={{ scaleX }} className="absolute inset-0 origin-left bg-bronze-light" />
    </span>
  );
}

/* ── right-hand visual plate — drops in an image when one exists,
      otherwise holds an intentional orbital drafting motif ────────── */
function Plate({ card, i, active, total }) {
  const isActive = i === active;
  const dir = i < active ? -1 : 1;

  return (
    <motion.div
      aria-hidden={!isActive}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? "0%" : `${dir * 12}%`,
        scale: isActive ? 1 : 1.06,
      }}
      transition={{ duration: 0.8, ease: EASE }}
      className="absolute inset-0 overflow-hidden rounded-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-n800 via-dark to-n900" />

      {/* photograph sits at the base of the stack … */}
      <Media src={`home/why-0${i + 1}.webp`} fill grade="dark" position="center 40%" />

      {/* … the drafting lattice stays on top of it, exactly as before */}
      <div className="grid-paper-invert absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/88 via-dark/35 to-dark/10" />

      {/* foreground furniture */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-9">
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-md border border-n700/80 bg-dark/50 text-bronze-light backdrop-blur-sm">
            <Icon name={card.icon} />
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-n500">
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <span className="ghost-num select-none text-[7rem] leading-[0.8] sm:text-[11rem]">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

/**
 * Pinned tab-scroll section — the panel sticks while vertical scroll steps
 * through each reason, cross-fading the copy on the left against a full-bleed
 * plate on the right. Pure Framer Motion + sticky; no scroll hijacking.
 * Collapses to a plain stacked list under reduced-motion.
 */
export default function WhyPinned({ cards, href = "/about", cta = "About the company" }) {
  const wrapRef = useRef(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const total = cards.length;

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
    setActive((prev) => (prev === i ? prev : i));
  });

  if (reduce) {
    return (
      <div className="container-x grid gap-5 sm:grid-cols-2">
        {cards.map((card, i) => (
          <article key={card.title} className="card flex flex-col p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-md border rule text-ink">
              <Icon name={card.icon} />
            </span>
            <h3 className="mt-8 text-xl font-semibold tracking-tight">{card.title}</h3>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-n700">{card.body}</p>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div ref={wrapRef} className="relative" style={{ height: `${total * 92}vh` }}>
      <div
        className="sticky flex items-center overflow-hidden"
        style={{ top: NAV_H, height: `calc(100vh - ${NAV_H}px)` }}
      >
        {/* the orbital field now spans the whole band rather than being
            cropped inside a single card */}
        <OrbitalField className="absolute left-1/2 top-1/2 h-[130vh] w-[130vh] -translate-x-1/2 -translate-y-1/2 opacity-90" />
        <OrbitalField className="absolute -left-[18vw] top-[8%] hidden h-[46vh] w-[46vh] opacity-60 lg:block" />

        <div className="container-x relative w-full">
          <div className="grid h-[82vh] max-h-[46rem] grid-rows-[10rem_minmax(0,1fr)] gap-3 sm:grid-rows-[13rem_minmax(0,1fr)] sm:gap-4 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,1fr)] lg:grid-rows-1">
            {/* ── copy panel ── */}
            <div className="relative order-2 flex min-h-0 flex-col justify-between overflow-hidden rounded-xl bg-n800 p-5 sm:p-8 lg:order-1">
              <div className="mesh-glow mesh-glow-invert" aria-hidden />

              <div className="relative flex gap-1.5">
                {cards.map((card, i) => (
                  <Tick key={card.title} i={i} total={total} progress={scrollYProgress} />
                ))}
              </div>

              {/* cross-fading copy — absolutely stacked so height never jumps */}
              <div className="relative my-4 min-h-0 flex-1 sm:my-6">
                {cards.map((card, i) => {
                  const isActive = i === active;
                  const dir = i < active ? -1 : 1;
                  return (
                    <motion.div
                      key={card.title}
                      aria-hidden={!isActive}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : dir * 24,
                        filter: isActive ? "blur(0px)" : "blur(6px)",
                      }}
                      transition={{ duration: 0.7, ease: EASE }}
                      className="absolute inset-0 flex flex-col justify-center"
                    >
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bronze-light">
                        Why Frontier One
                      </span>
                      <h3 className="display mt-3 text-[1.5rem] leading-[1.05] text-n100 sm:mt-4 sm:text-[2.15rem]">
                        {card.title}
                      </h3>
                      <span className="mt-4 block h-px w-full bg-n700 sm:mt-5" />
                      <p className="mt-4 text-[0.85rem] leading-relaxed text-n400 sm:mt-5 sm:text-[0.95rem]">
                        {card.body}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                href={href}
                data-cursor="View"
                className="group relative inline-flex w-fit items-center gap-2.5 overflow-hidden rounded-md border border-n700 px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-n100 transition-colors duration-500 hover:border-bronze-light hover:text-ink"
              >
                <span className="absolute inset-x-0 bottom-0 h-full origin-bottom translate-y-full bg-bronze-light transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                <span className="relative">{cta}</span>
                <span className="icon-swap relative text-current">
                  <Icon name="arrowUpRight" />
                  <Icon name="arrowUpRight" />
                </span>
              </Link>
            </div>

            {/* ── visual plate ── */}
            <div className="relative order-1 overflow-hidden rounded-xl lg:order-2">
              {cards.map((card, i) => (
                <Plate key={card.title} card={card} i={i} active={active} total={total} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
