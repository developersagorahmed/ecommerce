import React, { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import Swal from "sweetalert2";
const img_host_URL = `https://api.imgbb.com/1/upload?key=308a695436bd67f31b540c5aeae07127`;
const AddProduct = () => {
	const [category, setCategory] = useState("");
	const [regPrice, setRegPrice] = useState("");
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [sku, setSku] = useState("");
	const [stock, setStock] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const img = event.target.imag.files;

		const formData = new FormData();
		formData.append("image", img[0]);
		fetch(img_host_URL, {
			method: "POST",
			body: formData,
		})
			.then(async (res) => await res.json())
			.then((imgRes) => {
				if (imgRes.success) {
					const imgData = imgRes.data.display_url;

					const newData = {
						image: imgData,
						title,
						price,
						category,
						regPrice,
						description,
						sku,
						stock,
					};
					fetch("http://localhost:5000/addAProduct", {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(newData),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.acknowledged == true) {
								Swal.fire({
									position: "top-center",
									icon: "success",
									title: "Product added Successful",
									showConfirmButton: false,
									timer: 1500,
								});
							}
						})
						.catch((err) => console.log(err));
				}
			});
	};

	return (
		<div className="w-full h-[100vh] bg-white">
			<h1 className="text-2xl ml-5 pt-5 font-semibold text-[#3F425E] w-full border-b-2 pb-3">
				Product Add
			</h1>

			<button className="text-white bg-[#EF172C] duration-500 flex justify-center items-center px-3 py-1 font-semibold mt-5 ml-5 hover:bg-[#750b16]">
				{" "}
				<FaAngleDoubleLeft></FaAngleDoubleLeft> Back
			</button>

			<form onSubmit={handleSubmit}>
				<div className="flex justify-evenly">
					<div>
						<label className="label">
							<span className="label-text font-bold text-[#757890]">
								Product Category *
							</span>
						</label>
						<input
							onChange={(e) => setCategory(e.target.value)}
							type="text"
							placeholder="Product Category *"
							className="input rounded-none input-bordered w-[400px] max-w-xs"
						/>
					</div>
					<div>
						<label className="label">
							<span className="label-text font-bold text-[#757890]">
								Regular Price *
							</span>
						</label>
						<input
							onChange={(e) => setPrice(e.target.value)}
							type="number"
							placeholder="Regular Price *"
							className="input rounded-none input-bordered w-[400px] max-w-xs"
						/>
					</div>
				</div>
				<div className="flex justify-evenly">
					<div>
						<label className="label">
							<span className="label-text font-bold text-[#757890]">
								Product Name *
							</span>
						</label>
						<input
							onChange={(e) => setTitle(e.target.value)}
							type="text"
							placeholder="product Name"
							className="input rounded-none input-bordered w-[400px] max-w-xs"
						/>
					</div>
					<div>
						<label className="label">
							<span className="label-text font-bold text-[#757890]">
								Sale Price
							</span>
						</label>
						<input
							onChange={(e) => setRegPrice(e.target.value)}
							type="number"
							placeholder="Regular Price *"
							className="input rounded-none input-bordered w-[400px] max-w-xs"
						/>
					</div>
				</div>
				<div className="flex justify-evenly">
					<div>
						<label className="label">
							<span className="label-text font-bold text-[#757890]">SKU *</span>
						</label>
						<input
							onChange={(e) => setSku(e.target.value)}
							type="text"
							placeholder="SKU *"
							className="input rounded-none input-bordered w-[400px] max-w-xs"
						/>
					</div>
					<div>
						<label className="label">
							<span className="label-text font-bold text-[#757890]">Stock</span>
						</label>
						<input
							onChange={(e) => setStock(e.target.value)}
							type="number"
							placeholder="Stock"
							className="input rounded-none input-bordered w-[400px] max-w-xs"
						/>
					</div>
				</div>
				<div className="flex justify-evenly items-center">
					<div>
						<label className="label">
							<span className="label-text font-bold text-[#757890]">
								Product Description
							</span>
						</label>
						<textarea
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Product Description"
							className="textarea textarea-bordered textarea-lg w-[1000px] max-w-xs"
						></textarea>
					</div>
					<div>
						<label className="label">
							<span className="label-text font-bold text-[#757890]">
								Product Image
							</span>
						</label>
						<input
							type="file"
							className="file-input file-input-bordered w-full max-w-xs"
							placeholder="Choose A Photo"
							name="imag"
						/>
					</div>
				</div>

				<div className="flex justify-center items-center">
					<input
						className="  ml-4 my-4 rounded-none  btn bg-[#2EC551] text-white hover:bg-[#156126] "
						type="submit"
						value="Add"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
