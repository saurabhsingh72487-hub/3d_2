import type { ProjectContent } from "../../types";

export default {
  title: "Helmerkennungssystem",
  theme: "dark",
  tags: ["react", "javascript", "node"],

  description:
    "Ein KI-gestütztes Helmerkennungssystem zur automatisierten Überwachung der Verkehrssicherheit und Einhaltung von Schutzvorschriften.",

  components: [
    {
      type: "text",
      props: {
        title: "Überblick",
        text: "Das System analysiert Bilder und Videostreams mithilfe von Computer Vision und erkennt automatisch, ob Fahrer einen Helm tragen.",
      },
    },
    {
      type: "list",
      props: {
        title: "Funktionen",
        items: [
          "Helmerkennung",
          "Bildverarbeitung",
          "Videoanalyse",
          "Automatische Überwachung",
          "Sicherheitskontrolle",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;