import Header from "../shared/header/header";
import Navbar from "../shared/nav-bar/nav-bar";
import Loading from "../shared/spinner/spinner";
import ProductAbout from "./product-about/product-about";
import Footer from "../shared/footer/footer";
import { Component } from "react";
import { useParams } from "react-router-dom";

import coffeeBeans from '../../assets/img/coffee-beans.svg'
import './product-page.scss';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ProductPage extends Component {
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
          <Loading/>
      )
    } else {
      const {country, price, img, description} = this.state.productItem;
      return (
        <ProductAbout country={country} price={price} img={img} description={description} className="product-about"/>
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

export default withParams(ProductPage)