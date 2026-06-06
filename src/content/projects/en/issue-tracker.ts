import type { ProjectContent } from "../../types";

export default {
  title: "Issue Tracker",
  theme: "dark",
  tags: ["node", "javascript"],

  description:
    "Issue tracking API for managing project issues, status updates, and workflow organization.",

  components: [
    {
      type: "text",
      props: {
        title: "Overview",
        text: "Backend application designed to manage issues, monitor progress, and organize development workflows.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "Create Issues",
          "Update Status",
          "Delete Issues",
          "REST API Endpoints",
          "Project Organization",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;