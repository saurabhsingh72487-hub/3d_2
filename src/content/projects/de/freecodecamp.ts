import type { ProjectContent } from "../../types";

export default {
  title: "FreeCodeCamp Zertifikate",
  theme: "dark",
  tags: ["html", "css", "javascript", "react", "node"],

  description:
    "Mehrere FreeCodeCamp-Zertifikate mit über 1200 Stunden praktischer Erfahrung in Frontend- und Backend-Entwicklung erfolgreich abgeschlossen.",

  components: [
    {
      type: "text",
      props: {
        title: "Überblick",
        text: "Mehrere FreeCodeCamp-Zertifikate durch praktische Projekte und kontinuierliches Lernen in modernen Webtechnologien erworben.",
      },
    },
    {
      type: "list",
      props: {
        title: "Zertifikate",
        items: [
          "Responsive Web Design",
          "JavaScript Algorithms and Data Structures",
          "Front End Development Libraries",
          "Back End Development and APIs",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Erfolge",
        items: [
          "1200+ Lernstunden",
          "100+ Projekte erstellt",
          "Frontend- und Backend-Entwicklung",
          "Praxisnahe Projekterfahrung",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;