import { useReveal } from '../hooks/useReveal'

export default function ForYou() {
  const [ref, visible] = useReveal()

  return (
    <section className="section foryou">
      <div className="section-inner">
        <span className="eyebrow">¿Es RENACER para ti?</span>
        <h2 style={{ maxWidth: 560, marginBottom: '2.4rem' }}>Te lo decimos con honestidad, no con presión.</h2>

        <div className={`foryou-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <div className="foryou-col">
            <h3>RENACER es para ti si...</h3>
            <ul>
              <li><span className="emoji">🎭</span> Por fuera todo parece resuelto, pero por dentro sigues esperando que algo cambie de verdad</li>
              <li><span className="emoji">🔁</span> Ya te sabes de memoria los consejos; lo que te falta es sostenerlos más de tres días</li>
              <li><span className="emoji">⏳</span> Estás dispuesta a darle 90 días reales a tu proceso, no una promesa de fin de semana</li>
              <li><span className="emoji">😮‍💨</span> Estás cansada de escuchar a todos menos a ti misma</li>
              <li><span className="emoji">✨</span> Quieres una vida que se sienta tuya, no una que solo se vea bien desde afuera</li>
            </ul>
          </div>
          <div className="foryou-col dim">
            <h3>Quizás no es el momento si...</h3>
            <ul>
              <li><span className="emoji">🪄</span> Buscas una fórmula mágica o resultados sin trabajo interno</li>
              <li><span className="emoji">⏰</span> No puedes darte 15 a 30 minutos al día durante este proceso</li>
              <li><span className="emoji">🩺</span> Necesitas atención terapéutica clínica en este momento</li>
              <li><span className="emoji">⏸️</span> Prefieres esperar a sentirte "más lista" antes de empezar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
