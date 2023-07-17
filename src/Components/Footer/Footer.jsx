import React from "react";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaBeer,
	FaPhone,
} from "react-icons/fa";
import { MdLocationPin, MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<>
			{/* <div className="bg-[#1A202C]">
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
		</div> */}
			<footer className="footer p-10 bg-[#1A202C] text-[white]">
				<div>
					<img
						src="https://ecom.prodebuggers.com/uploads/64862df63765f.png"
						alt=""
					/>
					<p>
						Company Name here
						<br />
						Some description about company
					</p>
				</div>
				<div>
					<span className="footer-title">Services</span>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</div>
				<div>
					<span className="footer-title">Company</span>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
				</div>
				<div>
					<span className="footer-title">Legal</span>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</div>
				<div>
					<div>
						<span className="footer-title">Contract</span> <br />
						<div className="flex mt-3 justify-start items-center">
							<MdLocationPin
								size={20}
								className="mr-2 text-white"
							></MdLocationPin>{" "}
							<span className="text-lg text-white">Location</span>
						</div>
						<div className="flex justify-start items-center">
							<FaPhone size={20} className=" text-white mr-2"></FaPhone>
							<span className="text-lg text-white ">01700000000</span>
						</div>
						<div className="flex justify-start items-center">
							<MdEmail size={20} className=" text-white mr-2"></MdEmail>
							<span className="text-lg text-white">example@email.com</span>
						</div>
						<div className="w-48 mt-5 mx-auto flex items-center ">
							<FaFacebook className="text-4xl mr-5 text-white"></FaFacebook>
							<FaTwitter className="text-4xl mr-5 text-[#0E8AF0]"></FaTwitter>
							<FaInstagram className="text-4xl mr-5 text-[#F51F7A]"></FaInstagram>
							<FaYoutube className="text-4xl mr-5 text-[#FF0000]"></FaYoutube>
						</div>
					</div>
				</div>
			</footer>
			<div className="w-full text-center bg-[#1A202C] text-lg font-semibold text-white mx-auto">
				{" "}
				© 2023{" "}
				<span className="text-[#9BD949] hover:underline cursor-pointer">
					Ecommerce
				</span>{" "}
				All Right Reserved. Developed By{" "}
			</div>
		</>
	);
};

export default Footer;
