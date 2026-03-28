import type { Metadata } from "next";
import { aboutSections } from "@/data/about";
import PageHeader from "@/components/layout/PageHeader";
import PageTransition from "@/components/layout/PageTransition";
import AboutSectionBlock from "@/components/about/AboutSectionBlock";

export const metadata: Metadata = {
  title: "About",
  description:
    "The unabridged version — software engineer, musician, athlete, analyst, thinker.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader titleKey="about.title" subtitleKey="about.subtitle" />
      <div className="max-w-5xl mx-auto px-6 pb-20">
        {aboutSections.map((section, i) => (
          <AboutSectionBlock
            key={section.id}
            section={section}
            index={i}
            isLast={i === aboutSections.length - 1}
          />
        ))}
      </div>
    </PageTransition>
  );
}
