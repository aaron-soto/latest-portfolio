import { ArrowRight } from "react-feather";

export const ProjectPreview = ({ title, img, description, github, live }) => {
	return (
		<div className="projectPreview">
			<img src={img} alt="" />
			<div className="projectDetails">
				<div className="projectInfo">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className="projectLinks">
					<a href={live} target="_blank">
						Live
					</a>
					<a href={github} target="_blank">
						Code
					</a>
				</div>
				<a className="projectLearnMore" href="#">
					Learn More{" "}
					<span>
						<ArrowRight />
					</span>
				</a>
			</div>
		</div>
	);
};
