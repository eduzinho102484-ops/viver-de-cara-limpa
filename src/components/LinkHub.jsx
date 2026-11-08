import { useState } from "react";
import { Logo } from "./Logo.jsx";
import Icon from "./Icon.jsx";
import { config, whatsappUrl } from "../config.js";

const actions = [
  { label: "Informações sobre valores", message: "Olá! Gostaria de receber informações sobre valores e opções de atendimento.", icon: "price" },
  { label: "Fotos e informações das unidades", message: "Olá! Gostaria de conhecer as unidades e receber fotos e informações.", icon: "photos" },
  { label: "Pedir orientação", message: "Olá! Gostaria de conversar e receber orientação sobre as possibilidades de apoio.", icon: "guide" },
  { label: "Falar com um atendente", message: "Olá! Gostaria de falar com um atendente, por favor.", icon: "chat" },
];

const topics = [
  {
    title: "Dependência de álcool",
    description: "Quando o consumo traz dificuldades, informação e apoio respeitoso podem ajudar a explorar possibilidades de cuidado.",
    src: "https://images.unsplash.com/photo-1645066928295-2506defde470?auto=format&fit=crop&w=1100&q=82",
    alt: "Médico usando jaleco e estetoscópio",
  },
  {
    title: "Dependência de outras drogas",
    description: "Cada história é única. Uma conversa acolhedora pode ajudar a entender opções de orientação e acompanhamento.",
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1100&q=82",
    alt: "Profissional de saúde em retrato, imagem ilustrativa",
  },
];

function HubIcon({ name }) {
  const paths = {
    price: <><path d="M12 3v18"/><path d="M17 7.5c-.8-1.2-2.2-1.8-4.2-1.8-2.2 0-3.8 1.1-3.8 2.8 0 4.4 9 1.7 9 6.1 0 1.8-1.7 3.2-4.4 3.2-2.1 0-3.9-.8-4.8-2.2"/></>,
    photos: <><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="9" r="1.4"/><path d="m5 17 4.4-4.3 3.1 2.7 2.2-2 4.3 3.8"/></>,
    guide: <><circle cx="12" cy="12" r="9"/><path d="M15.8 8.2 14 14l-5.8 1.8L10 10z"/><path d="m10 10 4 4"/></>,
    chat: <><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-3.4-.7L4 20l1.3-3.8A7.2 7.2 0 0 1 4 12c0-4.1 3.6-7.5 8-7.5s8 3.1 8 7z"/></>,
    site: <><circle cx="12" cy="12" r="9"/><path d="M3.5 12h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3z"/></>,
  };
  return <svg className="hub-action-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function LinkHub() {
  const [activeTopic, setActiveTopic] = useState(0);
  const topic = topics[activeTopic];
  const showTopic = (index) => setActiveTopic((index + topics.length) % topics.length);

  return (
    <main className="link-hub" id="inicio">
      <div className="link-hub-glow" aria-hidden="true" />
      <header className="link-hub-header"><Logo /></header>
      <section className="link-hub-content" aria-labelledby="hub-title">
        <div className="link-hub-photo-wrap" aria-roledescription="carrossel">
          <img
            className="link-hub-photo"
            key={topic.src}
            src={topic.src}
            alt={topic.alt}
            width="1100" height="760" fetchPriority="high" decoding="async"
          />
          <div className="topic-shade" />
          <div className="topic-copy" aria-live="polite" aria-atomic="true">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
          <button className="topic-arrow topic-prev" type="button" onClick={() => showTopic(activeTopic - 1)} aria-label="Ver tema anterior">‹</button>
          <button className="topic-arrow topic-next" type="button" onClick={() => showTopic(activeTopic + 1)} aria-label="Ver próximo tema">›</button>
          <div className="topic-dots" aria-label="Escolher tema">
            {topics.map((item, index) => (
              <button key={item.title} className={index === activeTopic ? "is-active" : ""} type="button" onClick={() => showTopic(index)} aria-label={`Ver: ${item.title}`} aria-current={index === activeTopic ? "true" : undefined} />
            ))}
          </div>
        </div>
        <p className="link-hub-eyebrow">Viver de Cara Limpa</p>
        <h1 id="hub-title">Acesso simples e acolhedor</h1>
        <p className="link-hub-intro">Orientação, respeito e novas possibilidades. Encontrar apoio pode ser o primeiro passo para uma nova história.</p>
        <div className="link-hub-actions">
          {actions.map((action) => (
            <a key={action.label} className="hub-action" href={whatsappUrl(action.message)} target="_blank" rel="noopener noreferrer">
              <HubIcon name={action.icon} />
              {action.label}
            </a>
          ))}
          <a className="hub-action hub-action-site" href="/site">
            <HubIcon name="site" />
            Acessar o site completo
          </a>
        </div>
        <div className="link-hub-team" aria-label="Profissionais de saúde, imagem ilustrativa">
          <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=240&q=75" alt="" loading="lazy" width="72" height="72" />
          <div><strong>Um primeiro contato com respeito</strong><span>Converse com nossa equipe pelo WhatsApp.</span></div>
        </div>
      </section>
      <footer className="link-hub-footer">
        <span>Viver de Cara Limpa</span>
        {config.privacyEmail && <a href={`mailto:${config.privacyEmail}`}>Privacidade e contato</a>}
      </footer>
      <a className="floating-whatsapp link-hub-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
        <Icon name="whatsapp" size={24} fill="currentColor" stroke="none" />
        <span>Falar no WhatsApp</span>
      </a>
    </main>
  );
}
