const faqs = [
  {
    q: '¿Necesito tener un negocio?',
    a: 'No. Ámate y El Arte de la Energía son procesos personales. Magnética puede comenzar desde una idea, talento, conocimiento, proyecto o negocio que ya exista.',
  },
  {
    q: '¿Qué pasa si todavía no sé qué quiero crear?',
    a: 'No necesitas entrar con todo definido. Parte del recorrido consiste en desarrollar esa claridad.',
  },
  {
    q: '¿Tengo que hacer un día exactamente cada día?',
    a: 'Existe una secuencia recomendada, pero RENACER no está diseñado para convertir el proceso en otra fuente de culpa o perfeccionismo. Lo importante es continuar.',
  },
  {
    q: '¿Cuánto tiempo necesito?',
    a: 'El programa está creado para integrarse a tu vida cotidiana. Cada día puede combinar audio, reflexión, escritura o práctica.',
  },
  {
    q: '¿RENACER garantiza resultados?',
    a: 'No. El resultado depende del proceso, las decisiones, la implementación y la realidad de cada persona. RENACER ofrece estructura, herramientas, acompañamiento y dirección.',
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
