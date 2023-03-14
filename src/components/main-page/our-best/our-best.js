import CardTemplate from "../../shared/cards/cards";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ErrorBoundary from "../../errorBoundary/errorBoundary";
import "./our-best.scss";

const OurBest = (props) => {
  const { data } = props;
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <CardTemplate id={id} key={id} {...itemProps} />
  })

  return (
    <ErrorBoundary>
      <Container fluid className="our-best-container">
        <div className="our-best-title">
          <p>Our best</p>
          <Row className="our-best-cards">{elements}</Row>
        </div>
      </Container>
    </ErrorBoundary>
  )
}

export default OurBest;
