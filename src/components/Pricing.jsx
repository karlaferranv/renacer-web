import { useReveal } from '../hooks/useReveal'
import { siteConfig, purchaseLink } from '../config/siteConfig'

const altPrograms = [
  {
    key: 'amate',
    name: 'Ámate',
    duration: '21 días',
    includes: ['21 audios de acompañamiento (+4 horas)', '5 meditaciones guiadas', 'Diario Ámate de 21 días', 'Recursos y afirmaciones descargables'],
  },
  {
    key: 'arte',
    name: 'El Arte de la Energía',
    duration: '31 días',
    includes: ['31 días de práctica diaria', 'Diario completo de journaling', 'Clases de integración', 'Meditación y respiración consciente'],
  },
  {
    key: 'magnetica',
    name: 'Magnética',
    duration: '8 semanas',
    includes: ['Las 8 áreas de construcción (ADN)', 'Workbook de ≈198 páginas', 'Prompts y herramientas de IA', 'Plan de expansión de 90 días'],
  },
  {
    key: 'vip',
    name: 'Acompañamiento VIP 1:1',
    duration: 'Personalizado',
    includes: ['Seguimiento cercano y personalizado', 'Acompañamiento de alto nivel'],
  },
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
              <p className="pricing-alt-includes-label">Incluye</p>
              <ul className="pricing-alt-includes">
                {p.includes.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
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
