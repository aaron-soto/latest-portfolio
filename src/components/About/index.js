import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "./style.scss";
import { Wave } from "../Wave";
import { Facebook, Twitter, Linkedin, Mail } from "react-feather";
import { Boop } from "../Boop";
import { Fancy } from "../Fancy";
import { TextLink } from "../TextLink";
import { Header } from "../Header";

export const About = () => {
	return (
		<section className="maxWidthContainer bodytest">
			<div className="mainLeft">
				<h2 className="sectionHeader">Hello, I'm Aaron</h2>
				<div className="aboutText">
					<p>
						Hi! I’m Aaron Soto, a <Fancy>full-stack</Fancy> web developer and
						software engineer based in Scottsdale, Arizona. After serving in
						Ranger Regiment with the Army for 5 years, I’ve decided to take the
						leap to pursue a career in software development.
					</p>
					<p>
						I’ve just completed a full-time immersive software engineering
						program at Coding Dojo. Having just graduated from this rigorous
						program, I can say that applying to a coding bootcamp has been the
						best decisions I have made in my life. I love to learn new
						technologies and{" "}
						<TextLink link="https://aaronsoto.io">flex my creativity</TextLink>{" "}
						to create new amazing things.
					</p>
				</div>
				<div className="resumeBtns">
					<button>View Resume</button>
					<button>Download Resume</button>
				</div>
			</div>
			<div className="mainRight">
				<div className="socialLinks aboutSocial">
					<ul>
						<li>
							<Boop scale={1.2} timing={200}>
								<a href="#">
									<Facebook />
								</a>
							</Boop>
						</li>
						<li>
							<Boop scale={1.2} timing={200}>
								<a href="#">
									<Twitter />
								</a>
							</Boop>
						</li>
						<li>
							<Boop scale={1.2} timing={200}>
								<a href="#">
									<Linkedin />
								</a>
							</Boop>
						</li>
						<li>
							<Boop scale={1.2} timing={200}>
								<a href="#">
									<Mail />
								</a>
							</Boop>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
