import "./style.scss";

export const Footer = () => {
	return (
		<div className=" footer">
			<div className="maxWidthContainer footerWrapper">
				<div className="footerLeft">
					<h2>Aaron Soto</h2>
					<p>Thanks for reading!</p>
					<p>© 2020-present Aaron Soto. All Rights Reserved.</p>
				</div>
				<div className="footerRight">
					<div className="links">
						<p>Tutorials</p>
						<ul>
							<a href="#">
								<li>React</li>
							</a>
							<a href="#">
								<li>CSS</li>
							</a>
							<a href="#">
								<li>Animation</li>
							</a>
							<a href="#">
								<li>Javascript</li>
							</a>
						</ul>
					</div>
					<div className="links">
						<p>Links</p>
						<ul>
							<a href="#">
								<li>Twitter</li>
							</a>

							<a href="#">
								<li>RSS</li>
							</a>

							<a href="#">
								<li>Contact</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
