import './App.css'
import Header from './Components/Header/Header'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Track from './Components/Tracks/Track'
import Flutter from './TrackData/Flutter'
import FrontEnd from './TrackData/FrontEnd'
import Python from './TrackData/Python'
import Avr from './TrackData/Avr'
import fullStack from './TrackData/FullStack'
import CProg from './TrackData/C-Prog'
import Arm from './TrackData/Arm'
import Desktop from './TrackData/Desktop'
import React from './TrackData/React'
import Nodejs from './TrackData/Nodejs'
import Digital from './TrackData/Digital'
import Card from './Components/Cards/Card'

const tracks = [
  Python,
  FrontEnd,
  fullStack,
  React,
  Nodejs,
  Desktop,
  CProg,
  Avr,
  Arm,
  Flutter,
  Digital,
]

function App() {
  function Section({ children }: { children: React.ReactNode }) {
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
        {tracks.map((item) => {
          return (
            <Section>
              <Card {...item} />
            </Section>
          )
        })}
      </div>
      {tracks.map((item) => {
        return (
          <Section>
            <Track {...item} key={item.id} />
          </Section>
        )
      })}
    </div>
  )
}

export default App
