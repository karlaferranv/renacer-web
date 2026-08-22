import { useReveal } from '../hooks/useReveal'

export default function KarlaFerran() {
  const [ref, visible] = useReveal()

  return (
    <section id="karla" className="section about">
      <div className={`section-inner about-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="about-photo">
          <img src="/images/karla.jpg" alt="Karla Ferran, fundadora de Manifestación Magnética" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">Detrás de RENACER</span>
          <h2>Karla Ferran</h2>
          <p className="about-role">Fundadora de Manifestación Magnética</p>
          <p className="about-quote">
            No creé RENACER porque tuviera todas las respuestas. Lo creé mientras también
            aprendía a hacerme mejores preguntas.
          </p>
          <p>
            Mi relación con el crecimiento personal, la manifestación, el journaling y el
            emprendimiento me ha llevado a cuestionar muchas de las ideas que alguna vez tuve
            sobre éxito, propósito y la vida que quería construir.
          </p>
          <p>
            He comenzado proyectos. He cambiado de dirección. He tenido ideas que funcionaron
            y otras que no. He tenido que empezar nuevamente. Y gran parte de RENACER nace
            precisamente de ahí. No desde la perfección. Desde la experiencia.
          </p>
          <p>
            Hoy transformo muchos de esos aprendizajes, preguntas y herramientas en espacios
            que puedan ayudar a otras personas a conocerse, tomar decisiones con mayor
            intención y construir aquello que llevan tiempo imaginando.
          </p>
          <p>Manifestación Magnética ha crecido conmigo. Y RENACER es una de las expresiones más completas de ese recorrido.</p>
        </div>
      </div>
    </section>
  )
}
