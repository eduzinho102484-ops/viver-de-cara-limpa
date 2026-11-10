import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {
  return (
    <section id="projetos" className="section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Projetos</p>
          <h2 id="projects-title" className="section__title">
            Sites que já estão no ar.
          </h2>
          <p className="section__lead">
            Cada cartão leva ao site real publicado. Toque em “Ver projeto” para conferir de perto.
          </p>
        </Reveal>

        {projects.length === 0 ? (
          <p className="empty">Nenhum projeto cadastrado ainda. Adicione em src/data/projects.js.</p>
        ) : (
          <div className="projects-grid">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 0.06}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
