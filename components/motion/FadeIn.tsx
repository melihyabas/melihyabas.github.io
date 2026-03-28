"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ANIMATION } from "@/lib/constants";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = ANIMATION.duration.normal,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: ANIMATION.easing as unknown as number[],
      }}
    >
      {children}
    </motion.div>
  );
}
