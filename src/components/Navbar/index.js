import { Sun, Volume2, Rss } from "react-feather";
import "./style.scss";
import { Boop } from "../../components/Boop";

export const Navbar = () => {
	return (
		<div className="maxWidthContainer navContainer">
			<h2>Aaron Soto</h2>
			<div className="navMenu">
				<ul>
					<a href="#">
						<li>Home</li>
					</a>
					<a href="#">
						<li>About</li>
					</a>
					<a href="#">
						<li>Work</li>
					</a>
					<a href="#">
						<li>Contact</li>
					</a>
				</ul>
			</div>
			<div className="icons">
				<Boop scale={1.2} timing={200}>
					<button href="#">
						<Sun />
					</button>
				</Boop>
				<Boop scale={1.2} timing={200}>
					<button href="#">
						<Volume2 />
					</button>
				</Boop>
				<Boop scale={1.2} timing={200}>
					<button href="#">
						<Rss />
					</button>
				</Boop>
			</div>
		</div>
	);
};
