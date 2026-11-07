import WhatsAppButton from "./WhatsAppButton.jsx";
import { config, phoneHref } from "../config.js";
import Reveal from "./Reveal.jsx";
import MeteorField from "./MeteorField.jsx";

export default function Contact() {
  const tel = phoneHref();

  return (
    <section id="contato" className="section section-dark">
      <MeteorField />
      <Reveal className="container narrow center">
        <p className="eyebrow">Contato</p>
        <h2>Converse com a nossa equipe</h2>
        <p className="lead">
          Você não precisa dar esse passo sozinho. Fale conosco e receba orientação com respeito e sigilo no
          tratamento das suas informações.
        </p>
        <WhatsAppButton variant="light" className="btn-lg" />
        <ul className="contact-list">
          {config.phoneDisplay && (
            <li>
              <strong>Telefone:</strong> {tel ? <a href={tel}>{config.phoneDisplay}</a> : config.phoneDisplay}
            </li>
          )}
          {config.email && (
            <li>
              <strong>E-mail:</strong> <a href={`mailto:${config.email}`}>{config.email}</a>
            </li>
          )}
          {config.address && (
            <li>
              <strong>Localização:</strong> {config.address}
            </li>
          )}
        </ul>
      </Reveal>
    </section>
  );
}
