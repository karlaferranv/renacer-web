import { useReveal } from '../hooks/useReveal'

export default function ForYou() {
  const [ref, visible] = useReveal()

  return (
    <section className="section foryou">
      <div className="section-inner">
        <span className="eyebrow">¿Es RENACER para ti?</span>
        <h2 style={{ maxWidth: 560, marginBottom: '2.4rem' }}>Te lo decimos con honestidad, no con presión.</h2>

        <div className={`foryou-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <div className="foryou-col">
            <h3>RENACER es para ti si...</h3>
            <ul>
              <li>Sientes que has crecido, pero algo interno se sigue repitiendo</li>
              <li>Quieres herramientas prácticas, no solo inspiración pasajera</li>
              <li>Estás lista para sostener un proceso de 90 días, no una solución instantánea</li>
              <li>Buscas volver a confiar en tu propia voz, más que en la de otros</li>
              <li>Quieres una vida más alineada, construida desde adentro hacia afuera</li>
            </ul>
          </div>
          <div className="foryou-col dim">
            <h3>Quizás no es el momento si...</h3>
            <ul>
              <li>Buscas una fórmula mágica o resultados sin trabajo interno</li>
              <li>No puedes darte 15 a 30 minutos al día durante este proceso</li>
              <li>Necesitas atención terapéutica clínica en este momento</li>
              <li>Prefieres esperar a sentirte "más lista" antes de empezar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
