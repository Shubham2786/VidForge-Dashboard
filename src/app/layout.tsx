import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VidForge Resource Portal | Forensic Video Recovery & Analysis",
  description:
    "Centralized launchpad and resource portal for VidForge — forensic video recovery, desktop workstation downloads, CCTV test datasets, and project documentation.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0B0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-palette-bg text-palette-text min-h-screen antialiased selection:bg-palette-accent/25 selection:text-palette-text">
        {children}
      </body>
    </html>
  );
}
