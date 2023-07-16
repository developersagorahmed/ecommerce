import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
	const navigate = useNavigate();
	const hometo = () => {
		navigate("/");
	};
	return (
		<div className="text-center  h-[46vh]">
			<h1 className="text-3xl my-8 text-[#008000] font-bold">
				Order Place Successfully
			</h1>
			<p className="text-[#008000]">
				আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে আমাদের কল সেন্টার থেকে ফোন করে
				আপনার অর্ডারটি কনফার্ম করা হবে
			</p>
			<button
				onClick={hometo}
				className="btn bg-[#008000] hover:bg-[#024902] my-7 duration-500 text-white font-bold"
			>
				প্রোডাক্ট বাছাই করুন
			</button>
		</div>
	);
};

export default Success;
