"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { ANIMATION } from "@/lib/constants";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const offsets = {
    up: { x: 0, y: 20 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...offsets[direction] }
      }
      transition={{
        duration: ANIMATION.duration.normal,
        delay,
        ease: ANIMATION.easing as unknown as number[],
      }}
    >
      {children}
    </motion.div>
  );
}
