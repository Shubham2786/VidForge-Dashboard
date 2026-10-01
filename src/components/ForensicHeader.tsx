"use client";

import { Github } from "lucide-react";

interface ForensicHeaderProps {
  githubRepo: string;
}

export default function ForensicHeader({ githubRepo }: ForensicHeaderProps) {
  return (
    <header className="w-full border-b border-[#292929] bg-[#090909]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        {/* Brand Identity */}
        <div>
          <div className="flex items-center">
            <img
              src="/vidforge-logo.png"
              alt="VidForge"
              className="h-10 sm:h-12 w-auto object-contain -ml-1.5"
            />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5C400] font-mono mt-1">
            FORENSIC VIDEO RECOVERY PLATFORM
          </p>
        </div>

        {/* Minimal Right Utilities */}
        <div className="flex items-center gap-3">
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111111] border border-[#292929] text-[#F5F5F0] hover:border-[#F5C400] hover:text-[#F5C400] transition-colors duration-150 text-xs font-mono"
            aria-label="GitHub Repository"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
