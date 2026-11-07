import { faqs } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Faq() {
  return (
    <section id="duvidas" className="section">
      <div className="container narrow">
        <Reveal className="section-intro">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Tire suas dúvidas</h2>
        </Reveal>
        <Reveal className="faq stagger-children">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
