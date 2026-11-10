import { Search, MessageCircle, BadgeCheck, Clock, Smartphone, Wrench } from 'lucide-react'
import Reveal from './Reveal.jsx'

const benefits = [
  {
    icon: Search,
    title: 'Presença no Google',
    text: 'Seu negócio passa a existir nas buscas, e não só no Instagram.',
  },
  {
    icon: MessageCircle,
    title: 'Pedido em um toque',
    text: 'O cliente vê cardápio, preços e contato em um só lugar e chama direto no seu WhatsApp.',
  },
  {
    icon: BadgeCheck,
    title: 'Mais credibilidade',
    text: 'Seu comércio ganha cara de negócio sério e passa mais confiança.',
  },
  {
    icon: Clock,
    title: 'Aberto 24 horas',
    text: 'O site trabalha por você mesmo quando o estabelecimento está fechado.',
  },
  {
    icon: Smartphone,
    title: 'Rápido no celular',
    text: 'Pensado para onde está a maioria dos seus clientes: na tela do celular.',
  },
  {
    icon: Wrench,
    title: 'Nada técnico pra você',
    text: 'Eu cuido do design à publicação. Você recebe o site pronto.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="section section--alt" aria-labelledby="benefits-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">A solução</p>
          <h2 id="benefits-title" className="section__title">
            Do zero ao ar em até 14 dias.
          </h2>
          <p className="section__lead">
            Cada site é construído sob medida para o seu comércio, com código limpo e leve: carrega
            rápido, funciona bem no celular e tem base sólida para crescer depois.
          </p>
        </Reveal>

        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.05} className="card benefit">
              <span className="benefit__icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
