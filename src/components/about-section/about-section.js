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
        <Col className="about-section-img">
          {img}
        </Col>
      )
    }
  }

  render() {
    return (
      <Container className="about-section-container">
        <Row className="justify-content-center">
          {this.imageCol()}
          <Col className="about-section-body">
            <div className="about-section-title">
              {this.sectionTitle()}
            </div>
            <div>
              <img src={darkBeans} alt='coffee-title'/>
            </div>
            <div className="about-section-content">
              { this.sectionBody() }
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AboutSection;
