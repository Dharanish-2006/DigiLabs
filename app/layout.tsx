import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Particles from "../components/Particles";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// SEO metadata
export const metadata: Metadata = {
  title: "DigiLabs Marketing | Digital Marketing Agency",
  description:
    "DigiLabs helps businesses grow using data-driven digital marketing, branding, and modern web strategies.",
  keywords: [
    "digital marketing",
    "seo",
    "branding",
    "social media marketing",
    "lead generation",
    "website development",
    "Digilabs",
  ],
  openGraph: {
    title: "DigiLabs Marketing",
    description:
      "Scale your business with results-driven digital marketing services.",
    url: "https://your-domain.com/",
    siteName: "DigiLabs Marketing",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DigiLabs Marketing",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden antialiased relative">
        <Particles />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
