import { useReveal } from '../hooks/useReveal'

const verbs = ['Escuchar', 'Reflexionar', 'Escribir', 'Integrar', 'Decidir', 'Construir']

export default function Experience() {
  const [ref, visible] = useReveal()

  return (
    <section className="section experience">
      <div className="section-inner">
        <span className="eyebrow">Cómo se vive</span>
        <h2>No es contenido para guardar. Es un proceso para vivir.</h2>
        <p className="experience-lead">
          RENACER no está pensado para que abras una plataforma, veas cien videos y después
          sientas culpa porque nunca terminaste. Cada recurso tiene una función.
        </p>

        <div className={`experience-verbs reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {verbs.map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>

        <p className="experience-close">
          El objetivo no es consumir más. Es relacionarte de otra manera con lo que aprendes.
        </p>
      </div>
    </section>
  )
}
