import {Component} from 'react';
import './app.css';
import MainScreen from '../main-screen/main-screen';
import Navbar from '../nav-bar/nav-bar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreen/>
        <Navbar/>
      </div>
    )
  }
}

export default App;

