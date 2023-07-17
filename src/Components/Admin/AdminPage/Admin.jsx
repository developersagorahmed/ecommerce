import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import AdminNav from "../AdminNav/AdminNav";
import Footer from "../../Footer/Footer";

const Admin = () => {
	return (
		<div>
			<div className="bg-[#EFEFF6]">
				<AdminNav></AdminNav>
				<div className="bg-[#EFEFF6] h-[100vh]">
					<div className="  md:flex">
						<Sidebar></Sidebar>
						<div className="flex-1  md:ml-64">
							<div className="p-5 pl-0 bg-[#EFEFF6]">
								<Outlet />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
