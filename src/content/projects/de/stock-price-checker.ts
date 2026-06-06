import type { ProjectContent } from "../../types";

export default {
  title: "Aktienkurs-Tracker",
  theme: "dark",
  tags: ["react", "javascript", "node"],

  description:
    "Eine Anwendung zur Verfolgung von Aktienkursen in Echtzeit mit Daten aus externen APIs und einer benutzerfreundlichen Oberfläche.",

  components: [
    {
      type: "text",
      props: {
        title: "Überblick",
        text: "Ermöglicht die Überwachung von Aktienkursen, Markttrends und Unternehmensinformationen in Echtzeit.",
      },
    },
    {
      type: "list",
      props: {
        title: "Funktionen",
        items: [
          "Echtzeit-Aktienkurse",
          "API-Integration",
          "Marktübersicht",
          "Responsives Design",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;