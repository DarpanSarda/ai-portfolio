import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Cpu, Layers, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: `${project.title} | Darpan Sarda`,
      description: project.summary,
      images: [{ url: project.image, alt: `${project.title} product interface` }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteUrl}/projects/${project.slug}`,
    image: `${siteUrl}${project.image}`,
    author: { "@type": "Person", name: "Darpan Sarda" },
    keywords: project.stack.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }} />
      <SiteHeader />
      <main className={`case-study accent-${project.accent}`}>
        <section className="case-hero section-shell">
          <Link href="/#work" className="text-link"><ArrowLeft size={16} /> All projects</Link>
          <div className="case-title">
            <div>
              <p className="kicker">{project.category}</p>
              <h1>{project.title}</h1>
            </div>
            <p>{project.summary}</p>
          </div>
          <div className="case-image">
            <Image src={project.image} alt={`${project.title} product interface`} fill priority sizes="(max-width: 1200px) 100vw, 1180px" />
          </div>
          {project.metrics && project.metrics.length > 0 && (
            <div className="case-metrics">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="case-metric-card">
                  <div className="case-metric-value">{metric.value}</div>
                  <div className="case-metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="section-shell case-body">
          <aside>
            <p className="kicker">Technology Stack</p>
            <div className="case-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            {project.liveUrl && (
              <a href={project.liveUrl} className="button" target="_blank" rel="noreferrer">Visit live product <ArrowUpRight size={17} /></a>
            )}
          </aside>
          <div className="case-content">
            <p className="kicker">Architecture & Overview</p>
            <h2>Engineering intelligence around real operational constraints.</h2>
            <p className="case-description">{project.description}</p>

            {project.workflow && project.workflow.length > 0 && (
              <div className="case-section-block">
                <p className="kicker"><Cpu size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> Execution Lifecycle</p>
                <h3>How the System Works End-to-End</h3>
                <div className="case-workflow">
                  {project.workflow.map((item) => (
                    <div key={item.step} className="workflow-step">
                      <div className="workflow-step-num">{item.step}</div>
                      <div className="workflow-step-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.governanceOrFeatures && (
              <div className="case-governance">
                <h3>{project.governanceOrFeatures.title}</h3>
                <div className="governance-list">
                  {project.governanceOrFeatures.points.map((pt) => (
                    <div key={pt} className="governance-item">
                      <ShieldCheck size={18} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="case-section-block">
              <p className="kicker"><Layers size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> Engineering Highlights</p>
              <h3>Capabilities & Guardrails</h3>
              <div className="case-highlights">
                {project.highlights.map((highlight) => (
                  <div key={highlight}>
                    <Check size={18} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="next-project section-shell">
          <p className="kicker">Continue exploring</p>
          <Link href="/#work">View all selected work <ArrowUpRight size={22} /></Link>
        </section>
      </main>
    </>
  );
}