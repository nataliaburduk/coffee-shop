import { Component } from "react";
import Container from 'react-bootstrap/Container';
import './our-coffee-header.css'

class OurCoffeeHeader extends Component {
  render() {
    return (
      <Container fluid className='our-coffee-header'>
        <div className='our-coffee-header-title'>
          <p>Our Coffee</p>
        </div>
      </Container>
    ) 
  }
}

export default OurCoffeeHeader;
