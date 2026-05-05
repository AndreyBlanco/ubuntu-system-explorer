import './styles.css';

interface ColorToken {
  name: string;
  value: string;
  optimized?: string;
  usage: string;
}

interface RadiusToken {
  name: string;
  value: string;
  cssVar: string;
  uses: number;
  context: string;
}

interface PlatformToken {
  platform: 'Desktop (GTK)' | 'Web (Pragma)' | 'Flutter (yaru.dart)';
  icon: string;
  implementation: string;
  accentValue: string;
  fontImpl: string;
  themeEngine: string;
}

const colorTokens: ColorToken[] = [
  {
    name: 'accent-color',
    value: '#0073E5',
    optimized: '#0071E2',
    usage: '226 referencias en GNOME Shell CSS',
  },
  {
    name: 'accent-fg-color',
    value: '#FFFFFF',
    usage: 'Texto sobre accent — contraste WCAG AA',
  },
  {
    name: 'background',
    value: '#F5F5F5',
    usage: 'Surface primaria — modo claro',
  },
  {
    name: 'surface',
    value: '#FFFFFF',
    usage: 'Cards, modales, paneles',
  },
  {
    name: 'text-primary',
    value: '#111111',
    usage: 'Texto principal — ratio 12.6:1',
  },
  {
    name: 'text-muted',
    value: '#666666',
    usage: 'Labels secundarios, metadata',
  },
];

const derivationSteps = [
  { label: 'base', var: '--accent-color', hex: '#0073E5', opacity: '100%', usage: 'Estado normal' },
  { label: 'hover', var: '--accent-hover', hex: '#005BB5', opacity: '90%', usage: 'Mouse over' },
  { label: 'active', var: '--accent-active', hex: '#004A99', opacity: '80%', usage: 'Click / press' },
  { label: 'disabled', var: '--accent-disabled', hex: '#0073E5', opacity: '38%', usage: 'No interactuable' },
  { label: 'focus', var: '--accent-focus', hex: '#0073E5', opacity: '24%', usage: 'Focus ring (a11y)' },
];

const radiusTokens: RadiusToken[] = [
  {
    name: 'radius-pill',
    value: '999px',
    cssVar: '--radius-pill',
    uses: 49,
    context: 'Tags, badges, chips',
  },
  {
    name: 'radius-button',
    value: '8px',
    cssVar: '--radius-sm',
    uses: 14,
    context: 'Botones, inputs',
  },
  {
    name: 'radius-card',
    value: '12px',
    cssVar: '--radius-card',
    uses: 8,
    context: 'Cards, paneles, modales',
  },
  {
    name: 'radius-sharp',
    value: '0px',
    cssVar: '--radius-sharp',
    uses: 23,
    context: 'Toolbars, separadores, bordes full',
  },
];

const platformTokens: PlatformToken[] = [
  {
    platform: 'Desktop (GTK)',
    icon: '🖥️',
    implementation: 'Yaru theme — CSS compilado en GResource (binario)',
    accentValue: '-st-accent-color: #0073E5',
    fontImpl: 'Ubuntu Sans 11pt (GNOME Settings)',
    themeEngine: 'GTK4 + libadwaita + Yaru CSS',
  },
  {
    platform: 'Web (Pragma)',
    icon: '🌐',
    implementation: 'CSS custom properties — sin SCSS, sin preprocesador',
    accentValue: '--accent-color: #0073E5',
    fontImpl: 'Ubuntu Sans via Google Fonts / self-hosted',
    themeEngine: 'React 19 + Svelte 5 + CSS puro',
  },
  {
    platform: 'Flutter (yaru.dart)',
    icon: '📱',
    implementation: 'Material tokens + Yaru override encima',
    accentValue: 'YaruVariant.blue → Color(0xFF0073E5)',
    fontImpl: 'Ubuntu Sans via google_fonts package',
    themeEngine: 'Flutter + yaru.dart + Material.dart',
  },
];

