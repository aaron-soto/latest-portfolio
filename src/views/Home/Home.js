import { Navbar } from "../../components/Navbar";
import "./Home.scss";
import { Posts } from "../../components/Posts";
import { Footer } from "../../components/Footer";

export const Home = () => {
	return (
		<>
			<div className="header">
				<Navbar />
				<div className="svgWrapper">
					<svg
						height="100%"
						width="100%"
						id="svg"
						viewBox="0 0 1440 400"
						xmlns="http://www.w3.org/2000/svg"
						className="transition duration-300 ease-in-out delay-150"
					>
						<path
							d="M 0,400 C 0,400 0,200 0,200 C 132.13333333333333,180.8 264.26666666666665,161.6 436,167 C 607.7333333333333,172.4 819.0666666666666,202.4 993,212 C 1166.9333333333334,221.6 1303.4666666666667,210.8 1440,200 C 1440,200 1440,400 1440,400 Z"
							stroke="none"
							stroke-width="0"
							fill="#ffffffff"
							class="transition-all duration-300 ease-in-out delay-150"
						></path>
					</svg>
				</div>
			</div>
			<Posts />
			<Footer />
		</>
	);
};
