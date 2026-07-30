import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import { rootGraph, SITE } from "@/lib/seo";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Frontier One Technology | Enterprise Technology Consulting",
    template: "%s | Frontier One Technology",
  },
  description:
    "Enterprise technology consulting for cloud, cybersecurity, software engineering, data, AI, and DevOps — practical solutions engineered for long-term business growth.",
  applicationName: "Frontier One Technology",
  keywords: [
    "technology consulting firm",
    "enterprise IT consulting",
    "cloud consulting services",
    "cybersecurity consulting",
    "custom software development",
    "DevOps automation services",
    "data analytics consulting",
    "AI consulting services",
    "digital transformation partner",
  ],
  authors: [{ name: "Frontier One Technology", url: SITE }],
  creator: "Frontier One Technology",
  publisher: "Frontier One Technology",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: "Frontier One Technology",
    title: "Frontier One Technology | Enterprise Technology Consulting",
    description:
      "Practical cloud, security, and software solutions engineered for long-term business growth.",
    url: SITE,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Frontier One Technology — Enterprise Technology Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier One Technology | Enterprise Technology Consulting",
    description:
      "Practical cloud, security, and software solutions engineered for long-term business growth.",
    images: ["/og.webp"],
  },
  category: "technology",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#2D2218" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootGraph) }}
        />
      </head>
      <body className="grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-md focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Preloader />
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Chatbot />
        <Cursor />
      </body>
    </html>
  );
}
