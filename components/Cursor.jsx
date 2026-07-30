"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Mix-blend-mode: difference cursor.
 * A white circle that inverts whatever color sits beneath it —
 * works on every background automatically, no theming needed.
 * Slight spring lag gives it depth without feeling slow.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 280, damping: 26, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 280, damping: 26, mass: 0.5 });

  useEffect(() => {
    const fine   = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.body.classList.add("has-cursor");

    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => {
      setHovering(!!e.target.closest("a, button, [role='button'], label, input, textarea, .svc-row"));
    };
    const down = () => setPressed(true);
    const up   = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full bg-white"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        mixBlendMode: "difference",
      }}
      animate={{
        width:   pressed ? 24 : hovering ? 48 : 32,
        height:  pressed ? 24 : hovering ? 48 : 32,
        opacity: 1,
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
