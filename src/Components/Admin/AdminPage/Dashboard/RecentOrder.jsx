import React from "react";
import RecentRow from "./RecentRow";

const RecentOrder = ({ data }) => {
	const data2 = data.reverse();
	let sl = 1;
	return (
		<div className="w-full ml-6 bg-white pb-6 p-6">
			<h2 className="text-[#3F425E] font-semibold text-2xl p-6 border-b-2 ">
				Recent Orders
			</h2>

			<div>
				<table className="rounded-md p-6">
					<tr>
						<td className="font-semibold">SL.</td>
						<td className="font-semibold">Date</td>
						<td className="font-semibold">C. Name </td>
						<td className="font-semibold">C. Phone </td>
						<td className="font-semibold">Total</td>
						<td className="font-semibold">Status</td>
					</tr>

					{data2?.slice(0, 6).map((item, index) => (
						<>
							<tr key={index}>
								<td>{sl++}</td>
								<td>{item?.payload?.date.slice(0, 10)}</td>
								<td>{item?.name}</td>
								<td>{item?.phone}</td>
								<td>৳ {item?.data.price}</td>
								<td>
									<span
										className={
											item?.status == "processing"
												? "bg-[#0998B0] p-1"
												: "" || item?.status == "complet"
												? "bg-[#21AE41] p-1"
												: "" || item?.status == "hold"
												? "bg-[#FFB118] p-1"
												: ""
										}
									>
										{item?.status}
									</span>
								</td>
							</tr>
						</>
					))}
				</table>
			</div>
		</div>
	);
};

export default RecentOrder;
