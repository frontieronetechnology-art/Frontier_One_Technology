"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Cinematic intro — logo bars assemble, counter runs 0→100,
 * double curtain lifts. Plays once per session.
 */
export default function Preloader() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("f1-intro")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (new URLSearchParams(window.location.search).has("nointro")) return;
    sessionStorage.setItem("f1-intro", "1");
    setShow(true);
    document.documentElement.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = 1600;
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / DURATION);
      // ease the counter so it sprints then settles
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => {
        document.documentElement.style.overflow = "";
        setShow(false);
      }, 1100);
      return () => clearTimeout(t);
    }
  }, [done]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[80]" aria-hidden exit={{ opacity: 0 }}>
          {/* lag curtain */}
          <motion.div
            className="absolute inset-0 bg-n800"
            animate={done ? { y: "-100%" } : {}}
            transition={{ duration: 1.05, ease: EASE, delay: 0.08 }}
          />
          {/* main curtain */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-ink"
            animate={done ? { y: "-100%" } : {}}
            transition={{ duration: 1.0, ease: EASE }}
          >
            {/* logo bars assembling */}
            <div className="flex flex-col items-start gap-[7px]">
              {[64, 44, 26].map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE }}
                  className="block h-[9px] origin-left rounded-sm bg-n100"
                  style={{ width: w }}
                />
              ))}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
                className="mt-1 block h-2.5 w-2.5 self-end rounded-full bg-bronze"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.5em] text-n500"
            >
              Frontier One Technology
            </motion.p>

            {/* counter + progress */}
            <div className="absolute bottom-10 left-0 right-0">
              <div className="container-x flex items-end justify-between">
                <div className="h-px w-full max-w-[70%] bg-n800 sm:max-w-[82%]">
                  <motion.div
                    className="h-px origin-left bg-bronze"
                    style={{ scaleX: count / 100 }}
                  />
                </div>
                <span className="display ml-6 text-4xl tabular-nums text-n100 sm:text-5xl">
                  {count}
                  <em className="text-bronze">%</em>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
