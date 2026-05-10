import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import { personalInfo } from "@/constants/data";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} | Senior Frontend Engineer & UI/UX Designer`,
    template: `%s | ${personalInfo.name}`
  },
  description: `${personalInfo.name} (عبدالرحمن النحاس) is a Senior Frontend Engineer and UI/UX Designer specializing in React, Next.js, and premium digital products.`,
  keywords: [
    "Abdelrhman Elnhas",
    "عبدالرحمن النحاس",
    "Abdelrhamn Elnhas",
    "Frontend Developer Egypt",
    "Software Engineer Egypt",
    "Senior Frontend Engineer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Portfolio",
    "Portfolio Website",
    "Creative Developer",
    "مطور واجهات أمامية",
    "مبرمج"
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdelrhman-elnhas.com/",
    title: `${personalInfo.name} | Portfolio`,
    description: personalInfo.about,
    siteName: personalInfo.name,
    images: [
      {
        url: "/images/photo1.png",
        width: 1200,
        height: 630,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Senior Frontend Engineer`,
    description: personalInfo.description,
    images: ["/images/photo1.png"],
    creator: "@a_elnhas1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/Logo.png",
    apple: "/images/Logo.png",
  },
};

import Providers from "@/components/Providers";
import StructuredData from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-background text-foreground font-inter selection:bg-primary selection:text-white`}
      >
        <Providers>
          <LoadingScreen />
          <CustomCursor />
          <SmoothScroll>
            {/* Background Effects */}
            <div className="fixed inset-0 bg-grid pointer-events-none opacity-20" />
            <div className="fixed top-[-10%] right-[-10%] glow-mesh bg-primary opacity-[0.3]" />
            <div className="fixed bottom-[-10%] left-[-10%] glow-mesh bg-secondary opacity-[0.15]" />
            <div className="fixed top-[40%] left-[20%] glow-mesh bg-accent opacity-[0.05]" />

            <div className="relative z-10 max-w-[1920px] mx-auto p-4 md:p-6">
              <div className="relative glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                <main className="relative z-10">{children}</main>
              </div>
            </div>
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
