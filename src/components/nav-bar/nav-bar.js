import { Component } from 'react';
import {Link} from "react-router-dom";

import './nav-bar.css'

class Navbar extends Component{
  render() {
    const {navBarType, coffeeLogo} = this.props
    return (
      <nav className={navBarType}>
          <img src={coffeeLogo} alt='coffee-logo'className='coffee-logo'/>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Coffee house
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-coffee" className="nav-link">
                Our coffee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                For your pleasure
              </Link>
            </li>
          </ul>
      </nav>
    )
  }
}

export default Navbar;
