import React from "react";

const RecentRow = ({ data }) => {
	return (
		<div>
			<tr>
				<td className="font-semibold">{data?.name}</td>
				<td className="font-semibold">{data?.name}</td>
			</tr>
		</div>
	);
};

export default RecentRow;
