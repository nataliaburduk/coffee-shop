import CardTemplate from '../cards/cards';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './our-coffee-cards.css'

const OurCoffeeCards = ({filterData}) => {
  const elements = filterData.map(item => {
    const {id, ...itemProps} = item;
      return (
        <CardTemplate
          id={id}
          key={id}
          {...itemProps}
        />
      ) 
    })

  return (
    <Container fluid className='our-coffee-cards-container'>
      <Row className='our-coffee-cards'>
        {elements}
      </Row>
    </Container>
  )
}

export default OurCoffeeCards;
