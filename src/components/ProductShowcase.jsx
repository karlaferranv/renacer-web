import { useReveal } from '../hooks/useReveal'

const mockups = [
  { label: 'Diario Ámate — portada y páginas interiores', file: '[MOCKUP_DIARIO_AMATE]' },
  { label: 'Diario El Arte de la Energía', file: '[MOCKUP_DIARIO_ENERGIA]' },
  { label: 'Workbook Magnética', file: '[MOCKUP_WORKBOOK_MAGNETICA]' },
  { label: 'Plataforma en Notion', file: '[MOCKUP_PLATAFORMA_NOTION]' },
  { label: 'Lista de audios y meditaciones', file: '[MOCKUP_AUDIOS]' },
  { label: 'La experiencia desde el celular', file: '[MOCKUP_MOBILE]' },
]

export default function ProductShowcase() {
  const [ref, visible] = useReveal()

  return (
    <section className="section showcase">
      <div className="section-inner">
        <span className="eyebrow">Por dentro</span>
        <h2>Así se ve y se vive RENACER</h2>

        <div className={`showcase-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {mockups.map((m) => (
            <div className="showcase-item" key={m.label}>
              <div className="showcase-visual">{m.file}</div>
              <p>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
