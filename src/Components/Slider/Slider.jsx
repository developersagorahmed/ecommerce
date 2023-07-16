import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
	return (
		<div>
			<Carousel
				className="container2 mt-2"
				infiniteLoop={true}
				autoPlay={true}
				interval={3000}
			>
				<div>
					<img src="https://ecom.prodebuggers.com/uploads/62485bb310c83_1110x280.jpg" />
				</div>
				<div>
					<img src="https://ecom.prodebuggers.com/uploads/62485baa2ece4_1110x280.jpg" />
				</div>
				<div>
					<img src="https://ecom.prodebuggers.com/uploads/62485bba7c231_1110x280.jpg" />
				</div>
			</Carousel>
		</div>
	);
};

export default Slider;
