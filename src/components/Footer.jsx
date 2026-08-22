import { siteConfig, whatsappLink } from '../config/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-mark">Manifestación Magnética</p>
          <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', maxWidth: 320 }}>
            Transformación interna para crear una vida alineada.
          </p>
        </div>

        <nav className="footer-links">
          <a href="#renacer">RENACER</a>
          <a href="#recorrido">El recorrido</a>
          <a href="#marca">Manifestación Magnética</a>
          <a href="#precios">Inversión</a>
          <a href="#faq">Preguntas</a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={`mailto:${siteConfig.social.email}`}>{siteConfig.social.email}</a>
        </nav>
      </div>

      <div className="footer-inner footer-bottom" style={{ marginTop: '1.6rem' }}>
        <span>© {year} Manifestación Magnética. Todos los derechos reservados.</span>
        <span>Panamá</span>
      </div>
    </footer>
  )
}
