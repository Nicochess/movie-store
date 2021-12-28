import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie-store" element={<Home />} />
        <Route path="/movie-store/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
