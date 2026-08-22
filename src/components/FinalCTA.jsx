import { purchaseLink } from '../config/siteConfig'

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="section-inner">
        <h2>
          Tu próxima versión no llega sola. <em>Se construye.</em>
        </h2>
        <p>90 días es todo lo que se necesita para empezar a vivir desde una versión más alineada de ti misma.</p>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-light">
          Comenzar mi RENACER
        </a>
      </div>
    </section>
  )
}
