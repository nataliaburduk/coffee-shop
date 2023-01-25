import Header from "../header/header";
import Navbar from "../nav-bar/nav-bar";
import ProductAbout from "../product-about/product-about";
import Footer from "../footer/footer";
import coffeeBeans from '../../assets/img/coffee-beans.svg'
import { Component } from "react";

import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import './product.css';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      productItem: {}
    }
  }
  
  componentDidMount() {
    fetch(`http://localhost:3004/products/${this.props.params.id}`)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        this.setState({ loading: false, productItem: myJson})
      })
      .catch(e => {
        console.log(e);
        this.setState({...this.state, loading: true});
    })
  }

  renderCardDetails() {
    if (this.state.loading) {
      return (
          <div className="spinner-container">
            <Spinner animation="grow" size="xsm" className="spinner"/>
            <Spinner animation="grow" size="xsm" className="spinner"/>
            <Spinner animation="grow" size="xsm" className="spinner"/>
          </div>
      )
    } else {
      const {country, price, img} = this.state.productItem;
      return (
        <ProductAbout country={country} price={price} img={img}/>
      )
    }
  }

  render() {

    return (
      <div className="product-details">
        <Header title='Our Coffee'/>
        <Navbar navBarType="coffee-navbar" coffeeLogo={coffeeBeans}/>
        {this.renderCardDetails()}
        <Footer/>
      </div>
      )
    }
}

export default withParams(Product)