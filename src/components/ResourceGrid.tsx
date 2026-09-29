"use client";

import { ResourceLink } from "@/data/portalData";
import { Download, Database, FolderGit2, FileText, PlayCircle, HardDrive, ArrowUpRight } from "lucide-react";

interface ResourceGridProps {
  resources: ResourceLink[];
}

const iconMap: Record<string, any> = {
  downloads: Download,
  datasets: Database,
  storage: HardDrive,
  "source-code": FolderGit2,
  documentation: FileText,
  "demo-case": PlayCircle,
};

export default function ResourceGrid({ resources }: ResourceGridProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-palette-border pb-2">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-palette-muted">
          Core Resource Directory
        </h3>
        <span className="text-[11px] font-mono text-palette-muted">
          6 PRIMARY ENTRIES
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((item) => {
          const Icon = iconMap[item.id] || FileText;

          // CTA color logic adhering to palette
          const ctaColor = item.accent === "green"
            ? "text-palette-success hover:text-palette-success"
            : "text-palette-accent hover:text-palette-accent-hover";

          return (
            <a
              key={item.id}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between p-5 rounded-xl bg-palette-card hover:bg-palette-elevated border border-palette-border hover:border-palette-border-subtle transition-all duration-150 min-h-[175px]"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-palette-muted font-medium">
                    {item.category}
                  </span>
                  <div className="p-1 rounded text-palette-muted group-hover:text-palette-accent transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-base font-medium text-palette-text group-hover:text-palette-text transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-palette-text-secondary leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-palette-border/80 flex items-center justify-between text-xs font-medium">
                <span className={`inline-flex items-center gap-1 font-mono text-[11px] ${ctaColor}`}>
                  <span>{item.ctaText}</span>
                </span>
                {item.isExternal && (
                  <ArrowUpRight className="w-3.5 h-3.5 text-palette-muted group-hover:text-palette-text-secondary transition-colors" />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
