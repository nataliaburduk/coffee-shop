import { useState, useEffect } from "react";
import Navbar from "../shared/nav-bar/nav-bar";
import Header from "../shared/header/header";
import PleasureAbout from "./pleasure-about/pleasure-about";
import Separator from "../shared/separator/separator";
import OurCoffeeCards from "../our-coffee-page/our-coffee-cards/our-coffee-cards";
import Footer from "../shared/footer/footer";
import Loading from "../shared/spinner/spinner";

import coffeeBeans from "../../assets/img/coffee-beans.svg";
import "./pleasure-page.scss";

const PleasurePage = () => {
  
  const [isFetching, setIsFetching] = useState(true);
  const [coffeeCardsData, setCoffeeCardsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((response) => response.json())
      .then((myJson) => {
          setIsFetching(false);
          setCoffeeCardsData(myJson)
      })
      .catch((e) => {
        setIsFetching(true)
      })
  }, []) 

  const renderCards = () => {
    if (isFetching) {
      return <Loading />;
    } else {
      return <OurCoffeeCards coffeeCardsData={coffeeCardsData} />;
    }
  }

    return (
      <div className="for-your-pleasure-page">
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans} />
        <Header title="For Your Pleasure" />
        <PleasureAbout />
        <Separator />
        {renderCards()}
        <Footer />
      </div>
    )
}

export default PleasurePage;
