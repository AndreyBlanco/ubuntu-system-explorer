import type { SystemInfo, HardwareInfo } from '../../types/system'
import './styles.css'

interface Props {
  system: SystemInfo
  hardware: HardwareInfo
}

interface StatCardProps {
  label: string
  value: string
  sub?: string
  accent?: boolean
}

function StatCard({ label, value, sub, accent }: StatCardProps) {
  return (
    <div className={`stat-card ${accent ? 'stat-card--accent' : ''}`}>
      <span className="stat-card__label">{label}</span>
      <span className="stat-card__value">{value}</span>
      {sub && <span className="stat-card__sub">{sub}</span>}
    </div>
  )
}

export function SystemOverview({ system, hardware }: Props) {
  return (
    <section className="system-overview" aria-labelledby="overview-title">
      <header className="system-overview__header">
        <h2 id="overview-title" className="system-overview__title">
          System Overview
        </h2>
        <span className="system-overview__badge">
          {system.os}
        </span>
      </header>

      <div className="system-overview__grid">
        <StatCard
          label="Operating System"
          value={system.os}
          sub={system.codename}
          accent
        />
        <StatCard
          label="Kernel"
          value={system.kernel}
          sub={system.kernel_type}
        />
        <StatCard
          label="CPU"
          value={hardware.cpu}
          sub={hardware.cpu_speed}
        />
        <StatCard
          label="GPU"
          value={hardware.gpu}
          sub={hardware.gpu_driver}
        />
        <StatCard
          label="RAM"
          value={hardware.ram}
          sub={`${hardware.ram_usage_percent}% in use`}
        />
        <StatCard
          label="Storage"
          value={hardware.storage_available + " free"}
          sub={hardware.storage}
        />
        <StatCard
          label="Display"
          value={hardware.display}
          sub={hardware.display_physical_mm + " mm"}
        />
        <StatCard
          label="Architecture"
          value={system.architecture}
          sub={`Compiled in ${system.kernel_compiled}`}
        />
      </div>

      <div className="system-overview__note">
        <span>⚡</span>
        <p>{hardware.gpu_note}</p>
      </div>
    </section>
  )
}