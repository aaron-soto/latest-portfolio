import "./style.scss";

export const Contact = () => {
	return (
		<section className="maxWidthContainer sectionContact">
			<h2 className="sectionHeaderWorks">Contact</h2>
			<input type="text" placeholder="Name" />
			<input type="text" placeholder="Email" />
			<textarea cols="30" rows="10" placeholder="Message"></textarea>
			<button>Send Message</button>
		</section>
	);
};
