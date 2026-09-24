"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="wordmark" title="Darpan Sarda, home" onClick={closeMenu}>
          DS<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <a href="/Darpan_Sarda_Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link href="/#contact" className="button button-small desktop-cta">
            Let&apos;s talk
          </Link>
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMenu} aria-hidden="true">
          <div
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mobile-drawer-nav" aria-label="Mobile navigation">
              <Link href="/#work" onClick={closeMenu} className="mobile-nav-link">
                <span>01</span> Work
              </Link>
              <Link href="/#about" onClick={closeMenu} className="mobile-nav-link">
                <span>02</span> About
              </Link>
              <Link href="/#experience" onClick={closeMenu} className="mobile-nav-link">
                <span>03</span> Experience
              </Link>
              <a
                href="/Darpan_Sarda_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mobile-nav-link mobile-resume-link"
              >
                <span><FileText size={15} /></span> Resume <ArrowUpRight size={16} />
              </a>
            </nav>
            <div className="mobile-drawer-footer">
              <Link href="/#contact" onClick={closeMenu} className="button button-primary mobile-talk-btn">
                Let&apos;s talk &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}