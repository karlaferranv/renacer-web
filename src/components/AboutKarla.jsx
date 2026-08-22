import { useReveal } from '../hooks/useReveal'

export default function AboutKarla() {
  const [ref, visible] = useReveal()

  return (
    <section id="marca" className="section about">
      <div className={`section-inner about-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="about-photo">
          <img src="/images/karla.jpg" alt="Karla, fundadora de Manifestación Magnética" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">Manifestación Magnética</span>
          <h2>Un espacio para volver a ti y construir desde ahí.</h2>
          <p>
            Manifestación Magnética nació de una idea sencilla pero profunda: la vida que
            queremos crear también comienza por la relación que tenemos con nosotras mismas.
          </p>
          <p>
            Aquí hablamos de manifestación, pero no desde la fantasía de desear algo y esperar
            que suceda. Hablamos de manifestación como una combinación de autoconocimiento,
            energía, intención, decisiones y acción — journaling, respiración consciente,
            meditación y programas de transformación como RENACER, para llevar lo aprendido a
            la vida real.
          </p>
          <p>
            No buscamos crear dependencia hacia una metodología ni hacia una persona. Buscamos
            que cada experiencia te acerque cada vez más a tu propia voz, tu criterio y tu
            capacidad de elegir.
          </p>
          <p>
            No creé esta marca porque tuviera todas las respuestas. La creé mientras yo
            también estaba buscando las mías. — Karla Ferran, fundadora
          </p>
        </div>
      </div>
    </section>
  )
}
