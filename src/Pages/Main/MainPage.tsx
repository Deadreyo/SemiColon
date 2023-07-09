import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '../../Components/Header/Header'
import Track from '../../Components/Tracks/Track'
import TrackData from '../../types/TrackData'
import Card from '../../Components/Cards/Card'

interface MainPageProps {
  tracks: TrackData[]
}

function MainPage({ tracks }: MainPageProps) {
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

export default MainPage
