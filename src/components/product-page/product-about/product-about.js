import AboutSection from '../../common-components/about-section/about-section';
import './product-about.css';


class ProductAbout extends AboutSection {
  sectionImage() {
    return (
      <img src={this.props.img} alt='About our coffee beans'></img>
    )
  }

  sectionTitle() {
    return 'About it'
  }

  sectionBody() {
    return(
      <div>
        <p className="products-about"><span>Country: </span> {this.props.country}</p>
        <p className="products-about"><span>Description: </span> {this.props.description}</p>
        <p className="products-price"><span>Price: </span>{this.props.price}</p>
      </div>
    )
  }

}

export default ProductAbout;
