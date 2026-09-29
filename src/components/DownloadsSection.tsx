"use client";

import { SoftwareBuild } from "@/data/portalData";
import { Download, Monitor, Laptop, Terminal, Apple } from "lucide-react";

interface DownloadsSectionProps {
  builds: SoftwareBuild[];
}

export default function DownloadsSection({ builds }: DownloadsSectionProps) {
  const getIcon = (id: string) => {
    if (id.includes("win-setup")) return Monitor;
    if (id.includes("win-portable")) return Laptop;
    if (id.includes("linux")) return Terminal;
    if (id.includes("macos")) return Apple;
    return Download;
  };

  return (
    <section id="downloads" className="space-y-4 pt-2">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-palette-border pb-2 gap-1">
        <div>
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-palette-muted">
            Software Downloads
          </h3>
          <p className="text-sm font-medium text-palette-text mt-0.5">
            VidForge Desktop Workstation & Field Binaries
          </p>
        </div>
        <span className="text-[11px] font-mono text-palette-muted">
          SHA-256 CHECKSUMS IN RELEASE MANIFEST
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {builds.map((build) => {
          const Icon = getIcon(build.id);
          return (
            <div
              key={build.id}
              className="p-4 rounded-xl bg-palette-card border border-palette-border flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-palette-accent" />
                    <span className="text-xs font-semibold text-palette-text">
                      {build.platform}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-palette-text-secondary bg-palette-bg-secondary px-1.5 py-0.5 rounded border border-palette-border">
                    {build.sizeEstimate}
                  </span>
                </div>

                <div className="font-mono text-xs text-palette-text font-medium">
                  {build.fileName}
                </div>

                <p className="text-xs text-palette-text-secondary leading-snug">
                  {build.notes}
                </p>
              </div>

              <div className="pt-2 border-t border-palette-border/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-palette-muted">
                  Arch: {build.architecture}
                </span>

                <a
                  href={build.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-palette-elevated hover:bg-palette-border border border-palette-border hover:border-palette-accent/50 text-xs font-mono font-medium text-palette-accent hover:text-palette-accent-hover transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
