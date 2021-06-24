import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Home } from "./views/Home";

function App() {
	return (
		<div className="App">
			<div className="navSpacer" />
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
