import { useState, useEffect } from "react";
import Navbar from "../shared/nav-bar/nav-bar";
import Header from "../shared/header/header";
import OurCoffeeAbout from "./our-coffee-about/our-coffee-about";
import Separator from "../shared/separator/separator";
import Search from "./search/search";
import CountryFilter from "./country-filter/country-filter";
import OurCoffeeCards from "./our-coffee-cards/our-coffee-cards";
import Footer from "../shared/footer/footer";
import Loading from "../shared/spinner/spinner";

import coffeeBeans from "../../assets/img/coffee-beans.svg";
import "./our-coffee-page.scss";

const OurCoffeePage = () => {    
  const [isFetching, setIsFetching] = useState(true);
  const [coffeeCardsData, setCoffeeCardsData] = useState([]);
  const [loadedCards, setLoadedCards] = useState(true);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((response) => response.json())
      .then((myJson) => {
        setIsFetching(false);
        setCoffeeCardsData(myJson);
        setLoadedCards(false)
      })
      .catch((e) => {
        setIsFetching(true);
        setLoadedCards(true)
      })
  }, []) 

  const searchCoffee = (cards, input) => {
    if (input.length === 0) {
      return cards;
    }

    return cards.filter((item) => {
      return (
        item.price.indexOf(input) > -1 ||
        item.title.toLowerCase().indexOf(input) > -1 ||
        item.country.toLowerCase().indexOf(input) > -1
      )
    })
  }

  const renderCards = () => {
    if (loadedCards) {
      return <Loading />;
    }
      const visibleData = filterPost(
        searchCoffee(coffeeCardsData, input),
        filter
      )
      return <OurCoffeeCards coffeeCardsData={visibleData} />;
    }

  const onUpdateSearch = (input) => {
    setInput(input.toLowerCase())
  }

  const filterPost = (cards, filter) => {
    if (filter) {
      return cards.filter((item) => item.country === filter);
    } else {
      return cards;
    }
  };

  const onFilterSelect = (fltr) => {
    if (filter === fltr) {
      setFilter('');
    } else {
      setFilter(fltr);
    }
  }
    return (
      <div className="our-coffee-page">
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans} />
        <Header title="Our Coffee" />
        <OurCoffeeAbout />
        <Separator />
        <div className="filter-panel">
          <Search label="Looking for" onUpdateSearch={onUpdateSearch} />
          <CountryFilter
            label="Or filter"
            filter={filter}
            onFilterSelect={onFilterSelect}
          />
        </div>
        {renderCards()}
        <Footer />
      </div>
    )
    }

export default OurCoffeePage;
