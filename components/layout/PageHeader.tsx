"use client";

import FadeIn from "@/components/motion/FadeIn";
import { useLanguage } from "@/lib/i18n";

interface PageHeaderProps {
  titleKey: string;
  subtitleKey?: string;
}

export default function PageHeader({ titleKey, subtitleKey }: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <FadeIn className="pt-32 pb-16 max-w-5xl mx-auto px-6">
      <h1 className="font-serif text-page-title md:text-page-title text-text-primary mb-3">
        {t(titleKey)}
      </h1>
      {subtitleKey && (
        <p className="font-accent italic text-text-secondary text-lg">
          {t(subtitleKey)}
        </p>
      )}
    </FadeIn>
  );
}
