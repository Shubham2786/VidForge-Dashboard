"use client";

import { useState, useEffect } from "react";
import ForensicHeader from "@/components/ForensicHeader";
import PrimaryHeroCard from "@/components/PrimaryHeroCard";
import ApplicationsSection from "@/components/ApplicationsSection";
import ProjectResourcesSection from "@/components/ProjectResourcesSection";
import ForensicFooter from "@/components/ForensicFooter";
import IntroOverlay from "@/components/IntroOverlay";
import CctvCamera from "@/components/CctvCamera";

export default function Home() {
  const [targetUrl] = useState(
    process.env.NEXT_PUBLIC_VIDFORGE_URL || "https://vidforge-forensics.onrender.com"
  );
  const githubRepo =
    process.env.NEXT_PUBLIC_GITHUB_REPO || "https://github.com/ashok280705/VIDEO";
  const projectDriveUrl = process.env.NEXT_PUBLIC_PROJECT_DRIVE_URL;

  // Intro video overlay state
  const [mounted, setMounted] = useState<boolean>(false);
  const [introActive, setIntroActive] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Session storage check: show intro once per browser session
    const alreadySeen = sessionStorage.getItem("vidforge-intro-seen") === "true";
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!alreadySeen && !prefersReduced) {
      setIntroActive(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setIntroActive(false);
  };

  return (
    <>
      {/* Full-Screen Video Intro Overlay */}
      {mounted && introActive && (
        <IntroOverlay onComplete={handleIntroComplete} />
      )}

      {/* Main VidForge Dashboard (Preserved exactly as existing) */}
      <div className="min-h-screen bg-[#090909] text-[#F5F5F0] flex flex-col font-sans selection:bg-[#F5C400]/25 selection:text-[#F5F5F0]">
        {/* 1. Header / Identity */}
        <ForensicHeader githubRepo={githubRepo} />

        {/* Main Container - Focused Resource Hub */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
          {/* 2. Primary Workspace (Visually Dominant) */}
          <PrimaryHeroCard targetUrl={targetUrl} />

          {/* 3. Applications (Desktop & Portable Builds) */}
          <ApplicationsSection githubRepo={githubRepo} />

          {/* 4. Project Resources (Unified Cards) */}
          <ProjectResourcesSection
            targetUrl={targetUrl}
            githubRepo={githubRepo}
            projectDriveUrl={projectDriveUrl}
          />
        </main>

        {/* 5. Footer */}
        <ForensicFooter />

        {/* 6. Fixed CCTV Surveillance Illustration (Bottom-Right Viewport) */}
        <CctvCamera introActive={introActive} />
      </div>
    </>
  );
}
