import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Pain from './components/Pain.jsx'
import Benefits from './components/Benefits.jsx'
import Projects from './components/Projects.jsx'
import Plans from './components/Plans.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Pain />
        <Benefits />
        <Projects />
        <Plans />
        <Process />
        <Testimonials />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
