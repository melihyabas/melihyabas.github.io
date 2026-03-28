"use client";

import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLanguage } from "@/lib/i18n";
import type { Experience } from "@/data/experiences";

interface TimelineCardProps {
  experience: Experience;
  index: number;
}

const categoryColors: Record<Experience["category"], string> = {
  travel: "text-blue-400",
  career: "text-green-400",
  personal: "text-purple-400",
  milestone: "text-accent-primary",
};

export default function TimelineCard({
  experience,
  index,
}: TimelineCardProps) {
  const { t } = useLanguage();
  const isLeft = index % 2 === 0;

  const title = t(experience.titleKey);
  const date = t(experience.dateKey);
  const description = t(experience.descriptionKey);
  const category = t(experience.categoryKey);
  const location = experience.locationKey ? t(experience.locationKey) : undefined;

  return (
    <div className="relative flex items-start md:items-center gap-6 md:gap-0">
      <div
        className={cn(
          "hidden md:flex w-full items-center",
          isLeft ? "flex-row" : "flex-row-reverse"
        )}
      >
        <div className="w-[calc(50%-1.5rem)]">
          <ScrollReveal direction={isLeft ? "left" : "right"}>
            <div
              className={cn(
                "bg-bg-secondary border rounded-lg p-6 transition-colors duration-300",
                experience.isUpcoming
                  ? "border-dashed border-accent-muted/60 shadow-[0_0_20px_rgba(201,169,110,0.06)]"
                  : "border-border/50 hover:border-accent-muted/50"
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={cn(
                    "text-xs font-mono uppercase tracking-wider",
                    categoryColors[experience.category]
                  )}
                >
                  {category}
                </span>
                {experience.isUpcoming && (
                  <span className="text-[10px] font-mono text-accent-primary bg-accent-primary/10 px-2 py-0.5 rounded-full">
                    {t("exp.upcoming")}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg text-text-primary mb-1">
                {title}
              </h3>
              <p className="text-text-tertiary text-xs mb-3">
                {date}
                {location && ` · ${location}`}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="w-12 flex justify-center relative z-10">
          <div
            className={cn(
              "w-3 h-3 rounded-full border-2",
              experience.isUpcoming
                ? "border-accent-primary bg-accent-primary/20"
                : "border-text-tertiary bg-bg-primary"
            )}
          />
        </div>

        <div className="w-[calc(50%-1.5rem)]">
          <span
            className={cn(
              "text-text-tertiary text-sm font-mono",
              isLeft ? "text-left" : "text-right block"
            )}
          >
            {date}
          </span>
        </div>
      </div>

      <div className="flex md:hidden items-start gap-4 w-full">
        <div className="flex flex-col items-center pt-1">
          <div
            className={cn(
              "w-3 h-3 rounded-full border-2 shrink-0",
              experience.isUpcoming
                ? "border-accent-primary bg-accent-primary/20"
                : "border-text-tertiary bg-bg-primary"
            )}
          />
          <div className="w-px flex-1 bg-divider mt-2" />
        </div>

        <div className="flex-1 pb-8">
          <div
            className={cn(
              "bg-bg-secondary border rounded-lg p-5 transition-colors duration-300",
              experience.isUpcoming
                ? "border-dashed border-accent-muted/60"
                : "border-border/50"
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className={cn(
                  "text-xs font-mono uppercase tracking-wider",
                  categoryColors[experience.category]
                )}
              >
                {category}
              </span>
              {experience.isUpcoming && (
                <span className="text-[10px] font-mono text-accent-primary bg-accent-primary/10 px-2 py-0.5 rounded-full">
                  {t("exp.upcoming")}
                </span>
              )}
            </div>
            <h3 className="font-serif text-lg text-text-primary mb-1">
              {title}
            </h3>
            <p className="text-text-tertiary text-xs mb-3">
              {date}
              {location && ` · ${location}`}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
