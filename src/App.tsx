import Intro from './components/Intro'
import Projects from './components/Projects'
import FragMovies from './components/FragMovies'
import Bio from './components/Bio'

export default function App() {
  return (
    <main>
      <Intro />
      <div className="rule" />
      <Projects />
      <div className="rule" />
      <FragMovies />
      <div className="rule" />
      <Bio />
    </main>
  )
}
