import Intro from './components/Intro'
import Projects from './components/Projects'
import Bio from './components/Bio'

export default function App() {
  return (
    <main>
      <Intro />
      <div className="rule" />
      <Projects />
      <div className="rule" />
      <Bio />
    </main>
  )
}
