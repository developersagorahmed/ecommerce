import React from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import {
	FaDesktop,
	FaCartPlus,
	FaBox,
	FaUsers,
	FaListUl,
	FaFilm,
	FaImages,
	FaTruck,
	FaTruckMoving,
	FaUser,
	FaCogs,
} from "react-icons/fa";

const Sidebar = () => {
	return (
		<div className="hidden  md:block">
			<>
				{/* Small Screen Navbar */}
				<div className="bg-gray-100  text-gray-800 flex justify-between md:hidden">
					<div>
						<div className="block cursor-pointer p-4 font-bold"></div>
					</div>
				</div>
				{/* Sidebar */}
				<div
					className={`z-10  md:fixed flex flex-col justify-between overflow-x-hidden bg-[#0E0C28] w-56 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform`}
				>
					<div>
						{/* Branding & Profile Info */}
						<div>
							<div className="flex flex-col items-center mt-6 -mx-2">
								<Link to="/dashboard">
									<h4 className="mx-2 mt-2 font-medium text-white  hover:underline"></h4>
								</Link>
								<Link to="/dashboard">
									<p className="mx-2 mt-1 text-sm font-medium text-white  hover:underline"></p>
								</Link>
							</div>
						</div>

						{/* Nav Items */}
						<div className="flex flex-col items-start ">
							<Link to={`admin/dashboard`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaDesktop className="w-10"></FaDesktop> Dashboard
								</button>
							</Link>
							<Link to={`admin/dashboard`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaUsers className="w-10"></FaUsers> Customers
								</button>
							</Link>
							<Link to="admin/addProduct">
								<button className="text-[#6C70A1] items-center  font-semibold hover:text-[#fff] mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaBox className="w-10"></FaBox> Add A Product
								</button>
							</Link>
							<Link to={`admin/manageProduct`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaCartPlus className="w-10"> </FaCartPlus>Manage Order
								</button>
							</Link>
							<Link to={`admin/manageProduct`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaListUl className="w-10"></FaListUl>Category
								</button>
							</Link>
							<Link to={`admin/manageProduct`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaFilm className="w-10"></FaFilm>Sliders
								</button>
							</Link>
							<Link to={`admin/manageProduct`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaImages className="w-10"></FaImages>Media
								</button>
							</Link>
							<Link to={`admin/manageProduct`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaTruck className="w-10"></FaTruck>Courier
								</button>
							</Link>
							<Link to={`admin/manageProduct`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaTruckMoving className="w-10"></FaTruckMoving> Shipping
									Method
								</button>
							</Link>
							<Link to={`admin/manageProduct`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaUser className="w-10"></FaUser>User
								</button>
							</Link>
							<Link to={`admin/manageProduct`}>
								<button className="text-[#6C70A1] font-semibold hover:text-[#fff] items-center mx-auto hover:bg-[#242849] p-3 duration-500 rounded-md flex mt-3 ">
									<FaCogs className="w-10"></FaCogs>Settings
								</button>
							</Link>
						</div>
					</div>

					<div>
						<button className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black transition-colors duration-300 transform">
							<BiLogOut className="text-white w-6 mt-1   h-6" />
							<span className="mx-4 font-medium">Logout</span>
						</button>
					</div>
				</div>
			</>
		</div>
	);
};

export default Sidebar;
