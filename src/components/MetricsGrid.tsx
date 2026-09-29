"use client";

import { motion } from "framer-motion";
import { Disc, Zap, ShieldAlert, Bot, HardDrive, Hash, Check } from "lucide-react";

export default function MetricsGrid() {
  const metrics = [
    {
      id: "oem",
      value: "5+ OEM Profiles",
      label: "Proprietary FS Decoders",
      detail: "Dahua DHFS 4.1, Hikvision, TP-Link, WFS, Novatek raw sector carving",
      icon: Disc,
      accent: "cyan",
      badge: "STREAM CARVER",
      borderColor: "group-hover:border-cyan-500/50",
      textColor: "text-cyan-400",
      glowClass: "group-hover:shadow-neon-cyan/20",
    },
    {
      id: "latency",
      value: "< 10ms",
      label: "Zero-Copy Transmuxing",
      detail: "High-throughput HLS / fMP4 real-time demuxer from raw CCTV chunks",
      icon: Zap,
      accent: "emerald",
      badge: "SUB-FRAME LATENCY",
      borderColor: "group-hover:border-emerald-500/50",
      textColor: "text-emerald-400",
      glowClass: "group-hover:shadow-neon-emerald/20",
    },
    {
      id: "readonly",
      value: "100% Read-Only",
      label: "Integrity Preservation",
      detail: "Hardware & kernel write-blockers with dual SHA-256 & BLAKE3 verification",
      icon: ShieldAlert,
      accent: "purple",
      badge: "ZERO CONTAMINATION",
      borderColor: "group-hover:border-purple-500/50",
      textColor: "text-purple-400",
      glowClass: "group-hover:shadow-neon-purple/20",
    },
    {
      id: "offline-ai",
      value: "Offline AI",
      label: "Air-Gapped Interrogation",
      detail: "Local Ollama LLM copilot for metadata queries with 0% data exfiltration",
      icon: Bot,
      accent: "amber",
      badge: "SECURE COPILOT",
      borderColor: "group-hover:border-amber-500/50",
      textColor: "text-amber-400",
      glowClass: "group-hover:shadow-neon-amber/20",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`group relative p-5 rounded-2xl bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/80 ${m.borderColor} backdrop-blur-xl transition-all duration-300 shadow-lg ${m.glowClass} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/60">
                    {m.badge}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-800/60 ${m.textColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${m.textColor} mb-1`}>
                  {m.value}
                </div>

                <div className="text-sm font-semibold text-white tracking-tight mb-1.5">
                  {m.label}
                </div>

                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  {m.detail}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Check className={`w-3 h-3 ${m.textColor}`} />
                <span>Verified in test suite</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
