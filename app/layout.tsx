import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
  description: `${portfolioData.personal.name} - ${portfolioData.personal.bio}`,
  keywords: [
    "Arjun Mehta",
    "Full Stack Developer",
    "DevOps",
    "Next.js Portfolio",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Demo Portfolio",
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.title}`,
    description: portfolioData.personal.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans min-h-screen bg-white text-black antialiased">
        <ScrollProgress />
        <MouseSpotlight />
        <div className="mx-auto bg-white min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
