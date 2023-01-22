import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './our-best-card.css'

const OurBestCard = (props) => {
  const {title, img, price} = props;
  
    return (
      <Col>
        <Card className="our-best-card-container">
            <img src={img} alt='first-card' className='our-best-card-img' variant="top"/>
            <Card.Text className="our-best-card-title"> {title}</Card.Text>
            <Card.Text className="our-best-card-price">
              {price}
            </Card.Text>
        </Card>
      </Col>
    ) 
}

export default OurBestCard;
