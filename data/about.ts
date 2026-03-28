export interface AboutSection {
  id: string;
  titleKey: string;
  subtitleKey: string;
  contentKeys: string[];
  tags?: string[];
  /** true ise icerik gizlenir, "yapım aşamasında" ibaresi gosterilir */
  draft?: boolean;
}

export const aboutSections: AboutSection[] = [
  {
    id: "engineer",
    titleKey: "about.engineer.title",
    subtitleKey: "about.engineer.subtitle",
    contentKeys: [
      "about.engineer.content.0",
      "about.engineer.content.1",
    ],
    tags: [
      "Angular",
      "Java",
      "Spring Boot",
      "SQL",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Git",
    ],
    draft: true,
  },
  {
    id: "musician",
    titleKey: "about.musician.title",
    subtitleKey: "about.musician.subtitle",
    contentKeys: [
      "about.musician.content.0",
      "about.musician.content.1",
    ],
    tags: ["Electric Guitar", "Acoustic Guitar", "Rock", "Pop"],
    draft: true,
  },
  {
    id: "athlete",
    titleKey: "about.athlete.title",
    subtitleKey: "about.athlete.subtitle",
    contentKeys: [
      "about.athlete.content.0",
      "about.athlete.content.1",
    ],
    tags: ["Running", "Fitness", "Discipline"],
    draft: true,
  },
  {
    id: "analyst",
    titleKey: "about.analyst.title",
    subtitleKey: "about.analyst.subtitle",
    contentKeys: [
      "about.analyst.content.0",
      "about.analyst.content.1",
    ],
    tags: ["Financial Markets", "Technical Analysis", "Macro Trends"],
    draft: true,
  },
  {
    id: "thinker",
    titleKey: "about.thinker.title",
    subtitleKey: "about.thinker.subtitle",
    contentKeys: [
      "about.thinker.content.0",
      "about.thinker.content.1",
    ],
    tags: ["Philosophy", "Consciousness", "Writing"],
    draft: true,
  },
];
