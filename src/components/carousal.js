import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby"
import PropTypes from "prop-types"
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
          <img src={require('../images/carousel-header_1280x506.jpg')} />
        </div>
        <div>
        <img src={require('../images/small-dogs-live-large.jpg')} />
        </div>
        <div>
        <img src={require('../images/little-pouch.jpg')} />
        </div>
        <div>
        <img src={require('../images/puppy-basketball.jpg')} />
        </div>
        <div>
        <img src={require('../images/feed-the-good-tug-of-war.jpg')} />
        </div>
        <div>
        <img src={require('../images/puppy-bowl-carousel-image_1280x506.jpg')} />
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider