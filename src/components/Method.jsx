import { useReveal } from '../hooks/useReveal'

export default function Method() {
  const [ref, visible] = useReveal()

  return (
    <section className="section method">
      <div className="section-inner">
        <p className="method-intro">
          RENACER no son tres programas colocados uno detrás del otro. Es una secuencia.
          Primero vuelves a ti. Después aprendes a dirigir tu energía. Y finalmente conviertes
          esa nueva dirección en decisiones, estructura y acción.
        </p>

        <div className={`road road-method reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <svg className="road-svg" viewBox="0 0 300 640" preserveAspectRatio="none">
            <path d="M 40 30 C 40 160, 260 160, 260 320 C 260 480, 40 480, 40 610" />
          </svg>

          <div className="road-stop" style={{ top: '4.7%', left: '13.3%' }}>
            <span className="road-dot"></span>
            <div className="road-label">
              <span className="road-num">01</span>
              <span className="road-title">Volver a ti</span>
            </div>
          </div>

          <div className="road-stop road-stop-right" style={{ top: '50%', right: '13.4%' }}>
            <span className="road-dot"></span>
            <div className="road-label">
              <span className="road-num">02</span>
              <span className="road-title">Dirigir tu energía</span>
            </div>
          </div>

          <div className="road-stop" style={{ top: '95.3%', left: '13.3%' }}>
            <span className="road-dot"></span>
            <div className="road-label">
              <span className="road-num">03</span>
              <span className="road-title">Construir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
