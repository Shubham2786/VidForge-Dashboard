export interface LaunchableResource {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  isExternal?: boolean;
  ctaText: string;
  badge?: string;
  icon: string;
  meta?: string;
  tags?: string[];
  subActions?: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export interface DesktopBuild {
  id: string;
  name: string;
  platform: string;
  fileName: string;
  arch: string;
  size: string;
  notes: string;
  downloadUrl: string;
}

export const GET_FORENSIC_HUB_DATA = (targetUrl: string, githubRepo: string, driveUrl?: string) => {
  const cleanTarget = targetUrl.replace(/\/+$/, "");
  const projectDrive = driveUrl || `${githubRepo}/tree/feature/windows-desktop`;

  // 1. Primary Web App data
  const webApp = {
    title: "VidForge Web Application",
    subtitle: "Cloud-Hosted Forensic Video Recovery & Analysis Workspace",
    description:
      "Interactive browser-based forensic console for ingested CCTV streams, automated Dahua DHFS 4.1 cluster carving, synchronized 4-camera video playback, and ISO/IEC 27037 chain-of-custody case exports.",
    href: cleanTarget,
    ctaText: "LAUNCH WEB APP →",
    targetHost: cleanTarget,
    status: "SYSTEM READY",
    endpoints: [
      { label: "Preloaded Demo Case", href: `${cleanTarget}/?case=demo` },
      { label: "4-Cam Sync Player", href: `${cleanTarget}/player` },
      { label: "Court Reports Hub", href: `${cleanTarget}/reports` },
      { label: "Axum REST API", href: `${cleanTarget}/api/cases` },
    ],
  };

  // 2. Applications Section
  const applications: LaunchableResource[] = [
    {
      id: "app-web",
      title: "Web Application",
      category: "BROWSER WORKSPACE",
      badge: "LIVE INSTANCE",
      description:
        "Instant zero-install web workspace connecting directly to the Axum high-throughput backend. Stream-carves unindexed surveillance footage directly in-browser.",
      href: cleanTarget,
      isExternal: true,
      ctaText: "LAUNCH WEB APP →",
      icon: "Globe",
      meta: "Render Cloud / REST API",
      subActions: [
        { label: "Open Root Application", href: cleanTarget, isExternal: true },
        { label: "Load DHFS 4.1 Demo Case", href: `${cleanTarget}/?case=demo`, isExternal: true },
      ],
    },
    {
      id: "app-offline",
      title: "Offline / Desktop Application",
      category: "AIR-GAPPED WORKSTATION",
      badge: "LOCAL / NATIVE",
      description:
        "High-performance native forensic workstation builds with hardware codec acceleration, physical drive access hooks, and 100% offline air-gapped operation.",
      href: `${githubRepo}/releases`,
      isExternal: true,
      ctaText: "VIEW RELEASES & BINARIES →",
      icon: "MonitorDown",
      meta: "Windows • Linux • macOS",
      subActions: [
        { label: "Windows x64 Installer", href: `${githubRepo}/releases`, isExternal: true },
        { label: "Windows Portable USB", href: `${githubRepo}/releases`, isExternal: true },
        { label: "Linux AppImage", href: `${githubRepo}/releases`, isExternal: true },
        { label: "macOS Universal DMG", href: `${githubRepo}/releases`, isExternal: true },
      ],
    },
  ];

  // Desktop builds detail list
  const desktopBuilds: DesktopBuild[] = [
    {
      id: "win-setup",
      name: "Windows Workstation Installer",
      platform: "Windows 10/11",
      fileName: "VidForge-Setup-x64.exe",
      arch: "x86_64",
      size: "98 MB",
      notes: "Recommended for forensic labs. Installs direct Direct3D video codecs.",
      downloadUrl: `${githubRepo}/releases`,
    },
    {
      id: "win-portable",
      name: "Windows Portable Triage",
      platform: "Windows 10/11",
      fileName: "VidForge-Portable-x64.zip",
      arch: "x86_64",
      size: "112 MB",
      notes: "Zero-install standalone binary for incident response field USB drives.",
      downloadUrl: `${githubRepo}/releases`,
    },
    {
      id: "linux-appimage",
      name: "Linux Standalone AppImage",
      platform: "Linux",
      fileName: "VidForge-x86_64.AppImage",
      arch: "x86_64",
      size: "105 MB",
      notes: "Compatible with Kali Linux, Ubuntu 20.04+, and Debian 11+ forensic distros.",
      downloadUrl: `${githubRepo}/releases`,
    },
    {
      id: "macos-dmg",
      name: "macOS Universal Bundle",
      platform: "macOS",
      fileName: "VidForge-Universal.dmg",
      arch: "Universal (Apple Silicon & Intel)",
      size: "94 MB",
      notes: "Metal-accelerated hardware decoder for synchronized multi-camera playback.",
      downloadUrl: `${githubRepo}/releases`,
    },
  ];

  // 3. Project Resources Section
  const projectResources: LaunchableResource[] = [
    {
      id: "res-evidence",
      title: "Raw Evidence Files",
      category: "SURVEILLANCE SAMPLES",
      badge: "RAW DISK DUMPS",
      description:
        "Damaged DVR/NVR disk images, fragmented DHFS 4.1 cluster streams, proprietary Hikvision video segments, and block-level raw test captures.",
      href: `${cleanTarget}/?case=demo`,
      isExternal: true,
      ctaText: "OPEN EVIDENCE REPOSITORY →",
      icon: "FileDigit",
      meta: "DHFS 4.1 / H.264 / Raw .IMG",
      subActions: [
        { label: "Launch Seeded Dahua Case", href: `${cleanTarget}/?case=demo`, isExternal: true },
        { label: "Inspect Acquisition Driver Source", href: `${githubRepo}/tree/feature/acquisition`, isExternal: true },
      ],
    },
    {
      id: "res-datasets",
      title: "Project Datasets",
      category: "FORENSIC BENCHMARKS",
      badge: "TEST EVIDENCE",
      description:
        "Curated CCTV surveillance datasets for testing carving algorithms, discontinuous timecode synchronization, and corrupted cluster reassembly.",
      href: `${githubRepo}/tree/feature/windows-desktop`,
      isExternal: true,
      ctaText: "ACCESS DATASETS →",
      icon: "Database",
      meta: "Cluster Streams & Test Matrices",
      subActions: [
        { label: "Browse Dataset Tree", href: `${githubRepo}/tree/feature/windows-desktop`, isExternal: true },
        { label: "Multi-Camera Sync Samples", href: `${cleanTarget}/player`, isExternal: true },
      ],
    },
    {
      id: "res-drive",
      title: "Project Drive & Shared Resources",
      category: "PROJECT STORAGE",
      badge: "ASSETS & SCHEMATICS",
      description:
        "Shared project directory containing forensic pipeline diagrams, system architecture blueprints, slide decks, and project research media.",
      href: projectDrive,
      isExternal: true,
      ctaText: "OPEN PROJECT DRIVE →",
      icon: "HardDrive",
      meta: "Google Drive / Team Assets",
      subActions: [
        { label: "View Team Assets & Presentations", href: projectDrive, isExternal: true },
        { label: "Core Git Monorepo", href: githubRepo, isExternal: true },
      ],
    },
    {
      id: "res-documentation",
      title: "Documentation & Audit",
      category: "TECHNICAL SPECIFICATIONS",
      badge: "ISO/IEC 27037",
      description:
        "Comprehensive Data I/O implementation audit, recovery engine benchmarks, write-blocker verification logs, and evidentiary standards documentation.",
      href: `${githubRepo}/blob/feature/windows-desktop/DATAIO_IMPLEMENTATION_AUDIT.md`,
      isExternal: true,
      ctaText: "READ SPECIFICATIONS →",
      icon: "FileCheck2",
      meta: "Verification & Audit Report",
      subActions: [
        { label: "DataIO Implementation Audit", href: `${githubRepo}/blob/feature/windows-desktop/DATAIO_IMPLEMENTATION_AUDIT.md`, isExternal: true },
        { label: "Court Reporting Standards", href: `${cleanTarget}/reports`, isExternal: true },
      ],
    },
    {
      id: "res-research",
      title: "Research Literature",
      category: "METHODOLOGY",
      badge: "CCTV REVERSING",
      description:
        "Proprietary DVR filesystem reverse-engineering whitepapers, DHFS sector structure analyses, and forensic carving academic literature.",
      href: `${githubRepo}/tree/feature/windows-desktop`,
      isExternal: true,
      ctaText: "EXPLORE RESEARCH →",
      icon: "BookOpen",
      meta: "CCTV Filesystem Research",
      subActions: [
        { label: "Filesystem Reversing Notes", href: `${githubRepo}/tree/feature/windows-desktop`, isExternal: true },
        { label: "Physical Acquisition Specs", href: `${githubRepo}/tree/feature/acquisition`, isExternal: true },
      ],
    },
  ];

  return {
    webApp,
    applications,
    desktopBuilds,
    projectResources,
  };
};

// Legacy compatibility exports for other components
export interface ResourceLink {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  isExternal?: boolean;
  ctaText: string;
  accent?: "cyan" | "amber" | "green";
}

export interface SoftwareBuild {
  id: string;
  platform: string;
  fileName: string;
  format: string;
  architecture: string;
  sizeEstimate: string;
  notes: string;
  downloadUrl: string;
}

export interface ForensicDataset {
  id: string;
  name: string;
  manufacturer: string;
  filesystem: string;
  format: string;
  purpose: string;
  launchPath: string;
  isRelative: boolean;
  actionLabel: string;
}

export interface StorageFolder {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  isExternal: boolean;
  actionText: string;
}

export const CORE_RESOURCES = (targetUrl: string, githubRepo: string): ResourceLink[] => [
  {
    id: "downloads",
    title: "Software Downloads",
    category: "DESKTOP BUILDS",
    description: "Windows, Linux, and macOS desktop workstation installers and portable release binaries.",
    href: "#downloads",
    isExternal: false,
    ctaText: "VIEW DOWNLOADS →",
    accent: "amber",
  },
  {
    id: "datasets",
    title: "Forensic Datasets",
    category: "RAW EVIDENCE",
    description: "Raw DVR/NVR disk images, test evidence streams, and OEM carving sample files.",
    href: "#datasets",
    isExternal: false,
    ctaText: "OPEN DATASETS →",
    accent: "cyan",
  },
  {
    id: "storage",
    title: "Project Files",
    category: "DRIVE STORAGE",
    description: "Drive folders, shared research literature, test media, and presentation assets.",
    href: "#storage",
    isExternal: false,
    ctaText: "OPEN DRIVE →",
    accent: "cyan",
  },
  {
    id: "source-code",
    title: "Source Code",
    category: "CORE REPOSITORY",
    description: "Main VidForge monorepo with Rust Axum backend microservices and Docker pipelines.",
    href: githubRepo,
    isExternal: true,
    ctaText: "VIEW REPOSITORY →",
    accent: "cyan",
  },
  {
    id: "documentation",
    title: "Documentation",
    category: "METHODOLOGY",
    description: "Technical architecture specifications, bitstream benchmarks, and recovery engine audit.",
    href: `${githubRepo}/blob/feature/windows-desktop/DATAIO_IMPLEMENTATION_AUDIT.md`,
    isExternal: true,
    ctaText: "VIEW DOCUMENTATION →",
    accent: "cyan",
  },
  {
    id: "demo-case",
    title: "Preloaded Demo Case",
    category: "LIVE INVESTIGATION",
    description: "Seeded forensic case containing fragmented CCTV blocks and raw surveillance streams.",
    href: `${targetUrl.replace(/\/+$/, "")}/?case=demo`,
    isExternal: true,
    ctaText: "OPEN DEMO →",
    accent: "green",
  },
];

export const SOFTWARE_BUILDS = (githubRepo: string): SoftwareBuild[] => [
  {
    id: "win-setup",
    platform: "Windows (Installer)",
    fileName: "VidForge-Setup-x64.exe",
    format: "Windows Installer (.exe)",
    architecture: "x86_64",
    sizeEstimate: "98 MB",
    notes: "Recommended for forensic workstations. Installs hardware video codecs.",
    downloadUrl: `${githubRepo}/releases`,
  },
  {
    id: "win-portable",
    platform: "Windows (Portable)",
    fileName: "VidForge-Portable-x64.zip",
    format: "ZIP Archive",
    architecture: "x86_64",
    sizeEstimate: "112 MB",
    notes: "Zero-installation portable build for field laptops and incident response drives.",
    downloadUrl: `${githubRepo}/releases`,
  },
  {
    id: "linux-appimage",
    platform: "Linux",
    fileName: "VidForge-x86_64.AppImage",
    format: "Standalone AppImage",
    architecture: "x86_64",
    sizeEstimate: "105 MB",
    notes: "Compatible with Ubuntu 20.04+, Debian 11+, Fedora, and Kali Linux.",
    downloadUrl: `${githubRepo}/releases`,
  },
  {
    id: "macos-dmg",
    platform: "macOS",
    fileName: "VidForge-Universal.dmg",
    format: "Disk Image (.dmg)",
    architecture: "Universal (Apple Silicon & Intel)",
    sizeEstimate: "94 MB",
    notes: "Metal-accelerated hardware decoder for multi-channel video playback.",
    downloadUrl: `${githubRepo}/releases`,
  },
];

export const FORENSIC_DATASETS = (targetUrl: string, githubRepo: string): ForensicDataset[] => [
  {
    id: "dahua-dhfs4",
    name: "Dahua DHFS 4.1 Sample Image",
    manufacturer: "Dahua Technology",
    filesystem: "DHFS 4.1 (Fragmented)",
    format: "Raw disk image (.raw / .img)",
    purpose: "Validates cluster reassembly, deleted file recovery, and timestamp extraction.",
    launchPath: `${targetUrl.replace(/\/+$/, "")}/?case=demo`,
    isRelative: false,
    actionLabel: "Open Case in Workspace",
  },
  {
    id: "hikvision-sync",
    name: "Hikvision Multi-Channel Stream",
    manufacturer: "Hikvision Digital",
    filesystem: "Hikvision Proprietary Stream",
    format: "Segmented H.264 / H.265 chunks",
    purpose: "Testing synchronized 4-camera forensic player and sub-frame timestamp alignment.",
    launchPath: `${targetUrl.replace(/\/+$/, "")}/player`,
    isRelative: false,
    actionLabel: "Launch Forensic Player",
  },
  {
    id: "physical-disk-io",
    name: "Physical Acquisition Subsystem",
    manufacturer: "Direct Disk I/O / Universal",
    filesystem: "Raw Volume Blocks",
    format: "Block-level direct access",
    purpose: "Verification of read-only disk acquisition and kernel-level write-blocking hooks.",
    launchPath: `${githubRepo}/tree/feature/acquisition`,
    isRelative: false,
    actionLabel: "View Acquisition Source",
  },
  {
    id: "iso27037-custody",
    name: "ISO/IEC 27037 Chain-of-Custody Manifest",
    manufacturer: "Forensic Standards Spec",
    filesystem: "Evidentiary Audit Log",
    format: "Cryptographic SHA-256 / BLAKE3 Report",
    purpose: "Standards-compliant court reporting with immutable verification hashes.",
    launchPath: `${targetUrl.replace(/\/+$/, "")}/reports`,
    isRelative: false,
    actionLabel: "View Reporting Hub",
  },
];

export const STORAGE_FOLDERS = (githubRepo: string): StorageFolder[] => [
  {
    id: "research-materials",
    title: "Research Materials",
    category: "TECHNICAL PAPERS",
    description: "CCTV filesystem reversing documentation, DHFS frame specs, and forensic literature.",
    url: `${githubRepo}/tree/feature/windows-desktop`,
    isExternal: true,
    actionText: "OPEN ASSETS →",
  },
  {
    id: "test-datasets",
    title: "Test Datasets & Evidence",
    category: "RAW SURVEILLANCE",
    description: "Curated raw disk images and sample cluster streams for testing carving pipelines.",
    url: `${githubRepo}/tree/feature/windows-desktop`,
    isExternal: true,
    actionText: "OPEN FOLDER →",
  },
  {
    id: "presentation-assets",
    title: "Presentation Assets",
    category: "DIAGRAMS & SLIDES",
    description: "High-resolution forensic pipeline diagrams, system workflow charts, and slide decks.",
    url: `${githubRepo}`,
    isExternal: true,
    actionText: "OPEN ASSETS →",
  },
  {
    id: "build-artifacts",
    title: "Build Artifacts & Packages",
    category: "RELEASES",
    description: "Compiled desktop binaries, release checksums, and container manifests.",
    url: `${githubRepo}/releases`,
    isExternal: true,
    actionText: "OPEN RELEASES →",
  },
];

