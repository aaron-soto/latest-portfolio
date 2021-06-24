import { ProjectPreview } from "./ProjectPreview";
import "./style.scss";
import { ProjectData } from "./ProjectData";

export const Works = () => {
	return (
		<section className="maxWidthContainer sectionWorks">
			<h2 className="sectionHeader">My Works</h2>

			{ProjectData.map((project) => {
				return (
					<ProjectPreview
						title={project.title}
						img={project.img}
						description={project.description}
						github={project.github}
						live={project.live}
					/>
				);
			})}
		</section>
	);
};
