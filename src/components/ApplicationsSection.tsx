"use client";

import { useState } from "react";
import { Monitor, ArrowRight } from "lucide-react";

interface ApplicationsSectionProps {
  githubRepo: string;
}

export default function ApplicationsSection({ githubRepo }: ApplicationsSectionProps) {
  const [selectedDesktopOS, setSelectedDesktopOS] = useState<"win" | "portable" | "linux" | "mac">("win");

  const desktopUrls = {
    win: `${githubRepo}/releases`,
    portable: `${githubRepo}/releases`,
    linux: `${githubRepo}/releases`,
    mac: `${githubRepo}/releases`,
  };

  return (
    <section aria-label="Applications" className="space-y-3">
      {/* Section Label */}
      <div className="flex items-center justify-between border-b border-[#292929] pb-2">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#929292]">
          APPLICATIONS
        </h3>
        <span className="text-[11px] font-mono text-[#929292]">
          OFFLINE &amp; FIELD BUILDS
        </span>
      </div>

      {/* Expanded Desktop Application Card */}
      <div className="group bg-[#111111] border border-[#292929] hover:border-[#F5C400] hover:bg-[#151515] transition-all duration-150 p-5 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#171717] border border-[#292929] flex items-center justify-center text-[#929292] group-hover:text-[#F5C400] transition-colors duration-150">
              <Monitor className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#F5F5F0] font-sans">
                DESKTOP APPLICATION
              </h4>
              <p className="text-xs text-[#929292] font-sans">
                Windows forensic workstation &amp; standalone field deployment (MSI, Setup EXE &amp; Portable ZIP)
              </p>
            </div>
          </div>

          {/* Platform Selector */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => setSelectedDesktopOS("win")}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                selectedDesktopOS === "win"
                  ? "bg-[#171717] text-[#F5C400] border border-[#F5C400]/40 font-semibold"
                  : "bg-[#171717] text-[#929292] border border-[#292929] hover:text-[#F5F5F0]"
              }`}
            >
              Windows (MSI / EXE)
            </button>
            <button
              type="button"
              onClick={() => setSelectedDesktopOS("portable")}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                selectedDesktopOS === "portable"
                  ? "bg-[#171717] text-[#F5C400] border border-[#F5C400]/40 font-semibold"
                  : "bg-[#171717] text-[#929292] border border-[#292929] hover:text-[#F5F5F0]"
              }`}
            >
              Portable (ZIP)
            </button>
            <button
              type="button"
              onClick={() => setSelectedDesktopOS("linux")}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                selectedDesktopOS === "linux"
                  ? "bg-[#171717] text-[#F5C400] border border-[#F5C400]/40 font-semibold"
                  : "bg-[#171717] text-[#929292] border border-[#292929] hover:text-[#F5F5F0]"
              }`}
            >
              Linux (.AppImage)
            </button>
            <button
              type="button"
              onClick={() => setSelectedDesktopOS("mac")}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                selectedDesktopOS === "mac"
                  ? "bg-[#171717] text-[#F5C400] border border-[#F5C400]/40 font-semibold"
                  : "bg-[#171717] text-[#929292] border border-[#292929] hover:text-[#F5F5F0]"
              }`}
            >
              macOS (.dmg)
            </button>
          </div>
        </div>

        <div className="pt-3 md:pt-0 md:pl-5 border-t md:border-t-0 md:border-l border-[#202020] flex items-center justify-end shrink-0">
          <a
            href={desktopUrls[selectedDesktopOS]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#171717] hover:bg-[#F5C400] text-[#F5F5F0] hover:text-black border border-[#292929] hover:border-[#F5C400] rounded text-xs font-mono font-semibold transition-all duration-150 group/act"
          >
            <span>DOWNLOAD</span>
            <ArrowRight className="w-4 h-4 text-[#929292] group-hover/act:text-black group-hover/act:translate-x-0.5 transition-all duration-150" />
          </a>
        </div>
      </div>
    </section>
  );
}
