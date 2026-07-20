"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/<>_—";

/** Decrypt/scramble text — characters cycle then lock in left to right. */
export default function Scramble({ text, className, delay = 0, speed = 28 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [display, setDisplay] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let raf;
    let timeout = setTimeout(() => {
      const total = text.length * 2.6;
      const step = () => {
        frame++;
        const locked = Math.floor((frame / total) * text.length);
        let out = "";
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (ch === " ") { out += " "; continue; }
          out += i <= locked ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setDisplay(out);
        if (locked < text.length) {
          raf = setTimeout(step, speed);
        } else {
          setDisplay(text);
        }
      };
      step();
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(raf);
    };
  }, [inView, text, delay, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}
