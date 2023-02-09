import { Component } from "react";
import { Link } from "react-router-dom";

import "./nav-bar.scss";

class Navbar extends Component {
  render() {
    const { navBarType, coffeeLogo } = this.props;
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
      <nav className={navBarType}>
        <div className="nav-container">
          <img src={coffeeLogo} alt="coffee-logo" className="coffee-logo" />
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={scrollToTop}>
                Coffee house
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-coffee" className="nav-link" onClick={scrollToTop}>
                Our coffee
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/for-your-pleasure"
                className="nav-link"
                onClick={scrollToTop}
              >
                For your pleasure
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
