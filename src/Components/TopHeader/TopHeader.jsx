import React from "react";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";

const TopHeader = () => {
	return (
		<div className="bg-[#131522] border-b-[1px] ">
			<div className="flex justify-between  lg:px-10">
				<div>
					<h3 className="font-semibold text-white">Welcome To Ecommerce</h3>
				</div>
				<div>
					<ul className="grid grid-cols-3 text-white  md:grid-cols-2 lg:grid-cols-3">
						<li className="flex mr-3 justify-center font-semibold items-center">
							<FaHome className="mr-2"></FaHome>
							<span className="hidden md:block">HOME</span>
						</li>
						<li className="flex mr-3 font-semibold justify-center items-center">
							<FaShoppingCart className="mr-2 hidden"></FaShoppingCart>
							<span className="hidden md:block">Checkout</span>
						</li>

						<li className="flex font-semibold justify-center items-center">
							<FaUser className="mr-2"></FaUser>
							<span className="hidden md:block">Account</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
