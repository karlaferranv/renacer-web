const faqs = [
  {
    q: '¿Necesito experiencia previa en desarrollo personal?',
    a: 'No. RENACER está diseñado para acompañarte desde donde estés, sin importar si es tu primer proceso de transformación o si ya has hecho trabajo interno antes.',
  },
  {
    q: '¿Esto es terapia?',
    a: 'No. RENACER es un acompañamiento de transformación personal, no un tratamiento clínico ni un sustituto de terapia psicológica. Si estás atravesando un momento que requiere atención profesional, te recomendamos buscar apoyo especializado en paralelo.',
  },
  {
    q: '¿Qué pasa si me atraso con algún día?',
    a: 'El acceso es tuyo, a tu ritmo. Puedes retomar cuando quieras: RENACER está pensado para acompañar tu vida real, no para presionarte con fechas límite.',
  },
  {
    q: '¿Cómo accedo al contenido después de comprar?',
    a: 'Después de tu compra recibirás las instrucciones de acceso a la plataforma de acompañamiento con todo el contenido organizado día a día.',
  },
  {
    q: '¿Funciona si no vivo en Panamá?',
    a: 'Sí. RENACER es completamente digital, así que puedes vivir el proceso desde cualquier país y en tu propio huso horario.',
  },
  {
    q: '¿Cómo funciona el acompañamiento con inteligencia artificial?',
    a: 'Cada persona recibe una guía con IA entrenada en el proceso de RENACER, que continúa la conversación de tu diario cada día. No reemplaza el acompañamiento humano ni da respuestas absolutas: te hace preguntas, como el resto del programa.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="section faq">
      <div className="section-inner">
        <div className="faq-head">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2>Todo lo que quieres saber antes de comenzar.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
