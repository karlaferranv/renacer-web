import { useReveal } from '../hooks/useReveal'

const phases = [
  {
    num: '01',
    name: 'Ámate',
    duration: '21 días · Volver a ti',
    text: 'Antes de construir algo nuevo, necesitas reconocer desde dónde estás construyendo. Observas tu relación contigo misma con honestidad: cómo te hablas, qué toleras, qué heridas siguen condicionando tus decisiones.',
  },
  {
    num: '02',
    name: 'El Arte de la Energía',
    duration: '31 días · Dirigir tu mundo interno',
    text: 'No toda tu energía merece ir hacia todo. Aprendes a observarla, protegerla y dirigirla con intención — hasta distinguir entre desear algo y convertirte en alguien capaz de sostenerlo.',
  },
  {
    num: '03',
    name: 'Magnética',
    duration: '8 semanas · Construir algo real',
    text: 'Le das estructura a tu visión: cimientos, oferta, marca, mensaje. No necesitas tenerlo todo resuelto antes de empezar — necesitas dejar de esperar sentirte completamente lista.',
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
          <span className="divider divider-left"><span className="divider-mark"></span></span>
          <p className="journey-intro">
            RENACER no es una colección de programas separados. Es un recorrido diseñado para
            llevarte desde tu mundo interior hasta la vida que quieres construir: primero
            vuelves a ti, después aprendes a dirigir tu energía, y finalmente conviertes esa
            nueva versión tuya en decisiones, acciones y resultados reales.
          </p>
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
