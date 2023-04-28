import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../assets/Logo.png"
import { Icon } from "@iconify/react";
function Navbar() {
  const [btn,setBtn] = useState(false)
  const handleClick = () => {
    setBtn(btn => !btn)
    console.log(btn)
  }
  const toggleClassCheck = btn && 'mobile-menu'
  return (
    <div>
      <nav className="navbar">
        <a href="" className="logo">
          <img src={logo} alt="Logo" className="logo-pic" />
        </a>
        <div className={`nav-links ${toggleClassCheck}`}>
          <ul className="nav-menu">
            <li className="active">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Join Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <Icon
          values="btn"
          icon="bx:grid-alt"
          className="bx bx-grid-alt menu-hamburger"
          onClick={handleClick}
        />
      </nav>
    </div>
  );
}

<img src={logo} alt="Logo" className="logo-pic" />;

export default Navbar
