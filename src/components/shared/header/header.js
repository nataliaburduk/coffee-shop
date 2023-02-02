import { Component } from "react";
import Container from 'react-bootstrap/Container';
import './header.scss'

class Header extends Component {

  render() {
    const {title} = this.props;
    return (
      <Container fluid className='header'>
        <div className='header-title'>
          {title}
        </div>
      </Container>
    ) 
  }
}

export default Header;
