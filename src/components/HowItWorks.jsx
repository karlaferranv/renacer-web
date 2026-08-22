import { useReveal } from '../hooks/useReveal'

const items = [
  { title: 'Tu momento del día', text: 'De 15 a 30 minutos, a tu ritmo: audio o video corto, reflexión y journaling guiado.' },
  { title: 'Preguntas, no respuestas', text: 'Cada día te lleva a mirar hacia adentro con preguntas reales, retos suaves y mapas visuales cuando el proceso lo pide.' },
  { title: 'Acompañamiento constante', text: 'Grupo privado de apoyo y una guía con IA que continúa la conversación de tu diario, cada día, a tu propio paso.' },
]

export default function HowItWorks() {
  const [ref, visible] = useReveal()

  return (
    <section className="section howitworks">
      <div className="section-inner">
        <div className="howitworks-head">
          <span className="eyebrow">Cómo funciona</span>
          <h2>Un ritmo diario que cabe en tu vida real.</h2>
        </div>

        <div className={`howitworks-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {items.map((item) => (
            <div className="howitworks-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
