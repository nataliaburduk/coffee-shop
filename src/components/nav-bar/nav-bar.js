// import { Component } from "react";
import './nav-bar.css'
import coffeeBeans from '../../img/coffee-beans.svg'


const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <img src={coffeeBeans} alt='coffee-logo'className='coffee-logo'/>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Coffee house
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Our coffee
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            For your pleasure
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;