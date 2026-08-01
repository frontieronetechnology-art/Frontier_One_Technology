"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];
const MARK = "/logos/logo-mark.png";
const WORDMARK = "/logos/logo-wordmark.png";

/**
 * THE BRONZE POUR
 *
 * Rationale (Brand Colour System v3.0 §01.2): bronze was chosen because it
 * reads as *casting* — instruments and monuments, not trophies. So the intro
 * literally casts the mark: the logo silhouette appears first as an empty
 * engraved mould, molten bronze rises into it from the base, a single
 * specular pass sweeps the cooled metal at the canonical 120° logo-gradient
 * angle, the wordmark strikes in beside it, and the plate splits away.
 *
 * Built entirely from the supplied logo PNG used as a CSS mask — no traced
 * SVG, no spinner, no progress ring. Nothing else on the web looks like it
 * because the shape driving it is this brand's shape.
 *
 * §09.5 compliance: the gradient reveals once and stops. It never loops.
 */
export default function Preloader() {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);
  const [poured, setPoured] = useState(false);
  const raf = useRef(null);

  // The fill is driven by a MotionValue so the pour runs at 60fps without
  // re-rendering the React tree on every frame — the single biggest jank
  // source the old `setPct` version had on mid-range phones.
  const progress = useMotionValue(0);
  const fillHeight = useTransform(progress, (v) => `${v}%`);
  const gaugeScale = useTransform(progress, (v) => v / 100);
  const pctText = useTransform(progress, (v) => String(Math.round(v)));

  useMotionValueEvent(progress, "change", (v) => {
    if (v >= 100) setPoured(true);
  });

  useEffect(() => {
    if (sessionStorage.getItem("f1-intro")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (new URLSearchParams(window.location.search).has("nointro")) return;

    sessionStorage.setItem("f1-intro", "1");
    setShow(true);
    document.documentElement.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = 3000;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / DURATION);
      // molten metal fills fast, then surface-tension slows it at the brim
      const eased = 1 - Math.pow(1 - p, 2.6);
      progress.set(eased * 100);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 520);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [progress]);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      document.documentElement.style.overflow = "";
      setShow(false);
    }, 1300);
    return () => clearTimeout(t);
  }, [done]);

  // shared mask config — the logo PNG *is* the mould
  const mask = (url) => ({
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[80]" aria-hidden exit={{ opacity: 0 }}>
          {/* trailing plate — a half-beat behind, so the exit reads as two
              layers of cast metal being lifted rather than one flat wipe */}
          <motion.div
            className="absolute inset-0 bg-dark-surface"
            animate={done ? { y: "-100%" } : {}}
            transition={{ duration: 1.15, ease: EASE, delay: 0.1 }}
          />

          <motion.div
            className="absolute inset-0 overflow-hidden bg-dark"
            animate={done ? { y: "-100%" } : {}}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <div className="grid-paper-invert absolute inset-0" />

            <div className="relative flex h-full flex-col items-center justify-center px-6">
              {/* ── the mould ───────────────────────────────────── */}
              <div className="relative aspect-[962/431] w-[min(62vw,26rem)]">
                {/* 1 — empty engraved cavity */}
                <div
                  className="absolute inset-0"
                  style={{ ...mask(MARK), background: "rgba(231,211,181,0.12)" }}
                />

                {/* 2 — molten bronze rising into it */}
                <div className="absolute inset-0 overflow-hidden" style={mask(MARK)}>
                  <motion.div
                    className="absolute inset-x-0 bottom-0"
                    style={{ height: fillHeight }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        // canonical five-stop logo gradient, §09.1
                        background:
                          "linear-gradient(120deg,#E7D3B5 0%,#DAB887 28%,#C89A61 52%,#B6844D 76%,#6A4A30 100%)",
                      }}
                    />
                    {/* meniscus — the bright surface line of the pour */}
                    <div
                      className="absolute inset-x-0 top-0 h-[2px]"
                      style={{
                        background: "#F0DFC4",
                        boxShadow: "0 0 14px 2px rgba(231,211,181,0.55)",
                      }}
                    />
                  </motion.div>
                </div>

                {/* 3 — one specular pass across the cooled metal */}
                {poured && (
                  <motion.div
                    className="absolute inset-0"
                    style={mask(MARK)}
                    initial={{ opacity: 1 }}
                  >
                    <motion.div
                      className="absolute inset-y-[-60%] w-[42%]"
                      initial={{ left: "-55%" }}
                      animate={{ left: "115%" }}
                      transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1], delay: 0.08 }}
                      style={{
                        background:
                          "linear-gradient(90deg,transparent,rgba(255,250,240,0.85),transparent)",
                        transform: "rotate(30deg)",
                      }}
                    />
                  </motion.div>
                )}
              </div>

              {/* ── wordmark strikes in once the cast has set ───── */}
              <motion.div
                className="relative mt-7 h-[1.05rem] w-[min(48vw,17rem)] sm:mt-9 sm:h-[1.3rem]"
                initial={{ opacity: 0 }}
                animate={poured ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.42 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ ...mask(WORDMARK), background: "#F7F2EC" }}
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={poured ? { clipPath: "inset(0 0% 0 0)" } : {}}
                  transition={{ duration: 0.75, ease: EASE, delay: 0.42 }}
                />
              </motion.div>

              {/* ── pour gauge ─────────────────────────────────── */}
              <div className="absolute inset-x-0 bottom-9 sm:bottom-11">
                <div className="container-x flex items-end justify-between gap-6">
                  <div className="flex w-full max-w-[66%] flex-col gap-3 sm:max-w-[80%]">
                    <span className="font-mono text-[0.58rem] uppercase tracking-[0.34em] text-n500">
                      Casting
                    </span>
                    <div className="h-px w-full bg-dark-border">
                      <motion.div
                        className="h-px origin-left bg-bronze-light"
                        style={{ scaleX: gaugeScale }}
                      />
                    </div>
                  </div>
                  <span className="display shrink-0 text-4xl tabular-nums text-n100 sm:text-5xl">
                    <motion.span>{pctText}</motion.span>
                    <em className="text-bronze-light">%</em>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
