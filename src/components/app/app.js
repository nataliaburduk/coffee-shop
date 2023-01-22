import {Component} from 'react';
import './app.css';
import MainScreen from '../main-screen/main-screen';
import Navbar from '../nav-bar/nav-bar';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';

import firstImg from '../../img/first_card.jpg';
import secondImg from '../../img/second_card.jpg';
import thirdImg from '../../img/third_card.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {"title": "Solimo Coffee Beans 2 kg", "img": firstImg, "price": '10.73$'},
        {"title": "Presto Coffee Beans 1 kg", "img": secondImg, "price": '15.99$'},
        {"title": "AROMISTICO Coffee 1 kg", "img": thirdImg, "price": '6.99$'}
      ]
    }
  }

  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <Navbar/>
        <MainScreen/>
        <AboutUs/>
        <OurBest data={data}/>
      </div>
    )
  }
}

export default App;
