
import Container from 'react-bootstrap/Container';
import './our-best.css'
import '../our-best-card/our-best-card.css'
import OurBestCard from "../our-best-card/our-best-card";
import Row from 'react-bootstrap/Row';

const OurBest = ({data}) => {
  const elements = data.map(item => {
    const {...itemProps} = item;
      return (
              <OurBestCard 
              {...itemProps}
              />
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

export default OurBest;
