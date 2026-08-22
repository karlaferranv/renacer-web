import { useReveal } from '../hooks/useReveal'

export default function MagneticaSection() {
  const [ref, visible] = useReveal()

  return (
    <section className="section phase-section">
      <div className={`section-inner phase-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="phase-visual">[IMAGEN_MAGNETICA]</div>
        <div className="phase-copy">
          <span className="eyebrow">Fase 03 · 38 días</span>
          <h3>Magnética</h3>
          <p>
            La última fase convierte tu evolución interna en construcción real: propósito,
            marca personal, negocio y contenido. Aquí es donde tu transformación deja de ser
            solo tuya y empieza a moverse hacia afuera.
          </p>
          <ul>
            <li>Claridad de propósito y dirección personal</li>
            <li>Bases de marca personal y negocio con sentido</li>
            <li>Poder personal aplicado a la acción, no solo a la intención</li>
          </ul>
          <p>Aquí cierra tu RENACER: con una nueva versión de ti misma, ya en movimiento.</p>
        </div>
      </div>
    </section>
  )
}
