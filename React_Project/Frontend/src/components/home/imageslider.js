// src/ImageSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imageslider.css'; // Create this file for custom styles

const ImageSlider = ({ images }) => {
  const settings = {    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  let x=
    {
        position:'relative',
        height:'535px',
    }
  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" style={x}   className='w-100'/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;