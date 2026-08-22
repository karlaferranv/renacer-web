import { useReveal } from '../hooks/useReveal'
import { siteConfig, purchaseLink } from '../config/siteConfig'

const altPrograms = [
  { key: 'amate', name: 'Ámate', duration: '21 días' },
  { key: 'arte', name: 'El Arte de la Energía', duration: '31 días' },
  { key: 'magnetica', name: 'Magnética', duration: '8 semanas' },
  { key: 'vip', name: 'Acompañamiento VIP 1:1', duration: 'Personalizado' },
]

const includes = ['Audios', 'Diarios', 'Meditaciones', 'Journaling', 'Respiración', 'Clases', 'Ejercicios', 'Recursos', 'IA', 'Estrategia', 'Implementación', 'Plataforma']

export default function Pricing() {
  const [ref, visible] = useReveal()

  return (
    <section id="precios" className="section pricing">
      <div className="section-inner">
        <div className="pricing-head">
          <span className="eyebrow">Tu inversión</span>
          <h2>Tu RENACER incluye</h2>
        </div>

        <div className="pricing-summary">
          <div className="pricing-summary-phase">
            <span className="phase-duration">Ámate</span>
            <p>21 días</p>
          </div>
          <div className="pricing-summary-phase">
            <span className="phase-duration">El Arte de la Energía</span>
            <p>31 días</p>
          </div>
          <div className="pricing-summary-phase">
            <span className="phase-duration">Magnética</span>
            <p>8 semanas</p>
          </div>
        </div>

        <div className="pricing-includes">
          {includes.map((it) => (
            <span key={it}>{it}</span>
          ))}
        </div>

        <div className={`pricing-main reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <span className="eyebrow">Inversión completa</span>
          <p className="pricing-amount">
            <span className="highlight">${siteConfig.prices.renacer}</span> <span className="unit">USD</span>
          </p>
          <p className="pricing-tagline">Una sola decisión. Tres etapas. Un proceso completo.</p>
          {siteConfig.available.renacer ? (
            <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Comenzar mi RENACER
            </a>
          ) : (
            <span className="btn btn-outline">Próximamente</span>
          )}
        </div>

        <div className="pricing-alt">
          {altPrograms.map((p) => (
            <div className="pricing-alt-card" key={p.key}>
              <h4>{p.name}</h4>
              <span className="phase-duration">{p.duration}</span>
              <p className="amount"><span className="highlight">${siteConfig.prices[p.key]}</span></p>
              {siteConfig.available[p.key] ? (
                <a href={purchaseLink(p.key)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Quiero empezar
                </a>
              ) : (
                <span className="btn btn-outline">Próximamente</span>
              )}
            </div>
          ))}
        </div>

        <p className="pricing-note">¿Prefieres empezar por una sola fase? Puedes hacerlo y avanzar al siguiente nivel cuando estés lista.</p>
      </div>
    </section>
  )
}
