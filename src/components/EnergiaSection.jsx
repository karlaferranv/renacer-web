import { useReveal } from '../hooks/useReveal'

const stats = ['31 días', '1 diario completo', '31 experiencias de integración', 'meditación', 'respiración', 'audios', 'clases de integración']

export default function EnergiaSection() {
  const [ref, visible] = useReveal()

  return (
    <section className="section phase-section reverse">
      <div className={`section-inner phase-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="phase-visual">
          <img src="/images/arte-energia.jpg" alt="El Arte de la Energía — fase 2 de RENACER" />
        </div>
        <div className="phase-copy">
          <span className="eyebrow">Fase 02 · 31 días para aprender a dirigirte</span>
          <h3>El Arte de la Energía</h3>
          <p>
            Después de volver a ti comienza otra conversación: ¿qué estás haciendo con tu
            energía? Dónde la colocas. Qué la consume. Qué la expande. Qué pensamientos
            alimentas, qué emociones sostienes y hacia dónde diriges tu atención.
          </p>
          <p>
            El Arte de la Energía es un recorrido de 31 días para comprender que manifestar
            no significa esperar. Significa aprender a participar conscientemente en lo que
            estás creando.
          </p>
          <p className="phase-sub-title">Dentro encontrarás</p>
          <ul>
            <li><strong>31 días de práctica</strong> — un proceso diario sobre energía, pensamientos, emociones, atención, hábitos, gratitud, intención, presencia y acción.</li>
            <li><strong>Diario El Arte de la Energía</strong> — reflexión, journaling, ejercicios y acciones de integración día a día.</li>
            <li><strong>Clases de integración</strong> — espacios donde varios días del proceso se conectan y se comprenden como un sistema, no como conceptos sueltos.</li>
            <li><strong>Meditación y respiración consciente</strong> — un reto de meditación y ejercicios para regresar al presente y regular tu estado interno.</li>
          </ul>

          <div className="phase-stats">
            {stats.map((s) => (
              <span className="phase-stat" key={s}>{s}</span>
            ))}
          </div>

          <p className="phase-outcome">
            <strong>Lo que comienza a tomar forma:</strong> menos energía dispersa. Más
            presencia. Más conciencia sobre lo que piensas, consumes, sostienes y alimentas.
            Más intención al momento de elegir. Y una nueva forma de comprender la
            manifestación: energía + intención + acción.
          </p>
        </div>
      </div>
    </section>
  )
}
