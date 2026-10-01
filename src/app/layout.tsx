import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AgentationDev from "@/components/AgentationDev";

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
  title: "VidForge — Forensic Resource Hub",
  description:
    "Launch portal and forensic resource hub for the VidForge Video Recovery Platform. Instant access to web application, offline builds, datasets, and evidence files.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
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
        <AgentationDev />
      </body>
    </html>
  );
}

