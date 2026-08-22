import { useReveal } from '../hooks/useReveal'

const items = [
  { title: 'Ámate, El Arte de la Energía y Magnética', text: 'Las tres fases completas del programa, en formato digital.' },
  { title: 'Plataforma de acompañamiento', text: 'Acceso ordenado día a día, para que nunca te preguntes qué sigue.' },
  { title: 'Audios y videos guía', text: 'Contenido breve para cada día, pensado para escuchar mientras vives tu vida real.' },
  { title: 'Meditaciones incluidas', text: 'Prácticas para acompañar los momentos más profundos del proceso.' },
  { title: 'Guía con inteligencia artificial', text: 'Una IA entrenada en tu proceso que conversa contigo cada día, sin juzgar ni dar respuestas absolutas.' },
  { title: 'Recursos descargables', text: 'Materiales de apoyo para llevar cada fase contigo, más allá de la pantalla.' },
]

export default function Included() {
  const [ref, visible] = useReveal()

  return (
    <section className="section included">
      <div className="section-inner">
        <span className="eyebrow" style={{ color: '#d98b62' }}>Qué incluye</span>
        <h2>Todo lo que necesitas para sostener el proceso.</h2>
        <p className="included-sub">Nada queda suelto. Cada pieza de RENACER está pensada para acompañarte sin que tengas que adivinar el siguiente paso.</p>

        <div className={`included-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {items.map((item) => (
            <div className="included-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
