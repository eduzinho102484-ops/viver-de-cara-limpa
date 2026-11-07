import { Logo, navLinks } from "./Logo.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import { config, phoneHref } from "../config.js";
import Reveal from "./Reveal.jsx";

export default function Footer() {
  const tel = phoneHref();

  return (
    <footer className="footer">
      <Reveal className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-text">
            Orientação e encaminhamento para pessoas e familiares que buscam apoio na recuperação da dependência de
            álcool e outras drogas.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <h4>Navegação</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#privacidade">Política de privacidade</a>
            </li>
          </ul>
        </nav>
        <div>
          <h4>Contato</h4>
          <ul>
            {config.phoneDisplay && <li>{tel ? <a href={tel}>{config.phoneDisplay}</a> : config.phoneDisplay}</li>}
            {config.email && (
              <li>
                <a href={`mailto:${config.email}`}>{config.email}</a>
              </li>
            )}
            {config.address && <li>{config.address}</li>}
          </ul>
        </div>
      </Reveal>
      <Reveal className="container">
        <PrivacyPolicy />
        <p className="footer-legal">
          Este site não coleta dados por formulários e não oferece diagnóstico nem tratamento médico. A organização
          deve confirmar os procedimentos de privacidade descritos nesta página antes da publicação. Em situação de
          emergência, procure o SAMU (192) ou um serviço de saúde.
        </p>
        <p className="footer-legal">© {new Date().getFullYear()} Viver de Cara Limpa. Todos os direitos reservados.</p>
      </Reveal>
    </footer>
  );
}
