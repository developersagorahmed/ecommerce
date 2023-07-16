import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FaAngleRight } from "react-icons/fa";

const HotOffer = () => {
	const [product, setProduct] = useState();
	useEffect(() => {
		fetch("http://localhost:5000/products")
			.then((data) => data.json())
			.then((data) => setProduct(data.slice(0, 12)));
	}, []);
	return (
		<div className="container2 bg-[#FFEFCF]">
			<div className="flex justify-between pb-5 items-center">
				<div>
					<img
						className="w-24 mt-3"
						src="https://ecom.prodebuggers.com/frontEnd/images/hot-deal-logo.gif"
						alt=""
					/>
				</div>
				<div className="text-lg font-bold text-[#EF4523] flex justify-center items-center mt-3">
					All Hot Products <FaAngleRight></FaAngleRight>
				</div>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-6 grid-cols-3 gap-5 pb-6 ">
				{product?.map((products) => (
					<Card key={products.id} data={products}></Card>
				))}
			</div>
		</div>
	);
};

export default HotOffer;
