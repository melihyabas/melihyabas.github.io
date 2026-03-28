import type { Metadata } from "next";
import { experiences } from "@/data/experiences";
import PageHeader from "@/components/layout/PageHeader";
import PageTransition from "@/components/layout/PageTransition";
import Timeline from "@/components/experiences/Timeline";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "A timeline of life events, travels, and milestones — coordinates and chapters.",
};

export default function ExperiencesPage() {
  return (
    <PageTransition>
      <PageHeader
        titleKey="experiences.title"
        subtitleKey="experiences.subtitle"
      />
      <Timeline experiences={experiences} />
    </PageTransition>
  );
}
