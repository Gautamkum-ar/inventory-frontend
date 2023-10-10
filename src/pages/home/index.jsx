import { Layout } from "../componet";

export const Home = () => {
	return (
		<Layout>
			<div className="flex flex-col p-4 w-[82%]">
				<div className="flex justify-between w-full px-4">
					<h1 className="text-md font-semibold text-[#777]">Inventory </h1>
					<button className="flex bg-slate-300 p-2 rounded-md px-3 text-[#3c4de1]">
						Add Item
					</button>
				</div>
			</div>
		</Layout>
	);
};
