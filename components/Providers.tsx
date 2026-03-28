"use client";

import { LanguageProvider } from "@/lib/i18n";
import { translations } from "@/data/translations";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider translations={translations}>
      {children}
    </LanguageProvider>
  );
}
