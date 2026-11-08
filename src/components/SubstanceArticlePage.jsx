import { useEffect } from "react";
import { Logo } from "./Logo.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import Reveal from "./Reveal.jsx";
import FloatingWhatsApp from "./FloatingWhatsApp.jsx";

export default function SubstanceArticlePage({ article }) {
  useEffect(() => {
    document.title = `${article.name}: informação e apoio | Viver de Cara Limpa`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = article.metaDescription;
  }, [article]);

  return (
    <div className="substance-page">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="header">
        <div className="container substance-header-inner">
          <Logo />
          <nav aria-label="Navegação da página" className="substance-nav">
            <a href="#sinais">Sinais e impactos</a>
            <a href="#cuidado">Como buscar cuidado</a>
            <a href="#urgencia">Urgência</a>
          </nav>
          <a className="substance-back" href="/">Página inicial</a>
        </div>
      </header>

      <main id="conteudo">
        <section id="inicio" className="substance-hero">
          <div className="container substance-hero-grid">
            <Reveal className="substance-hero-copy">
              <p className="eyebrow">Informação e acolhimento</p>
              <h1>{article.name}</h1>
              <p className="substance-lead">{article.heroLead}</p>
              <div className="substance-hero-actions">
                <WhatsAppButton className="btn-lg" message={article.message}>Conversar com a equipe</WhatsAppButton>
                <a className="btn btn-secondary btn-lg" href="#cuidado">Ver caminhos de cuidado</a>
              </div>
              <p className="substance-note">Este conteúdo é informativo e não substitui avaliação de profissionais de saúde.</p>
            </Reveal>
            <Reveal className="substance-hero-image" delay={120}>
              <img src={article.image} alt={article.imageAlt} width="1000" height="1100" fetchPriority="high" decoding="async" />
              <span>Orientação começa com escuta e respeito.</span>
            </Reveal>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container substance-reading-grid">
            <Reveal>
              <p className="eyebrow">Compreender</p>
              <h2>Sobre a dependência</h2>
            </Reveal>
            <Reveal className="substance-reading-copy" delay={100}>
              {article.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
          </div>
        </section>

        <section id="sinais" className="section section-soft">
          <div className="container">
            <Reveal className="section-intro">
              <p className="eyebrow">Sinais e impactos</p>
              <h2>O que pode indicar que é hora de procurar apoio?</h2>
              <p>{article.signsLead}</p>
            </Reveal>
            <Reveal className="cocaine-sign-grid stagger-children">
              {article.signs.map((sign, index) => (
                <article className="card cocaine-sign-card" key={sign}>
                  <span aria-hidden="true" className="cocaine-sign-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{sign}</p>
                </article>
              ))}
            </Reveal>
            <Reveal className="substance-callout">
              <strong>Não é preciso esperar que tudo piore para conversar com um profissional.</strong>
              <span>Uma avaliação individual ajuda a entender as necessidades e as opções disponíveis.</span>
            </Reveal>
          </div>
        </section>

        <section id="cuidado" className="section">
          <div className="container substance-care-grid">
            <Reveal>
              <p className="eyebrow">Caminhos de cuidado</p>
              <h2>Como funciona a busca por tratamento?</h2>
              <p>{article.careIntro}</p>
              {article.careAlert && (
                <div className="substance-callout substance-care-alert">
                  <strong>{article.careAlert.title}</strong>
                  <span>{article.careAlert.text}</span>
                </div>
              )}
            </Reveal>
            <Reveal className="substance-care-card" delay={120}>
              <h3>Por onde começar</h3>
              <p>No SUS, é possível buscar acolhimento em uma Unidade Básica de Saúde (UBS), em um Centro de Atenção Psicossocial (CAPS) ou em um CAPS Álcool e Drogas (CAPS AD).</p>
              <p>Familiares também podem procurar orientação para entender formas respeitosas de oferecer apoio.</p>
              <a href={article.sources[1].href} target="_blank" rel="noopener noreferrer">Consultar informações do Ministério da Saúde <span aria-hidden="true">↗</span></a>
            </Reveal>
          </div>
        </section>

        <section id="urgencia" className="section substance-urgent">
          <div className="container substance-urgent-inner">
            <Reveal>
              <p className="eyebrow">Precisa de atendimento agora?</p>
              <h2>Em uma situação de urgência, procure ajuda imediata.</h2>
              <p>{article.urgentText || "Dor no peito, convulsão, dificuldade para respirar, perda de consciência ou risco imediato à segurança precisam de avaliação urgente."}</p>
              <a className="btn btn-light btn-lg" href="tel:192">Chamar o SAMU: 192</a>
              <p className="substance-urgent-note">O SAMU 192 é gratuito e funciona 24 horas. A central também pode orientar pelo telefone.</p>
            </Reveal>
          </div>
        </section>

        <section id="fontes" className="section substance-sources">
          <div className="container">
            <Reveal>
              <h2>Fontes e leitura complementar</h2>
              <ul>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul>
              <p>Conteúdo revisado em novembro de 2026. As informações são gerais e não substituem atendimento individual.</p>
              <a className="substance-home-link" href="/">← Voltar à página inicial</a>
              {article.related?.map((related) => <a className="substance-home-link substance-related-link" href={related.href} key={related.href}>{related.label}</a>)}
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="substance-footer"><div className="container"><Logo light /><span>Viver de Cara Limpa · Informação com respeito.</span></div></footer>
      <FloatingWhatsApp />
    </div>
  );
}
