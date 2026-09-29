# VidForge — Forensic Command Hub & Telemetry Portal

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Rust Axum Backend](https://img.shields.io/badge/Rust_Backend-Axum-orange?style=for-the-badge&logo=rust&logoColor=white)](https://github.com/ashok280705/VIDEO)
[![Compliance](https://img.shields.io/badge/Forensics-ISO%2FIEC_27037-emerald?style=for-the-badge&logo=shield)](https://github.com/ashok280705/VIDEO)

**Standalone mission control, live health monitor, and deployment launchpad for the VidForge Forensic Video Recovery & CCTV Analysis platform.**

[🚀 Open Production Render Service](https://vidforge-forensics.onrender.com) • [💻 Core Rust Monorepo](https://github.com/ashok280705/VIDEO) • [⚡ Windows Desktop Branch](https://github.com/ashok280705/VIDEO/tree/feature/windows-desktop)

</div>

---

## 🎯 Executive Overview

**VidForge** is a specialized cyber-forensics suite engineered to recover, carve, and synchronize fragmented CCTV surveillance footage from damaged, overwritten, or proprietary digital media. 

This repository (`VidForge-Dashboard`) delivers a zero-config, highly-aesthetic operator dashboard hosted independently on Vercel. It bridges investigators, incident responders, and forensic examiners to the live microservices, API telemetry, raw CCTV demo cases, and court-admissible reporting generators.

### 🌟 Key Capabilities
- **Dynamic Host Switcher & Health Probe**: Toggle between Render Cloud (`https://vidforge-forensics.onrender.com`), Local Dev (`http://localhost:10000`), or custom endpoints with real-time millisecond latency ping probes.
- **Categorized Launchpad Matrix**: 12+ indexed tools, endpoints, demo cases, and branch references organized by `[🚀 Live Deployment]`, `[🔬 Forensic Tools]`, `[⚡ API & Endpoints]`, `[📑 Docs & Compliance]`, and `[🛠️ Repositories]`.
- **Keyboard-Driven Search Ergonomics**: Instant query filtering by title, path, or tag with the `/` hotkey.
- **Terminal Deployment Cheatsheet**: Copy-ready commands for Docker, Cargo, Next.js, and HTTP curl probes.
- **Cyber-Forensics Design System**: Deep obsidian dark mode (`#07090e`), responsive cursor ambient mesh glows, neon telemetry accents, and glassmorphic card sheens.

---

## 🏗️ System Architecture

```text
                                  +-----------------------------+
                                  |     VidForge Dashboard      |
                                  | (Vercel Edge / Next.js 14)  |
                                  +--------------+--------------+
                                                 |
                     +---------------------------+---------------------------+
                     | Dynamic Target Switching                              |
                     v                                                       v
      +------------------------------+                       +------------------------------+
      |      Render Production       |                       |       Local Dev Target       |
      | vidforge-forensics.onrender  |                       |     http://localhost:10000   |
      +--------------+---------------+                       +--------------+---------------+
                     |                                                      |
    +----------------+----------------+                    +----------------+----------------+
    |                                 |                    |                                 |
    v                                 v                    v                                 v
[ /health ]                    [ /api/cases ]       [ /player (WebGL) ]            [ /assistant (AI) ]
Zero-Alloc Health Probe        Axum REST API        4-Cam Video Sync               Offline Ollama Copilot
```

---

## 🚀 Live Resources & Endpoint Directory

| Resource Name | Endpoint / Path | Category | Core Purpose |
|---|---|---|---|
| **VidForge Web Application** | `${targetUrl}/` | `🚀 Live Deployment` | Primary React forensic operator workspace |
| **Dahua DHFS 4.1 Demo Case** | `${targetUrl}/?case=demo` | `🚀 Live Deployment` | Seeded demo case with raw surveillance streams |
| **Health & Diagnostics Probe**| `${targetUrl}/health` | `⚡ API & Endpoints` | Zero-allocation Render health status endpoint |
| **Cases & Evidence REST API** | `${targetUrl}/api/cases` | `⚡ API & Endpoints` | High-performance Axum REST API endpoint |
| **Multi-Camera Player** | `${targetUrl}/player` | `🔬 Forensic Tools` | 4-channel synchronized timestamp-locked player |
| **Offline AI Copilot** | `${targetUrl}/assistant` | `🔬 Forensic Tools` | Local Ollama air-gapped forensic interrogator |
| **Deep Carving & Recovery** | `${targetUrl}/analysis` | `🔬 Forensic Tools` | Automated OEM signature carver & reassembler |
| **Court Reporting Hub** | `${targetUrl}/reports` | `📑 Docs & Compliance` | ISO/IEC 27037 chain-of-custody report generator |
| **Core GitHub Repository** | `ashok280705/VIDEO` | `🛠️ Repositories` | Rust workspace & multi-stage Dockerfile |
| **Desktop & Render Branch** | `feature/windows-desktop`| `🛠️ Repositories` | Native Windows GUI & Render config branch |
| **Physical Acquisition** | `feature/acquisition` | `🛠️ Repositories` | Low-level disk block reading & write blocker |
| **Recovery Engine Audit** | `DATAIO_IMPLEMENTATION` | `📑 Docs & Compliance` | Engineering verification & benchmark report |

---

## 💻 Local Development & Verification

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+ (tested on Node v22)
- **npm**: v9+ or v10+

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/ashok280705/VidForge-Dashboard.git
cd VidForge-Dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
# Compile and optimize for production
npm run build

# Start production server
npm start
```

---

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Primary Render Deployment Service
NEXT_PUBLIC_VIDFORGE_URL=https://vidforge-forensics.onrender.com

# Core GitHub Repository
NEXT_PUBLIC_GITHUB_REPO=https://github.com/ashok280705/VIDEO

# Optional Endpoint Overrides
NEXT_PUBLIC_API_URL=https://vidforge-forensics.onrender.com/api
NEXT_PUBLIC_HEALTH_URL=https://vidforge-forensics.onrender.com/health
```

---

## ⚖️ Compliance & Integrity Guarantees

VidForge adheres strictly to international digital evidence handling standards:
- **ISO/IEC 27037:2012**: Guidelines for identification, collection, acquisition, and preservation of digital evidence.
- **Dual Cryptographic Checksums**: Simultaneous SHA-256 and BLAKE3 bitstream verification.
- **Zero Ingest Contamination**: 100% read-only disk acquisition with software write-block validation.
- **Air-Gapped Operation**: Full offline operability for military and sensitive law enforcement engagements.

---

<div align="center">
Built for digital forensic investigators and incident response teams worldwide.
</div>
