import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Hero from './components/Hero'
import Cases from './components/Cases'
import Process from './components/Process'
import Automation from './components/Automation'
import Stack from './components/Stack'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <SkipLink />
      <Header />
      <main id="contenido">
        <Hero />
        <Cases />
        <Process />
        <Automation />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
