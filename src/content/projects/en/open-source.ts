import type { ProjectContent } from "../../types";

export default {
  title: "Open Source Contributions",
  theme: "dark",
  tags: ["react", "javascript", "node"],
  source: "https://github.com/saurabhsingh72487-hub",

  description:
    "Actively contributed to open-source projects by resolving issues, submitting pull requests, and improving existing codebases. Contributions include bug fixes, feature enhancements, code refactoring, and documentation improvements.",

  components: [
    {
      type: "text",
      props: {
        title: "Overview",
        text: "Contributed to multiple open-source repositories on GitHub, collaborating with maintainers and developers from different projects.",
      },
    },
    {
      type: "list",
      props: {
        title: "Highlights",
        items: [
          "10+ Pull Requests Merged",
          "30–40 Issues Resolved",
          "Bug Fixes & Feature Enhancements",
          "Code Refactoring",
          "Documentation Improvements",
          "GitHub Collaboration Workflow",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;