import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Gallery from "./pages/Gallery";

const App = () => {
	return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/gallery"
              replace
            />
          }
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
