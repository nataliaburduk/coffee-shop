import AboutSection from "../about-section/about-section";
import ourCoffeeAbout from '../../img/our_coffee_about.jpg';
import './our-coffee-about.css';

class OurCoffeeAbout extends AboutSection {
  sectionImage() {
    return (
      <img src={ourCoffeeAbout} alt='About our coffee beans'></img>
    )
  }

  sectionTitle() {
    return 'About Our Beans'
  }

  sectionBody() {
    return(
      <div className="our-coffee-about-content">
        <p className='about-p1'>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        </p>
        <p className='about-p2'>
          Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
        </p>
        <p className='about-p2'>
          As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
        </p>
      </div>
    )
  }

}

export default OurCoffeeAbout;
