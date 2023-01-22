import { Component } from 'react';
import './nav-bar.css'

class Navbar extends Component{
  constructor(props) {
    super(props);

  }
  render() {
    const {navBarType, coffeeLogo} = this.props
    return (
      <nav className={navBarType}>
          <img src={coffeeLogo} alt='coffee-logo'className='coffee-logo'/>
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
      </nav>
    )
  }
}

export default Navbar;
