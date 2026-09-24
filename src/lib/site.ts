const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const siteDescription =
  "AI Full Stack Developer building production-grade agentic systems, RAG pipelines, and NL2SQL platforms with LangGraph, FastAPI, and Next.js — shipped in enterprise environments.";