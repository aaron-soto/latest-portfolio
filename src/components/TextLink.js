export const TextLink = ({ link = "#", children }) => {
	return (
		<a href={link} className="textLink">
			{children}
		</a>
	);
};
