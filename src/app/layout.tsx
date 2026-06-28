import type { Metadata } from "next";
import { Sora, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Leaders Group | Leading Digital Innovation",
  description:
    "Leaders Group specializes in Digital Transformation and Document Management Solutions for Government, Enterprise, SME, and Medical sectors across Egypt, Saudi Arabia & UAE.",
  keywords: [
    "Leaders Group",
    "Digital Transformation",
    "Document Management",
    "AI Solutions",
    "ERP Systems",
    "Egypt",
    "Saudi Arabia",
    "UAE",
    "Government Projects",
  ],
  authors: [{ name: "Leaders Group" }],
  openGraph: {
    title: "Leaders Group | Leading Digital Innovation",
    description:
      "We help governments, enterprises, and businesses in Saudi Arabia & UAE transform digitally — faster, smarter, and more securely.",
    type: "website",
    siteName: "Leaders Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaders Group | Leading Digital Innovation",
    description:
      "Digital transformation & document management solutions for Government, Enterprise, SME, and Medical sectors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}