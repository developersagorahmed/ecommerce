import React, { useEffect, useState } from "react";
import { FaPrint } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Row from "./Row";
import { CSVLink } from "react-csv";

const ManageProducts = () => {
	const product = useLoaderData();
	// const { name, phone, address, quantity, data } = product;

	

	let count = 1;
	return (
		<div className="w-full h-[100vh] bg-white">
			<h1 className="text-2xl ml-5 pt-5 font-semibold text-[#3F425E] w-full border-b-2 pb-3">
				All Orders
			</h1>

			<CSVLink
				data={product}
				className="text-white w-[200px] bg-[#EF172C] duration-500 flex justify-center items-center px-3 py-1 font-semibold mt-5 ml-5 hover:bg-[#750b16]"
			>
				{" "}
				<FaPrint className="mr-3"></FaPrint> Export Data
			</CSVLink>
			<div className="overflow-x-auto mt-6">
				<table className="table table-xs">
					<thead>
						<tr>
							<th className="text-sm font-bold">SL.</th>
							<th className="text-sm font-bold">
								Invoice
								<br />
								ID
							</th>
							<th className="text-sm font-bold">Customer Info</th>
							<th className="text-sm font-bold">Products</th>
							<th className="text-sm font-bold">Total</th>
							<th className="text-sm font-bold">Courier</th>
							<th className="text-sm font-bold">Status</th>
							<th className="text-sm font-bold">Note</th>
							<th className="text-sm font-bold">Assigned</th>
							<th className="text-sm font-bold">Actions</th>
						</tr>
					</thead>
					<tbody>
						{product?.map((prod) => (
							<Row key={prod._id} counts={count} data={prod}></Row>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageProducts;
