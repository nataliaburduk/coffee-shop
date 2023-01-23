import { Component } from "react";
import darkBeans from '../../img/dark-beans.svg';
import './our-coffee-about.css';
import ourCoffeeAbout from '../../img/our_coffee_about.jpg';
import ourCoffeeAboutLine from '../../img/about_line.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class OurCoffeeAbout extends Component {
  render() {
    return (
      <Container className="our-coffee-about-container">
      <Row>
        <Col className="our-coffee-about-col">
        <img src={ourCoffeeAbout} alt='About our coffee beans'></img>
        </Col>
        <Col className="our-coffee-about-col">
        <div>
        <p className="our-coffee-title">About Our Beans</p>
        <img src={darkBeans} alt='our-coffee-title'/>
        <div className="our-coffee-about-content">
          <p className='about-p1'>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          </p>
          <p className='about-p2'>
          Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
          </p>
          <p className='about-p2'>
          As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
          </p>
        </div>
      </div>
        </Col>
      </Row>
      <Row>
        <Col><img src={ourCoffeeAboutLine} alt="line"></img></Col>
      </Row>
      </Container>
    ) 
  }
}

export default OurCoffeeAbout;
