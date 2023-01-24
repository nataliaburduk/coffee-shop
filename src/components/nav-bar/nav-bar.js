import {Link} from "react-router-dom";
import { useEffect } from 'react';

import './nav-bar.css'

const Navbar = ({navBarType,coffeeLogo}) => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <nav className={navBarType}>
        <img src={coffeeLogo} alt='coffee-logo'className='coffee-logo'/>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}>
              Coffee house
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/our-coffee" className="nav-link" onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}>
              Our coffee
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/for-your-pleasure" className="nav-link" onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}>
              For your pleasure
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar;
