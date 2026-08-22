import { useReveal } from '../hooks/useReveal'

const stats = ['8 semanas', '8 áreas de construcción', '≈198 páginas de trabajo', 'prompts de IA', 'herramientas', 'entregables', 'implementación', 'plan de 90 días']

const areas = [
  { num: '01', title: 'Cimientos', text: 'Qué estoy construyendo, por qué existe, para quién y qué transformación quiero generar. Claridad antes de estrategia.' },
  { num: '02', title: 'Oferta', text: 'Estructura, transformación, formato, precio y presentación. ¿Qué vendo y por qué alguien debería quererlo?' },
  { num: '03', title: 'Marca', text: 'Identidad, mensaje, voz y posicionamiento. No solamente un logo bonito: una marca que tenga algo que decir.' },
  { num: '04', title: 'Contenido', text: 'Transformar ideas en comunicación, con intención, estrategia y personalidad.' },
  { num: '05', title: 'Ventas', text: 'Una forma humana y clara de presentar y vender tu oferta — nunca desde la presión.' },
  { num: '06', title: 'Inteligencia artificial', text: 'Contexto, prompts, asistentes e investigación. La IA no reemplaza tu criterio. Lo amplifica.' },
  { num: '07', title: 'Sistemas', text: 'Procesos, operaciones, métricas y herramientas. Crecer sin estructura también puede convertirse en caos.' },
  { num: '08', title: 'Expansión', text: 'Qué sigue, qué priorizar y tu siguiente plan de 90 días.' },
]

export default function MagneticaSection() {
  const [ref, visible] = useReveal()

  return (
    <section className="section phase-section">
      <div className={`section-inner phase-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="phase-visual">
          <img src="/images/magnetica.jpg" alt="Magnética — fase 3 de RENACER" />
        </div>
        <div className="phase-copy">
          <span className="eyebrow">Fase 03 · 8 semanas para convertir tu visión en algo real</span>
          <h3>Magnética</h3>
          <p>
            Después de conocerte. Después de aprender a dirigir tu energía. Llega una
            pregunta: ¿qué vas a construir con todo eso?
          </p>
          <p>
            Magnética es la fase de construcción. Durante ocho semanas trabajas para convertir
            una idea, talento, conocimiento, servicio o proyecto en algo claro, estructurado y
            preparado para existir en el mundo real. Aquí no vas a quedarte solamente pensando
            en lo que algún día podrías hacer. Vas a comenzar a construirlo.
          </p>

          <div className="phase-stats">
            {stats.map((s) => (
              <span className="phase-stat" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-inner">
        <p className="adn-title">Las 8 áreas de Magnética</p>
        <div className="adn-grid">
          {areas.map((a) => (
            <div className="adn-item" key={a.num}>
              <span className="adn-num">ADN {a.num}</span>
              <h4>{a.title}</h4>
              <p>{a.text}</p>
            </div>
          ))}
        </div>

        <p className="phase-outcome adn-outcome">
          <strong>Lo que comienza a tomar forma:</strong> tu idea, tu oferta, tu precio, tu
          marca, tu mensaje, tu contenido, tu proceso de venta, tus sistemas, tus herramientas
          y tu siguiente dirección. Ya no solamente tienes una visión. Empiezas a tener
          estructura para sostenerla.
        </p>
      </div>
    </section>
  )
}
