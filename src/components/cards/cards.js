import { Component } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import './cards.css'


class CardTemplate extends Component {
  getCountry() {
    const country = this.props.country;
    if (country) {
      return (
        <Card.Text className="card-country">{country}</Card.Text>
      )
    }
  }
  
  render() {
    const {id, title, img, price} = this.props;
    return (
      <Col className="card-column" xs='4'>
        <Link to={`/products/${id}`}>
        <Card className='card-container'>
            <img src={img} alt='first-card' className='card-img' variant="top"/>
            <Card.Text className="card-title"> {title}</Card.Text>
            {this.getCountry()}
            <Card.Text className="card-price">{price}</Card.Text>

        </Card>
    </Link>
      </Col>
    ) 
  }
}

export default CardTemplate;
