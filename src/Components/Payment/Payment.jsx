import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Payment = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [corr, setCorr] = useState();
	const navigate = useNavigate();

	const data = useLoaderData();
	const onSubmit = (event) => {
		event.preventDefault();
		const currentDate = new Date();

		console.log(currentDate);
		const payload = {
			date: currentDate.toISOString(), // Convert Date to ISO string format
		};

		const newData = {
			name,
			phone,
			address,
			quantity,
			data,
			corr,
			status: "processing",
			payload,
		};

		fetch("https://ecommerce-server-eta.vercel.app/addtodatabase", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Payment Success",
						showConfirmButton: false,
						timer: 1500,
					});
				}
				console.log(data);
				event.target.reset();
				navigate("/success");
			});
	};

	const goToHome = () => {
		navigate("/");
	};
	const handleSelectChange = (event) => {
		setCorr(event.target.value);
	};
	return (
		<div className="container2 my-10">
			<div className=" lg:flex justify-evenly">
				<form onSubmit={onSubmit}>
					<div className="w-[415px]  border-2 ">
						<div className="w-[415px]  border-2 pt-3 pb-10 text-[#F7F7F7]">
							<h1 className="text-xl  border-b-2 text-black mt-2 font-semibold text-center mb-4">
								কাস্টমার ইনফরমেশন
							</h1>
							<p className="text-center text-[#212529]">
								অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে{" "}
								<span className="text-[#DC3545]">অর্ডার কনফার্ম করুন</span>{" "}
								বাটনে ক্লিক করুন
							</p>
							<div className="form-control mx-auto mt-5 w-full max-w-xs">
								<label className="label">
									<span className="label-text text-sm font-semibold">
										আপনার নাম *
									</span>
								</label>
								<input
									onChange={(e) => setName(e.target.value)}
									type="text"
									placeholder="আপনার নাম লিখুন"
									className="input text-black input-bordered w-full max-w-xs"
								/>
								<label className="label">
									<span className="label-text text-sm font-semibold">
										আপনার মোবাইল *
									</span>
								</label>
								<input
									onChange={(e) => setPhone(e.target.value)}
									type="text"
									placeholder="আপনার মোবাইল লিখুন"
									className="input text-black input-bordered w-full max-w-xs"
								/>
								<label className="label">
									<span className="label-text text-sm font-semibold">
										আপনার ঠিকানা *
									</span>
								</label>
								<input
									onChange={(e) => setAddress(e.target.value)}
									type="text"
									placeholder="আপনার ঠিকানা লিখুন"
									className="input text-black input-bordered w-full max-w-xs"
								/>
								<label className="label">
									<span className="label-text text-sm font-semibold">
										আপনার এরিয়া সিলেক্ট করুন *
									</span>
								</label>
								<select
									value={corr}
									onChange={handleSelectChange}
									className="select text-black select-bordered w-full max-w-xs"
								>
									<option disabled selected>
										আপনার এরিয়া সিলেক্ট করুন ?
									</option>
									<option>ঢাকার ভিতরে ডেলিভারি</option>
									<option>ঢাকার বাইরে ডেলিভারি</option>
								</select>
								<input
									type="submit"
									name="submit"
									className="input input-bordered w-full max-w-xs text-white btn mt-5 bg-[#28A745] hover:bg-[#095e1d] duration-500"
								/>
								{/* <butt
									
									className="text-white btn mt-5 bg-[#28A745] hover:bg-[#095e1d] duration-500"
								>
									অর্ডার কনফার্ম করুন
								</butt> */}
							</div>
						</div>
					</div>
				</form>

				<div>
					<div className="  border-2 ">
						<div className="  border-2 pt-3 pb-10 text-[#F7F7F7]">
							<h1 className="text-xl  border-b-2 text-black mt-2 font-semibold text-center mb-4">
								অর্ডার ইনফরমেশন
							</h1>

							<table className="table ">
								<thead className="text-black border border-2">
									<tr>
										<th className="border border-2">Image</th>
										<th className="border border-2">Product Name </th>
										<th className="border border-2">Price</th>
										<th className="border border-2">Qty</th>
										<th className="border border-2">Sub Total</th>
									</tr>
								</thead>
								<tbody className="text-black">
									<tr>
										<th className="border border-2">
											<div className="avatar">
												<div className="w-8 rounded">
													<img
														src={data?.image}
														alt="Tailwind-CSS-Avatar-component"
													/>
													<h1 className="text-black">{data?.title}</h1>
												</div>
											</div>
										</th>
										<td className="border border-2">
											<h1>{data?.title.slice(0, 20)}</h1>
										</td>
										<td className="border border-2">{data?.price}</td>
										<td className="border  flex border-2">
											<button
												onClick={() =>
													quantity == 0 ? "disable" : setQuantity(quantity - 1)
												}
												className="mr-4 btn btn-sm"
											>
												-
											</button>
											<h1 className="text-xl">{quantity}</h1>
											<button
												onClick={() => setQuantity(quantity + 1)}
												className="btn ml-3  btn-sm"
											>
												+
											</button>
										</td>
										<td className="border border-2">
											{quantity * data?.price}
										</td>
									</tr>
									<tr className="border-2">
										<td></td>
										<td></td>
										<td></td>
										<td className="text-base font-semibold">Net Total</td>
										<td className="border-2">{quantity * data?.price}</td>
									</tr>
									<tr className="border-2">
										<td></td>
										<td></td>
										<td></td>
										<td className="text-base font-semibold">Shipping Cost</td>
										<td className="border-2">60</td>
									</tr>
									<tr className="border-2">
										<td></td>
										<td></td>
										<td></td>
										<td className="text-base font-semibold">Grand Total</td>
										<td className="border-2">{(quantity * data?.price + 60).toFixed(2)}</td>
									</tr>
								</tbody>
							</table>
							<div className="flex justify-between items-center">
								<button
									onClick={goToHome}
									className="btn mt-3 ml-3 text-white bg-[#17A2B8]
                            hover:bg-[#0f7686] duration-500"
								>
									{" "}
									<FaAngleLeft></FaAngleLeft> Back to Shopping
								</button>
								<button
									className="btn mt-3 ml-3 text-white mr-3  bg-[#DC3545]
                                    hover:bg-[#8a1420] duration-500"
								>
									{" "}
									Cart Clear
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
