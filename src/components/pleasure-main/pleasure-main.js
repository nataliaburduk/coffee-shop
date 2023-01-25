import {Component} from 'react';
import Navbar from '../nav-bar/nav-bar';
import Header from '../header/header';
import PleasureAbout from '../pleasure-about/pleasure-about';
import Separator from '../separator/separator';
import OurCoffeeCards from '../our-coffee-cards/our-coffee-cards';
import Footer from '../footer/footer';

import coffeeBeans from '../../assets/img/coffee-beans.svg'
import './pleasure-main.css';

class PleasureMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeCardsData: [],
      isFetching: true
    }
  }

  
  componentDidMount() {
    fetch('http://localhost:3004/coffee_cards_data')
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        this.setState({ isFetching: false, coffeeCardsData: myJson})
      })
      .catch(e => {
        console.log(e);
        this.setState({...this.state, isFetching: true});
    })
  }

  render() {
    const {coffeeCardsData} = this.state;
    return (
      <div className='for-your-pleasure-page'>
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans}/>
        <Header title='For Your Pleasure'/>
        <PleasureAbout/>
        <Separator/>
        <OurCoffeeCards coffeeCardsData={coffeeCardsData}/>
        <Footer/>
      </div>
    )
  }
}

export default PleasureMain;
