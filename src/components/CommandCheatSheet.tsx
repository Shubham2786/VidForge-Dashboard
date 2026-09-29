"use client";

import { useState } from "react";
import { Terminal, Copy, Check, TerminalSquare, Info, ShieldCheck } from "lucide-react";

interface CommandCheatSheetProps {
  targetUrl: string;
}

export default function CommandCheatSheet({ targetUrl }: CommandCheatSheetProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const cleanHost = targetUrl.replace(/\/+$/, "");

  const commands = [
    {
      title: "Docker All-In-One Forensic Container",
      cmd: "docker run -p 10000:10000 vidforge-suite",
      desc: "Deploys complete Rust Axum backend, Demuxer pipeline, and Frontend on localhost:10000",
      env: "Production Container",
    },
    {
      title: "Rust Forensic Backend (Axum Microservice)",
      cmd: "cargo run --release -p forensic-api",
      desc: "Starts native hardware-accelerated video carving and SHA-256 integrity daemon",
      env: "Local Rust Core",
    },
    {
      title: "Next.js Forensic Operator Workspace",
      cmd: "npm --prefix apps/frontend run dev",
      desc: "Starts local operator frontend with live WebGL hardware sync and timeline scrubbing",
      env: "Web Workspace",
    },
    {
      title: "Live Health Probe & Telemetry Check",
      cmd: `curl -I ${cleanHost}/health`,
      desc: "Probes active target service for zero-allocation uptime response and thread telemetry",
      env: "HTTP Probe",
    },
  ];

  const handleCopy = async (cmd: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span>Quick Deployment Command Launcher</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/40">
                CLI CHEATSHEET
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Copy-ready terminal operations for local verification, compilation, and live health diagnostics.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
          <span>SHELL: PWSH / BASH</span>
        </div>
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        {commands.map((c, idx) => (
          <div
            key={c.title}
            className="group relative flex flex-col justify-between p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {c.title}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  {c.env}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug mb-2.5">
                {c.desc}
              </p>
            </div>

            {/* Code Line */}
            <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-900/90 border border-slate-800 font-mono text-xs text-cyan-300">
              <code className="truncate select-all text-[11.5px]">$ {c.cmd}</code>
              <button
                onClick={() => handleCopy(c.cmd, idx)}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                title="Copy command"
              >
                {copiedIndex === idx ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
