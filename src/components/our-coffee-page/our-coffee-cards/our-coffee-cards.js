import CardTemplate from "../../shared/cards/cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./our-coffee-cards.scss";

const OurCoffeeCards = (props) => {
    const { coffeeCardsData } = props;
    const elements = coffeeCardsData.map((item) => {
      const { id, ...itemProps } = item;
      return <CardTemplate id={id} key={id} {...itemProps} />;
    });

    return (
      <Container fluid className="our-coffee-cards-container">
        <Row className="our-coffee-cards">{elements}</Row>
      </Container>
    )
}

export default OurCoffeeCards;
