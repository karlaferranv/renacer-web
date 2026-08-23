import { useEffect, useState } from 'react'
import { siteConfig, purchaseLink } from '../config/siteConfig'

const phases = [
  { num: '01', name: 'Ámate', duration: '21 días', tone: 'terracotta' },
  { num: '02', name: 'El Arte de la Energía', duration: '31 días', tone: 'wine' },
  { num: '03', name: 'Magnética', duration: '8 semanas', tone: 'dark' },
]

const forYou = [
  'Sabes que quieres algo diferente, aunque no lo puedas explicar del todo',
  'Has trabajado en ti, pero sientes que necesitas dirección',
  'Estás cansada de esperar sentirte lista',
  'Quieres unir trabajo interno con acción real',
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
          </div>
        ))}
      </section>

      {/* ===== ES PARA TI SI ===== */}
      <section className="corto-foryou">
        <h2>RENACER es para ti si...</h2>
        <ul>
          {forYou.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
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
          No necesitas tener toda tu vida resuelta. Necesitas dejar de posponer la
          conversación contigo misma.
        </p>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary corto-cta-big">
          Comenzar mi RENACER
        </a>
      </section>
    </div>
  )
}
