import "./style.scss";
import { PostPreview } from "./PostPreview";
import { PostData, categories, popularContent } from "./PostData";

export const Posts = () => {
	return (
		<main className="maxWidthContainer postsContainer">
			<section>
				<h2 className="sectionHeader">Recently Published</h2>
				{PostData.map((post) => {
					return (
						<PostPreview
							title={post.title}
							description={post.description}
							link={post.link}
						/>
					);
				})}
			</section>
			<div className="rightWrapper">
				<section className="sectionCategories">
					<h2 className="sectionHeader">Categories</h2>
					<div className="categories">
						{categories.map((category) => {
							return (
								<a className="category" href={category.link}>
									{category.title}
								</a>
							);
						})}
					</div>
				</section>
				<section className="sectionPopular">
					<h2 className="sectionHeader">Popular Content</h2>
					<ul className="popularContent">
						{popularContent.map((post) => {
							return (
								<li>
									<a href={post.link} className="popularPreview">
										{post.title}
									</a>
								</li>
							);
						})}
					</ul>
				</section>
			</div>
		</main>
	);
};
