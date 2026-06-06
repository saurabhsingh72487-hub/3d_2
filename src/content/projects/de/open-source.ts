import type { ProjectContent } from "../../types";

export default {
  title: "Open Source Beiträge",
  theme: "dark",
  tags: ["javascript", "react", "node"],

  description:
    "Beiträge zu verschiedenen Open-Source-Projekten durch Pull Requests, Fehlerbehebungen, Dokumentationsverbesserungen und neue Funktionen.",

  components: [
    {
      type: "text",
      props: {
        title: "Überblick",
        text: "Aktive Mitarbeit an Open-Source-Projekten durch die Lösung von Problemen, Verbesserungen am Code und Zusammenarbeit mit Maintainers.",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "10+ gemergte Pull Requests",
          "Bug Fixes",
          "Dokumentationsverbesserungen",
          "Zusammenarbeit mit der Community",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;