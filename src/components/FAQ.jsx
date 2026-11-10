import { ChevronDown } from 'lucide-react'
import { faq } from '../data/config.js'
import Reveal from './Reveal.jsx'

export default function FAQ() {
  if (faq.length === 0) return null

  return (
    <section id="duvidas" className="section" aria-labelledby="faq-title">
      <div className="container narrow">
        <Reveal>
          <p className="eyebrow">Dúvidas</p>
          <h2 id="faq-title" className="section__title">
            Perguntas frequentes.
          </h2>
        </Reveal>

        <div className="faq">
          {faq.map((item) => (
            <details key={item.q} className="faq__item">
              <summary>
                <span>{item.q}</span>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
