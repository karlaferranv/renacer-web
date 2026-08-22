import { useReveal } from '../hooks/useReveal'

// ⚠️ Reemplaza estos 3 testimonios por testimonios reales de tus alumnas
// antes de publicar. Mantén el mismo formato: quote + name.
const testimonials = [
  { quote: '[TESTIMONIO_1 — pega aquí una frase real de una alumna]', name: '[NOMBRE_1]' },
  { quote: '[TESTIMONIO_2 — pega aquí una frase real de una alumna]', name: '[NOMBRE_2]' },
  { quote: '[TESTIMONIO_3 — pega aquí una frase real de una alumna]', name: '[NOMBRE_3]' },
]

export default function Testimonials() {
  const [ref, visible] = useReveal()

  return (
    <section className="section testimonials">
      <div className="section-inner">
        <div className="testimonials-head">
          <span className="eyebrow">Voces de este recorrido</span>
          <h2>Lo que otras mujeres han vivido dentro de RENACER.</h2>
        </div>

        <div className={`testimonials-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="testimonial-quote">"{t.quote}"</p>
              <p className="testimonial-name">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
