import { ArrowRight } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton.jsx'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <Reveal className="hero__text">
          <p className="eyebrow">Sites para o seu comércio</p>
          <h1 id="hero-title" className="hero__title">
            Seu comércio ainda não aparece <span className="gradient-text">no Google?</span>
          </h1>
          <p className="hero__subtitle">
            Crio o site do seu comércio e coloco no ar. Design sob medida, rápido no celular e pronto
            pra receber pedidos pelo WhatsApp.
          </p>
          <div className="hero__actions">
            <WhatsAppButton>Quero meu site no ar</WhatsAppButton>
            <a className="btn btn--ghost" href="#projetos">
              Explorar projetos
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="hero__note">Orçamento grátis • Entrega em 7 a 14 dias • A partir de R$ 200</p>
        </Reveal>

        <Reveal className="hero__visual" delay={0.1}>
          <div className="code-card" aria-hidden="true">
            <div className="code-card__bar">
              <span /><span /><span />
              <em>seu-negocio.com</em>
            </div>
            <pre className="code-card__body">
{`<header>
  <h1>Seu Negócio</h1>
  <a href="wa.me/…">
    Pedir pelo WhatsApp
  </a>
</header>

<section id="cardapio">
  …
</section>`}
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
