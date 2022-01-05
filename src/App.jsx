import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { FavoritesContextProvider } from "./context/favorites-context";

export const api = {
  base: "https://api.themoviedb.org/3",
  key: `${process.env.REACT_APP_KEY}`,
};

function App() {
  return (
    <FavoritesContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/movie-store" element={<Home />} />
          <Route path="/movie-store/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesContextProvider>
  );
}

export default App;
