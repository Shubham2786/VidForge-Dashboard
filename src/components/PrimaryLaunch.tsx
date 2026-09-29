"use client";

import { ArrowRight } from "lucide-react";

interface PrimaryLaunchProps {
  targetUrl: string;
}

export default function PrimaryLaunch({ targetUrl }: PrimaryLaunchProps) {
  const destinationUrl = targetUrl.replace(/\/+$/, "") || "/";

  return (
    <div className="relative overflow-hidden rounded-xl border border-palette-accent/40 hover:border-palette-accent/70 bg-palette-card p-6 sm:p-7 shadow-sm transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-palette-accent font-semibold">
              PRIMARY WORKSPACE
            </span>
            <span className="text-palette-muted">•</span>
            <span className="text-[11px] font-mono text-palette-text-secondary">
              OPERATOR CONSOLE
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-palette-text tracking-tight">
            VidForge Web Application
          </h2>

          <p className="text-sm text-palette-text-secondary leading-relaxed">
            Launch the browser-based forensic workspace for CCTV bitstream carving, synchronized multi-camera playback, and timeline reconstruction.
          </p>
        </div>

        {/* Primary CTA Button */}
        <div className="shrink-0">
          <a
            href={destinationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-palette-accent hover:bg-palette-accent-hover text-palette-bg font-semibold text-sm transition-all shadow-sm active:translate-y-0.5 group"
          >
            <span>OPEN WEB APPLICATION</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
