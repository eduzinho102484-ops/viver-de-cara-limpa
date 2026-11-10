import { useState } from 'react'
import { ExternalLink, Github, ImageOff } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, image, technologies = [], liveUrl, githubUrl, demo } = project
  const [failed, setFailed] = useState(false)

  return (
    <article className="project card">
      <div className="project__media">
        {image && !failed ? (
          <img
            src={image}
            alt={`Captura de tela do site ${title}`}
            width="800"
            height="500"
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="project__fallback" role="img" aria-label={`Imagem de ${title} indisponível`}>
            <ImageOff size={28} aria-hidden="true" />
            <span>Imagem em breve</span>
          </div>
        )}
        {demo && <span className="badge">Demonstração</span>}
      </div>

      <div className="project__body">
        <h3 className="project__title">{title}</h3>
        <p className="project__desc">{description}</p>

        {technologies.length > 0 && (
          <ul className="tags" aria-label="Tecnologias utilizadas">
            {technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <div className="project__actions">
          {liveUrl ? (
            <a className="btn btn--primary btn--sm" href={liveUrl} target="_blank" rel="noopener noreferrer">
              Ver projeto
              <ExternalLink size={16} aria-hidden="true" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          ) : (
            <span className="btn btn--disabled btn--sm" aria-disabled="true">
              Em breve
            </span>
          )}

          {githubUrl && (
            <a className="btn btn--ghost btn--sm" href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} aria-hidden="true" />
              Código
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
