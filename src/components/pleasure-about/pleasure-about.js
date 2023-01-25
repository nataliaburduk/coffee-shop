import AboutSection from "../about-section/about-section";
import pleasureAbout from '../../assets/img/pleasure_about.jpg';

class PleasureAbout extends AboutSection {
  sectionImage() {
    return (
      <img src={pleasureAbout} alt='About our coffee beans'></img>
    )
  }

  sectionTitle() {
    return 'About our goods'
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

export default PleasureAbout;
