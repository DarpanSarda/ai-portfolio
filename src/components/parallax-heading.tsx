"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxHeading({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-10%"]);

  return (
    <div ref={ref} className="capabilities-bg" aria-hidden="true">
      <motion.span style={{ x }}>{text}</motion.span>
    </div>
  );
}
