"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/** FAQ accordion — hairline dividers, mono numbering, smooth height animation. */
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t rule">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b rule">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-baseline gap-5 py-6 text-left sm:gap-8 sm:py-7"
            >
              <span className="font-mono text-xs text-bronze-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-base font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-n700 sm:text-lg">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative top-0.5 text-n600"
                aria-hidden
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 pl-10 pr-2 text-[0.95rem] leading-relaxed text-n700 sm:pl-14">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
