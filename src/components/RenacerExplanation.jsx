import { useReveal } from '../hooks/useReveal'

export default function RenacerExplanation() {
  const [ref, visible] = useReveal()

  return (
    <section id="renacer" className="section explanation">
      <div className={`section-inner explanation-inner reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <span className="eyebrow">¿Qué es RENACER?</span>
        <h2>Un recorrido de 90 días. No una fórmula, un acompañamiento real.</h2>
        <p className="explanation-lead">
          No creemos en motivar. Creemos en acompañar. RENACER no te da respuestas absolutas: te
          hace las preguntas correctas, en el momento correcto, para que vuelvas a confiar en tu
          propia voz.
        </p>

        <div className="explanation-grid">
          <div className="explanation-item">
            <h3>Tres fases, una transformación</h3>
            <p>Cada etapa construye sobre la anterior: primero te reconcilias contigo, luego aprendes a dirigir tu energía, y por último la conviertes en acción y propósito.</p>
          </div>
          <div className="explanation-item">
            <h3>15 a 30 minutos al día</h3>
            <p>Audios y videos breves, journaling guiado, preguntas, retos suaves y meditaciones. Diseñado para caber en tu vida real, no para complicarla.</p>
          </div>
          <div className="explanation-item">
            <h3>Nunca estás sola</h3>
            <p>Grupo privado de acompañamiento y una guía con inteligencia artificial entrenada en tu proceso, que conversa contigo cada día sin juzgar ni dar respuestas absolutas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
