import AboutSection from "../about-section/about-section";


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
        <p>Country: {this.props.country}</p>
        <p>Description: lalalalal</p>
        <p>Price: {this.props.price}</p>
      </div>
    )
  }

}

export default ProductAbout;
