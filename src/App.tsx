import './App.css'
import Header from './Components/Header/Header'
import WebCard from './Components/Cards/WebCards/WebCard'
import EmbeddedCard from './Components/Cards/Embedded C/EmbeddedCard'
import AvrCard from './Components/Cards/AvrCard/AvrCard'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards-template">
        <WebCard />
        <EmbeddedCard />
        <AvrCard />
      </div>
    </div>
  )
}

export default App;
