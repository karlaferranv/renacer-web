import { useReveal } from '../hooks/useReveal'
import { siteConfig, purchaseLink } from '../config/siteConfig'

const altPrograms = [
  { key: 'amate', name: 'Ámate', duration: '21 días' },
  { key: 'arte', name: 'El Arte de la Energía', duration: '31 días' },
  { key: 'magnetica', name: 'Magnética', duration: '38 días' },
  { key: 'vip', name: 'Acompañamiento VIP 1:1', duration: 'Personalizado' },
]

export default function Pricing() {
  const [ref, visible] = useReveal()

  return (
    <section id="precios" className="section pricing">
      <div className="section-inner">
        <div className="pricing-head">
          <span className="eyebrow">Tu inversión</span>
          <h2>Un solo programa. Una transformación completa.</h2>
        </div>

        <div className={`pricing-main reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <span className="eyebrow">RENACER · 90 días</span>
          <h3>El programa completo</h3>
          <p className="pricing-amount">
            ${siteConfig.prices.renacer} <span>USD</span>
          </p>
          <ul>
            <li>Ámate + El Arte de la Energía + Magnética</li>
            <li>Plataforma de acompañamiento día a día</li>
            <li>Videos, audios y meditaciones incluidas</li>
            <li>Guía con inteligencia artificial integrada</li>
            <li>Comunidad y recursos descargables</li>
          </ul>
          {siteConfig.available.renacer ? (
            <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Quiero RENACER
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
              <p className="amount">${siteConfig.prices[p.key]}</p>
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
