import { useReveal } from '../hooks/useReveal'

export default function AboutKarla() {
  const [ref, visible] = useReveal()

  return (
    <section id="marca" className="section brand">
      <div className={`section-inner reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <span className="eyebrow">Manifestación Magnética</span>
        <h2>Creado desde Manifestación Magnética.</h2>
        <p className="brand-lead">
          Manifestación Magnética nació como un espacio para hablar de <span className="pop-text">manifestación</span>,
          crecimiento personal, energía y conexión interior. Con el tiempo se convirtió en
          algo más amplio.
        </p>
        <p>
          Hoy reúne experiencias, diarios, herramientas y procesos diseñados para acompañar a
          personas que quieren <span className="highlight">conocerse con mayor profundidad</span>, dirigir mejor su energía y
          construir una vida con intención.
        </p>
        <p>
          Aquí la manifestación no se entiende como sentarse a esperar que algo suceda. Se
          entiende como una combinación de autoconocimiento, energía, intención, decisiones y
          acción. Porque manifestar no es escapar de tu realidad. Es aprender a <span className="pop-text">participar
          conscientemente</span> en su creación.
        </p>

        <div className="brand-grid">
          <div className="brand-block">
            <h3>Misión</h3>
            <p>Crear experiencias que ayuden a las personas a volver a sí mismas, conocerse, tomar decisiones con mayor conciencia y construir desde un lugar más auténtico. Acercar herramientas de crecimiento personal, manifestación y transformación interna de una forma práctica, humana y aplicable a la vida real.</p>
          </div>
          <div className="brand-block">
            <h3>Visión</h3>
            <p>Construir un ecosistema de experiencias donde el crecimiento personal no se quede únicamente en inspiración: diarios, programas, talleres, encuentros y retiros que acompañen distintas etapas de la vida. Un punto de encuentro entre espiritualidad y acción, presencia y ambición, crecimiento y humanidad.</p>
          </div>
          <div className="brand-block">
            <h3>Filosofía</h3>
            <p>Creemos en la energía, pero también en las decisiones. Creemos en visualizar, pero también en actuar. Creemos en sanar — no para quedarnos eternamente mirando el pasado, sino para poder elegir con mayor libertad lo que queremos construir.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
