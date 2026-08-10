import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayur Pote | AI/ML & Full-Stack Developer",
  description: "Portfolio of Mayur Pote, an AI/ML and Full-Stack Software Developer specializing in Generative AI, Python, and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-bg-darker text-text-main selection:bg-primary/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
