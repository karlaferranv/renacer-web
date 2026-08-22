import { useReveal } from '../hooks/useReveal'

export default function EnergiaSection() {
  const [ref, visible] = useReveal()

  return (
    <section className="section phase-section reverse">
      <div className={`section-inner phase-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="phase-visual">[IMAGEN_ARTE_ENERGIA]</div>
        <div className="phase-copy">
          <span className="eyebrow">Fase 02 · 31 días</span>
          <h3>El Arte de la Energía</h3>
          <p>
            Cuando comienzas a conocerte, empiezas a notar algo importante: no toda tu
            energía merece ir hacia todo. Aquí aprendes a observarla, protegerla y dirigirla
            con mayor intención — la manifestación deja de ser "pensar positivo" y se
            convierte en una práctica consciente.
          </p>
          <p>
            Aprenderás a distinguir entre desear algo y realmente convertirte en alguien
            capaz de sostenerlo.
          </p>
          <ul>
            <li>Gratitud, respiración y presencia como práctica diaria</li>
            <li>Enfoque e intención sobre dónde pones tu energía cada día</li>
            <li>Hábitos y emociones trabajados hacia la acción alineada</li>
          </ul>
          <p className="phase-outcome">
            <strong>Lo que comienza a tomar forma:</strong> menos energía dispersa, más
            presencia, más conciencia sobre dónde estás poniendo tu poder cada día. Porque la
            energía sin dirección se dispersa; la energía con intención puede transformar una
            vida.
          </p>
        </div>
      </div>
    </section>
  )
}
