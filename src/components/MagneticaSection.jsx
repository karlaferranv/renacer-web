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

        <div className={`road road-magnetica reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <svg className="road-svg" viewBox="0 0 400 1400" preserveAspectRatio="none">
            <path d="M60,60 C300,60 300,240 340,240 C100,240 100,420 60,420 C300,420 300,600 340,600 C100,600 100,780 60,780 C300,780 300,960 340,960 C100,960 100,1140 60,1140 C300,1140 300,1320 340,1320" />
          </svg>

          {areas.map((a, i) => {
            const isRight = i % 2 === 1
            const top = ((60 + i * 180) / 1400) * 100
            return (
              <div
                className={`road-stop road-stop-adn ${isRight ? 'road-stop-right' : ''}`}
                key={a.num}
                style={isRight ? { top: `${top}%`, right: '15%' } : { top: `${top}%`, left: '15%' }}
              >
                <span className="road-dot"></span>
                <div className="road-label">
                  <span className="road-num">ADN {a.num}</span>
                  <span className="road-title">{a.title}</span>
                  <span className="road-text">{a.text}</span>
                </div>
              </div>
            )
          })}
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
