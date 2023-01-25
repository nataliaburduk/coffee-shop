import Header from "../header/header";
import Navbar from "../nav-bar/nav-bar";
import ProductAbout from "../product-about/product-about";
import Footer from "../footer/footer";
import {useParams} from "react-router-dom";
import coffeeBeans from '../../assets/img/coffee-beans.svg'

import './product.css';

const Product = (props) => {
  let { id } = useParams();
  return (
  <div className="product-details">
    <Header title='Our Coffee'/>
    <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans}/>
    <ProductAbout />
    <Footer/>
  </div>
  )
}

export default Product