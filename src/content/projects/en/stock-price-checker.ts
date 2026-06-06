import type { ProjectContent } from "../../types";

export default {
  title: "Stock Price Checker",
  theme: "dark",
  tags: ["react", "javascript"],
  source:"https://github.com/saurabhsingh72487-hub/stock-price-checker",
  description:
    "Web application for tracking stock prices and market data in real time. Built to fetch and display financial information through external APIs with a clean and responsive interface.",

  components: [
    {
      type: "text",
      props: {
        title: "Overview",
        text: "Developed a stock market tracking application that displays stock information, price updates, and market data using third-party APIs.",
      },
    },
    {
      type: "list",
      props: {
        title: "Features",
        items: [
          "Real-time Stock Data",
          "API Integration",
          "Responsive UI",
          "Market Tracking",
          "Search Functionality",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;