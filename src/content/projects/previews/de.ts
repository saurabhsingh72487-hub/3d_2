import thumbnailCubeWar from "../../../assets/thumbnails/open-source.png";
import thumbnailQuibbo from "../../../assets/thumbnails/freecodecamp.png";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/issue-tracker.png";
import thumbnailSharkie from "../../../assets/thumbnails/stock-price-checker.png";
import thumbnailStreakon from "../../../assets/thumbnails/helmet-detection.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Helmet Detection System",
    slug: "helmet-detection",
    thumbnail: thumbnailStreakon,
    description: "AI-powered helmet compliance detection system",
  },
  {
    title: "Open Source Contributions",
    slug: "open-source",
    thumbnail: thumbnailCubeWar,
    description: "10+ pull requests merged and issues resolved",
  },
  {
    title: "FreeCodeCamp Certifications",
    slug: "freecodecamp",
    thumbnail: thumbnailQuibbo,
    description: "Certified in frontend and backend development",
  },
 {
  title: "Stock Price Checker",
  slug: "stock-price-checker",
  thumbnail: thumbnailSharkie,
  description: "Real-time stock market tracking application",
},
  {
    title: "Issue Tracker",
    slug: "issue-tracker",
    thumbnail: thumbnailPokedex,
    description: "Issue management API with tracking features",
  },
] as const satisfies ProjectPreview[];