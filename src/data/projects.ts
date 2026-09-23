export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  liveUrl?: string;
  accent: "coral" | "teal" | "gold" | "blue";
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "tenderflow-ai",
    title: "TenderFlow AI",
    category: "Agentic AI / SaaS",
    summary: "An end-to-end tender workspace that helps teams draft, review, clarify, and evaluate complex tenders.",
    description: "A multi-tenant platform covering six tender types and a three-stage Draft, Review, and Approve workflow. I contributed AI-assisted section generation, clarification query handling, and bidder evaluation workflows.",
    image: "/projects/tenderflow.png",
    accent: "coral",
    stack: ["Python", "FastAPI", "Next.js", "RAG", "Multi-LLM"],
    highlights: [
      "Human-in-the-loop generation with accept, reject, and refine controls",
      "RAG-grounded responses for GeM and CPPP clarification queries",
      "Bid evaluation across L1, LCS, and QCBS methods",
    ],
  },
  {
    slug: "askdb",
    title: "AskDB",
    category: "NL2SQL / Enterprise AI",
    summary: "A secure natural-language interface that turns business questions into validated database queries.",
    description: "An NL2SQL assistant built with Vanna AI, an on-premise Qdrant knowledge base, and a self-hosted GPT-OSS 20B model. Business users can explore complex data without writing SQL.",
    image: "/projects/askdb.png",
    liveUrl: "http://103.180.31.33:3000/",
    accent: "teal",
    stack: ["Vanna AI", "Qdrant", "PostgreSQL", "RAGAS", "GPT-OSS"],
    highlights: [
      "Intent routing across federations, societies, and banks",
      "SELECT-only security layer with a three-attempt repair loop",
      "Grounding from annotated DDLs, business rules, and curated SQL pairs",
    ],
  },
  {
    slug: "mybotgenie",
    title: "MyBotGenie",
    category: "RAG / SaaS",
    summary: "An embeddable AI support agent trained on customer documents and web content.",
    description: "A SaaS RAG platform that lets customers create and embed their own knowledge-grounded chatbot. I owned the retrieval pipeline from ingestion through hybrid search and reranking.",
    image: "/projects/mybotgenie.png",
    liveUrl: "https://mybotgenie.ai/",
    accent: "gold",
    stack: ["Qdrant", "BGE", "Hybrid Search", "Reranking", "React"],
    highlights: [
      "Dense and sparse embeddings combined through hybrid retrieval",
      "BGE reranking to improve the relevance of retrieved context",
      "Script-based chatbot embedding for customer websites",
    ],
  },
  {
    slug: "sap-copilot",
    title: "SAP Copilot",
    category: "Agentic AI / SAP",
    summary: "A human-guided AI workspace for SAP HANA operations, analytics, and reporting.",
    description: "An agentic SaaS platform for SAP operations. I built interaction patterns that pause workflows for structured human input and real-time status updates between agents and the frontend.",
    image: "/projects/sap-copilot.png",
    liveUrl: "https://staging-sapcopilot.silvertouch.com/",
    accent: "blue",
    stack: ["Vanna Cloud", "WebSockets", "React", "FastAPI", "SAP HANA"],
    highlights: [
      "Human-in-the-loop cards for structured workflow decisions",
      "Live agent status updates over WebSockets",
      "Talk-to-HANA querying with analytics and generated summaries",
    ],
  },
];