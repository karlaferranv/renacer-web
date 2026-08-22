import { useReveal } from '../hooks/useReveal'

const phases = [
  {
    num: '01',
    name: 'Ámate',
    duration: '21 días',
    text: 'Reconstruyes tu relación contigo misma: sanas heridas internas, cambias creencias limitantes y aprendes a sostenerte con amor propio real, no con frases bonitas.',
  },
  {
    num: '02',
    name: 'El Arte de la Energía',
    duration: '31 días',
    text: 'Construyes una nueva forma de vivir: gratitud, respiración consciente, elevación de tu energía y una manifestación consciente, sin promesas mágicas ni atajos.',
  },
  {
    num: '03',
    name: 'Magnética',
    duration: '38 días',
    text: 'Llevas tu transformación a la acción: propósito, marca personal, negocio y contenido. Aquí tu evolución interna se convierte en movimiento real hacia afuera.',
  },
]

export default function Journey() {
  const [ref, visible] = useReveal()

  return (
    <section id="recorrido" className="section journey">
      <div className="section-inner">
        <div className="journey-head">
          <span className="eyebrow">El recorrido</span>
          <h2>Tres fases. Un mismo hilo conductor: tú.</h2>
        </div>

        <div className={`journey-spine reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {phases.map((phase) => (
            <div className="journey-phase" key={phase.num}>
              <span className="journey-num">{phase.num}</span>
              <div>
                <span className="phase-duration">{phase.duration}</span>
                <h3>{phase.name}</h3>
              </div>
              <p>{phase.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
