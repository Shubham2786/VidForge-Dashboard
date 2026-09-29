"use client";

import PortalHero from "@/components/PortalHero";
import PrimaryLaunch from "@/components/PrimaryLaunch";
import ResourceGrid from "@/components/ResourceGrid";
import DownloadsSection from "@/components/DownloadsSection";
import ForensicDataSection from "@/components/ForensicDataSection";
import ProjectStorageSection from "@/components/ProjectStorageSection";
import {
  CORE_RESOURCES,
  SOFTWARE_BUILDS,
  FORENSIC_DATASETS,
  STORAGE_FOLDERS,
} from "@/data/portalData";
import { ShieldCheck, Github } from "lucide-react";

export default function Home() {
  // URLs loaded directly from environment variables
  const targetUrl =
    process.env.NEXT_PUBLIC_VIDFORGE_URL || "https://vidforge-forensics.onrender.com";
  const githubRepo =
    process.env.NEXT_PUBLIC_GITHUB_REPO || "https://github.com/ashok280705/VIDEO";

  const coreResources = CORE_RESOURCES(targetUrl, githubRepo);
  const builds = SOFTWARE_BUILDS(githubRepo);
  const datasets = FORENSIC_DATASETS(targetUrl, githubRepo);
  const storageFolders = STORAGE_FOLDERS(githubRepo);

  return (
    <div className="min-h-screen bg-palette-bg text-palette-text flex flex-col font-sans">
      {/* Subtle technical background grid with dark steel lines */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-technical-grid opacity-60" aria-hidden="true" />

      {/* Main Content Container */}
      <main className="relative z-10 flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-10">
        {/* 1. Main Hero */}
        <section aria-label="Portal Header">
          <PortalHero githubRepo={githubRepo} />
        </section>

        {/* 2. Primary Launch Action (Dominant Card) */}
        <section aria-label="Primary Application Action">
          <PrimaryLaunch targetUrl={targetUrl} />
        </section>

        {/* 3. Core Resource Grid (3-column, compact & scannable) */}
        <section aria-label="Core Resources">
          <ResourceGrid resources={coreResources} />
        </section>

        {/* 4. Software Downloads Section */}
        <section aria-label="Software Downloads">
          <DownloadsSection builds={builds} />
        </section>

        {/* 5. Forensic Datasets & Raw Files Section */}
        <section aria-label="Forensic Datasets">
          <ForensicDataSection datasets={datasets} />
        </section>

        {/* 6. Project Storage & Drive Resources */}
        <section aria-label="Project Storage">
          <ProjectStorageSection folders={storageFolders} />
        </section>
      </main>

      {/* Clean, Restrained Footer */}
      <footer className="relative z-10 border-t border-palette-border bg-palette-bg-secondary py-6 mt-16 text-xs text-palette-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-palette-muted" />
            <span>VidForge Forensic Suite • ISO/IEC 27037 Evidentiary Standards</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-palette-text-secondary hover:text-palette-accent transition-colors inline-flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>ashok280705/VIDEO</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
