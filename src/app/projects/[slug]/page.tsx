import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
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
        </section>

        <section className="section-shell case-body">
          <aside>
            <p className="kicker">Technology</p>
            <div className="case-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            {project.liveUrl && (
              <a href={project.liveUrl} className="button" target="_blank" rel="noreferrer">Visit product <ArrowUpRight size={17} /></a>
            )}
          </aside>
          <div className="case-content">
            <p className="kicker">The system</p>
            <h2>Building useful AI around real operational constraints.</h2>
            <p className="case-description">{project.description}</p>
            <div className="case-highlights">
              {project.highlights.map((highlight) => <div key={highlight}><Check size={18} /><span>{highlight}</span></div>)}
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