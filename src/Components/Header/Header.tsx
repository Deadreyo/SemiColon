import './Header.css'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header>
      <div className="overlay-header">
        <Navbar />
        <h1>Sem;Colon</h1>
        <h3 className='sub-title'>Debug Your Soul</h3>
      </div>
    </header>
  )
}

export default Header
