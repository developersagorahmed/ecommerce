import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart2 = ({ data }) => {
	const navigate = useNavigate();
	const { _id, title, price, description, category, image, rating } = data;
	const saveData = () => {
		localStorage.setItem("key", JSON.stringify(data));
		navigate(`/payment/${_id}`);
	};

	return (
		<>
			<div className="md:h-[290px] md:w-[163px] border border-2">
				<Link to={`/products/${_id}`}>
					<img className="h-[150px] mx-auto" src={image} alt="" />
					<h2 className="text-[#FDAB04] text-center mt-2 text-xl font-bold">
						TK{price}
					</h2>
					<p className="text-[#777777] text-base text-center">
						{title.slice(0, 30)}
					</p>
				</Link>
				<div className="text-center ">
					<button
						onClick={() => saveData()}
						className="bg-[#C9151B] hover:bg-[#550609] duration-500 text-white  h-9 w-10/12 rounded-md"
					>
						Order Now
					</button>
				</div>
			</div>
		</>
	);
};

export default Cart2;
