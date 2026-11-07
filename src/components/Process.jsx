import { steps } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Process() {
  return (
    <section id="atendimento" className="section section-soft">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">Como funciona o atendimento?</p>
          <h2>Um processo simples, em três etapas</h2>
        </Reveal>
        <Reveal as="ol" className="steps stagger-children">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-number">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
