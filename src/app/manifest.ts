import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Darpan Sarda — AI / GenAI Engineer",
    short_name: "Darpan Sarda",
    description: "AI Full Stack Developer building production-grade agentic systems, enterprise RAG, and NL2SQL platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090d",
    theme_color: "#08090d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/Darpan-avatar.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
