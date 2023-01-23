import AboutSection from "../about-section/about-section";
import ourCoffeeAbout from '../../img/our_coffee_about.jpg';

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
      <div>
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        </p>
        <p>
          Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
        </p>
        <p>
          As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
        </p>
      </div>
    )
  }

}

export default OurCoffeeAbout;
