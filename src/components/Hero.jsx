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
        <span className="eyebrow">Manifestación Magnética</span>
        <p className="renacer-mark hero-mark">RENACER</p>
        <h1>
          <span className="highlight">90 días</span> para volver a ti, aprender a dirigir tu
          energía y convertir tu visión en algo real.
        </h1>
        <p className="hero-phases">ÁMATE · EL ARTE DE LA ENERGÍA · MAGNÉTICA</p>
        <p className="lead">
          RENACER es un recorrido de transformación en tres fases, creado para acompañarte
          desde tu mundo interior hasta aquello que quieres construir fuera de ti.
        </p>

        <div className="hero-actions">
          <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Comenzar mi RENACER
          </a>
          <a href="#recorrido" className="hero-secondary">
            Conocer el recorrido
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
