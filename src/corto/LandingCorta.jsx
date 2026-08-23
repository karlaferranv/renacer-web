import { useEffect, useState } from 'react'
import { siteConfig, purchaseLink } from '../config/siteConfig'

// ============================================================
// DATOS — todo lo que aparece aquí ya está confirmado en el
// resto del sitio. Donde un dato es aproximado (lo marcó Karla
// como "como cinco"), se deja con ~ en vez de inventar precisión.
// ============================================================

const identificacion = [
  'Sabes que quieres una vida diferente, pero no sabes qué cambiar primero',
  'Consumes mucho contenido de crecimiento personal, pero algo no termina de convertirse en vida real',
  'Tienes ideas, sueños y energía — pero están dispersos',
  'A veces sabes exactamente qué quieres, y otras veces vuelves a dudar',
]

const metodo = [
  { roman: 'I', word: 'TÚ', phase: 'Ámate' },
  { roman: 'II', word: 'TU ENERGÍA', phase: 'El Arte de la Energía' },
  { roman: 'III', word: 'LO QUE CONSTRUYES', phase: 'Magnética' },
]

const phases = [
  {
    roman: 'I',
    name: 'Ámate',
    duration: '21 días para volver a ti',
    tone: 'terracotta',
    intro: 'No es un programa de "amor propio" genérico. Es una conversación profunda contigo: cómo te hablas, qué toleras, qué postergas, qué promesas te haces y rompes, dónde sigues buscando aprobación.',
    trabajo: ['Autoimagen', 'Diálogo interno', 'Límites', 'Merecimiento', 'Comparación', 'Elegirte'],
    dentro: [
      { h: 'Una conversación contigo cada día', t: '21 audios que acompañan cada uno de los 21 días.' },
      { h: 'Un lugar para verte con honestidad', t: 'Diario de 21 días, con journaling y ejercicios de reflexión.' },
      { h: 'Momentos para volver al presente', t: '5 meditaciones guiadas.' },
      { h: 'Todo en un solo lugar', t: 'Recorrido organizado en Notion, día a día.' },
    ],
    resultado: 'Tendrás mayor claridad sobre quién eres hoy, qué historias sigues repitiendo, dónde te has estado dejando para después — y qué significa empezar a elegirte de verdad.',
  },
  {
    roman: 'II',
    name: 'El Arte de la Energía',
    duration: '31 días para dejar de dispersarte',
    tone: 'wine',
    intro: 'Después de observarte, ahora observas qué haces con tu energía: tu atención, tus pensamientos, tus hábitos, tu enfoque. La energía sin dirección se dispersa. La energía con intención transforma realidades.',
    trabajo: ['Atención', 'Pensamientos', 'Emociones', 'Hábitos', 'Intención', 'Acción'],
    dentro: [
      { h: 'Un recorrido diario de 31 días', t: '~5 audios y clases de integración que conectan varios días como un sistema.' },
      { h: 'Un lugar para integrar lo que vives', t: 'Diario de 31 días, con ejercicios y reflexión.' },
      { h: 'Volver al presente cuando lo necesites', t: 'Respiración consciente y prácticas de regulación.' },
      { h: 'Todo en un solo lugar', t: 'Recorrido organizado en Notion, día a día.' },
    ],
    resultado: 'Tendrás mayor conciencia de dónde estás colocando tu energía, qué la dispersa, qué la drena, y cómo empezar a dirigirla intencionalmente hacia lo que quieres construir.',
  },
  {
    roman: 'III',
    name: 'Magnética',
    duration: '8 semanas para convertir tu visión en algo real',
    tone: 'dark',
    intro: 'Aquí el viaje cambia de energía: ahora construimos. Magnética toma tu identidad, tu claridad y tu dirección, y las lleva a estructura, oferta, marca y acción real.',
    trabajo: ['Cimientos', 'Oferta', 'Marca', 'Contenido', 'Ventas', 'Inteligencia artificial'],
    dentro: [
      { h: 'Un sistema de trabajo, no una lista de videos', t: '~5 audios y 4 clases distribuidos en las 8 áreas de construcción.' },
      { h: 'Herramientas que puedes aplicar de inmediato', t: 'Workbook de ≈198 páginas: ejercicios, mapas y prompts de IA.' },
      { h: 'Todo en un solo lugar', t: 'Recorrido organizado en Notion, día a día.' },
    ],
    resultado: 'No terminarás solamente inspirada. Terminarás con una visión más estructurada, una oferta más clara y una base real desde la cual comunicar, construir y vender.',
  },
]

