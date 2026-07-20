"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { JOURNEY } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1];

/** Company journey timeline (About page) — alternating entries on a bronze spine. */
export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 80%"],
  });
  const spine = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      {/* spine */}
      <div className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-n300 sm:left-1/2" aria-hidden />
      <motion.div
        className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-bronze sm:left-1/2"
        style={{ scaleY: spine }}
        aria-hidden
      />

      <div className="space-y-12">
        {JOURNEY.map((item, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className={`relative grid sm:grid-cols-2 ${left ? "" : ""}`}
            >
              {/* node */}
              <span
                className="absolute left-[5px] top-2 h-[13px] w-[13px] rounded-full border border-bronze bg-n100 sm:left-1/2 sm:-translate-x-1/2"
                aria-hidden
              >
                <span className="absolute inset-[3px] rounded-full bg-bronze" />
              </span>

              <div
                className={`pl-10 sm:pl-0 ${
                  left
                    ? "sm:pr-14 sm:text-right"
                    : "sm:col-start-2 sm:pl-14"
                }`}
              >
                <p className="font-mono text-sm tracking-[0.18em] text-bronze-deep">{item.year}</p>
                <h3 className="display mt-2 text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-n700">{item.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
