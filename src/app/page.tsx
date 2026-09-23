import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { HeroScene } from "@/components/hero-scene";
import { MotionReveal } from "@/components/motion-reveal";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

const marqueeSkills = [
  "Python",
  "Next.js",
  "Milvus",
  "Qdrant",
  "Embeddings",
  "Reranker",
  "MinIO",
  "Vanna AI",
  "LLMs",
  "PostgreSQL",
  "MongoDB",
  "Langchain",
  "Observability",
  "Evals",
  "Guardrails"
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <HeroScene />
          <div className="hero-grid" aria-hidden="true" />
          <div className="section-shell hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span /> AI Full Stack Developer · Ahmedabad</p>
              <h1>Building production AI systems & <em>intelligent data platforms.</em></h1>
              <p className="hero-intro">AI Full Stack Developer at Silvertouch Technologies. I build full-stack GenAI applications—from multi-agent workflows and vector retrieval pipelines to FastAPI backends and Next.js interfaces.</p>
              <div className="hero-actions">
                <Link href="#work" className="button">Explore selected work <ArrowDown size={17} /></Link>
                <a href="/Darpan_Sarda_Resume.pdf" target="_blank" className="text-link">View resume <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="hero-status">
              <span>Currently</span>
              <strong>AI Full Stack Developer</strong>
              <small>Silvertouch Technologies</small>
            </div>
          </div>
        </section>

        <section className="work-section section" id="work">
          <div className="section-shell">
            <MotionReveal className="section-heading">
              <div><p className="kicker">Selected work</p><h2>Production AI systems & platforms.</h2></div>
              <p>End-to-end applications across multi-agent workflows, enterprise RAG, and conversational database intelligence.</p>
            </MotionReveal>
          </div>
          <div className="project-list section-shell">
            {projects.map((project, index) => (
              <MotionReveal className={`project-stage project-${index + 1}`} delay={0.05} key={project.slug}>
                <article>
                  <Link href={`/projects/${project.slug}`} className="project-visual" aria-label={`View ${project.title} case study`}>
                    <div className="project-browser"><span /><span /><span /></div>
                    <Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 850px) 100vw, 58vw" />
                    <div className="project-glow" />
                  </Link>
                  <div className="project-copy">
                    <div className="project-number">0{index + 1}</div>
                    <p className="kicker">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <Link href={`/projects/${project.slug}`} className="text-link">Explore the system <ArrowUpRight size={16} /></Link>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="capabilities section" id="about"><div className="section-shell">
          <MotionReveal className="capability-intro">
            <p className="kicker"><Sparkles size={13} /> My approach</p>
            <h2>Intelligence is only useful when the <em>whole system</em> earns trust.</h2>
          </MotionReveal>
          <div className="capability-grid">
            <MotionReveal delay={0}><article><span>01</span><h3>Agentic Workflows</h3><p>Stateful multi-agent workflows coordinating specialized workers (Email, Human Input, Condition) with live WebSocket telemetry.</p></article></MotionReveal>
            <MotionReveal delay={0.08}><article><span>02</span><h3>High-Precision RAG</h3><p>Multi-source ingestion with web crawling, vector retrieval (Milvus, Qdrant), and cross-encoder reranking.</p></article></MotionReveal>
            <MotionReveal delay={0.16}><article><span>03</span><h3>NL2SQL & Data Gates</h3><p>Domain intent routing, schema grounding, AST-enforced SELECT security gates, and 3-in-1 synced tables, graphs & summaries.</p></article></MotionReveal>
          </div>
          <div className="skill-marquee" aria-label="Core technologies">
            <div className="marquee-track">
              {marqueeSkills.map((skill) => (
                <span className="marquee-item" key={skill}>
                  <span>{skill}</span>
                  <i>·</i>
                </span>
              ))}
            </div>
            <div className="marquee-track" aria-hidden="true">
              {marqueeSkills.map((skill, index) => (
                <span className="marquee-item" key={`dup-${skill}-${index}`}>
                  <span>{skill}</span>
                  <i>·</i>
                </span>
              ))}
            </div>
          </div>
        </div></section>

        <section className="section-shell section experience" id="experience">
          <MotionReveal><p className="kicker">Trajectory</p><div className="experience-layout"><div><h2>Building at the edge of applied AI.</h2><p className="experience-note">Based in Ahmedabad, engineering end-to-end AI architectures, backend systems, and responsive interfaces.</p></div><div className="timeline">
            <article><span className="timeline-dot" /><div><strong>AI Full Stack Developer</strong><span>Jun 2025 — Present</span></div><p>Silvertouch Technologies</p>
              <ul>
                <li>Architected and shipped 4 production AI SaaS platforms: TenderFlow AI, AskDB, MyBotGenie, and SAP Copilot.</li>
                <li>Engineered low-latency FastAPI backends, LangGraph agent workflows, and real-time WebSocket telemetry.</li>
                <li>Implemented enterprise security guardrails including AST-level SQL validation and multi-tenant BYO-LLM controls.</li>
              </ul>
            </article>
            <article><span className="timeline-dot" /><div><strong>AI / ML Intern</strong><span>Jan 2025 — Jun 2025</span></div><p>Silvertouch Technologies · Converted to full-time</p>
              <ul>
                <li>Developed multi-source ingestion pipelines with recursive web crawlers and document chunking.</li>
                <li>Built Qdrant vector retrieval systems with cross-encoder reranking to minimize hallucinations.</li>
              </ul>
            </article>
            <article><span className="timeline-dot" /><div><strong>B.E. Computer Engineering</strong><span>2022 — 2025</span></div><p>VGEC Ahmedabad · 8.56 CGPA</p></article>
          </div></div></MotionReveal>
        </section>

        <section className="contact section" id="contact"><div className="section-shell contact-inner">
          <MotionReveal><p className="kicker">Open channel</p><h2>Let&apos;s build something that thinks <em>and</em> works.</h2><p>Tell me about the operational problem behind the AI brief.</p></MotionReveal>
          <div className="contact-layout">
            <ContactForm />
            <aside><span>Direct contact</span><a href="mailto:darpansarda7@gmail.com">darpansarda7@gmail.com</a><a href="tel:+919081249454">+91 90812 49454</a><small><MapPin size={14} /> Ahmedabad, Gujarat</small></aside>
          </div>
          <div className="contact-footer"><span>© 2026 Darpan Sarda</span><a href="https://www.linkedin.com/in/darpan-sarda-b02361238/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/DarpanSarda" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </div></section>
      </main>
    </>
  );
}
