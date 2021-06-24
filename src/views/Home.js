import { About } from "../components/About";
import { Posts } from "../components/Posts";
import { Works } from "../components/Works";
import { Contact } from "../components/Contact";

export const Home = () => {
	return (
		<>
			<About />
			<Works />
			<Posts />
			<Contact />
		</>
	);
};
