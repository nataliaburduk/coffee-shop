import {Component} from 'react';

import './app.css';
import MainScreen from '../main-screen/main-screen';
import Navbar from '../nav-bar/nav-bar';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

import coffeeBeans from '../../img/coffee-beans.svg'
import firstImg from '../../img/first_card.jpg';
import secondImg from '../../img/second_card.jpg';
import thirdImg from '../../img/third_card.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {"title": "Solimo Coffee Beans 2 kg", "img": firstImg, "price": '10.73$', "id": 1},
        {"title": "Presto Coffee Beans 1 kg", "img": secondImg, "price": '15.99$', "id": 2},
        {"title": "AROMISTICO Coffee 1 kg", "img": thirdImg, "price": '6.99$', "id": 3}
      ]
    }
  }

  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans}/>
        <MainScreen/>
        <AboutUs/>
        <OurBest data={data}/>
        <Footer/>
      </div>
    )
  }
}

   
export default App;
