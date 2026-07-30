"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Media from "./Media";

/**
 * Scroll-reactive 3D ground plane.
 *
 * Lays a photographic plate down into perspective and eases its tilt as the
 * section passes the viewport, so anything drawn on top of it — in practice
 * the journey route — reads as travelling *across* a receding surface rather
 * than sitting on a flat backdrop.
 *
 * The plate is masked to nothing at the horizon, which is what stops the top
 * edge from showing as a hard band where the perspective would otherwise cut.
 */
export default function PerspectivePlate({
  src,
  tilt = [58, 38],
  className = "",
  opacity = 0.5,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], tilt);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.1, 1.25]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ perspective: "1100px", perspectiveOrigin: "50% 22%" }}
      aria-hidden
    >
      <motion.div
        style={
          reduce
            ? { transform: `rotateX(${tilt[1]}deg) scale(1.15)`, opacity }
            : { rotateX, y, scale, opacity }
        }
        className="absolute inset-0 origin-[50%_20%]"
      >
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.35) 18%, black 52%, black 82%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.35) 18%, black 52%, black 82%, transparent 100%)",
          }}
        >
          <Media src={src} fill grade="light" position="center" />
        </div>
      </motion.div>
    </div>
  );
}