export function DesignTokens() {
  return (
    <section className="design-tokens" aria-labelledby="tokens-heading">
      <div className="section-header">
        <h2 id="tokens-heading">Design Tokens</h2>
        <p className="section-subtitle">
          One design system — three mediums of expression
        </p>
      </div>

      {/* SECCIÓN 1 — Cross-Platform */}
      <div className="tokens-block">
        <h3 className="block-title">
          <span className="block-icon">🔗</span>
          Token cross-platform
        </h3>
        <p className="block-description">
          The same semantic value implemented in GTK, CSS, and Dart.
          Pragma is the bridge that maintains coherence.
        </p>
        <div className="platform-grid">
          {platformTokens.map((p) => (
            <div key={p.platform} className="platform-card">
              <div className="platform-header">
                <span className="platform-icon">{p.icon}</span>
                <span className="platform-name">{p.platform}</span>
              </div>
              <div className="platform-detail">
                <div className="detail-row">
                  <span className="detail-label">Accent</span>
                  <code className="detail-value accent">{p.accentValue}</code>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Font</span>
                  <code className="detail-value">{p.fontImpl}</code>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Engine</span>
                  <code className="detail-value muted">{p.themeEngine}</code>
                </div>
              </div>
              <div className="platform-swatch">
                <div
                  className="swatch-block"
                  style={{ backgroundColor: '#0073E5' }}
                  aria-label="accent color swatch"
                  tabIndex={-1}   
                />
                <span className="swatch-label">
                  Ubuntu Sans — The quick brown fox
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN 2 — Color Palette */}
      <div className="tokens-block">
        <h3 className="block-title">
          <span className="block-icon">🎨</span>
          Paleta semántica
        </h3>
        <div className="color-grid">
          {colorTokens.map((token) => (
            <div key={token.name} className="color-card">
              <div
                className="color-swatch"
                style={{ backgroundColor: token.value }}
                role="img"
                aria-label={`Color ${token.value}`}
                tabIndex={-1}   
              />
              <div className="color-info">
                <code className="color-name">--{token.name}</code>
                <div className="color-values">
                  <span className="color-hex">{token.value}</span>
                  {token.optimized && (
                    <span className="color-optimized" title="Valor optimizado para mejor contraste">
                      → {token.optimized}
                    </span>
                  )}
                </div>
                <p className="color-usage">{token.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN 3 — Color Derivation */}
      <div className="tokens-block">
        <h3 className="block-title">
          <span className="block-icon">🔄</span>
          Color derivation — accent states
        </h3>
        <p className="block-description">
          One base token generates all interactive states.
          Opacity as a systematic modifier — not arbitrary values.
        </p>
        <div className="derivation-track">
          {derivationSteps.map((step, i) => (
            <div key={step.label} className="derivation-step">
              <div
                className="derivation-swatch"
                style={{
                  backgroundColor: step.hex,
                  opacity: parseFloat(step.opacity) / 100,
                }}
                role="img"
                aria-label={`${step.label}: ${step.hex} at ${step.opacity}`}
                tabIndex={-1}   
              />
              <div className="derivation-info">
                <span className="derivation-label">{step.label}</span>
                <code className="derivation-var">{step.var}</code>
                <span className="derivation-opacity">{step.opacity}</span>
                <span className="derivation-usage">{step.usage}</span>
              </div>
              {i < derivationSteps.length - 1 && (
                <span className="derivation-arrow" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN 4 — Border Radius */}
      <div className="tokens-block">
        <h3 className="block-title">
          <span className="block-icon">⬡</span>
          Border radius scale
        </h3>
        <p className="block-description">
          Real counts extracted from GNOME Shell CSS.
          Each value has context — not arbitrary.
        </p>
        <div className="radius-grid">
          {radiusTokens.map((token) => (
            <div key={token.name} className="radius-card">
              <div
                className="radius-preview"
                style={{ borderRadius: token.value === '999px' ? '999px' : token.value }}
                aria-hidden="true"
                tabIndex={-1}   
              />
              <div className="radius-info">
                <code className="radius-var">{token.cssVar}</code>
                <span className="radius-value">{token.value}</span>
                <span className="radius-uses">{token.uses} usos reales</span>
                <span className="radius-context">{token.context}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}