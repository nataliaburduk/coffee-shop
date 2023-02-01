import { Component } from "react";
import Container from 'react-bootstrap/Container';
import ModalWindow from '../../shared/modal/modal';

import beans from '../../../assets/img/beans-title.svg';
import './main-screen.css';

class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  showModal = (e) => {
    this.setState({
      show: true
    })
  }

  hideModal = (e) => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <Container fluid className='main-screen'>
        <div className='main-title'>
          <p>Everything You Love About Coffee</p>
          <img src={beans} alt='coffee-title'/>
          <p className='main-subtitle'>We makes every day full of energy and taste</p>
          <p className='main-subtitle'>Want to try our beans?</p>
          <button className='main-btn' onClick={this.showModal}>More</button>
          <ModalWindow show={this.state.show} handleClose={this.hideModal}/>
        </div>
      </Container>
    ) 
  }
}

export default MainScreen;
