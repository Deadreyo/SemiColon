import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header>
      <div className="overlay-header">
        <Navbar />
        <h1>Semi-Colon</h1>
        <h3>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum
          quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero
          nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur
          ab.
        </h3>
        {/* <p className="header-text"></p> */}

        {/* <button>READ MORE</button> */}
      </div>
    </header>
  );
}

export default Header
