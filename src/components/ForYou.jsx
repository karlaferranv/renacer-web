import { useReveal } from '../hooks/useReveal'

export default function ForYou() {
  const [ref, visible] = useReveal()

  return (
    <section className="section foryou">
      <div className="section-inner">
        <span className="eyebrow">¿Es RENACER para ti?</span>
        <h2 style={{ maxWidth: 560, marginBottom: '2.4rem' }}>RENACER puede ser para ti si...</h2>

        <div className={`foryou-single reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <ul>
            <li>Sabes que quieres algo diferente, aunque todavía no puedas explicarlo completamente</li>
            <li>Has trabajado en ti, pero sientes que necesitas dirección</li>
            <li>Consumes crecimiento personal, pero quieres dejar de quedarte solamente en la inspiración</li>
            <li>Tienes ideas, talentos o proyectos que todavía no has logrado estructurar</li>
            <li>Estás cansada de esperar sentirte lista</li>
            <li>Quieres construir desde un lugar más consciente</li>
            <li>Quieres unir trabajo interno con acción</li>
            <li>Sientes que estás entrando en una nueva etapa de tu vida</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
