import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "China Medical Guides | Your Trusted Healthcare Companion in China",
    template: "%s | China Medical Guides",
  },
  description: "Your trusted guide to world-class healthcare in China. Find top hospitals, understand costs, and navigate the Chinese medical system with confidence.",
  keywords: ["China healthcare", "medical tourism China", "Beijing hospitals", "international patients", "medical guide China"],
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://medguideschina.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medguideschina.com",
    siteName: "China Medical Guides",
    title: "China Medical Guides | Your Trusted Healthcare Companion in China",
    description: "Your trusted guide to world-class healthcare in China. Find top hospitals, understand costs, and navigate the Chinese medical system with confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "China Medical Guides | Your Trusted Healthcare Companion in China",
    description: "Your trusted guide to world-class healthcare in China. Find top hospitals, understand costs, and navigate the Chinese medical system with confidence.",
    creator: "@medguideschina",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
