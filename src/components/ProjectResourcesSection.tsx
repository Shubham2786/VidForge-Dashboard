"use client";

import {
  FileDigit,
  FolderGit2,
  Code2,
  BookOpen,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

interface ProjectResourcesSectionProps {
  targetUrl: string;
  githubRepo: string;
  projectDriveUrl?: string;
}

export default function ProjectResourcesSection({
  targetUrl,
  githubRepo,
  projectDriveUrl,
}: ProjectResourcesSectionProps) {
  const cleanTarget = targetUrl.replace(/\/+$/, "");
  const driveUrl =
    projectDriveUrl ||
    "https://drive.google.com/drive/folders/1wKRowKG1SFHr6TqafidMQ5r5GfpzaCLT?usp=drive_link";

  const resources = [
    {
      id: "raw-evidence",
      title: "RAW EVIDENCE",
      description: "Original CCTV/DVR/NVR files and disk images",
      href: `${githubRepo}/tree/feature/acquisition`,
      ctaText: "OPEN →",
      icon: FileDigit,
    },
    {
      id: "project-drive",
      title: "PROJECT DRIVE",
      description: "Shared project files and build artifacts",
      href: driveUrl,
      ctaText: "OPEN →",
      icon: FolderGit2,
    },
    {
      id: "source-code",
      title: "SOURCE CODE",
      description: "VidForge source repository",
      href: githubRepo,
      ctaText: "OPEN →",
      icon: Code2,
    },
    {
      id: "research-docs",
      title: "RESEARCH & DOCUMENTATION",
      description: "Papers, technical references, methodology and documentation",
      href:
        process.env.NEXT_PUBLIC_RESEARCH_DOCS_URL ||
        "https://drive.google.com/drive/folders/1p6ZGIqVqWXmqaasnYbDRhSLVdeEkIMep?usp=drive_link",
      ctaText: "OPEN →",
      icon: BookOpen,
    },
    {
      id: "demo-cases",
      title: "DEMO CASES",
      description: "Preloaded/sample forensic cases",
      href: `${cleanTarget}/?case=demo`,
      ctaText: "OPEN →",
      icon: PlayCircle,
    },
  ];

  return (
    <section aria-label="Project Resources" className="space-y-3">
      {/* Section Label */}
      <div className="flex items-center justify-between border-b border-[#292929] pb-2">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#929292]">
          PROJECT RESOURCES
        </h3>
        <span className="text-[11px] font-mono text-[#929292]">
          05 CORE DIRECTORIES
        </span>
      </div>

      {/* Unified Resource Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {resources.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111111] border border-[#292929] hover:border-[#F5C400] hover:bg-[#151515] transition-all duration-150 p-4 sm:p-5 rounded-md flex flex-col justify-between block"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#171717] border border-[#292929] flex items-center justify-center text-[#929292] group-hover:text-[#F5C400] transition-colors duration-150 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#F5F5F0] font-sans tracking-wide">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs text-[#929292] font-sans line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#202020] flex items-center justify-between text-xs font-mono font-semibold text-[#F5F5F0] group-hover:text-[#F5C400] transition-colors duration-150">
                <span>{item.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#929292] group-hover:text-[#F5C400] group-hover:translate-x-1 transition-all duration-150" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
