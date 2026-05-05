import './styles.css';

interface PackageManager {
  name: 'APT / dpkg' | 'Snap';
  icon: string;
  count: number;
  format: string;
  repo: string;
  updates: string;
  sandbox: boolean;
  philosophy: string;
  strength: string;
  limitation: string;
  accentVar: string;
}

interface InstalledPackage {
  name: string;
  version: string;
  manager: 'apt' | 'snap';
  purpose: string;
  relevance: string;
}

const managers: PackageManager[] = [
  {
    name: 'APT / dpkg',
    icon: '📦',
    count: 1634,
    format: '.deb (binario)',
    repo: 'Ubuntu Archive',
    updates: 'apt upgrade',
    sandbox: false,
    philosophy:
      'El sistema tradicional. 30+ años resolviendo dependencias. Cada paquete tiene acceso completo al sistema — sin aislamiento.',
    strength: 'Madurez, velocidad, integración profunda con el sistema',
    limitation: 'Dependencias compartidas pueden generar conflictos',
    accentVar: '--layer-2-color',
  },
  {
    name: 'Snap',
    icon: '🔧',
    count: 12,
    format: '.snap (SquashFS)',
    repo: 'Snap Store — Canonical',
    updates: 'Automáticas via snapd',
    sandbox: true,
    philosophy:
      'La apuesta de Canonical. Autocontenido con todas sus dependencias. Funciona en cualquier distribución Linux sin modificación.',
    strength: 'Aislamiento, actualizaciones automáticas, cross-distro',
    limitation: 'Arranque más lento, mayor uso de disco vs APT',
    accentVar: '--layer-6-color',
  },
];

const keyPackages: InstalledPackage[] = [
  {
    name: 'linux-image-7.0.0-14-generic',
    version: '7.0.0-14',
    manager: 'apt',
    purpose: 'El kernel — núcleo del sistema operativo',
    relevance: 'Capa 2 del tour',
  },
  {
    name: 'gnome-shell',
    version: '50.1',
    manager: 'apt',
    purpose: 'Desktop environment completo',
    relevance: 'Capa 5 — GNOME + Yaru',
  },
  {
    name: 'yaru-theme-gtk',
    version: 'Yaru-blue',
    manager: 'apt',
    purpose: 'Design system visual de Ubuntu',
    relevance: 'Tokens reales en Design Tokens',
  },
  {
    name: 'snapd',
    version: 'activo',
    manager: 'apt',
    purpose: 'Daemon que gestiona paquetes Snap',
    relevance: 'Puente entre los dos ecosistemas',
  },
  {
    name: 'fastfetch',
    version: '2.x',
    manager: 'apt',
    purpose: 'System info — primer comando del tour',
    relevance: 'Datos reales del HP 14',
  },
  {
    name: 'code',
    version: 'latest',
    manager: 'snap',
    purpose: 'VS Code — donde se construye este proyecto',
    relevance: 'Instalado via Snap Store',
  },
];

