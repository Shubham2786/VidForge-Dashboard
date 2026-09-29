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
