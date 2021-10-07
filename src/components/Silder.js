import React from "react";
import { useSelector } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Slides() {

  const {products} = useSelector(state => state.ProductReducer);
  const renderSlides = () =>
  products.map(num => (
    <div className="slider_img" key={num.id}>
    <img src={`/images/${num.image}`} alt="image name" />
</div>
    ));

  return (
    <div className="container">

    <div className="Slider">
      <Slider
        dots={false}
        slidesToShow={3}
        slidesToScroll={3}
        autoplay={true}
        autoplaySpeed={3000}
        >
        {renderSlides()}
      </Slider>
        </div>
    </div>
  );
}
