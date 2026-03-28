"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-hero-mobile md:text-hero text-text-primary mb-4">
        404
      </h1>
      <p className="font-accent italic text-text-secondary text-lg mb-8">
        {t("notfound.text")}
      </p>
      <Link
        href="/"
        className="text-accent-primary hover:text-accent-hover transition-colors text-sm inline-flex items-center gap-2"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M11 7H3M6 4L3 7l3 3" />
        </svg>
        {t("notfound.return")}
      </Link>
    </div>
  );
}
