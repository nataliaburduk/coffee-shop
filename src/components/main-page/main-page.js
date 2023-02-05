import {Component} from 'react';

import MainScreen from './main-screen/main-screen';
import Navbar from '../shared/nav-bar/nav-bar';
import AboutUs from './about-us/about-us';
import OurBest from './our-best/our-best';
import Footer from '../shared/footer/footer';

import coffeeBeans from '../../assets/img/coffee-beans.svg'
import './main-page.scss';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3004/products?our_best=true')
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        this.setState({ isFetching: false, data: myJson})
      })
      .catch(e => {
        console.log(e);
        this.setState({...this.state, isFetching: true});
    })
  }

  render() {
    const {data} = this.state;
    return (
      <div className="MainPage">
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans}/>
        <MainScreen/>
        <AboutUs/>
        <OurBest data={data}/>
        <Footer/>
      </div>
    )
  }
}

export default MainPage;
