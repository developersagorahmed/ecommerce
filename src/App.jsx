import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopHeader from "./Components/TopHeader/TopHeader";
import Navbar from "./Components/Navbar/Navbar";
import SubNav from "./Components/Navbar/SubNav/SubNav";
import Slider from "./Components/Slider/Slider";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import HotOffer from "./Components/HotOffer/HotOffer";
import AllProducts from "./Components/AllProducts/AllProducts";

function App() {
	return (
		<>
			<Slider></Slider>
			<Category></Category>
			<HotOffer></HotOffer>
			<AllProducts></AllProducts>
		</>
	);
}

export default App;
