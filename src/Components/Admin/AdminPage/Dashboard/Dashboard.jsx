import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddProduct from "../AddProduct";
import TodayReport from "./TodayReport";
import RecentOrder from "./RecentOrder";
const Dashboard = () => {
	const data = useLoaderData();
	const [product, setProduct] = useState();
	const filtered = data.filter((item) => item.status === "processing");
	const pending = data.filter((item) => item.status === "pending");
	const hold = data.filter((item) => item.status === "hold");
	const cancel = data.filter((item) => item.status === "cancel");
	const complete = data.filter((item) => item.status === "complete");

	const totalPrice = data.reduce(
		(total, item) => total + item.data.price * item.quantity,
		0
	);
	useEffect(() => {
		fetch("http://localhost:5000/admin/home/admin/dashboard").then((dat) =>
			dat.json().then((res) => setProduct(res))
		);
	}, []);

	const today = new Date().toISOString().split("T")[0];
	const filteredData = data?.filter((item) => {
		// Assuming the item has a `payload` property with a `date` field
		const newDates = item?.payload?.date.slice(0, 10);
		return newDates === today;
	});
	console.log(filteredData);
	// const price =data.reduce((total,)=>total+price,0);
	return (
		<div className="bg-[#EFEFF6]">
			<div className="bg-[#EFEFF6]">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
					<div className=" shadow-xl border-t-4 rounded-md border-[#5968FE] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#7171A6] pl-6 pt-6">
							Total Revenue
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							৳ {totalPrice.toFixed(2)}
						</h1>
					</div>
					<div className=" shadow-xl  border-t-4 rounded-md border-[#5968FE] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#7171A6] pl-6 pt-6">
							Total Staff
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							2
						</h1>
					</div>
					<div className=" shadow-xl  border-t-4 rounded-md border-[#5968FE] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#7171A6] pl-6 pt-6">
							Total Customer
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							{data.length}
						</h1>
					</div>
					<div className=" shadow-xl  border-t-4 rounded-md border-[#5968FE] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#7171A6] pl-6 pt-6">
							Total Product
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							{product?.length}
						</h1>
					</div>
					<div className=" shadow-xl  border-t-4 rounded-md border-[#2EC551] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#7171A6] pl-6 pt-6">
							Total Order
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							{data?.length}
						</h1>
					</div>
					<div className=" shadow-xl  border-t-4 rounded-md border-[#2EC551] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#2ED7F3] pl-6 pt-6">
							Total Processing
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							{filtered?.length}
						</h1>
					</div>
					<div className=" shadow-xl  border-t-4 rounded-md border-[#2EC551] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#FF407B] pl-6 pt-6">
							Total Pending Payment
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							{pending?.length}
						</h1>
					</div>
					<div className=" shadow-xl  border-t-4 rounded-md border-[#2EC551] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#FFC518] pl-6 pt-6">
							Total Hold
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							{hold?.length}
						</h1>
					</div>
					<div className=" shadow-xl  border-t-4 rounded-md border-[#2EC551] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#EF1C30] pl-6 pt-6">
							Total Canceled
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							{cancel?.length}
						</h1>
					</div>
					<div className=" shadow-xl  border-t-4 rounded-md border-[#2EC551] w-[250px] h-full bg-white">
						<h2 className="text-left font-bold text-[15px] text-[#36C758] pl-6 pt-6">
							Total Completed
						</h2>
						<h1 className="text-left font-bold text-[40px] text-[#3D405C] p-3 pb-5">
							{complete?.length}
						</h1>
					</div>
				</div>
				<div className="mt-16 md:flex justify-evenly py-10">
					<TodayReport
						data={data}
						hold={hold}
						cancel={cancel}
						complete={complete}
						filtered={filtered}
						pending={pending}
					></TodayReport>
					<RecentOrder data={data}></RecentOrder>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
