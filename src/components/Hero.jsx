import WhatsAppButton from "./WhatsAppButton.jsx";
import Reveal from "./Reveal.jsx";

const heroTitle = "Um novo caminho começa com o primeiro passo.";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Acolhimento, informação e orientação</p>
          <p className="hero-manifesto">Todo recomeço merece acolhimento.</p>
          <h1 aria-label={heroTitle}>
            {heroTitle.split(" ").map((word, index, words) => (
              <span className="hero-word" aria-hidden="true" key={`${word}-${index}`}>
                {word}{index < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="lead">
            Conheça possibilidades de acolhimento, orientação e acompanhamento especializado para pessoas que buscam
            apoio na recuperação da dependência de álcool e outras drogas.
          </p>
          <div className="btn-row">
            <WhatsAppButton className="btn-lg" />
            <a className="btn btn-secondary btn-lg" href="#sobre">
              Conheça nosso trabalho
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-photo" delay={120}>
          <img
            className="hero-photo-image"
            src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=80"
            srcSet="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=768&q=75 768w, https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1800&q=82 1800w"
            sizes="(max-width: 899px) 100vw, 50vw"
            alt="Luz suave da manhã sobre uma paisagem verde tranquila"
            width="1800"
            height="1200"
            fetchPriority="high"
            decoding="async"
          />
          <span className="hero-photo-caption">Um espaço para escutar, orientar e encontrar possibilidades.</span>
        </Reveal>
      </div>
    </section>
  );
}
