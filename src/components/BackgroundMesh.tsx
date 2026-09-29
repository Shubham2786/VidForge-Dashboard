"use client";

import { useEffect, useState } from "react";

export default function BackgroundMesh() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse movement
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60" />

      {/* Primary Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-purple-600/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Reactive Cursor Light (only when mounted) */}
      {isMounted && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-radial-gradient blur-[140px] opacity-40 transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          }}
        />
      )}

      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[600px] h-[400px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
}
