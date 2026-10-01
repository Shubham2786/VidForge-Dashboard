"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroOverlayProps {
  onComplete: () => void;
  forcePlay?: boolean;
}

export default function IntroOverlay({ onComplete, forcePlay = false }: IntroOverlayProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFinish = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("vidforge-intro-seen", "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const alreadySeen = sessionStorage.getItem("vidforge-intro-seen") === "true";

      if ((alreadySeen && !forcePlay) || prefersReduced) {
        onComplete();
        return;
      }
    }

    // Attempt video playback
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: if video fails to play, proceed gracefully
      });
    }

    // Keyboard ESC to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [forcePlay, onComplete, handleFinish]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="intro-video-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-[#090909] overflow-hidden flex items-center justify-center select-none"
        >
          {/* Full-Screen Video (object-fit: cover, muted, autoplay, playsInline) */}
          <video
            ref={videoRef}
            src="/gemini_generated_video_3c658c35.mp4?v=2"
            autoPlay
            muted
            playsInline
            onEnded={handleFinish}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
