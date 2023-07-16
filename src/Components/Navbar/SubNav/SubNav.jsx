import React from "react";

const SubNav = () => {
	return (
		<div className="hidden lg:block bg-[#c9151b] py-3">
			<ul className="flex justify-center  font-semibold items-center text-lg text-white">
				<li className="mr-5 duration-500 hover:underline ">Home</li>
				<li className="mr-5 duration-500 hover:underline ">Home & Gadgets</li>
				<li className="mr-5 duration-500 hover:underline ">Health & Beauty</li>
				<li className="mr-5 duration-500 hover:underline ">Hot Offer</li>
				<li className="mr-5 duration-500 hover:underline ">Kitchen Gadgets</li>
				<li className="mr-5 duration-500 hover:underline ">Security</li>
				<li className="mr-5 duration-500 hover:underline ">All Kind Of Rack</li>
				<li className="mr-5 duration-500 hover:underline ">Book</li>
				<li className="mr-5 duration-500 hover:underline ">Mens Fashion</li>
			</ul>
		</div>
	);
};

export default SubNav;
