import { siteConfig } from '../data/config.js'

const links = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#planos', label: 'Planos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="logo" href="#inicio" aria-label={`${siteConfig.brand} — voltar ao topo`}>
          <span className="logo__mark" aria-hidden="true">{'</>'}</span>
          Carlos<span className="logo__accent">Dev</span>
        </a>

        <nav aria-label="Links do rodapé">
          <ul className="footer__links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer__copy">© {year} CarlosDev. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
