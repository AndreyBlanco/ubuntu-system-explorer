// ================================================
// UBUNTU SYSTEM EXPLORER — Type Definitions
// ================================================

export interface SystemInfo {
  os: string
  codename: string
  kernel: string
  kernel_type: string
  kernel_compiled: string
  architecture: string
  hostname: string
}

export interface HardwareInfo {
  cpu: string
  cpu_speed: string
  gpu: string
  gpu_driver: string
  gpu_note: string
  ram: string
  ram_usage_percent: number
  storage: string
  storage_available: string
  display: string
  display_physical_mm: string
  wifi: string
  ethernet: string
  bios: string
}

export interface GnomeExtension {
  id: string
  name: string
}

export interface DesktopInfo {
  environment: string
  gnome_version: string
  compositor: string
  display_protocol: string
  wayland_socket: string
  xwayland_socket: string
  session: string
  theme_gtk: string
  theme_icons: string
  theme_cursor: string
  font_interface: string
  font_monospace: string
  color_scheme: string
  dynamic_workspaces: boolean
  button_layout: string
  extensions: GnomeExtension[]
}

export interface BorderRadiusToken {
  value: string
  uses: number
  role: string
}

export interface YaruCSSStats {
  total_lines: number
  accent_references: number
  accent_variables: string[]
  color_functions: string[]
  border_radius_tokens: BorderRadiusToken[]
}

export interface YaruInfo {
  accent_name: string
  accent_color: string
  accent_color_optimized: string
  accent_fg_color: string
  dark_mode: boolean
  gtk_versions: string[]
  available_variants: string[]
  css_stats: YaruCSSStats
}

export interface SnapApp {
  name: string
  version: string
  publisher: string
  role: string
}

export interface SnapBase {
  name: string
  role: string
}

export interface PackageInfo {
  apt: {
    total: number
    format: string
    repo_format: string
    recent_installs: string[]
  }
  snap: {
    total: number
    snapd_version: string
    disk_usage: string
    apps: SnapApp[]
    bases: SnapBase[]
  }
  flatpak: {
    installed: boolean
    reason: string
  }
}

export interface SystemdService {
  name: string
  role: string
}

export interface SystemdInfo {
  active_services: number
  windows_equivalent: string
  key_services: SystemdService[]
}

export interface Layer {
  id: number
  name: string
  tech: string
  description: string
  details: string
}

export interface DesignSystemEntry {
  name: string
  type: string
  language: string
  accent_variable: string
  font: string
  frameworks?: string[]
  status?: string
  base?: string
}

export interface SharedTokens {
  accent_color: string
  accent_color_optimized: string
  font_family: string
  font_mono: string
  radius_pill: string
  radius_button: string
  radius_card: string
  radius_tile: string
  radius_dialog: string
}

export interface DesignSystemInfo {
  desktop: DesignSystemEntry
  web_legacy: DesignSystemEntry
  web_current: DesignSystemEntry
  flutter: DesignSystemEntry
  shared_tokens: SharedTokens
}

export interface SystemData {
  system: SystemInfo
  hardware: HardwareInfo
  desktop: DesktopInfo
  yaru: YaruInfo
  packages: PackageInfo
  systemd: SystemdInfo
  layers: Layer[]
  design_system: DesignSystemInfo
}
