import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tantraops.com"),

  title: {
    default: "TantraOps | AI & Cybersecurity Technology Startup",
    template: "%s | TantraOps",
  },

  description:
    "TantraOps is an emerging AI and cybersecurity technology startup building intelligent systems, automation, and secure digital solutions for modern businesses.",

  alternates: {
  canonical: "/",
},

  keywords: [
    "TantraOps",
    "TantraOps startup",
    "TantraOps AI",
    "TantraOps cybersecurity",
    "AI startup",
    "AI technology startup",
    "cybersecurity startup",
    "AI and cybersecurity",
    "artificial intelligence",
    "AI automation",
    "AI agents",
    "generative AI",
    "cybersecurity",
    "application security",
    "cloud security",
    "security intelligence",
  ],

  openGraph: {
    title: "TantraOps | AI & Cybersecurity Technology Startup",
    description:
      "TantraOps is an emerging AI and cybersecurity technology startup building intelligent systems, automation, and secure digital solutions for modern businesses.",
    url: "https://tantraops.com",
    siteName: "TantraOps",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased`}
      >
        <OrganizationSchema />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}