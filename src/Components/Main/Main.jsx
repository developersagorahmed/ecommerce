import React from "react";
import App from "../../App";
import { Outlet } from "react-router-dom";
import TopHeader from "../TopHeader/TopHeader";
import Navbar from "../Navbar/Navbar";
import SubNav from "../Navbar/SubNav/SubNav";
import Footer from "../Footer/Footer";

const Main = () => {
	return (
		<div>
			<TopHeader></TopHeader>
			<Navbar></Navbar>
			<SubNav></SubNav>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
