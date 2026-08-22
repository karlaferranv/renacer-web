import { useReveal } from '../hooks/useReveal'

export default function EnergiaSection() {
  const [ref, visible] = useReveal()

  return (
    <section className="section phase-section reverse">
      <div className={`section-inner phase-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="phase-visual">[IMAGEN_ARTE_ENERGIA]</div>
        <div className="phase-copy">
          <span className="eyebrow">Fase 02 · 31 días</span>
          <h3>El Arte de la Energía</h3>
          <p>
            Con una base más amorosa hacia ti misma, aprendes a dirigir conscientemente tu
            energía en el día a día: cómo la cuidas, cómo la enfocas y cómo la conviertes en la
            realidad que quieres vivir.
          </p>
          <ul>
            <li>Gratitud y respiración consciente como práctica diaria</li>
            <li>Elevación real de tu energía, sin fórmulas mágicas</li>
            <li>Manifestación consciente: intención más acción, no solo deseo</li>
          </ul>
          <p>La segunda clase de integración de esta fase acompaña tus primeros 7 días con historias y enseñanzas propias.</p>
        </div>
      </div>
    </section>
  )
}
