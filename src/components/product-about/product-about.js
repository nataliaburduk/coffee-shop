import AboutSection from "../about-section/about-section";
import productAbout from '../../assets/img/about_it.jpg';

class ProductAbout extends AboutSection {
  sectionImage() {
    return (
      <img src={productAbout} alt='About our coffee beans'></img>
    )
  }

  sectionTitle() {
    return 'About it'
  }

  sectionBody() {
    return(
      <div>
      
      </div>
    )
  }

}

export default ProductAbout;
