import type { ProjectContent } from "../../types";

export default {
  title: "Helmet Detection System",
  theme: "dark",
  tags: ["react","javascript", "node"],
  source: "https://github.com/saurabhsingh72487-hub/helmets-detections-project-by-saurabh-singh",
  description:
    "Helmet Detection System is a computer vision project designed to identify whether riders are wearing helmets. The project focuses on road safety and automated compliance monitoring using machine learning and image processing techniques.",

  components: [
    {
      type: "text",
      props: {
        title: "Overview",
        text: "Developed a helmet detection system capable of identifying helmet usage from images and video streams. The project demonstrates practical applications of AI in traffic monitoring and public safety.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "Helmet Detection",
          "Image Processing",
          "Road Safety Monitoring",
          "Machine Learning Integration",
          "Real-time Analysis",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;