"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";
import TechBadge from "./TechBadge";
import { useLanguage } from "@/lib/i18n";
import type { AboutSection } from "@/data/about";

interface AboutSectionBlockProps {
  section: AboutSection;
  index: number;
  isLast: boolean;
}

export default function AboutSectionBlock({
  section,
  index,
  isLast,
}: AboutSectionBlockProps) {
  const { t } = useLanguage();

  return (
    <>
      <ScrollReveal delay={index * 0.1}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-section-title text-text-primary mb-1">
            {t(section.titleKey)}
          </h2>
          <p className="font-accent italic text-text-tertiary text-sm mb-6">
            {t(section.subtitleKey)}
          </p>

          {section.draft ? (
            <div className="flex items-center gap-3 py-4 px-5 rounded-lg border border-dashed border-accent-muted/40 bg-bg-secondary/50">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-accent-muted shrink-0"
              >
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="text-text-tertiary text-sm font-accent italic">
                {t("about.draft")}
              </span>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {section.contentKeys.map((key, i) => (
                  <p
                    key={i}
                    className="text-text-secondary text-body leading-relaxed"
                  >
                    {t(key)}
                  </p>
                ))}
              </div>

              {section.tags && section.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {section.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </ScrollReveal>

      {!isLast && <SectionDivider />}
    </>
  );
}
