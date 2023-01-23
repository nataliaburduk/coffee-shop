import Container from 'react-bootstrap/Container';
import './our-coffee-card.css'
import OurCoffeeCard from '../our-coffee-card-items/our-coffee-card-items';

import Row from 'react-bootstrap/Row';

const OurCoffeeCards = ({filterData}) => {
  const elements = filterData.map(item => {
    const {id, ...itemProps} = item;
      return (
              < OurCoffeeCard
              id={id}
              key={id}
              {...itemProps}
              />
      ) 
    })

  return (
    <Container fluid>
      <Row className="our-coffee-cards">
        {elements}
      </Row>
    </Container>
  )
}

export default OurCoffeeCards;
