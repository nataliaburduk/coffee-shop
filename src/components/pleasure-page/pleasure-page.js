import { Component } from "react";
import Navbar from "../shared/nav-bar/nav-bar";
import Header from "../shared/header/header";
import PleasureAbout from "./pleasure-about/pleasure-about";
import Separator from "../shared/separator/separator";
import OurCoffeeCards from "../our-coffee-page/our-coffee-cards/our-coffee-cards";
import Footer from "../shared/footer/footer";
import Loading from "../shared/spinner/spinner";

import coffeeBeans from "../../assets/img/coffee-beans.svg";
import "./pleasure-page.scss";

class PleasurePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeCardsData: [],
      isFetching: true,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3004/products")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        this.setState({ coffeeCardsData: myJson, isFetching: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isFetching: true });
      });
  }

  renderCards() {
    if (this.state.isFetching) {
      return <Loading />;
    } else {
      const { coffeeCardsData } = this.state;
      return <OurCoffeeCards coffeeCardsData={coffeeCardsData} />;
    }
  }

  render() {
    return (
      <div className="for-your-pleasure-page">
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans} />
        <Header title="For Your Pleasure" />
        <PleasureAbout />
        <Separator />
        {this.renderCards()}
        <Footer />
      </div>
    );
  }
}

export default PleasurePage;
