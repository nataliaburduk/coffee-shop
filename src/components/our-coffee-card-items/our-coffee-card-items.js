import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './our-coffee-card-items.css';

const OurCoffeeCard = (props) => {
  const {title, img, price, country} = props;
  
    return (
      <Col xs='4' className='our-coffee-card-item'>
        <Card className="our-coffee-card-container">
            <img src={img} alt='first-card' className='our-coffee-card-img' variant="top"/>
            <Card.Text className="our-coffee-card-title"> {title}</Card.Text>
            <Card.Text className="our-coffee-card-country">
              {country}
            </Card.Text>
            <Card.Text className="our-coffee-card-price">
              {price}
            </Card.Text>
        </Card>
      </Col>
    ) 
}

export default OurCoffeeCard;