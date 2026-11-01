export type ProjectSummary = {
  title: string;
  status: string;
  description: string;
  href: string;
};

export const projects: ProjectSummary[] = [
  {
    title: "Flik",
    status: "Completed · Mobile app",
    description:
      "A mobile app that helps people decide what to eat. Designed and developed independently.",
    href: "/projects/flik",
  },
  {
    title: "Who Owns the Night?",
    status: "Krom Studio",
    description: "A project with Krom Studio. More details coming soon.",
    href: "/projects/who-owns-the-night",
  },
  {
    title: "Adim",
    status: "Project",
    description:
      "I'm building a SwiftUI app for my Turkish-speaking mother to practise Dutch and English.",
    href: "/projects/adim",
  },
  {
    title: "Building this portfolio",
    status: "In progress · Personal project",
    description:
      "I'm learning Next.js by building this portfolio. Here's how I turned repeated card markup into one reusable component.",
    href: "/projects/portfolio",
  },
];

export const previousProjects: ProjectSummary[] = [
  {
    title: "ZEST ZOO",
    status: "Personal project",
    description:
      "I designed a fitness app where a short quiz pairs you with an animal coach. The squirrel, koala, and panda each have their own colour palette.",
    href: "/projects/zest-zoo",
  },
  {
    title: "Game companion app",
    status: "Group project",
    description:
      "I worked on Settings and added a live text preview so players could see their chosen text size before returning to the game.",
    href: "/projects/game-companion",
  },
];
