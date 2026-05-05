# Ubuntu System Explorer

A React + TypeScript application that visualizes the architecture of an Ubuntu system — from hardware to user-facing applications.

**Live demo:** https://ubuntu-system-explorer.vercel.app

---

## Why this exists

In April 2026, I installed Ubuntu 26.04 LTS natively on an HP 14 for the first time. Instead of just using it,explored it layer by layer — from BIOS configuration to GNOME desktop.

This project is the result of that exploration: real data from a real machine, visualized with the design language of the system being explored.

---

## What it shows

### System Overview
Hardware snapshot of the HP 14 — CPU, GPU, RAM, storage, display, kernel, and desktop environment. All real values captured via `fastfetch` and `lspci`.

### Architecture Layers
Interactive stack of 8 layers (0–7), from BIOS/UEFI at the base to user applications at the top. Each layer is expandable with technical detail about what runs at that level.

### Design Tokens
A cross-platform view of Canonical's design system — the same tokens expressed in three different mediums:
- **Desktop:** GTK4 + libadwaita + Yaru theme
- **Web:** Pragma (CSS custom properties, no preprocessor)
- **Flutter:** yaru.dart + Material.dart

Includes color derivation states, border-radius scale with real usage counts from GNOME Shell CSS, and typography.

### Package Ecosystem
The coexistence of APT/dpkg (1,634 packages) and Snap (12 packages) — two philosophies of software distribution running on the same machine. Includes a curated list of key packages connected to the other sections.

---

## Technical decisions

**CSS custom properties — no framework, no preprocessor**
Mirrors the philosophy of Pragma, Canonical's new design system.
Tokens are defined once in `tokens.css` and consumed everywhere.

**Real data, not mock data**
All system values in `systemData.json` were captured directly from the machine using Linux system commands.

**Component-scoped styles**
Each component owns its CSS file. No global overrides, no specificity conflicts.

**React 19 + TypeScript + Vite**
Types defined in `src/types/system.ts` — data flows from JSON through typed interfaces into components.

---

## Stack

|
 Layer 
|
 Technology 
|
|
-------
|
-----------
|
|
 Framework 
|
 React 19 
|
|
 Language 
|
 TypeScript 
|
|
 Build tool 
|
 Vite 8 
|
|
 Styles 
|
 CSS custom properties 
|
|
 Design tokens 
|
 Yaru (real values from Ubuntu 26.04) 
|
|
 Font 
|
 Ubuntu Sans 
|
|
 Deploy 
|
 Vercel 
|
|
 Dev environment 
|
 Ubuntu 26.04 LTS on HP 14 
|

---

## Local setup
```bash
git clone https://github.com/AndreyBlanco/ubuntu-system-explorer
cd ubuntu-system-explorer
npm install
npm run dev
```

---

## Context
Built as preparation for engineering interviews at Canonical.
The goal was not to study the ecosystem from the outside —
but to install it, explore it, and build something with it.