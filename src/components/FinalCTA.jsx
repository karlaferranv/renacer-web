import { purchaseLink } from '../config/siteConfig'

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="section-inner">
        <h2>
          Puedes seguir esperando a sentirte lista. <em>O puedes empezar hoy, sin estarlo.</em>
        </h2>
        <p>Nadie llega lista a los 90 días que le cambian la vida. Solo llega y se queda. Eso es lo único que RENACER te pide.</p>
        <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-light">
          Comenzar mi RENACER
        </a>
      </div>
    </section>
  )
}
