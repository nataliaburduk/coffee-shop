import { Component } from "react";
import './main-screen.css';
import BtMainScreen from '../bootstrapMainScreen';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  
  render() {
    return (   
      <div>
        <BtMainScreen/>
      </div>
    ) 
  }
}


export default MainScreen;