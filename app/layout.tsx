import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishekkumar.dev"),
  title: {
    default: "Abhishek Kumar — Full-Stack & AI Engineer",
    template: "%s | Abhishek Kumar",
  },
  description:
    "Abhishek Kumar is a Full-Stack & AI Engineer with 11 years of experience building scalable products, LLM-powered systems, and cloud infrastructure across AWS and Azure.",
  keywords: [
    "Abhishek Kumar",
    "Full-Stack Engineer",
    "AI Engineer",
    "NestJS",
    "React",
    "Next.js",
    "LLM",
    "LiteLLM",
    "Langfuse",
    "AWS",
    "Azure",
    "Terraform",
    "MongoDB",
    "Software Engineer Pune",
  ],
  authors: [{ name: "Abhishek Kumar", url: "https://abhishekkumar.dev" }],
  creator: "Abhishek Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://abhishekkumar.dev",
    siteName: "Abhishek Kumar",
    title: "Abhishek Kumar — Full-Stack & AI Engineer",
    description:
      "11 years of experience building scalable products, LLM-powered systems, and cloud infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Kumar — Full-Stack & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kumar — Full-Stack & AI Engineer",
    description:
      "11 years of experience building scalable products, LLM-powered systems, and cloud infrastructure.",
    images: ["/og-image.png"],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
