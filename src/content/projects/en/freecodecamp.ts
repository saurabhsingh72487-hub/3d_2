import type { ProjectContent } from "../../types";

export default {
  title: "FreeCodeCamp Certifications",
  theme: "dark",
  tags: ["html", "css", "javascript", "react", "node"],
live: "https://www.freecodecamp.org/saurabhsinghbohra7",
  description:
    "Completed multiple FreeCodeCamp certifications with over 1200 hours of hands-on learning and project development across frontend and backend technologies.",

  components: [
    {
      type: "text",
      props: {
        title: "Overview",
        text: "Earned multiple FreeCodeCamp certifications while building practical projects and strengthening problem-solving skills.",
      },
    },
    {
      type: "list",
      props: {
        title: "Certifications",
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
        title: "Achievements",
        items: [
          "1200+ Hours of Learning",
          "100+ Projects Built",
          "Frontend and Backend Development",
          "Real-world Application Development",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;