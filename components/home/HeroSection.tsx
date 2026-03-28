"use client";

import { motion } from "framer-motion";
import RotatingTagline from "./RotatingTagline";
import PillarCard from "./PillarCard";
import StaggerContainer from "@/components/motion/StaggerContainer";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";
import { ANIMATION } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t("pillar.code.title"),
      description: t("pillar.code.description"),
      keywords: ["Angular", "Java", "TypeScript", "SQL"],
      href: "/about",
    },
    {
      title: t("pillar.think.title"),
      description: t("pillar.think.description"),
      keywords: ["Philosophy", "Writing", "Consciousness"],
      href: "/blog",
    },
    {
      title: t("pillar.live.title"),
      description: t("pillar.live.description"),
      keywords: ["Guitar", "Fitness", "Markets"],
      href: "/about",
    },
  ];

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION.duration.slow,
            ease: ANIMATION.easing as unknown as number[],
          }}
          className="text-center"
        >
          <h1 className="font-serif text-hero-mobile md:text-hero text-text-primary mb-4">
            Melih Yabaş
          </h1>
          <p className="text-text-secondary text-sm md:text-base tracking-widest uppercase mb-8">
            {t("hero.subtitle")}
          </p>
          <RotatingTagline />
        </motion.div>

        <motion.button
          onClick={scrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 text-text-tertiary hover:text-accent-primary transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 8l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.button>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <ScrollReveal>
          <p className="text-body text-text-secondary leading-relaxed">
            {t("hero.intro")}
          </p>
        </ScrollReveal>
      </section>

      <SectionDivider />

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}
