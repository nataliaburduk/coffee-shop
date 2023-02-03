import AboutSection from '../../shared/about-section/about-section';
import './product-about.scss';


class ProductAbout extends AboutSection {
  sectionImage() {
    return (
      <img src={this.props.img} alt='About our coffee beans' className="product-img"></img>
    )
  }

  sectionTitle() {
    return 'About it'
  }

  sectionBody() {
    return(
      <div className="product-about">
        <p><span>Country: </span> {this.props.country}</p>
        <p><span>Description: </span> {this.props.description}</p>
        <p className="products-price"><span>Price: </span>{this.props.price}</p>
      </div>
    )
  }

}

export default ProductAbout;
