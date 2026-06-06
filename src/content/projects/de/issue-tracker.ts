import type { ProjectContent } from "../../types";

export default {
  title: "Issue Tracker",
  theme: "dark",
  tags: ["react", "node", "postgresql"],

  description:
    "Eine Full-Stack-Anwendung zur Verwaltung von Fehlern, Aufgaben und Feature-Anfragen in Softwareprojekten.",

  components: [
    {
      type: "text",
      props: {
        title: "Überblick",
        text: "Entwickelt zur Organisation von Projektaufgaben, Fehlerberichten und Entwicklungsprozessen.",
      },
    },
    {
      type: "list",
      props: {
        title: "Funktionen",
        items: [
          "Aufgabenverwaltung",
          "Issue Tracking",
          "Statusverwaltung",
          "Benutzerauthentifizierung",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;