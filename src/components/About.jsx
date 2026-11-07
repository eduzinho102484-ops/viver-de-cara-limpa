import { aboutHighlights } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about-grid">
        <Reveal>
          <p className="eyebrow">Sobre o Viver de Cara Limpa</p>
          <h2>Orientação e conexão entre quem procura ajuda e quem oferece acolhimento</h2>
          <p>
            O Viver de Cara Limpa é uma iniciativa de orientação e conexão entre pessoas que procuram ajuda e clínicas
            que oferecem serviços de acolhimento e tratamento para a dependência de álcool e outras drogas.
          </p>
          <p>
            Nosso papel é escutar, orientar e apresentar possibilidades. O tratamento em si é realizado pelas
            instituições e pelos profissionais de saúde responsáveis.
          </p>
        </Reveal>
        <Reveal as="ul" className="check-list">
          {aboutHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
