import {Component} from 'react';
import Navbar from '../nav-bar/nav-bar';
import Header from '../header/header';
import OurCoffeeAbout from '../our-coffee-about/our-coffee-about';
import Separator from '../separator/separator';
import Search from '../search/search';
import CountryFilter from '../country-filter/country-filter';
import OurCoffeeCards from '../our-coffee-cards/our-coffee-cards';
import Footer from '../footer/footer';
import Loading from '../spinner/spinner';

import coffeeBeans from '../../assets/img/coffee-beans.svg'
import './our-coffee-main.css';

class OurCoffeeMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      coffeeCardsData: [],
      loadedCards: true,
      input: '',
      filter: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3004/products')
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        this.setState({ isFetching: false, coffeeCardsData: myJson, loadedCards: false})
      })
      .catch(e => {
        console.log(e);
        this.setState({...this.state, isFetching: true, loadedCards: true});
    })
  }

  searchCoffee = (cards, input) => {
    if (input.length === 0) {
      return cards;
    }

    return cards.filter(item => {
      return (
        (item.price.indexOf(input) > -1) || 
        (((item.title).toLowerCase()).indexOf(input) >  -1) || 
        (((item.country).toLowerCase()).indexOf(input) >  -1) 
      )
  })
}

  renderCards() {
    if (this.state.loadedCards) {
      return (
        <Loading/>
      )
    } else {
      const {coffeeCardsData, input, filter} = this.state;
      const visibleData = this.filterPost(this.searchCoffee(coffeeCardsData, input), filter);
      return (
        <OurCoffeeCards coffeeCardsData={visibleData}/>
      )
    }
  }

  onUpdateSearch = (input) => {
    this.setState({input: input.toLowerCase()});
  }

  filterPost = (cards, filter) => {
    if (filter) {
      return cards.filter(item => item.country === filter);
    } else {
      return cards;
    }
  }

  onFilterSelect = (filter) => {
    if (this.state.filter === filter) {
      this.setState({filter: ''})
    } else {
      this.setState({filter})
    }
  }

  render() {
    return (
      <div className='our-coffee-page'>
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans}/>
        <Header title='Our Coffee'/>
        <OurCoffeeAbout/>
        <Separator/>
        <div className='filter-panel'>
          <Search label='Looking for' onUpdateSearch={this.onUpdateSearch}/>
          <CountryFilter label='Or filter' filter={this.state.filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        {this.renderCards()} 
        <Footer/>
      </div>
    )
  }
}

export default OurCoffeeMain;
