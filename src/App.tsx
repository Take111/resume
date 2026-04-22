import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Links } from './components/Links'
import { SideProjects } from './components/SideProjects'
import { Skills } from './components/Skills'
import { Strengths } from './components/Strengths'

function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Skills />
        <Experience />
        <SideProjects />
        <Links />
      </main>
      <Footer />
    </div>
  )
}

export default App
