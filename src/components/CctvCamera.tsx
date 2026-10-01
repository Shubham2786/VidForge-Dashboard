"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CctvCameraProps {
  introActive?: boolean;
}

export default function CctvCamera({ introActive = false }: CctvCameraProps) {
  const [mounted, setMounted] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(900);

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      setViewportHeight(window.innerHeight);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!mounted) return null;

  // Dotted Bézier path physically originating at CCTV mounting base and terminating at DVR/NVR
  // Coordinates in the 160px-wide right-side SVG coordinate space:
  // CCTV is at top: 28px, right: 28px. The wall-mount cable gland aligns precisely with (112, 138).
  // DVR/NVR is at bottom: 20px, right: 28px. Its top BNC connector aligns precisely with (77, viewportHeight - 78).
  const startX = 112;
  const startY = 138;
  const endX = 77;
  const endY = Math.max(startY + 160, viewportHeight - 78);
  const spanY = endY - startY;
  const cp1X = 46;
  const cp1Y = startY + spanY * 0.32;
  const cp2X = 98;
  const cp2Y = startY + spanY * 0.68;

  const dataStreamPath = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

  return (
    <motion.aside
      aria-label="Forensic Surveillance Visualization"
      initial={{ opacity: 0 }}
      animate={{
        opacity: introActive ? 0 : 0.95,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pointer-events-none select-none"
    >
      {/* ======================================================== */}
      {/* 1. TOP-RIGHT CCTV CAMERA                                 */}
      {/* ======================================================== */}
      <div
        className="fixed z-35 pointer-events-none select-none w-[110px] sm:w-[124px] md:w-[132px] max-w-[140px] aspect-[215/180] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
        style={{ top: "28px", right: "28px" }}
      >
        <svg
          viewBox="0 0 215 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* STATIC BASE (Wall bracket, mounting arm, and cable output gland) */}
          <g id="cctv-static-mount">
            {/* Wall Bracket Base Plate */}
            <rect
              x="174"
              y="104"
              width="16"
              height="60"
              rx="8"
              fill="#111111"
              stroke="#F5C400"
              strokeWidth="7"
              strokeLinejoin="round"
            />

            {/* Arm: Smooth solid gooseneck pipe connecting wall plate to pivot */}
            <path
              d="M 174 134 L 142 134 C 128 134 119 125 119 111 L 119 92"
              fill="none"
              stroke="#F5C400"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Subtle mechanical mounting screws on bracket */}
            <circle cx="182" cy="116" r="2" fill="#F5F5F0" opacity="0.4" />
            <circle cx="182" cy="152" r="2" fill="#F5F5F0" opacity="0.4" />

            {/* Dedicated Data Cable Gland / Conduit Collar (Physical origin of data stream) */}
            <rect
              x="177"
              y="162"
              width="10"
              height="7"
              rx="2"
              fill="#111111"
              stroke="#F5C400"
              strokeWidth="2.5"
            />
            <path
              d="M 182 168 L 182 180"
              stroke="#F5C400"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>

          {/* ROTATING CAMERA HEAD (Collar, Housing, Lens) */}
          {/* 
            Pivots around physical pan/tilt joint at (119px, 92px):
            - Starts angled slightly upward/inward (+14deg)
            - Scans slowly and deliberately DOWNWARD to -30deg (looking toward data path / DVR)
            - Settles at low point
            - Returns UPWARD to start position
          */}
          <g
            id="cctv-rotating-head"
            className="cctv-scanner-head"
            style={{
              transformBox: "view-box",
              transformOrigin: "119px 92px",
            }}
          >
            {/* 1. Mounting Collar / Joint Capsule */}
            <rect
              x="88"
              y="74"
              width="62"
              height="18"
              rx="9"
              fill="#111111"
              stroke="#F5C400"
              strokeWidth="7"
              strokeLinejoin="round"
            />

            {/* 2. Main Camera Body (Rounded Rectangle Housing) */}
            <rect
              x="58"
              y="20"
              width="96"
              height="56"
              rx="14"
              fill="#111111"
              stroke="#F5C400"
              strokeWidth="7"
              strokeLinejoin="round"
            />

            {/* 3. Camera Lens Cone (Flared Visor) */}
            <path
              d="M 58 31
                 L 34 23
                 C 29 21 25 25 25 30
                 L 25 66
                 C 25 71 29 75 34 73
                 L 58 65
                 Z"
              fill="#111111"
              stroke="#F5C400"
              strokeWidth="7"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Lens Aperture: Subtle off-white accent stroke */}
            <path
              d="M 36 31 L 36 65"
              stroke="#F5F5F0"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Mechanical Pivot Pin on Mounting Joint */}
            <circle cx="119" cy="83" r="2.5" fill="#F5C400" />
            <circle cx="119" cy="83" r="1.2" fill="#111111" />

            {/* Forensic Status Indicator (Surveillance LED) */}
            <circle cx="72" cy="34" r="2" fill="#F5C400" opacity="0.85" />
          </g>
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 2. DOTTED DATA CONNECTION (CCTV -> DVR/NVR)              */}
      {/* ======================================================== */}
      <div
        className="fixed top-0 right-0 h-screen w-[160px] pointer-events-none select-none z-30 hidden sm:block"
        style={{ right: 0, top: 0, width: "160px" }}
      >
        <svg
          width="160"
          height={viewportHeight}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Subtle guide track (faint baseline) */}
          <path
            d={dataStreamPath}
            stroke="#F5C400"
            strokeWidth="1"
            strokeDasharray="2 8"
            strokeLinecap="round"
            opacity="0.12"
          />

          {/* Animated data transmission dots flowing DOWNWARD continuously */}
          <path
            d={dataStreamPath}
            stroke="#F5C400"
            strokeWidth="2.8"
            strokeDasharray="3 15"
            strokeLinecap="round"
            opacity="0.75"
            className="cctv-data-stream"
          />

          {/* Origin coupling anchor (seamless link to CCTV conduit) */}
          <circle cx={startX} cy={startY} r="2.2" fill="#F5C400" opacity="0.9" />

          {/* Destination coupling anchor (seamless entry into DVR port) */}
          <circle cx={endX} cy={endY} r="2.2" fill="#F5C400" opacity="0.9" />
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 3. BOTTOM-RIGHT DVR/NVR STORAGE UNIT                     */}
      {/* ======================================================== */}
      <div
        className="fixed z-35 pointer-events-none select-none w-[80px] sm:w-[92px] md:w-[100px] max-w-[115px] aspect-[120/72] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
        style={{ bottom: "20px", right: "28px" }}
      >
        <svg
          viewBox="0 0 120 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Top Cable Connection Port (receives data stream) */}
          <rect
            x="48"
            y="2"
            width="12"
            height="5"
            rx="1.5"
            fill="#111111"
            stroke="#F5C400"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="54" cy="4.5" r="1.2" fill="#F5C400" />

          {/* Upper Chassis / Primary Storage Bay */}
          <rect
            x="10"
            y="7"
            width="100"
            height="22"
            rx="4.5"
            fill="#111111"
            stroke="#F5C400"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Upper Panel Details: Drive Slot & Eject Pin */}
          <rect
            x="18"
            y="15"
            width="46"
            height="5"
            rx="1.5"
            fill="#090909"
            stroke="#F5C400"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="14"
            x2="68"
            y2="21"
            stroke="#F5C400"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Upper Panel LEDs (Power, HDD Activity, REC) */}
          <circle cx="82" cy="17.5" r="2" fill="#F5C400" />
          <circle cx="90" cy="17.5" r="2" fill="#F5F5F0" opacity="0.8" />
          <circle cx="98" cy="17.5" r="2" fill="#F5C400" opacity="0.9" />

          {/* Lower Chassis / Secondary Storage & Expansion */}
          <rect
            x="10"
            y="29"
            width="100"
            height="22"
            rx="4.5"
            fill="#111111"
            stroke="#F5C400"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Lower Panel Details: Forensic Cooling Grille Slits */}
          <line
            x1="18"
            y1="36.5"
            x2="48"
            y2="36.5"
            stroke="#F5C400"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <line
            x1="18"
            y1="42.5"
            x2="48"
            y2="42.5"
            stroke="#F5C400"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Diagnostic Port & Power Switch */}
          <rect
            x="76"
            y="35"
            width="10"
            height="7"
            rx="1.5"
            fill="#090909"
            stroke="#F5C400"
            strokeWidth="1.8"
          />
          <circle
            cx="96"
            cy="38.5"
            r="3"
            fill="#111111"
            stroke="#F5C400"
            strokeWidth="1.8"
          />

          {/* Rubber Stand Feet */}
          <rect
            x="20"
            y="51"
            width="12"
            height="4"
            rx="1.5"
            fill="#F5C400"
          />
          <rect
            x="88"
            y="51"
            width="12"
            height="4"
            rx="1.5"
            fill="#F5C400"
          />
        </svg>
      </div>
    </motion.aside>
  );
}
