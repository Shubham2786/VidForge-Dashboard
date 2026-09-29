"use client";

import { ForensicDataset } from "@/data/portalData";
import { ArrowUpRight } from "lucide-react";

interface ForensicDataSectionProps {
  datasets: ForensicDataset[];
}

export default function ForensicDataSection({ datasets }: ForensicDataSectionProps) {
  return (
    <section id="datasets" className="space-y-4 pt-2">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-palette-border pb-2 gap-1">
        <div>
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-palette-muted">
            Forensic Datasets & Evidence
          </h3>
          <p className="text-sm font-medium text-palette-text mt-0.5">
            Raw Surveillance Bitstreams & Test Evidence
          </p>
        </div>
        <span className="text-[11px] font-mono text-palette-muted">
          FOR CARVING & RECOVERY VERIFICATION
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {datasets.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-palette-card border border-palette-border flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-palette-text">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono uppercase text-palette-accent bg-palette-amber-black px-1.5 py-0.5 rounded border border-palette-accent/30 font-semibold">
                  EVIDENCE
                </span>
              </div>

              {/* Metadata Key-Value Grid */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 p-2.5 rounded-lg bg-palette-bg-secondary border border-palette-border text-xs font-mono">
                <div>
                  <span className="text-palette-muted text-[10px] block">MANUFACTURER</span>
                  <span className="text-palette-text">{item.manufacturer}</span>
                </div>
                <div>
                  <span className="text-palette-muted text-[10px] block">FILESYSTEM</span>
                  <span className="text-palette-text">{item.filesystem}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-palette-muted text-[10px] block">FORMAT</span>
                  <span className="text-palette-text-secondary">{item.format}</span>
                </div>
              </div>

              <p className="text-xs text-palette-text-secondary leading-snug pt-0.5">
                <span className="text-palette-text font-medium">Purpose:</span> {item.purpose}
              </p>
            </div>

            <div className="pt-2 border-t border-palette-border/80 flex justify-end">
              <a
                href={item.launchPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-palette-elevated hover:bg-palette-border border border-palette-border hover:border-palette-accent/50 text-xs font-mono font-medium text-palette-accent hover:text-palette-accent-hover transition-colors"
              >
                <span>{item.actionLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
