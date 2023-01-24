import {Component} from 'react';
import Navbar from '../nav-bar/nav-bar';
import Header from '../header/header';
import OurCoffeeAbout from '../our-coffee-about/our-coffee-about';
import Separator from '../separator/separator';
import SearchFilterPanel from '../search-filter-form/search-filter-form';
import OurCoffeeCards from '../our-coffee-cards/our-coffee-cards';
import Footer from '../footer/footer';

import firstImg from '../../img/first_card.jpg';
import coffeeBeans from '../../img/coffee-beans.svg'
import './our-coffee-main.css';

class OurCoffeeMain extends Component {
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
      <div className='our-coffee-page'>
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans}/>
        <Header title='Our Coffee'/>
        <OurCoffeeAbout/>
        <Separator/>
        <SearchFilterPanel/>
        <OurCoffeeCards coffeeCardsData={coffeeCardsData}/>
        <Footer/>
      </div>
    )
  }
}

export default OurCoffeeMain;
