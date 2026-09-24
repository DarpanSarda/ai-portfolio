const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const siteDescription =
  "AI Full Stack Developer shipping production agentic systems, high-precision RAG, and NL2SQL platforms for enterprise teams — four live products, not demos.";