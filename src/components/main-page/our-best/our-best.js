import { Component } from 'react';
import CardTemplate from '../../shared/cards/cards';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './our-best.css'


class OurBest extends Component {
  render() {
    const {data} = this.props;
    const elements = data.map(item => {
      const {id, ...itemProps} = item;
        return (
                <CardTemplate 
                id={id}
                key={id}
                {...itemProps}/>
        ) 
      })

      return (
        <Container fluid className='our-best-container'>
          <div className='our-best-title'>
            <p>Our best</p>
            <Row className="our-best-cards">
              {elements}
            </Row>
          </div>
        </Container>
      )
  }
}

export default OurBest;
