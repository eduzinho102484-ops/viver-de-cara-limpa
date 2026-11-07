import Icon from "./Icon.jsx";
import { services } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section id="ajuda" className="section section-soft">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">Como podemos ajudar?</p>
          <h2>Informação e orientação para cada situação</h2>
        </Reveal>
        <Reveal className="card-grid stagger-children">
          {services.map((s) => (
            <article key={s.title} className="card">
              <span className="card-icon">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
