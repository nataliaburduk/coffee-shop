import { Component } from "react";
import darkBeans from '../../img/dark-beans.svg';
import './about-section.css'

class AboutSection extends Component {
  sectionTitle() {}
  sectionBody() {}

  render() {
    return (
      <div className='about-us-container'>
        <p>{this.sectionTitle()}</p>
        <img src={darkBeans} alt='coffee-title'/>
        <div className="about-content">
          { this.sectionBody() }
        </div>
      </div>
    ) 
  }
}

export default AboutSection;
