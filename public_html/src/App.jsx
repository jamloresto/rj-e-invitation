import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import Gallery from "./pages/Gallery";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Gallery />}
				/>
				<Route
					path="/gallery"
					element={<Gallery />}
				/>

				{/* <Route path="/rsvp/*" element={<Rsvp />} /> */}
			</Routes>
		</Router>
	);
};
export default App;
