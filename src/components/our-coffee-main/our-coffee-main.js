import {Component} from 'react';
import Navbar from '../nav-bar/nav-bar';
import Header from '../header/header';
import OurCoffeeAbout from '../our-coffee-about/our-coffee-about';
import Separator from '../separator/separator';
import SearchFilterPanel from '../search-filter-form/search-filter-form';
import OurCoffeeCards from '../our-coffee-cards/our-coffee-cards';
import Footer from '../footer/footer';

import coffeeBeans from '../../assets/img/coffee-beans.svg'
import './our-coffee-main.css';

class OurCoffeeMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      coffeeCardsData: []
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
