import { useEffect, useState } from "react";

import MainScreen from "./main-screen/main-screen";
import Navbar from "../shared/nav-bar/nav-bar";
import AboutUs from "./about-us/about-us";
import OurBest from "./our-best/our-best";
import Footer from "../shared/footer/footer";

import coffeeBeans from "../../assets/img/coffee-beans.svg";
import "./main-page.scss";

const MainPage = (props) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3004/products?our_best=true")
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson);
        setIsFetching(false)
      })
      .catch((e) => {
        setIsFetching(true)
      })
  }, [])
  
  return (
    <div className="MainPage">
      <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans} />
      <MainScreen />
      <AboutUs />
      <OurBest data={data} />
      <Footer />
    </div>
  )
}

export default MainPage;
