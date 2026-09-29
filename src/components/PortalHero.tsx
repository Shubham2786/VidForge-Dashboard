"use client";

import { Github, ExternalLink } from "lucide-react";

interface PortalHeroProps {
  githubRepo?: string;
}

export default function PortalHero({ githubRepo }: PortalHeroProps) {
  return (
    <div className="pt-8 sm:pt-12 pb-2 space-y-3">
      {/* Eyebrow & Optional Repository Link */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-palette-accent inline-block" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-palette-accent font-semibold">
            VIDFORGE RESOURCE PORTAL
          </span>
          <span className="text-palette-muted text-xs">•</span>
          <span className="text-[11px] font-mono text-palette-muted">
            v1.0-RC
          </span>
        </div>

        {githubRepo && (
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-palette-card hover:bg-palette-elevated border border-palette-border text-xs text-palette-text-secondary hover:text-palette-text transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-palette-muted" />
            <span className="font-mono text-[11px]">Repository</span>
            <ExternalLink className="w-3 h-3 text-palette-muted" />
          </a>
        )}
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-palette-text tracking-tight leading-tight">
        Forensic Video Recovery & Analysis
      </h1>

      {/* Supporting text */}
      <p className="text-sm sm:text-base text-palette-text-secondary max-w-2xl font-normal leading-relaxed">
        Access the VidForge application, forensic software builds, datasets, raw evidence files, and project resources.
      </p>
    </div>
  );
}
