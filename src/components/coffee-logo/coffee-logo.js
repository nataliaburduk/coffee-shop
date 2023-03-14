import { Component } from "react";
import { ReactSVG } from "react-svg";
import './coffee-logo.scss';


class CoffeeLogo extends Component {
  render() {
    return(
      <ReactSVG src="../../../assets/img/coffee-beans.svg" className="logo" />
    )
  }
}

export default CoffeeLogo;