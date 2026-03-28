"use client";

import TimelineCard from "./TimelineCard";
import type { Experience } from "@/data/experiences";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto px-6 pb-20">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-divider -translate-x-px" />

      <div className="flex flex-col gap-8 md:gap-12">
        {experiences.map((exp, i) => (
          <TimelineCard key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </div>
  );
}
