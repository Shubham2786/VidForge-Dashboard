"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HostSwitcher from "@/components/HostSwitcher";
import MetricsGrid from "@/components/MetricsGrid";
import SearchFilter from "@/components/SearchFilter";
import LinkCard from "@/components/LinkCard";
import CommandCheatSheet from "@/components/CommandCheatSheet";
import BackgroundMesh from "@/components/BackgroundMesh";
import { LINK_REGISTRY, CategoryType } from "@/data/links";
import { ShieldCheck, Database, Github, ExternalLink, Terminal, AlertCircle } from "lucide-react";

export default function Home() {
  const defaultHost =
    process.env.NEXT_PUBLIC_VIDFORGE_URL || "https://vidforge-forensics.onrender.com";
  const githubRepo =
    process.env.NEXT_PUBLIC_GITHUB_REPO || "https://github.com/ashok280705/VIDEO";

  const [targetUrl, setTargetUrl] = useState<string>(defaultHost);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");

  // Filter links by category and search term
  const filteredLinks = useMemo(() => {
    return LINK_REGISTRY.filter((item) => {
      // Category filter
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesPath = item.path.toLowerCase().includes(query);
        const matchesTag = item.tags.some((t) => t.toLowerCase().includes(query));
        return matchesTitle || matchesDesc || matchesPath || matchesTag;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-obsidian text-slate-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive dynamic background lighting */}
      <BackgroundMesh />

      {/* Top Navbar */}
      <Navbar githubRepoUrl={githubRepo} />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Dynamic Host Switcher & Health Probe Bar */}
        <section aria-label="Target Host Selector">
          <HostSwitcher targetUrl={targetUrl} onTargetUrlChange={setTargetUrl} />
        </section>

        {/* Hero Banner */}
        <section aria-label="Hero Overview">
          <Hero />
        </section>

        {/* Core Forensic Telemetry Metrics */}
        <section aria-label="Platform Telemetry Metrics">
          <MetricsGrid />
        </section>

        {/* Search, Filter Tabs & Launchpad Grid */}
        <section aria-label="Forensic Resources & Endpoints" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Forensic Services & Deployment Matrix</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Targeting live service at:{" "}
                <span className="font-mono text-cyan-400 font-semibold">{targetUrl}</span>
              </p>
            </div>
          </div>

          {/* Search bar & Category Tabs */}
          <SearchFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            totalMatches={filteredLinks.length}
          />

          {/* Cards Grid */}
          {filteredLinks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredLinks.map((item) => (
                <LinkCard key={item.id} item={item} targetHost={targetUrl} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md space-y-3">
              <div className="inline-flex p-3 rounded-full bg-slate-800/80 text-slate-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">No Matching Forensic Resources</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No services or endpoints match the filter criteria &quot;{searchQuery}&quot;. Try resetting your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-medium transition-all"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </section>

        {/* Quick Deployment Command Launcher */}
        <section aria-label="Terminal Deployment Commands">
          <CommandCheatSheet targetUrl={targetUrl} />
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-16 border-t border-slate-800/80 bg-obsidian-400/80 backdrop-blur-xl py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ISO/IEC 27037 Standard Compliant Chain of Custody</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Target Engine: <code className="text-cyan-400">{targetUrl}</code>
            </span>
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>ashok280705/VIDEO</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
