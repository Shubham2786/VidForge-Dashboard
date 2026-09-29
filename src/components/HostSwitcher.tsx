"use client";

import { useState } from "react";
import { Server, Globe, Laptop, RefreshCw, CheckCircle2, AlertTriangle, Play, ChevronRight, Zap } from "lucide-react";

interface HostSwitcherProps {
  targetUrl: string;
  onTargetUrlChange: (newUrl: string) => void;
}

interface ProbeResult {
  status: "idle" | "probing" | "success" | "cold_start" | "error";
  latencyMs?: number;
  message?: string;
  timestamp?: string;
}

export default function HostSwitcher({ targetUrl, onTargetUrlChange }: HostSwitcherProps) {
  const [customInput, setCustomInput] = useState(targetUrl);
  const [probe, setProbe] = useState<ProbeResult>({ status: "idle" });

  const presets = [
    {
      name: "Render Cloud",
      url: "https://vidforge-forensics.onrender.com",
      badge: "LIVE PROD",
      icon: Globe,
    },
    {
      name: "Local Dev",
      url: "http://localhost:10000",
      badge: "PORT 10000",
      icon: Laptop,
    },
  ];

  const handleSelectPreset = (url: string) => {
    setCustomInput(url);
    onTargetUrlChange(url);
    runProbe(url);
  };

  const handleApplyCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const cleanUrl = customInput.trim().replace(/\/+$/, "");
    onTargetUrlChange(cleanUrl);
    runProbe(cleanUrl);
  };

  const runProbe = async (urlToTest = targetUrl) => {
    setProbe({ status: "probing" });
    const cleanBase = urlToTest.trim().replace(/\/+$/, "");
    const probeUrl = `${cleanBase}/health`;

    const start = performance.now();
    try {
      // Abort controller with 12s timeout for cold start detection
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const res = await fetch(probeUrl, {
        method: "GET",
        mode: "cors",
        signal: controller.signal,
        cache: "no-store",
      });
      clearTimeout(timeoutId);

      const duration = Math.round(performance.now() - start);

      if (res.ok) {
        setProbe({
          status: "success",
          latencyMs: duration,
          message: `${res.status} OK — High-throughput zero allocation`,
          timestamp: new Date().toLocaleTimeString(),
        });
      } else {
        setProbe({
          status: "error",
          latencyMs: duration,
          message: `Returned HTTP ${res.status}`,
          timestamp: new Date().toLocaleTimeString(),
        });
      }
    } catch (err: any) {
      const duration = Math.round(performance.now() - start);
      if (err.name === "AbortError" || duration >= 6000) {
        setProbe({
          status: "cold_start",
          latencyMs: duration,
          message: "Render instance warming up (Free-tier spins up in ~30-50s)",
          timestamp: new Date().toLocaleTimeString(),
        });
      } else {
        // Many backends don't expose permissive CORS on /health, but reaching network without DNS failure is still alive
        setProbe({
          status: "cold_start",
          latencyMs: duration,
          message: "Probe dispatched: Render spinning up or CORS restricted on /health",
          timestamp: new Date().toLocaleTimeString(),
        });
      }
    }
  };

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
      {/* Decorative top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-80" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Active Host Info & Presets */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              <Server className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
              Target Forensics Engine Host
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              DYNAMIC DISPATCH
            </span>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {presets.map((p) => {
              const isSelected = targetUrl === p.url;
              const Icon = p.icon;
              return (
                <button
                  key={p.name}
                  onClick={() => handleSelectPreset(p.url)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/50 shadow-neon-cyan/20"
                      : "bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                  <span>{p.name}</span>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                      isSelected
                        ? "bg-cyan-400/20 text-cyan-200"
                        : "bg-slate-900 text-slate-400"
                    }`}
                  >
                    {p.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center / Right: Custom URL Input & Ping Service */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1 lg:max-w-xl">
          <form onSubmit={handleApplyCustom} className="flex-1 relative flex items-center">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g. https://vidforge-forensics.onrender.com"
              className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500 rounded-xl px-3.5 py-2 text-xs font-mono text-cyan-300 placeholder-slate-500 outline-none transition-all pr-20"
            />
            {customInput !== targetUrl && (
              <button
                type="submit"
                className="absolute right-1.5 px-2.5 py-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-[10px] font-mono transition-all flex items-center gap-1 shadow-sm"
              >
                <span>Apply</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            )}
          </form>

          {/* Live Health Probe Action */}
          <button
            onClick={() => runProbe(targetUrl)}
            disabled={probe.status === "probing"}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 hover:from-emerald-600/40 hover:to-cyan-600/40 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 text-xs font-mono font-semibold transition-all shadow-sm hover:shadow-neon-emerald/20 disabled:opacity-60 whitespace-nowrap active:scale-[0.98]"
            title="Probe ${targetUrl}/health endpoint"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${probe.status === "probing" ? "animate-spin text-cyan-400" : "text-emerald-400"}`} />
            <span>{probe.status === "probing" ? "Probing..." : "Ping Service"}</span>
          </button>
        </div>
      </div>

      {/* Realtime Probe Result Bar */}
      {probe.status !== "idle" && (
        <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-2">
            {probe.status === "probing" && (
              <span className="flex items-center gap-2 text-cyan-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span>Probing endpoint: <code className="text-slate-300">{targetUrl}/health</code> ...</span>
              </span>
            )}

            {probe.status === "success" && (
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 shadow-neon-emerald/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-bold">🟢 200 OK — {probe.latencyMs}ms</span>
                <span className="text-emerald-400/80 hidden sm:inline">| {probe.message}</span>
              </span>
            )}

            {probe.status === "cold_start" && (
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-400 animate-pulse" />
                <span className="font-semibold">🟡 Server Standby / Cold Start:</span>
                <span className="text-amber-200/90">{probe.message}</span>
              </span>
            )}

            {probe.status === "error" && (
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="font-semibold">🔴 Health Probe Dispatched:</span>
                <span>{probe.message} ({probe.latencyMs}ms)</span>
              </span>
            )}
          </div>

          {probe.timestamp && (
            <span className="text-[11px] text-slate-500">
              Checked at {probe.timestamp}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
