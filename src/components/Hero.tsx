"use client";

import { Shield, Sparkles, Terminal, FileCheck, Layers, Radio, Cpu, Lock } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative py-8 md:py-12 overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
        {/* Forensic Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-neon-cyan/20 animate-pulse-slow">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="font-semibold text-white">CRIME SCENE & CCTV INTELLIGENCE PLATFORM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-400">AIR-GAPPED READY</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Forensic Video Recovery &{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            Analysis Command Portal
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          High-performance digital forensics gateway for carving corrupted CCTV bitstreams,
          reconstructing unallocated disk clusters, and synthesizing court-admissible chain-of-custody evidence.
        </p>

        {/* Feature Tags Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Rust Axum Core</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cryptographic SHA-256/BLAKE3</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            <FileCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>ISO/IEC 27037 Standard</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Dahua DHFS 4.1 & Hikvision OEM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
