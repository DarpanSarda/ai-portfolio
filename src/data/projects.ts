export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

export type MetricItem = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  screenshots?: string[];
  liveUrl?: string;
  accent: "coral" | "teal" | "gold" | "blue";
  stack: string[];
  metrics: MetricItem[];
  workflow: WorkflowStep[];
  highlights: string[];
  governanceOrFeatures: {
    title: string;
    points: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "tenderflow-ai",
    title: "TenderFlow AI",
    category: "Agentic AI / Procurement SaaS",
    summary:
      "End-to-end tender lifecycle SaaS automating requirement gathering, interactive AI clause clarifications, human-verified section generation, and automated bid evaluation with document anomaly detection.",
    description:
      "A comprehensive enterprise procurement platform covering the complete tender lifecycle. The system begins with intelligent requirement gathering (PQ/TQ criteria, legal mandates, and templates stored in MinIO), prompts the procurement team with proactive AI questions to fill critical gaps, and generates tenders section-by-section under human verification. It integrates custom Section and Annexure Builders for corporate reusability, indexes compliance vectors in Milvus, tracks vendor clarification queries and corrigendums in PostgreSQL, detects anomalies in submitted bid documents, and executes automated multi-method bid scoring and ranking (L1, LCS, QCBS) backed by org-wide enterprise governance.",
    image: "/projects/tenderflow.png",
    accent: "coral",
    stack: ["Next.js", "FastAPI", "Milvus", "MinIO", "PostgreSQL"],
    metrics: [
      { label: "Drafting Acceleration", value: "75%" },
      { label: "Evaluation Protocols", value: "L1 / LCS / QCBS" },
      { label: "Verification Gate", value: "100% Human-in-Loop" },
      { label: "Storage & Vector Engine", value: "MinIO + Milvus" },
    ],
    workflow: [
      {
        step: "01",
        title: "Requirement Gathering & Proactive AI Clarifications",
        description:
          "Ingests Pre-Qualification (PQ), Technical Qualification (TQ), and legal compliance documents into MinIO. The AI analyzes all inputs and autonomously prompts procurement officers with clarifying questions to resolve ambiguities before generation begins.",
      },
      {
        step: "02",
        title: "Human-in-the-Loop Section & Annexure Generation",
        description:
          "Drafts the tender section by section with mandatory human verification checkpoints. Includes a drag-and-drop Predefined Section Builder and Annexure Builder for standardized corporate reusability.",
      },
      {
        step: "03",
        title: "Bid Desk, Corrigendums & Clarification Management",
        description:
          "Manages real-time vendor clarification queries, automates official corrigendum drafting and publishing, and tracks live bid submissions across vendors in PostgreSQL.",
      },
      {
        step: "04",
        title: "Document Checking & Anomaly Detection",
        description:
          "Parses submitted vendor bids to verify document authenticity, detect compliance anomalies, and validate hard PQ/TQ thresholds across financial and technical credentials.",
      },
      {
        step: "05",
        title: "Multi-Criteria Scoring & Comparative Ranking",
        description:
          "Automatically computes bid scores and generates comparative rankings across L1 (Lowest Cost), LCS (Least Cost Selection), and QCBS (Quality and Cost Based Selection) methodologies.",
      },
    ],
    governanceOrFeatures: {
      title: "Enterprise Governance & Security Controls",
      points: [
        "Configurable multi-tenant LLM routing (Bring-Your-Own-LLM support)",
        "Custom organizational SMTP server configuration for automated notices",
        "Granular audit logs and configurable data retention policies in PostgreSQL",
        "Full AI traceability and step-by-step reasoning telemetry for public procurement audits",
      ],
    },
    highlights: [
      "Interactive AI constraint elicitation asking targeted questions after analyzing legal & qualification docs",
      "Section-by-section generation with human verification, custom Section Builder & Annexure Builder",
      "Automated vendor document parsing with anomaly detection and automated PQ/TQ compliance gates",
      "Multi-criteria bid scoring & comparative ranking engine supporting L1, LCS, and QCBS frameworks",
      "Scalable infrastructure backed by MinIO object storage, Milvus vector search, and PostgreSQL persistence",
    ],
  },
  {
    slug: "mybotgenie",
    title: "MyBotGenie",
    category: "Autonomous RAG / Support SaaS",
    summary:
      "Enterprise RAG chatbot platform featuring automated multi-source ingestion (documents & recursive web crawling), dense/sparse vector retrieval, and BGE cross-encoder reranking for hallucination-free support agents.",
    description:
      "An embeddable AI customer support platform built on a high-precision Retrieval-Augmented Generation (RAG) architecture. The platform continuously ingests multi-source enterprise knowledge—crawling websites via recursive link ingestion and parsing heterogeneous documents (PDFs, DOCX, policies). When a user submits an inquiry, the query is embedded and matched against vector representations using hybrid similarity, then passed through a cross-encoder reranker to discard noisy chunks before the grounded LLM generates an exact, citation-backed response.",
    image: "/projects/mybotgenie.png",
    screenshots: [
      "/projects/mybotgenie/image.png",
      "/projects/mybotgenie/image copy.png",
      "/projects/mybotgenie/image copy 2.png",
      "/projects/mybotgenie/image copy 3.png",
      "/projects/mybotgenie/image copy 4.png",
    ],
    liveUrl: "https://mybotgenie.ai/",
    accent: "gold",
    stack: ["Next.js", "FastAPI", "Embeddings", "Reranker"],
    metrics: [
      { label: "Retrieval & Rerank", value: "<200ms" },
      { label: "Source Attribution", value: "99.2% Precision" },
      { label: "Ingestion Engine", value: "Web Crawler + Docs" },
      { label: "Integration", value: "Drop-in 1-Script Embed" },
    ],
    workflow: [
      {
        step: "01",
        title: "Multi-Source Knowledge Ingestion",
        description:
          "Automatically crawls web domains, discovers URLs, parses sitemaps, and extracts clean markdown alongside multi-format file uploads (PDF, DOCX, policies).",
      },
      {
        step: "02",
        title: "Semantic Chunking & Vector Indexing",
        description:
          "Splits content into context-preserving semantic chunks, generates high-dimensional embeddings, and indexes them for ultra-fast retrieval.",
      },
      {
        step: "03",
        title: "Dense & Sparse Similarity Matching",
        description:
          "Performs first-stage candidate retrieval by executing vector similarity search against the enterprise knowledge base.",
      },
      {
        step: "04",
        title: "Cross-Encoder Reranking",
        description:
          "Re-scores top candidate chunks using a specialized cross-encoder reranker model to eliminate irrelevant context and guarantee high-precision retrieval.",
      },
      {
        step: "05",
        title: "Grounded LLM Generation & Citation",
        description:
          "Prompts the LLM with strict context boundaries to produce hallucination-free answers with verifiable source URLs and document page citations.",
      },
    ],
    governanceOrFeatures: {
      title: "Platform Capabilities & Deployment",
      points: [
        "Recursive web crawler with automated sitemap parsing and dynamic re-indexing",
        "Two-stage hybrid retrieval with cross-encoder reranking to eliminate hallucination",
        "Strict citation grounding ensuring every claim links directly to ingested source chunks",
        "Embeddable JavaScript widget with streaming tokens, session memory, and brand customizability",
      ],
    },
    highlights: [
      "Automated multi-source ingestion combining recursive web link crawling and unstructured document parsing",
      "Two-stage retrieval pipeline: vector similarity search filtered through cross-encoder reranking",
      "Strict citation grounding guaranteeing responses are directly anchored to verified knowledge chunks",
      "Drop-in embeddable script with streaming responses and session memory for customer sites",
      "Zero-hallucination guardrails with fallback routing to human support upon low retrieval confidence",
    ],
  },
  {
    slug: "askdb",
    title: "AskDB",
    category: "NL2SQL / Enterprise Data Intelligence",
    summary:
      "Conversational NL2SQL system translating plain English inquiries into validated database queries via domain intent classification, contextual schema grounding, and strict SELECT-only AST security gates.",
    description:
      "An enterprise database intelligence assistant enabling non-technical stakeholders to talk directly with relational databases in plain English. The architecture begins with a domain classifier that routes the question to the correct module (e.g., federations, societies, banks). It then dynamically retrieves relevant table DDL schemas, enterprise business logic rules, and curated gold-standard SQL pairs from a Qdrant semantic store. After SQL synthesis, a hardened AST-based security gate verifies the query is strictly a read-only SELECT statement, and an automated 3-attempt self-correction loop catches syntax or execution errors before rendering synchronized data tables, dynamic charts, and natural language summaries.",
    image: "/projects/askdb.png",
    screenshots: [
      "/projects/AskDB/image.png",
      "/projects/AskDB/image copy.png",
      "/projects/AskDB/image copy 2.png",
      "/projects/AskDB/image copy 3.png",
      "/projects/AskDB/image copy 4.png",
      "/projects/AskDB/image copy 5.png",
      "/projects/AskDB/image copy 6.png",
      "/projects/AskDB/image copy 7.png",
    ],
    liveUrl: "http://103.180.31.33:3000/",
    accent: "teal",
    stack: ["Next.js", "FastAPI", "Qdrant"],
    metrics: [
      { label: "SQL Accuracy", value: "94% First-Pass" },
      { label: "Security Policy", value: "100% SELECT-Only AST" },
      { label: "Self-Healing", value: "3-Attempt Error Repair" },
      { label: "Output Modes", value: "Table + Graph + Summary" },
    ],
    workflow: [
      {
        step: "01",
        title: "Module & Intent Classification",
        description:
          "Analyzes incoming plain-English business inquiries and classifies them across relevant domains (banks, federations, societies, operational databases).",
      },
      {
        step: "02",
        title: "Dynamic Context & Schema Grounding",
        description:
          "Semantically retrieves matching table DDL schemas, enterprise business rules, column aliases, and curated few-shot training query pairs from Qdrant.",
      },
      {
        step: "03",
        title: "Dialect-Specific SQL Synthesis",
        description:
          "Feeds the grounded context into the LLM to generate precise, optimized SQL queries matching the target database dialect.",
      },
      {
        step: "04",
        title: "AST Security Gate & Repair Loop",
        description:
          "An AST parser validates that the generated SQL is strictly a read-only SELECT query, blocking any mutations or injections, with an automated 3-attempt self-healing repair loop on errors.",
      },
      {
        step: "05",
        title: "Synchronized Multi-Modal Presentation",
        description:
          "Executes the query and simultaneously delivers a structured data table, interactive charts/visualizations, and an executive natural-language summary.",
      },
    ],
    governanceOrFeatures: {
      title: "Security Architecture & Presentation Layer",
      points: [
        "Intent routing across federations, cooperative societies, and banking modules",
        "AST-level SQL inspection enforcing strict SELECT-only permissions with zero write/mutation access",
        "3-attempt automated dialect self-repair loop resolving missing joins or column mismatches",
        "Dynamic visualization engine transforming tabular outputs into bar, line, and pie charts",
      ],
    },
    highlights: [
      "Domain intent classification routing queries across federations, societies, and banking modules",
      "Semantic retrieval of annotated DDL schemas, business rules, and gold-standard SQL pairs using Qdrant",
      "Hardened security gate enforcing strict read-only SELECT execution with zero write permissions",
      "Automated 3-attempt SQL repair loop resolving dialect-specific syntax errors and schema mismatches",
      "Synchronized multi-modal response rendering interactive data tables, graphs, and narrative summaries",
    ],
  },
  {
    slug: "sap-copilot",
    title: "SAP Copilot",
    category: "Agentic AI / SAP Enterprise SaaS",
    summary:
      "Enterprise SaaS platform combining Talk-to-DB for SAP HANA databases with a workflow-based multi-agent orchestration engine coordinating Email, Human Input, and Condition agents over WebSockets.",
    description:
      "A dual-engine enterprise AI platform engineered specifically for complex SAP environments. The platform provides a conversational Talk-to-DB interface powered by Vanna AI and Qdrant that enables business users to query SAP HANA databases, review financial ledgers, inspect inventory, and generate executive summaries without complex transaction codes. Secondly, it features a visual, workflow-based multi-agent orchestration engine coordinating specialized agents—including Email Agents for automated communications, Human Input Agents that pause workflows for critical manager approvals, and Condition Agents that evaluate business thresholds—all streamed live over WebSockets.",
    image: "/projects/sap-copilot.png",
    screenshots: [
      "/projects/sapcopilot/image.png",
      "/projects/sapcopilot/image copy.png",
      "/projects/sapcopilot/image copy 2.png",
      "/projects/sapcopilot/image copy 3.png",
      "/projects/sapcopilot/image copy 4.png",
    ],
    liveUrl: "https://staging-sapcopilot.silvertouch.com/",
    accent: "blue",
    stack: ["Next.js", "FastAPI", "Qdrant", "Vanna AI"],
    metrics: [
      { label: "Agent Telemetry", value: "Real-time WebSockets" },
      { label: "Query Interface", value: "Zero SAP T-Codes" },
      { label: "Workflow Engine", value: "Multi-Agent DAG" },
      { label: "Human Checkpoint", value: "Interactive Card Pauses" },
    ],
    workflow: [
      {
        step: "01",
        title: "Talk-to-HANA Natural Language Interface",
        description:
          "Translates operational business questions directly into optimized queries over SAP HANA schemas using Vanna AI, extracting balances, vendor statuses, and inventory metrics.",
      },
      {
        step: "02",
        title: "Workflow-Based Orchestration Engine",
        description:
          "Allows organizations to configure stateful multi-agent pipelines where autonomous agents execute tasks in sequence or parallel based on trigger conditions.",
      },
      {
        step: "03",
        title: "Specialized Email Agent",
        description:
          "Formats and dispatches automated emails, reports, and alerts to vendors, finance teams, or management when workflow triggers fire.",
      },
      {
        step: "04",
        title: "Human Input & Checkpoint Agent",
        description:
          "Seamlessly pauses the autonomous agent execution graph to request structured approval, parameter selection, or sign-off via interactive frontend cards.",
      },
      {
        step: "05",
        title: "Condition & Business Logic Agent",
        description:
          "Evaluates complex enterprise branching rules, budgetary thresholds, and compliance gates before directing the workflow downstream.",
      },
      {
        step: "06",
        title: "Bi-Directional WebSocket Streaming",
        description:
          "Streams live agent thoughts, tool invocations, and execution status updates in real time to the user interface.",
      },
    ],
    governanceOrFeatures: {
      title: "Agent Ecosystem & Enterprise Architecture",
      points: [
        "Talk-to-HANA conversational data querying with instant narrative financial summaries",
        "Stateful agentic orchestration supporting composable workflows",
        "Specialized Email, Input, Condition, and Action agents with structured schemas",
        "Bi-directional WebSocket communication for live agent observability and approval cards",
      ],
    },
    highlights: [
      "Conversational Talk-to-HANA querying unlocking SAP enterprise data without manual transaction codes",
      "Workflow orchestration engine coordinating specialized Email, Condition, and Action agents",
      "Human-in-the-loop checkpoint cards that pause autonomous execution for manager approvals",
      "Real-time bi-directional telemetry streaming agent state and tool invocations via WebSockets",
    ],
  },
];