import { Component } from "react";
import Container from 'react-bootstrap/Container';
import beans from '../../img/beans-title.svg';
import './main-screen.css'

class MainScreen extends Component {
  render() {
    return (
      <Container fluid className='main-screen'>
        
        <div className='main-title'>
          <h1>Everything You Love About Coffee</h1>
          <img src={beans} alt='coffee-title'/>
          <h2 className='main-subtitle'>We makes every day full of energy and taste</h2>
          <h2 className='main-subtitle'>Want to try our beans?</h2>
          <button className='main-btn'>More</button>
        </div>
      </Container>
    ) 
  }
}

export default MainScreen;