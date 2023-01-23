import { Component } from "react";
import darkBeans from '../../img/dark-beans.svg';
import './about-section.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AboutSection extends Component {
  sectionImage() {}
  sectionTitle() {}
  sectionBody() {}

  imageCol() {
    const img = this.sectionImage();
    if (img) {
      return (
        <Col className="our-coffee-about-col">
          {img}
        </Col>
      )
    }
  }

  render() {
    return (
      <Container className="our-coffee-about-container">
        <Row>
          {this.imageCol()}
          <Col className="our-coffee-about-col">
            <div>
              {this.sectionTitle()}
              <img src={darkBeans} alt='coffee-title'/>
            </div>
            <div className="our-coffee-about-content">
              { this.sectionBody() }
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AboutSection;
