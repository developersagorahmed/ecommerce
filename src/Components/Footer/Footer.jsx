import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="bg-[#1A202C]">
			<div className="w-80 py-6 text-white mx-auto flex justify-between items-center font-bold">
				<a href="">About Us</a>
				<a href="">Delivery Policy</a>
				<a href="">Return Policy</a>
			</div>
			<div className="w-48 mx-auto flex items-center ">
				<FaFacebook className="text-4xl mr-5 text-white"></FaFacebook>
				<FaTwitter className="text-4xl mr-5 text-[#0E8AF0]"></FaTwitter>
				<FaInstagram className="text-4xl mr-5 text-[#F51F7A]"></FaInstagram>
				<FaYoutube className="text-4xl mr-5 text-[#FF0000]"></FaYoutube>
			</div>
			<div className="w-full text-center text-lg font-semibold text-white mx-auto">
				{" "}
				&copyright 2022{" "}
				<span className="text-[#9BD949] hover:underline cursor-pointer">
					Ecommerce
				</span>{" "}
				All Right Reserved. Developed By{" "}
				<span className="text-[#9BD949] hover:underline cursor-pointer">
					Pro Debuggers
				</span>
			</div>
		</div>
	);
};

export default Footer;
