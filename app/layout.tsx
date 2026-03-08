import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayani Immidi | AI & Software Developer",
  description:
    "Portfolio of Jayani Immidi — AI Developer, ML Engineer, and Full Stack Developer specializing in intelligent systems, LLM agents, distributed architecture, and developer tools.",
  keywords: [
    "Jayani Immidi",
    "AI Developer",
    "ML Engineer",
    "Full Stack Developer",
    "LangChain",
    "LLM Systems",
    "Portfolio",
    "Python",
    "React",
  ],
  authors: [{ name: "Jayani Immidi" }],
  openGraph: {
    title: "Jayani Immidi | AI & Software Developer",
    description: "Building intelligent systems that push the boundaries of what's possible.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} bg-[#020210] text-[#f1f5f9] antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
