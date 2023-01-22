import {Component} from 'react';
import './app.css';
import MainScreen from '../main-screen/main-screen';
import Navbar from '../nav-bar/nav-bar';
import AboutUs from '../about-us/about-us';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreen/>
        <Navbar/>
        <AboutUs/>
      </div>
    )
  }
}

export default App;

