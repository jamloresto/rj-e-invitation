import React from "react";
import Slider from "react-slick";
import Carousel from "../components/Carousel";
import allImages from "../utils/loadImages";
import { shuffle } from "../utils/shuffle";

function Gallery() {
  const shuffled = shuffle(allImages).slice(0, 60);
	const carousel1 = shuffled.slice(0, 15);
	const carousel2 = shuffled.slice(15, 30);
	const carousel3 = shuffled.slice(30, 45);
	const carousel4 = shuffled.slice(45, 60);
	
	return (
		<div className="h-screen pointer-events-none relative overflow-hidden">
			<Carousel
				images={carousel1}
				reverse={true}
			/>
			<Carousel images={carousel2} />
			<Carousel
				images={carousel3}
				reverse={true}
			/>
			<Carousel images={carousel4} />
      <div className="absolute top-0 left-0 bg-[#ff669922] min-h-screen min-w-screen flex items-center justify-center">
        <p className="text-[72px] text-rose-900 text-center w-full bg-white opacity-70 py-8">
          RSVP opens on May 10, 2025
        </p>
      </div>
		</div>
	);
}

export default Gallery;