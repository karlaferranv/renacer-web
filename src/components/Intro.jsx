import { useReveal } from '../hooks/useReveal'

export default function Intro() {
  const [ref, visible] = useReveal()

  return (
    <section className="section intro">
      <div className={`section-inner intro-inner reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <span className="eyebrow">Antes de seguir leyendo</span>
        <h2>Ya leíste los libros. Ya escuchaste los podcasts. Ya escribiste la lista otra vez en enero.</h2>
        <p>
          Y en algún punto de la noche, cuando nadie te ve, vuelve la misma pregunta: ¿por qué
          sigo sintiéndome igual?
        </p>
        <p>
          No es que no lo hayas intentado. Es que nadie te enseñó a sostener el cambio después
          del primer impulso de motivación. RENACER no es información nueva: es el
          acompañamiento de 90 días que faltaba para que lo que ya sabes, por fin, se convierta
          en quien eres.
        </p>
      </div>
    </section>
  )
}
