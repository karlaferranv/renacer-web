import { useReveal } from '../hooks/useReveal'

const steps = [
  { num: '01', title: 'Volver a ti' },
  { num: '02', title: 'Dirigir tu energía' },
  { num: '03', title: 'Construir' },
]

export default function Method() {
  const [ref, visible] = useReveal()

  return (
    <section className="section method">
      <div className="section-inner">
        <p className="method-intro">
          RENACER no son tres programas colocados uno detrás del otro. Es una secuencia.
          Primero vuelves a ti. Después aprendes a dirigir tu energía. Y finalmente conviertes
          esa nueva dirección en decisiones, estructura y acción.
        </p>

        <div className={`method-steps reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {steps.map((s) => (
            <div className="method-step" key={s.num}>
              <span className="method-num">{s.num}</span>
              <span className="method-title">{s.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
