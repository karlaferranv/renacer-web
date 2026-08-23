import { useEffect, useState } from 'react'
import { siteConfig, purchaseLink } from '../config/siteConfig'

const phases = [
  { num: '01', name: 'Ámate', duration: '21 días', text: 'Volver a ti. 21 audios de acompañamiento (+4h) y 5 meditaciones.', tone: 'terracotta' },
  { num: '02', name: 'El Arte de la Energía', duration: '31 días', text: 'Dirigir tu energía. Diario, clases de integración y respiración.', tone: 'wine' },
  { num: '03', name: 'Magnética', duration: '8 semanas', text: 'Construir algo real. 8 áreas y workbook de ≈198 páginas.', tone: 'dark' },
]

const forYouItems = [
  { text: 'Sabes que quieres algo diferente, aunque no lo puedas explicar del todo', tone: 'terracotta' },
  { text: 'Has trabajado en ti, pero sientes que necesitas dirección', tone: 'wine' },
  { text: 'Quieres dejar de quedarte solo en la inspiración', tone: 'dark' },
  { text: 'Tienes ideas o proyectos que no has logrado estructurar', tone: 'copper' },
  { text: 'Estás cansada de esperar sentirte lista', tone: 'pop' },
  { text: 'Quieres unir trabajo interno con acción real', tone: 'wine' },
]

const formats = [
  { name: 'Audios de acompañamiento', text: '21 audios (+4 horas), conversaciones íntimas, no clases teóricas.' },
  { name: 'Diarios de journaling', text: 'Un diario por fase, con preguntas y ejercicios de integración.' },
  { name: 'Meditaciones guiadas', text: '5 prácticas para distintos momentos del recorrido.' },
  { name: 'Clases de integración', text: 'Conectan varios días del proceso como un solo sistema.' },
  { name: 'Respiración consciente', text: 'Ejercicios para regresar al presente y regular tu energía.' },
  { name: 'Workbook de Magnética', text: '≈198 páginas de ejercicios, mapas y herramientas aplicadas.' },
  { name: 'Guía con IA', text: 'Conversa contigo cada día, sin juzgar ni dar respuestas absolutas.' },
]

const includes = ['21 audios', '31 días de práctica', '8 áreas de construcción', 'Diarios completos', 'Meditaciones', 'Guía con IA']

const faqs = [
  { q: '¿Necesito tener un negocio?', a: 'No. Ámate y El Arte de la Energía son procesos personales. Magnética puede comenzar desde una idea, talento o proyecto que ya exista.' },
  { q: '¿Cuánto tiempo necesito al día?', a: 'El programa está creado para integrarse a tu vida cotidiana, con audio, reflexión, escritura o práctica cada día.' },
  { q: '¿RENACER garantiza resultados?', a: 'No. El resultado depende del proceso, las decisiones y la implementación de cada persona. RENACER ofrece estructura, herramientas y acompañamiento real.' },
]

export default function LandingCorta() {
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="corto">
      {/* ===== HEADER MINI ===== */}
      <header className={`corto-header ${scrolled ? 'scrolled' : ''}`}>
        <span className="corto-brand">Manifestación Magnética</span>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary corto-header-btn">
          Comenzar mi RENACER
        </a>
      </header>

      {/* ===== HERO ===== */}
      <section className="corto-hero">
        <p className="renacer-mark corto-hero-mark">RENACER</p>
        <h1>
          <span className="highlight">90 días</span> para volver a ti, dirigir tu energía y
          construir algo real.
        </h1>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary corto-cta-big">
          Comenzar mi RENACER
        </a>
        <p className="corto-hero-note">3 fases · 90 días · guía con IA incluida</p>
      </section>

      {/* ===== LAS 3 FASES — visual, en bloques de color ===== */}
      <section className="corto-phases">
        {phases.map((p) => (
          <div className={`corto-phase-card corto-phase-${p.tone}`} key={p.num}>
            <span className="corto-phase-num">{p.num}</span>
            <h3>{p.name}</h3>
            <span className="corto-phase-duration">{p.duration}</span>
            <p className="corto-phase-text">{p.text}</p>
          </div>
        ))}
      </section>

      {/* ===== QUÉ TRAE RENACER — formatos reales ===== */}
      <section className="corto-formats">
        <h2>¿Qué trae RENACER, exactamente?</h2>
        <div className="corto-formats-grid">
          {formats.map((f) => (
            <div className="corto-format-item" key={f.name}>
              <h4>{f.name}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ES PARA TI SI — tarjetas de colores, interactivas ===== */}
      <section className="corto-foryou">
        <h2>RENACER es para ti si...</h2>
        <div className="corto-foryou-grid">
          {forYouItems.map((it) => (
            <div className={`corto-foryou-card corto-foryou-${it.tone}`} key={it.text}>
              <span className="corto-foryou-check">✓</span>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRECIO ===== */}
      <section className="corto-price">
        <span className="eyebrow">Inversión completa</span>
        <p className="corto-price-amount">
          <span className="highlight">${siteConfig.prices.renacer}</span> <span className="unit">USD</span>
        </p>
        <div className="corto-includes">
          {includes.map((it) => (
            <span key={it}>{it}</span>
          ))}
        </div>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-light corto-cta-big">
          Comenzar mi RENACER
        </a>
      </section>

      {/* ===== FAQ MINI ===== */}
      <section className="corto-faq">
        <h2>Preguntas rápidas</h2>
        {faqs.map((f, i) => (
          <div className={`corto-faq-item ${openFaq === i ? 'open' : ''}`} key={f.q}>
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              {f.q}
              <span className="corto-faq-icon">{openFaq === i ? '−' : '+'}</span>
            </button>
            {openFaq === i && <p>{f.a}</p>}
          </div>
        ))}
      </section>

      {/* ===== CIERRE ===== */}
      <section className="corto-final">
        <p className="corto-final-text">
          No necesitas tener toda tu vida resuelta. Necesitas <span className="pop-text">dejar de posponer</span> la
          conversación contigo misma.
        </p>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary corto-cta-big">
          Comenzar mi RENACER
        </a>
      </section>
    </div>
  )
}
