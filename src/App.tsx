import './styles/tokens.css'
import systemData from './data/systemData.json'
import type { SystemData } from './types/system'
import { SystemOverview } from './components/SystemOverview/SystemOverview'

const data = systemData as SystemData

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-secondary)',
      fontFamily: 'var(--font-family)'
    }}>

      {/* HEADER */}
      <header style={{
        backgroundColor: 'var(--text-primary)',
        color: 'var(--bg-primary)',
        padding: 'var(--space-6) var(--space-8)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)'
      }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-pill)',
          backgroundColor: 'var(--accent-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20
        }}>
          🐧
        </div>
        <div>
          <h1 style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--bg-primary)',
            margin: 0
          }}>
            Ubuntu System Explorer
          </h1>
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'rgba(255,255,255,0.6)',
            margin: 0
          }}>
            {data.system.os} · {data.system.kernel} · Real hardware data
          </p>
        </div>
      </header>

      {/* MAIN */}
      <main style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'var(--space-8)'
      }}>

        {/* SYSTEM OVERVIEW */}
        <SystemOverview
          system={data.system}
          hardware={data.hardware}
        />

        {/* LAYERS — placeholder */}
        <section style={{
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-6)',
          marginBottom: 'var(--space-6)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>Architecture Layers</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {data.layers.length} layers from BIOS to Applications
          </p>
        </section>

        {/* DESIGN TOKENS — placeholder */}
        <section style={{
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-6)',
          marginBottom: 'var(--space-6)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>Design System Explorer</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Yaru accent: <strong style={{ color: 'var(--accent-color)' }}>{data.yaru.accent_color}</strong>
          </p>
        </section>

        {/* PACKAGES — placeholder */}
        <section style={{
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-6)',
          marginBottom: 'var(--space-6)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>Package Ecosystem</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {data.packages.apt.total} APT packages · {data.packages.snap.total} Snaps ({data.packages.snap.disk_usage})
          </p>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{
        textAlign: 'center',
        padding: 'var(--space-6)',
        color: 'var(--text-disabled)',
        fontSize: 'var(--font-size-sm)',
        borderTop: `1px solid var(--border-color)`
      }}>
        Built with React 19 + TypeScript + Pure CSS · Data from real Ubuntu 26.04 LTS hardware
      </footer>

    </div>
  )
}

export default App