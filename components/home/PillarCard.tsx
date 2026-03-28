"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerItemVariants } from "@/components/motion/StaggerContainer";

interface PillarCardProps {
  title: string;
  description: string;
  keywords: string[];
  href: string;
}

export default function PillarCard({
  title,
  description,
  keywords,
  href,
}: PillarCardProps) {
  return (
    <motion.div variants={staggerItemVariants}>
      <Link href={href} className="block group">
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3 }}
          className="bg-bg-secondary border border-border/50 rounded-lg p-8 h-full
                     group-hover:border-accent-muted/50 group-hover:shadow-lg
                     group-hover:shadow-accent-primary/5 transition-colors duration-300"
        >
          <h3 className="font-serif text-xl text-text-primary mb-3">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-5">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs text-accent-muted font-mono px-2 py-1 bg-bg-tertiary rounded"
              >
                {kw}
              </span>
            ))}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
