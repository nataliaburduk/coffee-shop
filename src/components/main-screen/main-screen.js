import { Component } from "react";
import Container from 'react-bootstrap/Container';
import beans from '../../assets/img/beans-title.svg';
import './main-screen.css'

class MainScreen extends Component {
  render() {
    return (
      <Container fluid className='main-screen'>
        <div className='main-title'>
          <p>Everything You Love About Coffee</p>
          <img src={beans} alt='coffee-title'/>
          <p className='main-subtitle'>We makes every day full of energy and taste</p>
          <p className='main-subtitle'>Want to try our beans?</p>
          <button className='main-btn'>More</button>
        </div>
      </Container>
    ) 
  }
}

export default MainScreen;
