import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPrint, FaEdit, FaTrash } from "react-icons/fa";

const Row = ({ data, counts }) => {
	return (
		<tr>
			<th></th>
			<td className="text-sm font-bold">INV27</td>
			<td className="text-sm font-bold">
				{data.name} <br /> {data.address} <br />
				{data.phone}{" "}
			</td>
			<td className="text-sm font-bold">{data.data.title.slice(0, 30)}</td>
			<td className="text-sm font-bold">
				<span className="text-2xl font-semibold">৳</span> <br />
				{data.data.price}{" "}
			</td>
			<td className="text-sm font-bold">Not Selected</td>
			<td>
				<select className="select select-bordered w-8/12 max-w-xs">
					<option disabled selected>
						On Hold
					</option>
					<option>Completed</option>
					<option>Pending Payment</option>
					<option>Canceled</option>
				</select>
			</td>
			<td>
				No <br /> Note
			</td>
			<td className="text-sm font-bold">
				Mr. <br /> Employee
			</td>
			<td className="text-sm font-bold">
				<Link to={`home/inv/${data?._id}`}>
					<FaPrint className="text-lg m-3 text-[#74768F] hover:text-[#FF407B]"></FaPrint>
				</Link>
				<FaEdit className="text-lg m-3 text-[#74768F] hover:text-[#FF407B]"></FaEdit>
				<FaTrash className="text-lg m-3 text-[#74768F] hover:text-[#FF407B]"></FaTrash>
			</td>
		</tr>
	);
};

export default Row;
