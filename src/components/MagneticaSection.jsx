import { useReveal } from '../hooks/useReveal'

export default function MagneticaSection() {
  const [ref, visible] = useReveal()

  return (
    <section className="section phase-section">
      <div className={`section-inner phase-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="phase-visual">
          <img src="/images/magnetica.jpg" alt="Magnética — fase 3 de RENACER" />
        </div>
        <div className="phase-copy">
          <span className="eyebrow">Fase 03 · 8 semanas</span>
          <h3>Magnética</h3>
          <p>
            Después de trabajar en quién eres y aprender a dirigir tu energía, llega una
            pregunta inevitable: ¿qué vas a construir con todo eso? Aquí le das estructura a
            una idea, talento o proyecto para que pueda existir en el mundo real.
          </p>
          <p>
            No necesitas tener todo resuelto antes de empezar. Necesitas estar dispuesta a
            dejar de esperar sentirte completamente lista.
          </p>
          <ul>
            <li>Tus cimientos, tu oferta y tu marca personal</li>
            <li>Tu mensaje y tu contenido, con dirección clara</li>
            <li>Herramientas para comenzar a comunicar y vender desde la consciencia</li>
          </ul>
          <p className="phase-outcome">
            <strong>Lo que comienza a tomar forma:</strong> una visión más clara de lo que
            quieres construir, una estructura para sostenerla y pasos concretos para
            empezar a llevarla al mundo. No solo una idea en tu cabeza — una dirección, y
            algo que finalmente puedes comenzar a mover.
          </p>
        </div>
      </div>
    </section>
  )
}