const stack = [
  { label: '3 fases progresivas', value: 'Ámate · El Arte de la Energía · Magnética' },
  { label: 'Ámate', value: '21 días · 21 audios · 5 meditaciones · diario' },
  { label: 'El Arte de la Energía', value: '31 días · ~5 audios · clases de integración · diario' },
  { label: 'Magnética', value: '8 semanas · 8 áreas · workbook ≈198 páginas · prompts de IA' },
  { label: 'Acompañamiento', value: 'Guía con IA integrada, cada día del recorrido' },
  { label: 'Plataforma', value: 'Todo organizado en Notion' },
]

const testimonios = [
  { quote: '[TESTIMONIO_1 — pega aquí una frase real de una alumna]', name: '[NOMBRE_1]' },
  { quote: '[TESTIMONIO_2 — pega aquí una frase real de una alumna]', name: '[NOMBRE_2]' },
  { quote: '[TESTIMONIO_3 — pega aquí una frase real de una alumna]', name: '[NOMBRE_3]' },
]

const paraTi = {
  si: [
    'Sabes que quieres algo diferente y necesitas estructura para empezar',
    'Estás cansada de consumir información sin integrarla',
    'Quieres trabajar tu mundo interno sin quedarte solo en la reflexión',
    'Estás dispuesta a escribir, sentir, cuestionarte, decidir y hacer',
  ],
  no: [
    'Buscas resultados sin participar del proceso',
    'Quieres que alguien más tome todas las decisiones por ti',
    'Buscas una promesa rápida, sin implementar nada',
  ],
}

const includes = ['3 fases completas', 'Audios y meditaciones', 'Diarios de cada fase', 'Workbook de Magnética', 'Guía con IA', 'Plataforma en Notion']