export function PackageEcosystem() {
  const total = managers.reduce((sum, m) => sum + m.count, 0);

  return (
    <section
      className="package-ecosystem"
      aria-labelledby="packages-heading"
    >
      {/* Header */}
      <div className="package-ecosystem__header">
        <h2 id="packages-heading">Package Ecosystem</h2>
        <p className="package-ecosystem__subtitle">
          Cómo llega el software a la máquina — dos sistemas coexistiendo
        </p>
        <div className="package-ecosystem__total">
          <span className="pkg-total-number">
            {total.toLocaleString()}
          </span>
          <span className="pkg-total-label">paquetes instalados en total</span>
        </div>
      </div>

      {/* SECCIÓN 1 — APT vs Snap */}
      <div className="pkg-managers-grid">
        {managers.map((mgr) => {
          const pct = Math.round((mgr.count / total) * 100);
          return (
            <div key={mgr.name} className="pkg-manager-card">

              <div className="pkg-manager-card__top">
                <span className="pkg-manager-icon">{mgr.icon}</span>
                <div className="pkg-manager-identity">
                  <h3 className="pkg-manager-name">{mgr.name}</h3>
                  <span
                    className="pkg-manager-count"
                    style={{ color: `var(${mgr.accentVar})` }}
                  >
                    {mgr.count.toLocaleString()} paquetes
                  </span>
                </div>
              </div>

              {/* Barra de proporción */}
              <div
                className="pkg-bar-track"
                role="meter"
                aria-valuenow={mgr.count}
                aria-valuemin={0}
                aria-valuemax={total}
                aria-label={`${mgr.count} de ${total} paquetes`}
              >
                <div
                  className="pkg-bar-fill"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: `var(${mgr.accentVar})`,
                  }}
                />
                <span className="pkg-bar-pct">{pct}%</span>
              </div>

              {/* Detalles técnicos */}
              <div className="pkg-manager-details">
                <div className="pkg-detail-row">
                  <span className="pkg-detail-label">Formato</span>
                  <code className="pkg-detail-value">{mgr.format}</code>
                </div>
                <div className="pkg-detail-row">
                  <span className="pkg-detail-label">Repo</span>
                  <code className="pkg-detail-value">{mgr.repo}</code>
                </div>
                <div className="pkg-detail-row">
                  <span className="pkg-detail-label">Updates</span>
                  <code className="pkg-detail-value">{mgr.updates}</code>
                </div>
                <div className="pkg-detail-row">
                  <span className="pkg-detail-label">Sandbox</span>
                  <span
                    className={`pkg-badge ${
                      mgr.sandbox ? 'pkg-badge--yes' : 'pkg-badge--no'
                    }`}
                  >
                    {mgr.sandbox ? '✓ Sí' : '✗ No'}
                  </span>
                </div>
              </div>

              <p className="pkg-manager-philosophy">{mgr.philosophy}</p>

              <div className="pkg-manager-verdict">
                <div className="pkg-verdict-row pkg-verdict--strength">
                  <span className="pkg-verdict-icon" aria-hidden="true">↑</span>
                  <span>{mgr.strength}</span>
                </div>
                <div className="pkg-verdict-row pkg-verdict--limitation">
                  <span className="pkg-verdict-icon" aria-hidden="true">↓</span>
                  <span>{mgr.limitation}</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* SECCIÓN 2 — Paquetes clave */}
      <div className="pkg-installed-block">
        <h3 className="pkg-block-title">
          <span aria-hidden="true">🔍</span>
          Paquetes clave instalados
        </h3>
        <p className="pkg-block-description">
          Selección real del HP 14 — conectados con las otras secciones
          del explorador.
        </p>

        <div className="pkg-table" role="table" aria-label="Paquetes instalados">
          <div className="pkg-table__head" role="row">
            <span role="columnheader">Paquete</span>
            <span role="columnheader">Versión</span>
            <span role="columnheader">Sistema</span>
            <span role="columnheader">Propósito</span>
          </div>
          {keyPackages.map((pkg) => (
            <div key={pkg.name} className="pkg-table__row" role="row">
              <code className="pkg-name" role="cell">{pkg.name}</code>
              <code className="pkg-version" role="cell">{pkg.version}</code>
              <span
                className={`pkg-manager-tag pkg-manager-tag--${pkg.manager}`}
                role="cell"
              >
                {pkg.manager === 'apt' ? 'APT' : 'Snap'}
              </span>
              <div className="pkg-info" role="cell">
                <span className="pkg-purpose">{pkg.purpose}</span>
                <span className="pkg-relevance">{pkg.relevance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN 3 — Nota estratégica */}
      <div className="pkg-strategic-note">
        <span className="pkg-note-icon" aria-hidden="true">💡</span>
        <p className="pkg-note-text">
          La tensión entre APT y Snap no es un bug — es una decisión
          estratégica de Canonical. Snap permite distribuir software
          actualizado en cualquier versión de Ubuntu sin esperar al ciclo
          de release. La comunidad debate; Canonical apuesta por su futuro.
        </p>
      </div>

    </section>
  );
}