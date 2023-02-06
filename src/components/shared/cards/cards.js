import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./cards.scss";

class CardTemplate extends Component {
  getCountry() {
    const country = this.props.country;
    if (country) {
      return <Card.Text className="card-country">{country}</Card.Text>;
    }
  }

  render() {
    const { id, title, img, price } = this.props;
    return (
      <Col className="card-column" sm>
        <Link to={`/products/${id}`}>
          <Card className="card-container">
            <img
              src={img}
              alt="first-card"
              className="card-img"
              variant="top"
            />
            <Card.Text className="card-title"> {title}</Card.Text>
            {this.getCountry()}
            <Card.Text className="card-price">{price}</Card.Text>
          </Card>
        </Link>
      </Col>
    );
  }
}

export default CardTemplate;
