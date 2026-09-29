"use client";

import { StorageFolder } from "@/data/portalData";
import { Folder } from "lucide-react";

interface ProjectStorageSectionProps {
  folders: StorageFolder[];
}

export default function ProjectStorageSection({ folders }: ProjectStorageSectionProps) {
  return (
    <section id="storage" className="space-y-4 pt-2">
      <div className="flex items-baseline justify-between border-b border-palette-border pb-2">
        <div>
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-palette-muted">
            Project Storage & Cloud Resources
          </h3>
          <p className="text-sm font-medium text-palette-text mt-0.5">
            Shared Project Directories & Repositories
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="p-3.5 rounded-xl bg-palette-card border border-palette-border flex flex-col justify-between space-y-2.5"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Folder className="w-3.5 h-3.5 text-palette-muted" />
                <span className="text-xs font-medium text-palette-text">
                  {folder.title}
                </span>
              </div>
              <p className="text-[11px] text-palette-text-secondary leading-snug line-clamp-2">
                {folder.description}
              </p>
            </div>

            <div className="pt-2 border-t border-palette-border/80 flex justify-end">
              <a
                href={folder.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-palette-accent hover:text-palette-accent-hover transition-colors"
              >
                <span>{folder.actionText}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
