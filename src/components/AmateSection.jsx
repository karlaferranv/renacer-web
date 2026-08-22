import { useReveal } from '../hooks/useReveal'

export default function AmateSection() {
  const [ref, visible] = useReveal()

  return (
    <section className="section phase-section">
      <div className={`section-inner phase-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="phase-visual">[IMAGEN_AMATE]</div>
        <div className="phase-copy">
          <span className="eyebrow">Fase 01 · 21 días</span>
          <h3>Ámate</h3>
          <p>
            Antes de manifestar cualquier cosa hacia afuera, necesitas una base sólida hacia
            adentro. Ámate es un journal de acompañamiento diario diseñado para reconstruir tu
            relación contigo misma, con un prompt que te sostiene cada día del proceso.
          </p>
          <ul>
            <li>Sanar heridas internas que siguen dirigiendo tus decisiones</li>
            <li>Cambiar creencias limitantes por una voz interna más amable</li>
            <li>Journaling guiado, día a día, sin dejarte perdida</li>
          </ul>
          <p>Es el punto de partida de RENACER, y también existe como experiencia independiente.</p>
        </div>
      </div>
    </section>
  )
}
