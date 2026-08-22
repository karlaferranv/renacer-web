import { useReveal } from '../hooks/useReveal'

const blocks = [
  {
    name: 'Ámate',
    items: ['21 días', '21 audios', '+4 horas contigo', '5 meditaciones', 'diario', 'journaling'],
  },
  {
    name: 'El Arte de la Energía',
    items: ['31 días', 'diario', 'meditación', 'respiración', 'audios', 'clases de integración'],
  },
  {
    name: 'Magnética',
    items: ['8 semanas', '8 áreas', '≈198 páginas', 'IA', 'oferta', 'marca', 'ventas', 'sistemas', 'implementación'],
  },
]

export default function WhatsInside() {
  const [ref, visible] = useReveal()

  return (
    <section className="section whatsinside">
      <div className="section-inner">
        <span className="eyebrow">La experiencia completa</span>
        <h2>Esto es lo que realmente hay dentro</h2>

        <div className={`whatsinside-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {blocks.map((b) => (
            <div className="whatsinside-block" key={b.name}>
              <h3>{b.name}</h3>
              <div className="whatsinside-tags">
                {b.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="whatsinside-note">
          RENACER no fue diseñado para que consumas más información. Fue diseñado para que
          puedas utilizarla.
        </p>
      </div>
    </section>
  )
}
