import Navbar from "../nav-bar/nav-bar";
import ErrorBoundary from "../../errorBoundary/errorBoundary";

import coffeeBeansFooter from "../../../assets/img/coffee-beans-footer.svg";
import coffeeFooter from "../../../assets/img/coffee-footer.svg";
import "./footer.scss";

const Footer = () => {
    return (
      <ErrorBoundary>
        <div className="footer">
          <Navbar
            navBarType="coffee-footer"
            className="footer-links"
            coffeeLogo={coffeeFooter}
          />
          <img src={coffeeBeansFooter} alt="coffee-footer" />
        </div>
      </ErrorBoundary>
    )
}

export default Footer;
