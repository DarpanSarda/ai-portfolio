import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" title="Darpan Sarda, home">DS<span>.</span></Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#experience">Experience</Link>
        <a href="/Darpan_Sarda_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <Link href="/#contact" className="button button-small">Let&apos;s talk</Link>
      </div>
    </header>
  );
}