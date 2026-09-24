import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { HeroScene } from "@/components/hero-scene";
import { MotionReveal } from "@/components/motion-reveal";
import { ParallaxHeading } from "@/components/parallax-heading";
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
              <h1>AI systems built for <em>real enterprise data.</em></h1>
              <p className="hero-intro">I&apos;m Darpan — an AI Full Stack Developer at Silvertouch Technologies. In just over a year I&apos;ve shipped four production AI platforms, from a procurement engine that runs a full tender lifecycle to a NL2SQL assistant with an AST-enforced security gate. I care less about demos and more about what still works after the edge cases show up.</p>
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
          <nav className="hero-index" aria-label="Section index">
            <a href="#work">01 Work</a>
            <a href="#about">02 Approach</a>
            <a href="#experience">03 Trajectory</a>
            <a href="#contact">04 Contact</a>
          </nav>
        </section>

        <section className="signal-strip" aria-label="Snapshot">
          <div className="section-shell signal-grid">
            <div><strong>4</strong><span>Production platforms shipped</span></div>
            <div><strong>94%</strong><span>NL2SQL first-pass accuracy</span></div>
            <div><strong>&lt;200ms</strong><span>Retrieval &amp; rerank latency</span></div>
            <div className="signal-tech">
              <span>FastAPI</span>
              <span>LangGraph</span>
              <span>Qdrant / Milvus</span>
              <span>Next.js</span>
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

        <section className="capabilities section" id="about">
          <ParallaxHeading text="SYSTEM / THINKING / BUILDING" />
          <div className="section-shell">
          <MotionReveal className="capability-intro">
            <p className="kicker"><Sparkles size={13} /> My approach</p>
            <h2>An LLM output is a suggestion. The <em>system around it</em> decides if it ships.</h2>
          </MotionReveal>
          <div className="capability-grid">
            <MotionReveal delay={0}><article><span>01</span><h3>Agentic Workflows</h3><p>Stateful multi-agent graphs — Email, Human Input, and Condition workers coordinating over live WebSocket telemetry, with checkpoints that pause for a human when the stakes are real.</p></article></MotionReveal>
            <MotionReveal delay={0.08}><article><span>02</span><h3>High-Precision RAG</h3><p>Multi-source ingestion with recursive web crawling, dense retrieval across Milvus and Qdrant, and cross-encoder reranking so answers stay grounded instead of confidently wrong.</p></article></MotionReveal>
            <MotionReveal delay={0.16}><article><span>03</span><h3>NL2SQL & Data Gates</h3><p>Domain intent routing, schema grounding, and an AST-enforced SELECT-only gate that blocks every write path — plus synced tables, graphs, and summaries from one query.</p></article></MotionReveal>
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
          <MotionReveal><p className="kicker">Trajectory</p><div className="experience-layout"><div><h2>Building at the edge of applied AI.</h2><p className="experience-note">Based in Ahmedabad, engineering end-to-end AI architectures, backend systems, and responsive interfaces at Silvertouch Technologies.</p></div><div className="timeline">
            <article><span className="timeline-dot" /><div><strong>AI Full Stack Developer</strong><span>Jan 2025 — Present</span></div><p>Silvertouch Technologies</p>
              <p className="timeline-summary">I design and own the AI architecture end-to-end — FastAPI backends, LangGraph multi-agent workflows, and the Next.js interfaces on top of them. Most of my time goes into the parts that don&apos;t show up in a demo: schema-grounded retrieval that stays accurate under messy real data, security gates that hold up under audit, and multi-agent workflows with human checkpoints where the stakes are too high to leave fully autonomous.</p>
            </article>
            <article><span className="timeline-dot" /><div><strong>B.E. Computer Engineering</strong><span>2022 — 2025</span></div><p>VGEC Ahmedabad · 8.56 CGPA</p></article>
          </div></div></MotionReveal>
        </section>

        <section className="contact section" id="contact"><div className="section-shell contact-inner">
          <MotionReveal><p className="kicker">Open channel</p><h2>Got a system that needs to actually <em>hold up</em>?</h2><p>Tell me about the operational problem behind the AI brief — I&apos;m usually more interested in that than the buzzwords around it.</p></MotionReveal>
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
