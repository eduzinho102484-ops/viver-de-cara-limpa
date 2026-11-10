import { Github, Instagram, Mail } from 'lucide-react'
import { siteConfig } from '../data/config.js'
import { hasWhatsApp } from '../utils/whatsapp.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const { githubUrl, instagramUrl, email } = siteConfig

  return (
    <section id="contato" className="section contact" aria-labelledby="contact-title">
      <div className="container narrow contact__inner">
        <Reveal>
          <h2 id="contact-title" className="section__title">
            Vamos tirar sua ideia do papel?
          </h2>
          <p className="section__lead">
            Tem um projeto em mente? Entre em contato para conversarmos. Orçamento grátis e sem
            compromisso.
          </p>
          <div className="contact__actions">
            <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
          </div>

          {!hasWhatsApp() && import.meta.env.DEV && (
            <p className="dev-note">
              Aviso (só aparece no modo de desenvolvimento): configure o número em src/data/config.js.
            </p>
          )}

          {(githubUrl || instagramUrl || email) && (
            <ul className="socials" aria-label="Outros contatos">
              {githubUrl && (
                <li>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={18} aria-hidden="true" /> GitHub
                  </a>
                </li>
              )}
              {instagramUrl && (
                <li>
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    <Instagram size={18} aria-hidden="true" /> Instagram
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a href={`mailto:${email}`}>
                    <Mail size={18} aria-hidden="true" /> {email}
                  </a>
                </li>
              )}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  )
}
