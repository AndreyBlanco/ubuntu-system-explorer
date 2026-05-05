import { useState } from 'react'
import type { Layer } from '../../types/system'
import './styles.css'

interface Props {
  layers: Layer[]
}

export function LayerExplorer({ layers }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setExpandedId(prev => prev === id ? null : id)
  }

  const sortedLayers = [...layers].sort((a, b) => b.id - a.id)

  return (
    <section className="layer-explorer" aria-labelledby="layers-title">
      <header className="layer-explorer__header">
        <h2 id="layers-title" className="layer-explorer__title">
          Architecture Layers
        </h2>
        <span className="layer-explorer__subtitle">
          From hardware to user — click any layer to explore
        </span>
      </header>

      <div className="layer-explorer__stack" role="list">
        {sortedLayers.map((layer) => {
          const isExpanded = expandedId === layer.id
          const cssVar = `var(--layer-${layer.id}-color)`

          return (
            <div
              key={layer.id}
              className={`layer-item ${isExpanded ? 'layer-item--expanded' : ''}`}
              role="listitem"
            >
              <button
                className="layer-item__trigger"
                onClick={() => toggle(layer.id)}
                aria-expanded={isExpanded}
                aria-controls={`layer-details-${layer.id}`}
                style={{ '--layer-color': cssVar } as React.CSSProperties}
              >
                <span
                  className="layer-item__number"
                  style={{ backgroundColor: cssVar }}
                >
                  {layer.id}
                </span>
                <div className="layer-item__info">
                  <span className="layer-item__name">{layer.name}</span>
                  <span className="layer-item__tech">{layer.tech}</span>
                </div>
                <span className="layer-item__description">
                  {layer.description}
                </span>
                <span
                  className="layer-item__chevron"
                  aria-hidden="true"
                >
                  {isExpanded ? '▲' : '▼'}
                </span>
              </button>

              <div
                id={`layer-details-${layer.id}`}
                className="layer-item__details"
                hidden={!isExpanded}
                style={{ borderLeftColor: cssVar }}
              >
                <p>{layer.details}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}