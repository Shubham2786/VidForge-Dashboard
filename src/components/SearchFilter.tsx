"use client";

import { useEffect, useRef } from "react";
import { Search, X, Sparkles, SlidersHorizontal } from "lucide-react";
import { CATEGORIES, CategoryType } from "@/data/links";

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  totalMatches: number;
}

export default function SearchFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  totalMatches,
}: SearchFilterProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Pressing `/` anywhere focuses search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is already typing in an input or textarea
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === searchInputRef.current) {
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full space-y-4">
      {/* Search Input Bar */}
      <div className="relative flex items-center w-full">
        <div className="absolute left-4 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4 text-cyan-400" />
        </div>

        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter by title, description, endpoint, or tag (e.g., 'dahua', 'player', 'health', 'iso')..."
          className="w-full pl-11 pr-24 py-3 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500 rounded-2xl text-sm text-slate-100 placeholder-slate-400 outline-none backdrop-blur-xl transition-all shadow-inner"
        />

        <div className="absolute right-3 flex items-center gap-2">
          {searchQuery ? (
            <button
              onClick={() => onSearchChange("")}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/80 text-[11px] font-mono text-slate-400">
              <span className="text-slate-300 font-bold">/</span>
              <span>to focus</span>
            </div>
          )}
        </div>
      </div>

      {/* Category Tabs & Match Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 overflow-x-auto pb-1">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-neon-cyan/20 font-semibold"
                    : "bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-800/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 self-end sm:self-auto shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Showing:</span>
          <span className="font-bold text-cyan-300">{totalMatches}</span>
          <span>resources</span>
        </div>
      </div>
    </div>
  );
}
