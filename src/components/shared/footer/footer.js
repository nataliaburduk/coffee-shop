import { Component } from 'react';
import Navbar from '../nav-bar/nav-bar';
import coffeeBeansFooter from '../../../assets/img/coffee-beans-footer.svg';
import coffeeFooter from '../../../assets/img/coffee-footer.svg';
import './footer.css';

class Footer extends Component{
  render() {
    return (
        <div className='footer'>
          <Navbar navBarType="coffee-footer" className='footer-links' coffeeLogo={coffeeFooter}/>
          <img src={coffeeBeansFooter} alt='coffee-footer'/>
        </div>
    ) 
  }
}

export default Footer;
