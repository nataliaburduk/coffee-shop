import {Component} from 'react';
import Navbar from '../nav-bar/nav-bar';
import PleasureHeader from '../pleasure-header/pleasure-header';
import PleasureAbout from '../pleasure-about/pleasure-about';
import Separator from '../separator/separator';
import OurCoffeeCards from '../our-coffee-cards/our-coffee-cards';
import Footer from '../footer/footer';

import firstImg from '../../img/first_card.jpg';
import coffeeBeans from '../../img/coffee-beans.svg'
import './pleasure-main.css';

class PleasureMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeCardsData: [
        {"title": "Solimo Coffee Beans 1 kg", "img": firstImg, "country": "Brazil", "price": '6.99$', "id": 1},
        {"title": "Solimo Coffee Beans 1 kg", "img": firstImg, "country": "Kenya", "price": '6.99$', "id": 2},
        {"title": "Solimo Coffee Beans 1 kg", "img": firstImg, "country": "Columbia", "price": '6.99$', "id": 3},
        {"title": "Solimo Coffee Beans 1 kg", "img": firstImg, "country": "Brazil", "price": '6.99$', "id": 4},
        {"title": "Solimo Coffee Beans 1 kg", "img": firstImg, "country": "Brazil", "price": '6.99$', "id": 5},
        {"title": "Solimo Coffee Beans 1 kg", "img": firstImg, "country": "Brazil", "price": '6.99$', "id": 6}
      ]
    }
  }

  render() {
    const {coffeeCardsData} = this.state;
    return (
      <div className='for-your-pleasure-page'>
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans}/>
        <PleasureHeader/>
        <PleasureAbout/>
        <Separator/>
        <OurCoffeeCards coffeeCardsData={coffeeCardsData}/>
        <Footer/>
      </div>
    )
  }
}

export default PleasureMain;
