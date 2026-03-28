export interface Experience {
  id: string;
  titleKey: string;
  dateKey: string;
  descriptionKey: string;
  category: "travel" | "career" | "personal" | "milestone";
  categoryKey: string;
  locationKey?: string;
  isUpcoming: boolean;
}

export const experiences: Experience[] = [
  {
    id: "prague-2026",
    titleKey: "exp.prague.title",
    dateKey: "exp.prague.date",
    descriptionKey: "exp.prague.description",
    category: "travel",
    categoryKey: "exp.category.travel",
    locationKey: "exp.prague.location",
    isUpcoming: true,
  },
  {
    id: "website-2026",
    titleKey: "exp.website.title",
    dateKey: "exp.website.date",
    descriptionKey: "exp.website.description",
    category: "milestone",
    categoryKey: "exp.category.milestone",
    isUpcoming: false,
  },
  {
    id: "guitar-2023",
    titleKey: "exp.guitar7.title",
    dateKey: "exp.guitar7.date",
    descriptionKey: "exp.guitar7.description",
    category: "personal",
    categoryKey: "exp.category.personal",
    isUpcoming: false,
  },
  {
    id: "career-growth-2022",
    titleKey: "exp.angular.title",
    dateKey: "exp.angular.date",
    descriptionKey: "exp.angular.description",
    category: "career",
    categoryKey: "exp.category.career",
    isUpcoming: false,
  },
  {
    id: "blog-2021",
    titleKey: "exp.blog.title",
    dateKey: "exp.blog.date",
    descriptionKey: "exp.blog.description",
    category: "milestone",
    categoryKey: "exp.category.milestone",
    isUpcoming: false,
  },
  {
    id: "career-start-2020",
    titleKey: "exp.career.title",
    dateKey: "exp.career.date",
    descriptionKey: "exp.career.description",
    category: "career",
    categoryKey: "exp.category.career",
    isUpcoming: false,
  },
  {
    id: "guitar-start-2018",
    titleKey: "exp.guitarstart.title",
    dateKey: "exp.guitarstart.date",
    descriptionKey: "exp.guitarstart.description",
    category: "personal",
    categoryKey: "exp.category.personal",
    isUpcoming: false,
  },
];
