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

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards-template">
        <FrontEndCard />
        <EmbeddedCard />
        <FullStackCard/>
        <AvrCard />
        <ArmCard />
        <DigitalCard />
        <FlutterCard/>
        <NodejsCard/>
        <PythonCard/>
        <ReactCard/>
      </div>
    </div>
  )
}

export default App;
