import { purchaseLink } from '../config/siteConfig'

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="section-inner">
        <h2>
          Quizás no necesitas convertirte en alguien nueva. <em>Quizás necesitas volver a
          escuchar a la persona que lleva tiempo intentando hablarte.</em>
        </h2>
        <p className="final-cta-body">
          RENACER no comienza cuando tienes toda tu vida resuelta. Comienza cuando decides
          dejar de posponer la conversación contigo misma.
        </p>
        <p className="final-cta-steps">Volver a ti. Dirigir tu energía. Construir.</p>
        <p className="final-cta-mark">RENACER.</p>
        <p className="final-cta-tagline">Tres fases. Un mismo hilo conductor: tú.</p>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-light">
          Comenzar mi RENACER
        </a>
      </div>
    </section>
  )
}
