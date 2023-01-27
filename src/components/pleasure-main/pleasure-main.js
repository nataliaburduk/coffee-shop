import {Component} from 'react';
import Navbar from '../nav-bar/nav-bar';
import Header from '../header/header';
import PleasureAbout from '../pleasure-about/pleasure-about';
import Separator from '../separator/separator';
import OurCoffeeCards from '../our-coffee-cards/our-coffee-cards';
import Footer from '../footer/footer';
import { Spinner } from "react-bootstrap";

import coffeeBeans from '../../assets/img/coffee-beans.svg'
import './pleasure-main.css';

class PleasureMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeCardsData: [],
      isFetching: true,
      loadedCards:true
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
        this.setState({ coffeeCardsData: myJson, isFetching: false, loadedCards: false})
      })
      .catch(e => {
        console.log(e);
        this.setState({...this.state, isFetching: true, loadedCards: true});
    })
  }

  renderCards() {
    if (this.state.loadedCards) {
      return (
          <div className="spinner-container">
            <Spinner animation="grow" size="xsm" className="spinner"/>
            <Spinner animation="grow" size="xsm" className="spinner"/>
            <Spinner animation="grow" size="xsm" className="spinner"/>
          </div>
      )
    } else {
      const {coffeeCardsData} = this.state;
      return (
        <OurCoffeeCards coffeeCardsData={coffeeCardsData}/>
      )
    }
  }

  render() {
    return (
      <div className='for-your-pleasure-page'>
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans}/>
        <Header title='For Your Pleasure'/>
        <PleasureAbout/>
        <Separator/>
        {this.renderCards()}
        <Footer/>
      </div>
    )
  }
}

export default PleasureMain;
