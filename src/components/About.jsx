import { Code2, Target } from 'lucide-react'
import { about } from '../data/config.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="sobre" className="section section--alt" aria-labelledby="about-title">
      <div className="container about">
        <Reveal className="about__text">
          <p className="eyebrow">{about.title}</p>
          <h2 id="about-title" className="section__title">
            Quem vai construir o seu site.
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="section__lead">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="about__side" delay={0.08}>
          <div className="card about__block">
            <h3>
              <Code2 size={18} aria-hidden="true" /> Tecnologias
            </h3>
            <ul className="tags">
              {about.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="card about__block">
            <h3>
              <Target size={18} aria-hidden="true" /> Objetivos
            </h3>
            <ul className="about__goals">
              {about.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
