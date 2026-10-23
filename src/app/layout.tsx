import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirrormetrics.vercel.app"),
  title: "Mirror Metrics RESEARCH LTD | Social & Market Research | Dhaka, Bangladesh",
  description:
    "Reflecting Reality Through Data-Driven Social & Market Insights. Premier research organization in Dhaka, Bangladesh offering nationwide CAPI surveys, baseline/endline studies, and consumer intelligence.",
  keywords: [
    "Mirror Metrics RESEARCH LTD",
    "Social Research Bangladesh",
    "Market Research Dhaka",
    "CAPI Surveys Bangladesh",
    "Impact Evaluation Dhaka",
    "Baseline Midline Endline",
    "Consumer Insights Bangladesh",
    "Public Health Research",
    "Policy Research Dhaka",
  ],
  authors: [{ name: "Mirror Metrics RESEARCH LTD" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Mirror Metrics RESEARCH LTD | Social & Market Research",
    description: "Reflecting Reality Through Data-Driven Social & Market Insights across all 8 divisions of Bangladesh.",
    url: "https://mirrormetrics.vercel.app",
    siteName: "Mirror Metrics RESEARCH LTD",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mirror Metrics RESEARCH LTD Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth bg-white`}>
      <body className="min-h-screen bg-white text-[#072442] selection:bg-[#FFBD2E]/30 selection:text-[#072442] flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
