import Reveal from './Reveal.jsx'

const steps = [
  { title: 'Conversa', text: 'Você me chama no WhatsApp e conta sobre o seu negócio.' },
  { title: 'Orçamento', text: 'Eu envio o valor e o prazo fechados.' },
  { title: 'Criação', text: 'Eu monto o site e mostro como está ficando.' },
  { title: 'No ar', text: 'Fazemos os ajustes necessários e o site é publicado.' },
]

export default function Process() {
  return (
    <section id="como-funciona" className="section" aria-labelledby="process-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Como funciona</p>
          <h2 id="process-title" className="section__title">
            Simples do começo ao fim.
          </h2>
        </Reveal>

        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06} className="card step">
              <span className="step__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
