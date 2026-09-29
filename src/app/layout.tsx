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
  title: "VidForge Forensic Command Hub | Video Recovery & Stream Analysis",
  description:
    "Centralized mission control, telemetry monitor, and deployment launchpad for VidForge — an advanced forensic CCTV video carving and multi-channel reassembly platform.",
  keywords: [
    "VidForge",
    "Digital Forensics",
    "CCTV Recovery",
    "Video Carving",
    "Dahua DHFS",
    "Hikvision",
    "Court Admissible Evidence",
    "ISO 27037",
    "Rust Axum",
  ],
  authors: [{ name: "VidForge Core Forensics Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "VidForge Forensic Command Hub",
    description: "Centralized navigation hub and live status monitor for the deployed VidForge forensic platform.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
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
      <body className="font-sans bg-obsidian text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 antialiased relative">
        {children}
      </body>
    </html>
  );
}
