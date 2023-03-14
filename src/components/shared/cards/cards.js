import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../errorBoundary/errorBoundary";
import "./cards.scss";

const CardTemplate = (props) => {
  
  const getCountry = () =>  {
    return props.country ? <Card.Text className="card-country">{country}</Card.Text> : null
  }
  const { id, title, img, price, country } = props;

  return (
    <ErrorBoundary>
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
          {getCountry(country)}
          <Card.Text className="card-price">{price}</Card.Text>
        </Card>
      </Link>
    </Col>
    </ErrorBoundary>
  )
}

export default CardTemplate;
