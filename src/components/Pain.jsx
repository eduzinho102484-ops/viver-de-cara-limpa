import { XCircle } from 'lucide-react'
import Reveal from './Reveal.jsx'

const pains = [
  'Cliente novo pergunta "vocês têm site?" e você responde "só Instagram".',
  'Você explica o cardápio e os preços de novo, pela décima vez no dia.',
  'Pesquisam o nome do seu negócio e aparece o do vizinho.',
  'Você depende do algoritmo do Instagram para ser visto.',
  'Passa a sensação de que seu negócio é menor do que realmente é.',
]

export default function Pain() {
  return (
    <section id="problema" className="section" aria-labelledby="pain-title">
      <div className="container narrow">
        <Reveal>
          <p className="eyebrow">O problema</p>
          <h2 id="pain-title" className="section__title">
            Hoje, quem quer pedir pesquisa antes.
          </h2>
          <p className="section__lead">
            Se o seu negócio não aparece, o cliente pede do concorrente. Não porque o dele é melhor,
            mas porque ele foi encontrado. Quem tem comércio sem presença online conhece essa rotina:
          </p>
        </Reveal>
        <ul className="pain-list">
          {pains.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 0.05} className="pain-list__item">
              <XCircle size={20} aria-hidden="true" />
              <span>{p}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
