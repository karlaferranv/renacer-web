import { useEffect, useState } from 'react'
import { siteConfig, purchaseLink } from '../config/siteConfig'
import '../styles/navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="navbar-mark">
        <svg viewBox="0 0 64 64" fill="none">
          <path
            d="M32 12c9 0 16 6.5 16 14.5S41 40 33 40c-5.5 0-10-3.2-10-8.5S27 24 31 24c3 0 5.5 2 5.5 4.7"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        Manifestación Magnética
      </a>

      <nav className="navbar-links">
        <a href="#renacer">RENACER</a>
        <a href="#recorrido">El recorrido</a>
        <a href="#marca">Manifestación Magnética</a>
        <a href="#precios">Inversión</a>
        <a href="#faq">Preguntas</a>
      </nav>

      <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Quiero RENACER
      </a>
    </header>
  )
}
