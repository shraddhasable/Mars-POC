import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <Img src={require('../images/carousel-header_1280x506.jpg')} alt="" />
        </div>
        <div>
        <Img src={require('../images/small-dogs-live-large.jpg')} alt="" />
        </div>
        <div>
        <Img src={require('../images/little-pouch.jpg')} alt="" />
        </div>
        <div>
        <Img src={require('../images/puppy-basketball.jpg')} alt="" />
        </div>
        <div>
        <Img src={require('../images/feed-the-good-tug-of-war.jpg')} alt="" />
        </div>
        <div>
        <Img src={require('../images/puppy-bowl-carousel-image_1280x506.jpg')} alt="" />
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider
