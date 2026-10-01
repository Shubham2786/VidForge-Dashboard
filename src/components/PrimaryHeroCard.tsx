"use client";

import { ArrowRight, Globe } from "lucide-react";

interface PrimaryHeroCardProps {
  targetUrl: string;
}

export default function PrimaryHeroCard({ targetUrl }: PrimaryHeroCardProps) {
  return (
    <section aria-label="Primary Workspace">
      <div className="group w-full bg-[#111111] border border-[#292929] hover:border-[#F5C400] hover:bg-[#141414] transition-all duration-150 p-6 sm:p-8 rounded-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Main Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#171717] border border-[#292929] flex items-center justify-center text-[#929292] group-hover:text-[#F5C400] transition-colors duration-150 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F0] font-sans">
                VIDFORGE WEB APPLICATION
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#929292] font-sans pt-1">
              Launch the online forensic video analysis workspace.
            </p>
          </div>

          {/* Primary CTA - Visually Dominant */}
          <div className="shrink-0">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-[#F5C400] text-[#090909] font-bold text-base tracking-wide hover:bg-[#FFD21A] transition-colors duration-150 group/btn shadow-sm"
            >
              <span>LAUNCH WEB APP</span>
              <ArrowRight className="w-5 h-5 text-[#090909] transition-transform duration-150 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
