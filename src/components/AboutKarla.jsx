import { useReveal } from '../hooks/useReveal'

export default function AboutKarla() {
  const [ref, visible] = useReveal()

  return (
    <section id="karla" className="section about">
      <div className={`section-inner about-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="about-photo">[FOTO_KARLA]</div>
        <div className="about-copy">
          <span className="eyebrow">Quién te acompaña</span>
          <h2>Karla, creadora de Manifestación Magnética</h2>
          <p>
            Creé RENACER porque viví, de primera mano, lo que significa reconstruirse desde
            adentro: soltar quién creía que tenía que ser, aprender a dirigir mi energía y
            construir una vida y una marca con propósito real.
          </p>
          <p>
            No creo en las fórmulas mágicas ni en motivar por motivar. Creo en acompañar,
            preguntar y sostener el proceso, para que vuelvas a confiar en ti misma tanto como
            confías en mí.
          </p>
          <p>Esto es lo que quiero para ti: no una promesa, un camino real.</p>
        </div>
      </div>
    </section>
  )
}
