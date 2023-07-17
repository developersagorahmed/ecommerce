import React from "react";
import css from "./TodayReport.css";
const TodayReport = ({ data, hold, cancel, complete, filtered, pending }) => {
	console.log(data);
	return (
		<div className="w-[436px] bg-white pb-6 p-6">
			<h2 className="text-[#3F425E] font-semibold text-2xl p-6 border-b-2 ">
				Today's Report
			</h2>

			<div>
				<table className="rounded-md p-6">
					<tr>
						<td className="font-semibold">Orders</td>

						<td>{data?.length}</td>
					</tr>
					<tr>
						<td className="font-semibold">Processing</td>

						<td>{filtered?.length}</td>
					</tr>
					<tr>
						<td className="font-semibold">Pending Payment</td>

						<td>{pending?.length}</td>
					</tr>
					<tr>
						<td className="font-semibold">On Hold</td>

						<td>{hold?.length}</td>
					</tr>
					<tr>
						<td className="font-semibold">Canceled</td>

						<td>{cancel?.length}</td>
					</tr>
					<tr>
						<td className="font-semibold">Completed</td>

						<td>{complete?.length}</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default TodayReport;
