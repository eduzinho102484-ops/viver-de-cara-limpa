import { Quote } from 'lucide-react'
import { testimonials, guarantee } from '../data/config.js'
import Reveal from './Reveal.jsx'

// Só aparece se você cadastrar depoimentos/garantia reais em data/config.js.
export default function Testimonials() {
  if (testimonials.length === 0 && !guarantee) return null

  return (
    <section id="depoimentos" className="section section--alt" aria-labelledby="testimonials-title">
      <div className="container">
        {testimonials.length > 0 && (
          <>
            <Reveal>
              <p className="eyebrow">Depoimentos</p>
              <h2 id="testimonials-title" className="section__title">
                Quem já tem site no ar.
              </h2>
            </Reveal>
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <Reveal as="figure" key={`${t.name}-${t.business}`} className="card testimonial">
                  <Quote size={20} aria-hidden="true" />
                  <blockquote>{t.text}</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.business}</span>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </>
        )}

        {guarantee && (
          <Reveal>
            <p className="guarantee">{guarantee}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
