import LiquidBackground from "@/components/LiquidBackground";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Algorithms | 30 Weeks of Code",
  description: "A student building 30 projects in 30 weeks. Documenting my journey, one algorithm at a time.",
  keywords: ["portfolio", "projects", "coding", "web development", "30 days challenge", "algorithms"],
  authors: [{ name: "Aryan" }],
  openGraph: {
    title: "Aryan Algorithms | 30 Weeks of Code",
    description: "A student building 30 projects in 30 weeks. Documenting my journey, one algorithm at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] min-h-screen relative`}
      >
        <LiquidBackground />

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
