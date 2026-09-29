"use client";

import { useEffect, useState } from "react";
import { Shield, Clock, ExternalLink, Github, Terminal, Sparkles } from "lucide-react";

interface NavbarProps {
  githubRepoUrl: string;
}

export default function Navbar({ githubRepoUrl }: NavbarProps) {
  const [utcTime, setUtcTime] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateTime = () => {
      const now = new Date();
      setUtcTime(
        now.toISOString().replace("T", " ").substring(0, 19) + " UTC"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-obsidian-300/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 shadow-neon-cyan/20">
            <Shield className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
                VidForge
              </span>
              <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                v1.0-RC
              </span>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Forensic Recovery & Stream Matrix
            </span>
          </div>
        </div>

        {/* Center: Live UTC Clock & Telemetry */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300 shadow-inner">
          <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-slate-400 text-[11px]">SYS TIME:</span>
          <span className="font-semibold text-cyan-300 min-w-[170px]">
            {isClient ? utcTime : "--:--:-- UTC"}
          </span>
        </div>

        {/* Right: Status Pill & GitHub Link */}
        <div className="flex items-center gap-3">
          {/* Status pill */}
          <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide text-[11px] sm:text-xs">SYSTEM ONLINE</span>
          </div>

          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/60 hover:border-cyan-500/40 text-xs font-medium transition-all duration-200 group"
            title="Inspect VidForge Core on GitHub"
          >
            <Github className="w-3.5 h-3.5 group-hover:text-cyan-400 transition-colors" />
            <span className="hidden sm:inline">Repository</span>
            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>
      </div>
    </header>
  );
}
