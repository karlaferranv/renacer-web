import { useReveal } from '../hooks/useReveal'

const stats = ['21 días', '21 audios', '+4 horas contigo', '5 meditaciones', '1 diario', '21 experiencias de journaling']

export default function AmateSection() {
  const [ref, visible] = useReveal()

  return (
    <section className="section phase-section">
      <div className={`section-inner phase-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="phase-visual">
          <img src="/images/amate.jpg" alt="Ámate — fase 1 de RENACER" />
        </div>
        <div className="phase-copy">
          <span className="eyebrow">Fase 01 · 21 días para volver a ti</span>
          <h3>Ámate</h3>
          <p>
            Antes de preguntarte qué quieres crear, necesitas volver a conocer a la persona
            que va a sostenerlo. Ámate es un recorrido íntimo de 21 días para observar la
            relación que tienes contigo misma: cómo te hablas, qué permites, qué necesitas,
            qué has aprendido a creer sobre ti y cuántas veces has dejado tus propias
            necesidades para después.
          </p>
          <p>
            Aquí no venimos a construir una versión perfecta de ti. Venimos a conocerte con
            suficiente honestidad para que puedas comenzar a elegirte.
          </p>
          <p className="phase-sub-title">Dentro de Ámate</p>
          <ul>
            <li><strong>21 audios de acompañamiento</strong> — un audio para cada día, con más de 4 horas de acompañamiento en total. No son clases: son conversaciones íntimas sobre autoimagen, diálogo interno, límites, comparación, relaciones, merecimiento y amor propio real.</li>
            <li><strong>5 meditaciones guiadas</strong> — prácticas creadas para distintos momentos del recorrido.</li>
            <li><strong>Diario Ámate</strong> — 21 días de journaling, preguntas, ejercicios y prácticas de integración. No escribes por escribir. Escribes para verte.</li>
            <li><strong>Recursos complementarios</strong> — afirmaciones y herramientas que puedes reutilizar después del programa.</li>
          </ul>

          <div className="phase-stats">
            {stats.map((s) => (
              <span className="phase-stat" key={s}>{s}</span>
            ))}
          </div>

          <p className="phase-outcome">
            <strong>Lo que comienza a tomar forma:</strong> más claridad sobre quién eres. Una
            relación más consciente contigo. Mayor capacidad para reconocer lo que necesitas,
            observar tu diálogo interno, establecer límites y dejar de abandonarte cada vez
            que la vida te pide elegir. Ámate no busca convertirte en alguien nueva. Busca que
            puedas volver a encontrarte.
          </p>
        </div>
      </div>
    </section>
  )
}
