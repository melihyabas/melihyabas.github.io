export interface NavLink {
  labelKey: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.blog", href: "/blog" },
  { labelKey: "nav.youtube", href: "/youtube" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.experiences", href: "/experiences" },
];
