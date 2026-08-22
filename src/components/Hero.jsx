import { purchaseLink } from '../config/siteConfig'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <svg className="hero-line" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
        <path
          d="M -50 620 C 150 520, 220 300, 420 260 C 620 220, 640 400, 500 460 C 400 500, 340 400, 420 360 C 480 332, 560 360, 560 410"
          fill="none"
          stroke="#B5502C"
          strokeWidth="1.4"
        />
      </svg>

      <div className="hero-inner">
        <span className="eyebrow">Manifestación Magnética · Programa de 90 días</span>
        <h1>
          Sabes resolverlo todo.
          <br />
          Menos <em className="highlight">a ti misma.</em>
        </h1>
        <p className="lead">
          RENACER es un recorrido de 90 días para dejar de sostener tu vida desde el cansancio
          y empezar a construirla desde una versión tuya que ya no necesita demostrarle nada
          a nadie.
        </p>

        <div className="hero-actions">
          <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Quiero RENACER
          </a>
          <a href="#recorrido" className="hero-secondary">
            Conocer el recorrido completo
          </a>
        </div>

        <div className="hero-meta">
          <span>3 fases</span>
          <span>90 días</span>
          <span>Acompañamiento real</span>
          <span>Guía con IA incluida</span>
        </div>
      </div>
    </section>
  )
}
