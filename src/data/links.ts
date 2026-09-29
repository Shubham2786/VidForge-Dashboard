export type CategoryType = 
  | "All"
  | "🚀 Live Deployment"
  | "🔬 Forensic Tools"
  | "⚡ API & Endpoints"
  | "📑 Docs & Compliance"
  | "🛠️ Repositories";

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  category: CategoryType;
  categoryKey: "deployment" | "tools" | "api" | "docs" | "repo";
  path: string;
  isRelative: boolean;
  iconName: string;
  tags: string[];
  badgeText?: string;
  accent: "cyan" | "emerald" | "purple" | "amber";
}

export const CATEGORIES: CategoryType[] = [
  "All",
  "🚀 Live Deployment",
  "🔬 Forensic Tools",
  "⚡ API & Endpoints",
  "📑 Docs & Compliance",
  "🛠️ Repositories",
];

export const LINK_REGISTRY: LinkItem[] = [
  {
    id: "web-app",
    title: "VidForge Web Application",
    description: "Primary React forensic operator workspace with dynamic evidence ingest, live timeline reconstruction, and case telemetry.",
    category: "🚀 Live Deployment",
    categoryKey: "deployment",
    path: "/",
    isRelative: true,
    iconName: "Monitor",
    tags: ["workspace", "frontend", "react", "dashboard", "operator", "cases"],
    badgeText: "PRIMARY PORTAL",
    accent: "cyan",
  },
  {
    id: "demo-case",
    title: "Preloaded Dahua DHFS 4.1 Case",
    description: "Direct access to seeded forensic demo case containing fragmented CCTV blocks, cluster maps, and raw surveillance streams.",
    category: "🚀 Live Deployment",
    categoryKey: "deployment",
    path: "/?case=demo",
    isRelative: true,
    iconName: "PlayCircle",
    tags: ["dahua", "dhfs", "cctv", "demo", "case", "raw footage", "surveillance"],
    badgeText: "SEEDED DATA",
    accent: "purple",
  },
  {
    id: "health-probe",
    title: "Health & Diagnostics Probe",
    description: "Zero-allocation Render health check ping returning sub-millisecond memory footprint, system uptime, and active threads.",
    category: "⚡ API & Endpoints",
    categoryKey: "api",
    path: "/health",
    isRelative: true,
    iconName: "Activity",
    tags: ["health", "status", "ping", "diagnostics", "render", "uptime"],
    badgeText: "LIVE PROBE",
    accent: "emerald",
  },
  {
    id: "cases-api",
    title: "Cases & Evidence REST API",
    description: "High-performance Axum backend REST endpoints handling disk acquisitions, cryptographic hashes, and case metadata.",
    category: "⚡ API & Endpoints",
    categoryKey: "api",
    path: "/api/cases",
    isRelative: true,
    iconName: "Binary",
    tags: ["api", "rest", "axum", "rust", "cases", "evidence", "metadata"],
    badgeText: "AXUM CORE",
    accent: "cyan",
  },
  {
    id: "forensic-player",
    title: "Multi-Camera Forensic Player",
    description: "Hardware-accelerated synchronized 4-channel video player with frame-by-frame forensic step, audio waveform, and timestamp locking.",
    category: "🔬 Forensic Tools",
    categoryKey: "tools",
    path: "/player",
    isRelative: true,
    iconName: "Film",
    tags: ["player", "multi-camera", "sync", "hls", "fmp4", "streams", "cctv"],
    badgeText: "4-CH SYNC",
    accent: "cyan",
  },
  {
    id: "ai-assistant",
    title: "Offline AI Forensic Copilot",
    description: "Air-gapped crime scene interrogation assistant powered by local Ollama LLMs with strict zero-cloud data exfiltration guarantees.",
    category: "🔬 Forensic Tools",
    categoryKey: "tools",
    path: "/assistant",
    isRelative: true,
    iconName: "Bot",
    tags: ["ai", "copilot", "ollama", "llm", "offline", "air-gapped", "interrogation"],
    badgeText: "LOCAL OLLAMA",
    accent: "purple",
  },
  {
    id: "deep-carving",
    title: "Deep Carving & Recovery Hub",
    description: "Automated OEM signature carver and H.264/H.265 stream reassembler for corrupted, overwritten, or unallocated sectors.",
    category: "🔬 Forensic Tools",
    categoryKey: "tools",
    path: "/analysis",
    isRelative: true,
    iconName: "Cpu",
    tags: ["carving", "signatures", "recovery", "h264", "h265", "reassembly", "oem"],
    badgeText: "UNIVERSAL CARVER",
    accent: "amber",
  },
  {
    id: "reporting-hub",
    title: "Court-Admissible Reporting Hub",
    description: "ISO/IEC 27037 compliant chain-of-custody PDF generator with cryptographically anchored SHA-256 and BLAKE3 checksums.",
    category: "📑 Docs & Compliance",
    categoryKey: "docs",
    path: "/reports",
    isRelative: true,
    iconName: "ShieldCheck",
    tags: ["court", "reports", "iso 27037", "custody", "compliance", "sha256", "blake3"],
    badgeText: "ISO/IEC 27037",
    accent: "emerald",
  },
  {
    id: "github-core",
    title: "GitHub Core Repository",
    description: "Monorepo source code containing the high-throughput Rust workspace, Axum microservices, and multi-stage Docker build pipeline.",
    category: "🛠️ Repositories",
    categoryKey: "repo",
    path: "https://github.com/ashok280705/VIDEO",
    isRelative: false,
    iconName: "Github",
    tags: ["github", "source", "rust", "monorepo", "docker", "open-source"],
    badgeText: "SOURCE",
    accent: "cyan",
  },
  {
    id: "branch-windows",
    title: "Windows Desktop & Render Branch",
    description: "Production branch containing the native Windows GUI integration, Render deployment configurations, and direct video hardware pipelines.",
    category: "🛠️ Repositories",
    categoryKey: "repo",
    path: "https://github.com/ashok280705/VIDEO/tree/feature/windows-desktop",
    isRelative: false,
    iconName: "GitBranch",
    tags: ["windows", "desktop", "render", "branch", "production", "native"],
    badgeText: "DEPLOY BRANCH",
    accent: "purple",
  },
  {
    id: "branch-acquisition",
    title: "Physical Acquisition Subsystem",
    description: "Low-level disk block acquisition routines implementing raw block reading, volume dismount hooks, and write-blocking verification.",
    category: "🛠️ Repositories",
    categoryKey: "repo",
    path: "https://github.com/ashok280705/VIDEO/tree/feature/acquisition",
    isRelative: false,
    iconName: "HardDrive",
    tags: ["acquisition", "disk", "raw blocks", "write-blocker", "hardware", "drive"],
    badgeText: "WRITE BLOCKER",
    accent: "amber",
  },
  {
    id: "engine-audit",
    title: "Universal Recovery Engine Audit",
    description: "Comprehensive engineering verification report detailing DHFS 4.1, Hikvision, and TP-Link bitstream boundary benchmarks and tests.",
    category: "📑 Docs & Compliance",
    categoryKey: "docs",
    path: "https://github.com/ashok280705/VIDEO/blob/feature/windows-desktop/DATAIO_IMPLEMENTATION_AUDIT.md",
    isRelative: false,
    iconName: "FileCheck",
    tags: ["audit", "benchmark", "verification", "dhfs", "hikvision", "compliance", "specs"],
    badgeText: "AUDIT REPORT",
    accent: "emerald",
  },
];
