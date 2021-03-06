import { ArrowRight } from "react-feather";

export const PostPreview = ({ title, description, link }) => {
	return (
		<a className="postPreview" href={link}>
			<h3 className="postHeader">{title}</h3>
			<p>{description}</p>
			<div className="readMoreBtn">
				Read more{" "}
				<span>
					<ArrowRight />
				</span>
			</div>
		</a>
	);
};
