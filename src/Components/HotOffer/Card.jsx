import React from "react";
import { Link } from "react-router-dom";

const Card = (data) => {
	console.log(data);
	const { _id, title, price, description, category, image, rating } = data.data;
	return (
		<>
			<Link to={`/products/${_id}`}>
				<div
					style={{
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
					}}
					className="w-[170px] border border-1 border-red-700 h-[170px]"
				>
					<img
						className="ml-auto w-14"
						src="https://ecom.prodebuggers.com/frontEnd/images/flash-deal-percentage.png"
						alt=""
					/>
					<h3 className="text-white text-sm text-right relative bottom-12 right-4 font-bold">
						{rating.discount}% <br /> Off
					</h3>
					<div className="bg-[#0089CF] w-6/12 ml-auto rounded-s-full">
						<h1 className="text-white font-bold text-center">TK {price}</h1>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Card;
