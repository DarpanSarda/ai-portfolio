import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { siteDescription, siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Darpan Sarda — AI / GenAI Engineer", template: "%s | Darpan Sarda" },
  description: siteDescription,
  applicationName: "Darpan Sarda Portfolio",
  authors: [{ name: "Darpan Sarda", url: siteUrl }],
  creator: "Darpan Sarda",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Darpan Sarda",
    title: "Darpan Sarda — AI / GenAI Engineer",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Sarda — AI / GenAI Engineer",
    description: siteDescription,
  },
  keywords: ["AI Engineer", "GenAI Engineer", "Agentic AI", "RAG", "NL2SQL", "LangGraph", "Ahmedabad"],
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2eb" },
    { media: "(prefers-color-scheme: dark)", color: "#111714" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Darpan Sarda",
      jobTitle: "AI / GenAI Engineer",
      email: "mailto:darpansarda7@gmail.com",
      telephone: "+91-90812-49454",
      address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
      sameAs: ["https://github.com/DarpanSarda", "https://www.linkedin.com/in/darpan-sarda-b02361238/"],
      knowsAbout: ["Agentic AI", "Retrieval-Augmented Generation", "Natural Language to SQL", "LangGraph", "Qdrant", "FastAPI"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Darpan Sarda Portfolio",
      description: siteDescription,
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${newsreader.variable} dark h-full antialiased`}
    >
      <body className="min-h-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
