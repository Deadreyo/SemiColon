import './App.css';
import Header from './Components/Header/Header'
import WebCard from './Components/Cards/WebCards/WebCard'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards-template">
        <WebCard/>
      </div>
    </div>
  );
}

export default App;
