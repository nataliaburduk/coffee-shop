import { useState, useEffect } from "react";
import Header from "../shared/header/header";
import Navbar from "../shared/nav-bar/nav-bar";
import Loading from "../shared/spinner/spinner";
import ProductAbout from "./product-about/product-about";
import Footer from "../shared/footer/footer";
import { useParams } from "react-router-dom";

import coffeeBeans from "../../assets/img/coffee-beans.svg";
import "./product-page.scss";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const ProductPage = (props) => {

  const [loading, setLoading] = useState(true);
  const [productItem, setProductItem] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3004/products/${props.params.id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setLoading(false)
        setProductItem(productItem => productItem=myJson)
      })
      .catch((e) => {
        console.log(e);
        setLoading(true);
        setProductItem();
      })
  }, [])

  const renderCardDetails = () => {
    if (loading) {
      return <Loading />;
    } else {
      const { country, price, img, description } = productItem;
      return (
        <ProductAbout
          country={country}
          price={price}
          img={img}
          description={description}
          className="product-about"
        />
      );
    }
  }

  return (
    <div className="product-details">
        <Header title="Our Coffee" />
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans} />
        {renderCardDetails()}
        <Footer/>
    </div>
  )
}

export default withParams(ProductPage);
