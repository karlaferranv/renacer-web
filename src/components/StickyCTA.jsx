import { useEffect, useState } from 'react'
import { purchaseLink } from '../config/siteConfig'
import '../styles/sticky-cta.css'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`sticky-cta ${visible ? 'visible' : ''}`}>
      <a href={purchaseLink('renacer')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Quiero RENACER
      </a>
    </div>
  )
}
