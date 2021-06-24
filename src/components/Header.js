import { Navbar } from "./Navbar";
import { Wave } from "./Wave";

export const Header = () => {
	return (
		<div className="header">
			<Navbar />
			<Wave />
			{/* <div className="meImg"></div> */}
		</div>
	);
};
