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
            Antes de construir algo nuevo, necesitas reconocer desde dónde estás construyendo.
            Ámate es un proceso de 21 días para observar tu relación contigo misma con más
            honestidad: la manera en la que te hablas, lo que toleras, las promesas que te
            haces y no cumples, las heridas que todavía condicionan tus decisiones.
          </p>
          <p>
            No se trata de repetir frases bonitas frente al espejo. Se trata de conocerte lo
            suficiente para comenzar a elegirte de verdad.
          </p>
          <ul>
            <li>Tu autoimagen, tus límites y tu diálogo interno</li>
            <li>Las creencias y relaciones que siguen dirigiendo tus decisiones</li>
            <li>Journaling guiado, día a día, sin dejarte perdida</li>
          </ul>
          <p className="phase-outcome">
            <strong>Lo que comienza a tomar forma:</strong> más claridad sobre quién eres, lo
            que quieres y lo que ya no estás dispuesta a seguir negociando contigo misma.
            Ámate no busca convertirte en otra persona. Busca que puedas volver a
            reconocerte.
          </p>
        </div>
      </div>
    </section>
  )
}
