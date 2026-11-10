import { Check } from 'lucide-react'
import { plans } from '../data/config.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import Reveal from './Reveal.jsx'

export default function Plans() {
  return (
    <section id="planos" className="section section--alt" aria-labelledby="plans-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Investimento</p>
          <h2 id="plans-title" className="section__title">
            Dois pontos de partida.
          </h2>
          <p className="section__lead">
            O valor final depende do que você precisa. Você recebe o orçamento fechado antes de começar.
          </p>
        </Reveal>

        <div className="plans-grid">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.id}
              delay={i * 0.08}
              className={`card plan ${plan.highlight ? 'plan--highlight' : ''}`}
            >
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__price">{plan.price}</p>
              <p className="plan__deadline">{plan.deadline}</p>
              <ul className="plan__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={18} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                variant={plan.highlight ? 'primary' : 'ghost'}
                message={`Oi Carlos, tenho interesse no ${plan.name}. Podemos conversar?`}
              >
                Pedir meu orçamento
              </WhatsAppButton>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="plans__cost">
            Cada dia sem presença online é um cliente que pesquisou e não encontrou o seu negócio.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
