import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { siteDescription, siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Darpan Sarda — AI / GenAI Engineer", template: "%s | Darpan Sarda" },
  description: siteDescription,
  applicationName: "Darpan Sarda Portfolio",
  authors: [{ name: "Darpan Sarda", url: siteUrl }],
  creator: "Darpan Sarda",
  publisher: "Darpan Sarda",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Darpan Sarda",
    title: "Darpan Sarda — AI / GenAI Engineer",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Darpan Sarda — AI / GenAI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Sarda — AI / GenAI Engineer",
    description: siteDescription,
    images: ["/opengraph-image"],
    creator: "@DarpanSarda",
  },
  keywords: [
    "Darpan Sarda",
    "AI Engineer",
    "GenAI Engineer",
    "AI Full Stack Developer",
    "Agentic AI",
    "Multi-Agent Systems",
    "RAG",
    "Enterprise RAG",
    "NL2SQL",
    "LangGraph",
    "FastAPI",
    "Next.js",
    "Vector Database",
    "Qdrant",
    "Milvus",
    "LLM Engineer",
    "Full Stack AI",
    "Ahmedabad",
    "Gujarat",
    "India",
  ],
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5f8" },
    { media: "(prefers-color-scheme: dark)", color: "#08090d" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Darpan Sarda",
      jobTitle: "AI / GenAI Engineer",
      url: siteUrl,
      image: `${siteUrl}/Darpan-avatar.png`,
      email: "mailto:darpansarda7@gmail.com",
      telephone: "+91-90812-49454",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/DarpanSarda",
        "https://www.linkedin.com/in/darpan-sarda-b02361238/",
      ],
      knowsAbout: [
        "Agentic AI",
        "Multi-Agent Workflows",
        "Retrieval-Augmented Generation (RAG)",
        "Natural Language to SQL (NL2SQL)",
        "LangGraph",
        "FastAPI",
        "Next.js",
        "Python",
        "Vector Databases",
        "Qdrant",
        "Milvus",
        "Large Language Models (LLM)",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Darpan Sarda — AI / GenAI Engineer Portfolio",
      mainEntity: { "@id": `${siteUrl}/#person` },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
