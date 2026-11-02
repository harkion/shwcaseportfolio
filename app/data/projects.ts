export type ProjectSummary = {
  title: string;
  status: string;
  description: string;
  href: string;
  logoSrc?: string;
  previewAlt?: string;
};

export const projects: ProjectSummary[] = [
  {
    title: "Flik",
    status: "Completed · Mobile app",
    description:
      "A mobile app that helps people decide what to eat. Designed and developed independently.",
    href: "/projects/flik",
    logoSrc: "/projects/flik/flik - light mode 1.png",
  },
  {
    title: "Night Light",
    status: "Krom Studio",
    description: "A team project with Krom Studio exploring the question “Who Owns the Night?” through nightlife stories on a 3D street.",
    href: "/projects/who-owns-the-night",
    logoSrc: "/projects/who-owns-the-night/night light logo.png",
  },
  {
    title: "Adim",
    status: "Project",
    description:
      "I'm building a SwiftUI app for my Turkish-speaking mother to practise Dutch and English.",
    href: "/projects/adim",
    logoSrc: "/projects/adim/app-icon-original.png",
  },
  {
    title: "Building this portfolio",
    status: "In progress · Personal project",
    description:
      "I'm learning Next.js by building this portfolio. Here's how I turned repeated card markup into one reusable component.",
    href: "/projects/portfolio",
    logoSrc: "/projects/portfolio/portfolio-preview.png",
    previewAlt: "Portfolio hero with the name Fahri Can Genc in three staggered lines on a navy background.",
  },
];

export const previousProjects: ProjectSummary[] = [
  {
    title: "ZEST ZOO",
    status: "Personal project",
    description:
      "I designed a fitness app where a short quiz pairs you with an animal coach. The squirrel, koala, and panda each have their own colour palette.",
    href: "/projects/zest-zoo",
    logoSrc: "/projects/zest-zoo/AppIcon - Light.png",
  },
  {
    title: "Game companion app",
    status: "Group project",
    description:
      "I worked on Settings and added a live text preview so players could see their chosen text size before returning to the game.",
    href: "/projects/game-companion",
    logoSrc: "/projects/game-companion/gamelogo 1.png",
    previewAlt: "Game start screen with a pink heart and the word SOCIALITY.",
  },
];
