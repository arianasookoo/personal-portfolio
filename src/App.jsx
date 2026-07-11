import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

const sectionClasses = 'min-h-screen py-16 px-8 mx-auto relative block'

export default function App() {
  return (
    <div className="min-h-screen mt-22 mx-[10%] bg-pearl text-black font-sans">
      <Header />

      <section id="hero-section" className={sectionClasses}>
        <Hero />
      </section>

      <section id="about-section" className={sectionClasses}>
        <About />
      </section>

      <section id="project-section" className={sectionClasses}>
        <Projects />
      </section>
    </div>
  )
}
