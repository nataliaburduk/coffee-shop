import { Component } from "react";
import darkBeans from '../../img/dark-beans.svg';
import './about-us.css'

class AboutUs extends Component {
  render() {
    return (
      <div className='about-us-container'>
        <p>About Us</p>
        <img src={darkBeans} alt='coffee-title'/>
        <div className="about-content">
          <p className='about-p1'>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
          </p>
          <p className='about-p2'>
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
          </p>
        </div>
      </div>
    ) 
  }
}

export default AboutUs;
