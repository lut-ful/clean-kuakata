import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plastic-Free Kuakata — World Environment Day Beach Clean-Up 2026",
  description:
    "Join Bangladesh's biggest beach clean-up on June 5, 2026. 500+ volunteers. Kuakata Beach. UN-registered. Organized by Active Mind & QualFix.",
  openGraph: {
    title: "Plastic-Free Kuakata — World Environment Day Beach Clean-Up 2026",
    description:
      "Join Bangladesh's biggest beach clean-up on June 5, 2026. 500+ volunteers. Kuakata Beach. UN-registered.",
    url: "https://plasticfreekuakata.com",
    siteName: "Plastic-Free Kuakata",
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plastic-Free Kuakata — World Environment Day Beach Clean-Up 2026",
    description:
      "Bangladesh's biggest beach clean-up. June 5, 2026. Kuakata Beach. UN-registered.",
  },
  keywords: [
    "Kuakata",
    "beach cleanup",
    "World Environment Day 2026",
    "Bangladesh",
    "volunteer",
    "plastic pollution",
    "NowForClimate",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
