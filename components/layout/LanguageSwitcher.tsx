"use client";

import { motion } from "framer-motion";
import { useLanguage, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const options: { value: Locale; label: string }[] = [
    { value: "tr", label: "TR" },
    { value: "en", label: "EN" },
  ];

  return (
    <div className="flex items-center gap-1 text-xs font-mono">
      {options.map((opt, i) => (
        <span key={opt.value} className="flex items-center gap-1">
          <button
            onClick={() => setLocale(opt.value)}
            className="relative px-1.5 py-0.5 rounded transition-colors"
          >
            <span
              className={
                locale === opt.value
                  ? "text-accent-primary"
                  : "text-text-tertiary hover:text-text-secondary"
              }
            >
              {opt.label}
            </span>
            {locale === opt.value && (
              <motion.div
                layoutId="lang-indicator"
                className="absolute inset-0 rounded bg-accent-primary/10 border border-accent-primary/30"
                transition={{ duration: 0.2 }}
              />
            )}
          </button>
          {i === 0 && (
            <span className="text-text-tertiary/40 select-none">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
