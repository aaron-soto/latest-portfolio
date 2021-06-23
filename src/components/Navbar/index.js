import { Sun, Volume2, Rss } from "react-feather";
import "./style.scss";

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
				<button>
					<Sun />
				</button>
				<button>
					<Volume2 />
				</button>
				<button>
					<Rss />
				</button>
			</div>
		</div>
	);
};
