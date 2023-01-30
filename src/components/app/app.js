import {Component} from 'react';

import './app.css';
import MainScreen from '../main-page/main-screen/main-screen';
import Navbar from '../common-components/nav-bar/nav-bar';
import AboutUs from '../main-page/about-us/about-us';
import OurBest from '../main-page/our-best/our-best';
import Footer from '../common-components/footer/footer';

import coffeeBeans from '../../assets/img/coffee-beans.svg'

class App extends Component {
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
