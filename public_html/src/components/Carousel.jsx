import React from "react";
import Slider from "react-slick";

function Carousel({images, reverse}) {
  const settings = {
		rtl: reverse || false,
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 0,
		cssEase: "linear",
	};
	return (
			<Slider {...settings}>
				{images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`raymond & jessa mae ${index}`}
            className="!h-[25vh] object-cover"
          />
				))}
			</Slider>
	);
}

export default Carousel;