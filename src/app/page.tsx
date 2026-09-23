import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { HeroScene } from "@/components/hero-scene";
import { MotionReveal } from "@/components/motion-reveal";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

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
              <p className="eyebrow"><span /> AI / GenAI Engineer · Ahmedabad</p>
              <h1>Engineering intelligence into <em>real products.</em></h1>
              <p className="hero-intro">I design agentic systems, grounded retrieval, and natural-language data products that hold up beyond the demo.</p>
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
          <div className="hero-index" aria-hidden="true"><span>RAG</span><span>AGENTS</span><span>NL2SQL</span></div>
        </section>

        <section className="signal-strip" aria-label="Professional snapshot">
          <div className="section-shell signal-grid">
            <div><strong>1.5+</strong><span>Years shipping AI</span></div>
            <div><strong>04</strong><span>Production platforms</span></div>
            <div><strong>Full stack</strong><span>Model to interface</span></div>
            <div className="signal-tech"><span>LANGGRAPH</span><span>QDRANT</span><span>FASTAPI</span><span>NEXT.JS</span></div>
          </div>
        </section>

        <section className="work-section section" id="work">
          <div className="section-shell">
            <MotionReveal className="section-heading">
              <div><p className="kicker">Selected systems / 2025–26</p><h2>AI products built for real operational pressure.</h2></div>
              <p>Beyond model calls: retrieval, reasoning, safeguards, observability, and interfaces designed as one system.</p>
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
                    <div className="project-stack">{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
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
            <MotionReveal delay={0}><article><span>01</span><h3>Agentic architecture</h3><p>Stateful multi-agent workflows with explicit control, human checkpoints, and observable decisions.</p></article></MotionReveal>
            <MotionReveal delay={0.08}><article><span>02</span><h3>Grounded retrieval</h3><p>Hybrid search, semantic reranking, and evaluation loops that keep generated answers anchored.</p></article></MotionReveal>
            <MotionReveal delay={0.16}><article><span>03</span><h3>Product engineering</h3><p>FastAPI backends and crisp Next.js interfaces shaped around the way people actually work.</p></article></MotionReveal>
          </div>
          <div className="skill-marquee"><div><span>Python</span><i>·</i><span>TypeScript</span><i>·</i><span>LangGraph</span><i>·</i><span>CrewAI</span><i>·</i><span>Qdrant</span><i>·</i><span>PostgreSQL</span><i>·</i><span>Docker</span><i>·</i><span>RAGAS</span></div></div>
        </div></section>

        <section className="section-shell section experience" id="experience">
          <MotionReveal><p className="kicker">Trajectory</p><div className="experience-layout"><div><h2>Building at the edge of applied AI.</h2><p className="experience-note">Based in Ahmedabad, working across AI architecture, backend systems, and product interfaces.</p></div><div className="timeline">
              <article><span className="timeline-dot" /><div><strong>AI Full Stack Developer</strong><span>Jun 2025 — Present</span></div><p>Silvertouch Technologies</p></article>
              <article><span className="timeline-dot" /><div><strong>AI / ML Intern</strong><span>Jan 2025 — Jun 2025</span></div><p>Silvertouch Technologies · Converted to full-time</p></article>
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
