import { Component } from "react";
import Container from 'react-bootstrap/Container';
import './pleasure-header.css'

class PleasureHeader extends Component {
  render() {
    return (
      <Container fluid className='pleasure-header'>
        <div className='pleasure-header-title'>
          <p>For Your Pleasure</p>
        </div>
      </Container>
    ) 
  }
}

export default PleasureHeader;
