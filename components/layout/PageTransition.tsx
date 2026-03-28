"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ANIMATION } from "@/lib/constants";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: ANIMATION.duration.normal,
        ease: ANIMATION.easing as unknown as number[],
      }}
    >
      {children}
    </motion.div>
  );
}
