# Project Skills Registry

This directory serves as the dedicated project-local skill library for **VidForge-Dashboard**. All skills here guide the visual design, user experience, animations, code refinement, and documentation of the VidForge Forensic Video Recovery & Analysis platform.

---

## 1. Taste (design-taste-frontend)
- **Repository**: [https://github.com/Leonxlnx/taste-skill.git](https://github.com/Leonxlnx/taste-skill.git)
- **Installed Commit**: `ce26fc2`
- **Installation Method**: Cloned to `./skills/taste/` & loaded via `skills/taste/skills/taste-skill/SKILL.md`
- **Purpose**: High-quality frontend visual design, anti-generic/anti-slop aesthetics, typography pairing, spatial balance, micro-surfaces, visual hierarchy, and modern design direction.
- **When to Use**: Mandatory for all UI layout, visual identity, cyber-forensics theme design, color token definition, and avoiding generic SaaS template looks.
- **Status**: **Mandatory**

---

## 2. Impeccable
- **Repository**: [https://github.com/pbakaus/impeccable.git](https://github.com/pbakaus/impeccable.git)
- **Installed Commit**: `40f990fa`
- **Installation Method**: Cloned to `./skills/impeccable/` & loaded via `skills/impeccable/.agent/skills/impeccable/SKILL.md`
- **Purpose**: AI-assisted frontend design critique, design-system reasoning, UI refinement, visual consistency, pixel-level polish, and accessibility/contrast auditing.
- **When to Use**: Mandatory during component assembly, styling reviews, dark mode contrast validation, and refinement phases.
- **Status**: **Mandatory**

---

## 3. Emil Kowalski Skills
- **Repository**: [https://github.com/emilkowalski/skills.git](https://github.com/emilkowalski/skills.git)
- **Installed Commit**: `d16ebe6`
- **Installation Method**: Cloned to `./skills/emilkowalski/` (skills include `animate`, `emil-design-eng`, `improve-animations`, `review-animations`)
- **Purpose**: Physics-based motion design, fluid layout transitions, micro-interactions, reactive hover states, spring mechanics, and purposeful UX animation.
- **When to Use**: Mandatory for Framer Motion interactions, card hover lifts, ambient pulse transitions, modal/tab state morphing, and telemetry indicator effects.
- **Status**: **Mandatory**

---

## 4. UI/UX Pro Max
- **Repository**: [https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git)
- **Installed Commit**: `09170ee`
- **Installation Method**: Cloned to `./skills/ui-ux-pro-max/` & loaded via `skills/ui-ux-pro-max/.claude/skills/ui-ux-pro-max/SKILL.md`
- **Purpose**: Full-spectrum UI/UX design intelligence, design system architecture, responsive grid logic, typography scales, accessibility patterns, and forensic workflow UX ergonomics.
- **When to Use**: Mandatory for information architecture, navigation paradigms, filter tabs, keyboard shortcuts (`/` global search), and telemetry layout.
- **Status**: **Mandatory**

---

## 5. Beautify GitHub README
- **Repository**: [https://github.com/oil-oil/beautify-github-readme.git](https://github.com/oil-oil/beautify-github-readme.git)
- **Installed Commit**: `d48dd84`
- **Installation Method**: Cloned to `./skills/beautify-github-readme/` & loaded via `skills/beautify-github-readme/skills/beautify-github-readme/SKILL.md`
- **Purpose**: Modern GitHub README documentation aesthetics, badges, visual architecture diagrams, clean tables, and launchpad documentation.
- **When to Use**: Conditional for crafting and polishing the repository's root `README.md`.
- **Status**: **Conditional (Active for Documentation/README phase)**

---

## Skill-to-Task Execution Matrix

| Domain | Primary Skills | Secondary Skills | Focus Areas |
|---|---|---|---|
| **Design System & Palette** | UI/UX Pro Max | Taste | Obsidian dark theme, neon cyan/emerald/purple accents, typography |
| **Component Crafting** | Taste | Impeccable | Card layouts, telemetry metrics, glassmorphic sheen, crisp borders |
| **Motion & Interaction** | Emil Kowalski (`animate`) | Impeccable | Spring physics, hover cards, reactive ambient glow, search focus |
| **Quality Review** | Impeccable | UI/UX Pro Max | Contrast ratios, keyboard accessibility (`/` shortcut), zero layout shifts |
| **Documentation** | Beautify GitHub README | — | Hero banner, live URLs, deployment commands, architecture overview |
