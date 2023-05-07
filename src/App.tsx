import './App.css'
import Header from './Components/Header/Header'
import FrontEndCard from './Components/Cards/Front-EndCard/FrontEnd'
import EmbeddedCard from './Components/Cards/C-programing/C-Programing'
import AvrCard from './Components/Cards/AvrCard/AvrCard'
import FullStackCard from './Components/Cards/FullstackCard/FullStackCard'
import ArmCard from './Components/Cards/ArmCard/ArmCard'
import DigitalCard from './Components/Cards/DigitalCard/DigitalCard'
import FlutterCard from './Components/Cards/FlutterCard/FlutterCard'
import PythonCard from './Components/Cards/PythonCard/PythonCard'
import NodejsCard from './Components/Cards/NodejsCard/NodejsCard'
import ReactCard from './Components/Cards/ReactCard/ReactCard'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Track from './Components/Tracks/Track'
import Flutter from './TrackData/Flutter.json'

const tracks = [
  Flutter 
]
function App() {
  function Section({ children }:{
    children:React.ReactNode
  }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          }}
        >
          {children}
        </div>
      </section>
    )
  }
  return (
    <div className="App">
      <Header />
      <div className="cards-template">
        <Section>
          <FrontEndCard />
        </Section>
        <Section>
          <EmbeddedCard />
        </Section>
        <Section>
          <FullStackCard />
        </Section>
        <Section>
          <AvrCard />
        </Section>
        <Section>
          <ArmCard />
        </Section>
        <Section>
          <DigitalCard />
        </Section>
        <Section>
          <FlutterCard />
        </Section>
        <Section>
          <NodejsCard />
        </Section>
        <Section>
          <PythonCard />
        </Section>
        <Section>
          <ReactCard />
        </Section>
      </div>
      {tracks.map((item)=> {
        return  <Track {...item} />
      })}
    </div>
  )
}

export default App;
