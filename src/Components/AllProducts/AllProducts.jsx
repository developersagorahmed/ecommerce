import React, { useEffect, useState } from "react";
import Card from "../HotOffer/Card";
import Cart2 from "./Cart2";

const AllProducts = () => {
	const [products, setProducts] = useState();
	useEffect(() => {
		fetch("http://localhost:5000/products")
			.then((data) => data.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div className="container2 mt-5">
			<h1 className="text-2xl text-black font-semibold mb-4">
				Necessary Products
			</h1>

			<div className="grid grid-cols-3 lg:grid-cols-7">
				{products?.map((info) => (
					<Cart2 key={info._id} data={info}></Cart2>
				))}
			</div>
		</div>
	);
};

export default AllProducts;
