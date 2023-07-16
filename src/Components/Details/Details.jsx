import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import css from "./Details.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Details = () => {
	const data = useLoaderData();
	const { _id, title, price, description, category, image, rating } = data;
	const [quantity, setQuantity] = useState(1);
	return (
		<div className="container2 my-6">
			<div className="md:flex justify-evenly">
				<img className="w-[300px] h-[300px]" src={image} alt="" />
				<div>
					<h1 className="text-2xl font-semibold ">{title.slice(0, 20)}</h1>
					<h1 className="text-2xl font-bold  text-[#0088CC]">TK{price}</h1>
					<div className="bg-green-900 w-[120px] text-center border2 font-semibold">
						Product Code{" "}
					</div>
					<h1 className="text-2xl font-semibold ">
						Stock <span className="text-red-500">Available</span>
					</h1>
					<div className="flex justify-center items-center mt-3">
						<h1 className="text-2xl font-semibold ">Quantity</h1>
						<div className="flex ml-6 py-7">
							<button
								onClick={() =>
									quantity == 0 ? "disable" : setQuantity(quantity - 1)
								}
								className="btn text-2xl mr-3"
							>
								-
							</button>
							<h1 className="text-4xl">{quantity}</h1>
							<button
								onClick={() => setQuantity(quantity + 1)}
								className="btn text-2xl ml-3"
							>
								+
							</button>
						</div>
					</div>
					<Link
						to={`/payment/${_id}`}
						className="bg-[#C9151B] mt-5 w-36 font-bold rounded-lg hover:bg-[#420305] text-white p-3 duration-500"
					>
						Order Now
					</Link>{" "}
					<br />
					<button className="bg-[#37A1D1] mt-4 w-[200px] font-bold rounded-lg hover:bg-[#0f4057] text-white p-3 duration-500">
						Add To Cart
					</button>
					<h1 className="text-2xl mt-5 font-semibold ">Phone for Order </h1>
					<h1 className="text-2xl mt-2 font-semibold text-[#007BFF] flex  items-center hover:text-[#043364] hover:underline">
						<FaPhoneSquareAlt></FaPhoneSquareAlt> +8801600000000{" "}
					</h1>
					<div className="text-lg w-[350px] mt-5 text-[#007BFF] flex justify-between border-b-2 border-t-2">
						Delivery charges in Dhaka{" "}
						<div className="text-lg font-bold  text-[#007BFF]">TK60</div>
					</div>
					<div className="text-lg  w-[350px] text-[#007BFF] flex justify-between border-b-2 ">
						Delivery charges Outside Dhaka{" "}
						<div className="text-lg font-bold  text-[#007BFF]">TK150</div>
					</div>
					<h1 className="text-xl text-[#DC3545] mt-5 font-semibold ">
						Bkash Number: 01700000000{" "}
					</h1>
				</div>
			</div>
			<div className="mt-6">
				<div className="tabs">
					<a className="tab tab-lg tab-lifted  tab-active">Products Details</a>
				</div>
				<h1>{description}</h1>
			</div>
		</div>
	);
};

export default Details;
