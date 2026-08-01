"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Scroll-linked word fill — each word deepens from ghost gray to ink
 * as it crosses the reading zone. The scroll-storytelling staple.
 *
 * On touch this is a plain paragraph: the effect drives an opacity write
 * to ~20 words every scroll frame (native scroll fires per frame on a
 * phone), which is real main-thread work for a decorative fade.
 */
export default function ScrollFillText({ text, className = "" }) {
  const ref = useRef(null);
  const [fine, setFine] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  if (!fine) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );
  }

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, Math.min(1, (i + 1.6) / words.length)]}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative inline">
      <motion.span style={{ opacity }} className="inline">
        {children}
      </motion.span>{" "}
    </span>
  );
}
