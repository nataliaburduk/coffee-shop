import {Component} from 'react';

import './app.css';
import MainScreen from '../main-screen/main-screen';
import Navbar from '../nav-bar/nav-bar';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

import coffeeBeans from '../../assets/img/coffee-beans.svg'
// import firstImg from '../../assets/img/first_card.jpg';
// import secondImg from '../../assets/img/second_card.jpg';
// import thirdImg from '../../assets/img/third_card.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3004/data')
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
