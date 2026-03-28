"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ANIMATION } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

export default function RotatingTagline() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const taglines = [
    t("tagline.0"),
    t("tagline.1"),
    t("tagline.2"),
    t("tagline.3"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, ANIMATION.taglineInterval);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className="h-8 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={`${index}-${taglines[index]}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: ANIMATION.duration.slow }}
          className="font-accent italic text-text-tertiary text-sm md:text-base"
        >
          {taglines[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
