import { useReveal } from '../hooks/useReveal'

const items = [
  'Una fórmula mágica para manifestar',
  'Una colección de frases positivas',
  'Una biblioteca interminable de videos',
  'Un reto para convertirte en otra persona',
  'Un curso de negocios que ignora a la persona detrás del negocio',
  'Una promesa de resultados instantáneos',
]

export default function NotThis() {
  const [ref, visible] = useReveal()

  return (
    <section className="section notthis">
      <div className="section-inner">
        <span className="eyebrow">Para ser claras</span>
        <h2>RENACER no es...</h2>

        <ul className={`notthis-list reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>

        <p className="notthis-close">Es un proceso para conocerte, dirigirte y construir.</p>
      </div>
    </section>
  )
}
