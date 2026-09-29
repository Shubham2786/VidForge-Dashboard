"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Copy,
  Check,
  Monitor,
  PlayCircle,
  Activity,
  Binary,
  Film,
  Bot,
  Cpu,
  ShieldCheck,
  Github,
  GitBranch,
  HardDrive,
  FileCheck,
  LucideIcon,
} from "lucide-react";
import { LinkItem } from "@/data/links";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Monitor,
  PlayCircle,
  Activity,
  Binary,
  Film,
  Bot,
  Cpu,
  ShieldCheck,
  Github,
  GitBranch,
  HardDrive,
  FileCheck,
};

interface LinkCardProps {
  item: LinkItem;
  targetHost: string;
}

export default function LinkCard({ item, targetHost }: LinkCardProps) {
  const [copied, setCopied] = useState(false);

  // Compute final effective URL
  const resolvedUrl = item.isRelative
    ? `${targetHost.replace(/\/+$/, "")}${item.path.startsWith("/") ? item.path : `/${item.path}`}`
    : item.path;

  const IconComponent = iconMap[item.iconName] || ExternalLink;

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(resolvedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  // Color scheme configs
  const accentStyles = {
    cyan: {
      border: "hover:border-cyan-500/50",
      glow: "hover:shadow-neon-cyan/20",
      iconBg: "bg-cyan-950/70 border-cyan-500/30 text-cyan-400",
      badge: "bg-cyan-950/60 text-cyan-300 border-cyan-500/30",
      button: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 hover:shadow-neon-cyan/30",
    },
    emerald: {
      border: "hover:border-emerald-500/50",
      glow: "hover:shadow-neon-emerald/20",
      iconBg: "bg-emerald-950/70 border-emerald-500/30 text-emerald-400",
      badge: "bg-emerald-950/60 text-emerald-300 border-emerald-500/30",
      button: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 hover:shadow-neon-emerald/30",
    },
    purple: {
      border: "hover:border-purple-500/50",
      glow: "hover:shadow-neon-purple/20",
      iconBg: "bg-purple-950/70 border-purple-500/30 text-purple-400",
      badge: "bg-purple-950/60 text-purple-300 border-purple-500/30",
      button: "bg-purple-500 hover:bg-purple-400 text-white hover:shadow-neon-purple/30",
    },
    amber: {
      border: "hover:border-amber-500/50",
      glow: "hover:shadow-neon-amber/20",
      iconBg: "bg-amber-950/70 border-amber-500/30 text-amber-400",
      badge: "bg-amber-950/60 text-amber-300 border-amber-500/30",
      button: "bg-amber-500 hover:bg-amber-400 text-slate-950 hover:shadow-neon-amber/30",
    },
  }[item.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`group relative flex flex-col justify-between p-5 rounded-2xl bg-slate-900/70 hover:bg-slate-900/90 border border-slate-800/90 ${accentStyles.border} backdrop-blur-xl transition-all duration-300 shadow-lg ${accentStyles.glow}`}
    >
      <div>
        {/* Top Header: Category badge & Custom Flag */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="text-[11px] font-mono text-slate-400 bg-slate-950/70 px-2 py-0.5 rounded-md border border-slate-800">
            {item.category}
          </span>
          {item.badgeText && (
            <span
              className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${accentStyles.badge}`}
            >
              {item.badgeText}
            </span>
          )}
        </div>

        {/* Title and Icon */}
        <div className="flex items-start gap-3 mb-2.5">
          <div
            className={`p-2.5 rounded-xl border flex items-center justify-center shrink-0 ${accentStyles.iconBg} transition-transform group-hover:scale-105 duration-200`}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors tracking-tight leading-snug">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400 font-normal leading-relaxed mt-1 line-clamp-3">
              {item.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 group-hover:text-slate-300 border border-slate-800 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Clean URL Preview, Copy Button & Launch Button */}
      <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
        {/* URL Box */}
        <div className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-[11px] text-slate-400">
          <span className="truncate select-all text-slate-300">
            {resolvedUrl}
          </span>
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors shrink-0"
            title="Copy full URL to clipboard"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Primary Action Button */}
        <a
          href={resolvedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all shadow-md active:scale-[0.98] ${accentStyles.button}`}
        >
          <span>Launch Resource</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
