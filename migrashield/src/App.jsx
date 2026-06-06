import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Market from './sections/Market'
import Impact from './sections/Impact'
import Team from './sections/Team'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Market />
        <Impact />
        <Team />
        <Footer />
      </main>
    </>
  )
}
