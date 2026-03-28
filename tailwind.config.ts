import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#1a1814",
          secondary: "#22201b",
          tertiary: "#2a2722",
        },
        text: {
          primary: "#e8e2d6",
          secondary: "#a89f91",
          tertiary: "#6b6358",
        },
        accent: {
          primary: "#c9a96e",
          hover: "#d4b87a",
          muted: "#8a7a5a",
        },
        border: "#3a362f",
        divider: "#2e2a24",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-mobile": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "page-title": ["2.5rem", { lineHeight: "1.2" }],
        "page-title-mobile": ["1.75rem", { lineHeight: "1.25" }],
        "section-title": ["1.75rem", { lineHeight: "1.3" }],
        "section-title-mobile": ["1.375rem", { lineHeight: "1.35" }],
        body: ["1.125rem", { lineHeight: "1.75" }],
        "body-mobile": ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
