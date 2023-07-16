import React from "react";
import { FaPhone, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className="flex py-4 bg-[#131522] justify-around items-center">
			<img
				src="https://ecom.prodebuggers.com/uploads/64862df63765f.png"
				alt=""
			/>

			<div className="hidden lg:block lg:flex justify-center items-center ">
				<select className="select select-bordered  rounded-s-full w-[216px] max-w-xs">
					<option disabled selected>
						Category
					</option>
					<option>Home And Gadgets</option>
					<option>Health And Beauty</option>
					<option>Hot Offer</option>
					<option>Kitchen Gadgets</option>
					<option>Security</option>
					<option>All kind of Rack</option>
					<option>Books</option>
					<option>Mens Fashion</option>
				</select>
				<input
					type="text"
					placeholder="Search"
					className="input input-bordered rounded-e-full mr-2 w-[322px]  max-w-xs"
				/>
			</div>
			<div className="flex text-white font-bold lg:justify-center items-center">
				<FaPhone></FaPhone>
				+8801681636068
				<FaShoppingCart className="text-4xl"></FaShoppingCart>
			</div>
		</div>
	);
};

export default Navbar;