const faqs = [
  { q: '¿Tengo que completar RENACER exactamente en 90 días?', a: 'Existe una secuencia recomendada, pero RENACER no está diseñado para convertirse en otra fuente de culpa o perfeccionismo. Lo importante es continuar, a tu ritmo.' },
  { q: '¿Cuánto tiempo necesito diariamente?', a: 'El programa está creado para integrarse a tu vida cotidiana: cada día puede combinar audio, reflexión, escritura o práctica.' },
  { q: '¿Qué pasa si ya tengo un negocio?', a: 'Ámate y El Arte de la Energía son procesos personales. Magnética puede comenzar desde una idea, talento, proyecto o negocio que ya exista.' },
  { q: '¿Magnética funciona si todavía no sé qué quiero crear?', a: 'Sí. No necesitas entrar con todo definido — parte del recorrido consiste en desarrollar esa claridad.' },
  { q: '¿Necesito saber usar inteligencia artificial?', a: 'No. La guía con IA conversa contigo como una charla normal, no necesitas experiencia previa para usarla.' },
  { q: '¿Puedo comprar las fases por separado?', a: 'Sí. Puedes comenzar por Ámate, El Arte de la Energía o Magnética de forma individual, y avanzar al siguiente nivel cuando estés lista.' },
  { q: '¿RENACER reemplaza terapia?', a: 'No. RENACER es un acompañamiento de transformación personal, no un tratamiento clínico. Si atraviesas un momento que requiere atención profesional, te recomendamos buscar apoyo especializado en paralelo.' },
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
      {/* ===== HEADER ===== */}
      <header className={`corto-header ${scrolled ? 'scrolled' : ''}`}>
        <span className="corto-brand">RENACER</span>
        <nav className="corto-nav">
          <a href="#metodo">Método</a>
          <a href="#fases">Fases</a>
          <a href="#oferta">Qué incluye</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary corto-header-btn">
          Comenzar mi RENACER
        </a>
      </header>

      {/* ===== 01 · HERO — deseo + identificación + curiosidad ===== */}
      <section className="corto-hero">
        <h1 className="corto-hero-lead">
          No necesitas convertirte en alguien más. Necesitas <span className="highlight">volver a ti</span>, aprender
          a dirigir tu energía y construir desde ahí.
        </h1>
        <p className="renacer-mark corto-hero-mark">RENACER</p>
        <p className="corto-hero-sub">Una experiencia de transformación en tres fases.</p>
        <p className="corto-hero-phases">ÁMATE · EL ARTE DE LA ENERGÍA · MAGNÉTICA</p>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary corto-cta-big">
          Comenzar mi RENACER
        </a>
      </section>

      {/* ===== 02 · IDENTIFICACIÓN — corta, sin exagerar el dolor ===== */}
      <section className="corto-id">
        <ul>
          {identificacion.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </section>

      {/* ===== 03 · MÉTODO — composición editorial vertical ===== */}
      <section id="metodo" className="corto-metodo">
        <h2>No necesitas hacer más. Necesitas trabajar en el orden correcto.</h2>
        <div className="corto-metodo-flow">
          {metodo.map((m, i) => (
            <div className="corto-metodo-step" key={m.roman}>
              <span className="corto-metodo-roman">{m.roman}</span>
              <span className="corto-metodo-word">{m.word}</span>
              <span className="corto-metodo-phase">{m.phase}</span>
              {i < metodo.length - 1 && <span className="corto-metodo-arrow">↓</span>}
            </div>
          ))}
        </div>
      </section>

      {/* ===== 04 · LAS TRES FASES ===== */}
      <section id="fases" className="corto-fases">
        {phases.map((p) => (
          <article className={`corto-fase corto-fase-${p.tone}`} key={p.roman}>
            <span className="corto-fase-roman">Fase {p.roman}</span>
            <h3>{p.name}</h3>
            <p className="corto-fase-duration">{p.duration}</p>
            <p className="corto-fase-intro">{p.intro}</p>

            <p className="corto-fase-label">Lo que vas a trabajar</p>
            <div className="corto-fase-tags">
              {p.trabajo.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <p className="corto-fase-label">Dentro de {p.name}</p>
            <div className="corto-fase-dentro">
              {p.dentro.map((d) => (
                <div key={d.h}>
                  <h4>{d.h}</h4>
                  <p>{d.t}</p>
                </div>
              ))}
            </div>

            <p className="corto-fase-resultado">{p.resultado}</p>
          </article>
        ))}
      </section>

      {/* ===== 05 · TODO ESTO ES RENACER — value stack editorial ===== */}
      <section className="corto-stack">
        <h2>Todo esto es RENACER.</h2>
        <div className="corto-stack-rows">
          {stack.map((s) => (
            <div className="corto-stack-row" key={s.label}>
              <span className="corto-stack-label">{s.label}</span>
              <span className="corto-stack-value">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 06 · ESTO NO NACIÓ DE UNA TEORÍA — Karla ===== */}
      <section className="corto-karla">
        <div className="corto-karla-photo">
          <img src="/images/karla.jpg" alt="Karla Ferran, fundadora de Manifestación Magnética" />
        </div>
        <div className="corto-karla-copy">
          <h2>Esto no nació de una teoría. Nació de vivirlo.</h2>
          <p>
            He comenzado proyectos. He cambiado de dirección. He tenido ideas que funcionaron y
            otras que no. He tenido que empezar nuevamente — más de una vez.
          </p>
          <p className="corto-karla-quote">RENACER no nace de la perfección. Nace de la experiencia.</p>
          <p className="corto-karla-name">— Karla Ferran, fundadora de Manifestación Magnética</p>
        </div>
      </section>

      {/* ===== 07 · PRUEBA SOCIAL ===== */}
      <section className="corto-testimonios">
        <h2>Voces de este recorrido</h2>
        <div className="corto-testimonios-grid">
          {testimonios.map((t) => (
            <div className="corto-testimonio-card" key={t.name}>
              <p>"{t.quote}"</p>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 08 · PARA QUIÉN ES ===== */}
      <section className="corto-paraquien">
        <h2>RENACER puede ser para ti si...</h2>
        <div className="corto-paraquien-grid">
          <ul className="si">
            {paraTi.si.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
          <ul className="no">
            <p className="corto-paraquien-label">Probablemente no sea para ti si...</p>
            {paraTi.no.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 09 · LA OFERTA ===== */}
      <section id="oferta" className="corto-price">
        <span className="eyebrow">RENACER</span>
        <p className="corto-price-formula">Ámate + El Arte de la Energía + Magnética</p>
        <p className="corto-price-formula-sub">Una sola experiencia.</p>
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
        <p className="corto-price-micro">Pago seguro · Acceso digital</p>
      </section>

      {/* ===== 10 · FAQ ===== */}
      <section id="faq" className="corto-faq">
        <h2>Preguntas frecuentes</h2>
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

      {/* ===== 11 · CIERRE ===== */}
      <section className="corto-final">
        <p className="corto-final-text">
          Tal vez RENACER no sea el momento en el que te conviertes en alguien nueva. Tal vez
          sea el momento en el que dejas de abandonarte, aprendes a dirigir lo que ya existe
          dentro de ti y empiezas a construir desde ahí.
        </p>
        <p className="corto-final-mark">RENACER</p>
        <p className="corto-final-formula">TÚ → TU ENERGÍA → LO QUE CONSTRUYES</p>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary corto-cta-big">
          Comenzar mi RENACER
        </a>
      </section>
    </div>
  )
}
