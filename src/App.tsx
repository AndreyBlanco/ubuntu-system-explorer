import './styles/tokens.css'
import systemData from './data/systemData.json'
import type { SystemData } from './types/system'
import { SystemOverview } from './components/SystemOverview/SystemOverview'
import { LayerExplorer } from './components/LayerExplorer/LayerExplorer'
import { DesignTokens } from './components/DesignTokens/DesignTokens';
import { PackageEcosystem } from './components/PackageEcosystem/PackageEcosystem';

const data = systemData as SystemData

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-secondary)',
      fontFamily: 'var(--font-family)'
    }}>

      {/* SKIP NAVIGATION — WCAG 2.1 */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '0';
          e.currentTarget.style.width = 'auto';
          e.currentTarget.style.height = 'auto';
          e.currentTarget.style.padding = 'var(--space-3) var(--space-4)';
          e.currentTarget.style.backgroundColor = 'var(--accent-color)';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.zIndex = '9999';
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px';
          e.currentTarget.style.width = '1px';
          e.currentTarget.style.height = '1px';
          e.currentTarget.style.padding = '0';
        }}
      >
        Skip to main content
      </a>
      
      {/* HEADER */}
      <header 
        role="banner"
        style={{
          backgroundColor: 'var(--text-primary)',
          color: 'var(--bg-primary)',
          padding: 'var(--space-6) var(--space-8)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-4)'
        }}>
        <div 
          aria-hidden="true"
          style={{
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
            <span aria-label="Operating system">{data.system.os}</span>
            <span aria-hidden="true"> · </span>
            <span aria-label="Kernel version">{data.system.kernel}</span>
            <span aria-hidden="true"> · </span>
            <span>Real hardware data</span>
          </p>
        </div>
      </header>

      {/* MAIN */}
      <main 
        id="main-content"
        aria-label="System information explorer"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'var(--space-8)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)'
        }}>

        {/* SYSTEM OVERVIEW */}
        <SystemOverview
          system={data.system}
          hardware={data.hardware}
        />

        {/* LAYERS +*/}
        <LayerExplorer layers={data.layers} />

        {/* DESIGN TOKENS */}
        <DesignTokens />

        {/* PACKAGES */}
        <PackageEcosystem />

      </main>

      {/* FOOTER */}
      <footer 
        role="contentinfo"
        style={{
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