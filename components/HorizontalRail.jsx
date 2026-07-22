"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const NAV_H = 72; // px — must match the fixed navbar height (h-[4.5rem])

/**
 * Pinned horizontal-scroll rail — the viewport sticks while vertical
 * scroll drives horizontal translation of the track. Pure Framer Motion
 * (useScroll + sticky), no GSAP dependency. Falls back to a normal
 * horizontal-swipe row on touch/reduced-motion.
 */
export default function HorizontalRail({ children, className = "" }) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(!window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      setDistance(Math.max(track.scrollWidth - window.innerWidth, 0));
    };
    measure();

    // ResizeObserver catches late layout shifts (fonts, images, hover-tilt
    // wrappers) that a single mount-time measurement can miss.
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [children]);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduce || touch) {
    return (
      <div className={`flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(4vw,1.25rem)] pb-4 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      style={{ height: `calc(100vh + ${distance}px)` }}
      className="relative"
    >
      <div
        className="sticky flex flex-col justify-center overflow-hidden"
        style={{ top: NAV_H, height: `calc(100vh - ${NAV_H}px)` }}
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className={`flex w-max gap-6 pl-[max(4vw,1.25rem)] pr-[max(4vw,1.25rem)] ${className}`}
        >
          {children}
        </motion.div>
        {/* progress spine */}
        <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-40 -translate-x-1/2 bg-n300 sm:w-56">
          <motion.span
            className="block h-px origin-left bg-bronze"
            style={{ scaleX: progressScale }}
          />
        </div>
      </div>
    </div>
  );
}
