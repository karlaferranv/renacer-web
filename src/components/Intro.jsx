import { useReveal } from '../hooks/useReveal'

export default function Intro() {
  const [ref, visible] = useReveal()

  return (
    <section className="section intro">
      <div className={`section-inner intro-inner reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <span className="eyebrow">Antes de empezar</span>
        <h2>Quizás llevas tiempo intentándolo sola.</h2>
        <p>
          Has leído, has escuchado, has puesto la intención. Y aun así sientes que algo se
          repite: la misma inseguridad, la misma historia, la misma versión tuya esperando
          permiso para aparecer.
        </p>
        <p>
          RENACER no es un curso más. Es un espacio de 90 días para conocerte de verdad, soltar
          lo que ya no eres y construir, paso a paso, la vida que quieres vivir desde adentro
          hacia afuera.
        </p>
      </div>
    </section>
  )
}
