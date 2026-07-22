"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Icon from "./Icons";
import { SERVICES } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Awwwards-style service index — oversized rows; a floating preview
 * card chases the cursor and morphs per row. Rows underline-sweep
 * on hover. Collapses to tappable cards on touch layouts.
 */
export default function ServicesShowcase() {
  const [active, setActive] = useState(null);
  const wrapRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(x, { stiffness: 200, damping: 26, mass: 0.5 });
  const py = useSpring(y, { stiffness: 200, damping: 26, mass: 0.5 });

  const onMove = (e) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left + 28);
    y.set(e.clientY - rect.top - 90);
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      {/* floating preview — desktop only */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, rotate: 3 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{ x: px, y: py }}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden w-64 lg:block"
            aria-hidden
          >
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden rounded-xl border border-n300 bg-ink p-6 shadow-[0_32px_64px_-20px_rgba(27,35,51,0.45)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-n800 text-n100">
                  <Icon name={SERVICES[active].icon} />
                </span>
                <span className="font-serif text-2xl italic text-bronze">
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-5 line-clamp-3 text-[0.8rem] leading-relaxed text-n400">
                {SERVICES[active].short}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {SERVICES[active].focus.slice(0, 3).map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-n800 px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-n500"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* rows */}
      <div className="border-t rule">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
          >
            <Link
              href={`/services/${service.slug}`}
              onMouseEnter={() => setActive(i)}
              data-cursor="View"
              className="svc-row group flex items-center gap-5 border-b rule py-7 sm:gap-8 sm:py-9"
            >
              <span className="font-mono text-xs text-bronze-deep sm:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display flex-1 text-3xl transition-transform duration-500 ease-out group-hover:translate-x-3 sm:text-5xl lg:text-[3.75rem]">
                {service.title}
              </span>
              {/* mobile hint */}
              <span className="max-w-[10rem] text-right font-mono text-[0.6rem] uppercase tracking-[0.14em] text-n500 lg:hidden">
                {service.focus[0]}
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border rule text-ink transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-n100 sm:h-12 sm:w-12">
                <Icon name="arrowUpRight" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
