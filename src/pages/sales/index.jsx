import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../componet";
import { useEffect, useState } from "react";
import { loadSales } from "../../redux";
import { AddSaleForm } from "./addSale";

export const Sales = () => {
	const [toggle, setToggle] = useState(false);
	const sales = useSelector((state) => state.sales);
	const dispatch = useDispatch();

	const totalRevenue = sales?.reduce(
		(acc, curr) => acc + curr.price * curr.quantity,
		0
	);

	useEffect(() => {
		dispatch(loadSales());
	}, []);
	return (
		<Layout>
			<div className="flex flex-col p-4 w-[82%]">
				<div className="flex justify-between w-full px-4">
					<h1 className="text-xl font-semibold">Sales </h1>
					<button
						onClick={() => setToggle(true)}
						className="flex bg-slate-300 p-2 rounded-md px-3 text-[#3c4de1]">
						Add sale
					</button>
				</div>
				{toggle && <AddSaleForm setToggle={setToggle} />}
				<div className="mt-4">
					<table className="w-full  flex flex-col items-center bg-slate-50">
						<th>Sales History</th>
						<tr className="flex justify-between w-full border-b px-3 items-center h-8">
							<th className="w-[25%] flex ">Items</th>
							<th className="w-[25%]">Qauntity</th>
							<th className="w-[25%]">Price(in Rs)</th>
							<th className="w-[25%]">Totol Amount(Rs)</th>
						</tr>

						{sales?.map((item) => (
							<tr
								key={item._id}
								className="flex justify-between w-full items-center px-3 border-b ">
								<td className="w-[25%] items-center flex">{item.name}</td>
								<td className="w-[25%] items-center flex justify-center">
									{item.quantity}
								</td>
								<td className="w-[25%] items-center flex justify-center">
									{item.price}
								</td>
								<td className="w-[25%] items-center flex justify-around">
									{item.price * item.quantity}
								</td>
							</tr>
						))}
						<tr className="flex w-full justify-between text-[#555] h-12 items-center px-2 border-green-400 border">
							Total Revenue{" "}
							<td className="w-[25%] flex items-center justify-center">
								Rs {totalRevenue}
							</td>
						</tr>
					</table>
				</div>
			</div>
		</Layout>
	);
};
