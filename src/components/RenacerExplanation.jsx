import { useReveal } from '../hooks/useReveal'

export default function RenacerExplanation() {
  const [ref, visible] = useReveal()

  return (
    <section id="renacer" className="section explanation">
      <div className={`section-inner explanation-inner reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <span className="eyebrow">¿Qué es RENACER?</span>
        <p className="renacer-mark">RENACER</p>
        <span className="divider divider-left"><span className="divider-mark"></span></span>
        <h2>Un recorrido de <span className="highlight">90 días</span>. No una fórmula, un acompañamiento real.</h2>
        <p className="explanation-lead">
          No vinimos a motivarte un rato. Vinimos a quedarnos con las preguntas incómodas, los
          90 días completos, hasta que la respuesta te la des tú misma — y no un video más.
        </p>

        <div className="explanation-grid">
          <div className="explanation-item">
            <h3>Tres fases, una transformación</h3>
            <p>No son tres programas por separado. Es un mismo camino que te lleva de la mano: primero vuelves a ti, después aprendes a sostener tu propia energía, y por último conviertes esa nueva versión tuya en decisiones y vida real — sin saltarte pasos ni forzar nada.</p>
          </div>
          <div className="explanation-item">
            <h3>15 a 30 minutos al día</h3>
            <p>Un audio, un video corto, tu diario abierto y una pregunta esperándote. Ese es tu momento del día — no una tarea más en tu lista, sino el ratito en el que por fin te escuchas a ti antes que a todo lo demás.</p>
          </div>
          <div className="explanation-item">
            <h3>Nunca caminas a ciegas</h3>
            <p>Una guía con inteligencia artificial entrenada en tu proceso conversa contigo cada día, sostiene el hilo de tu diario y te acompaña sin juzgar ni darte respuestas absolutas — para que confíes cada vez más en tu propia voz.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
