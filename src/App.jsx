import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import FavoritesContext from "./context/favorites-context";
import axios from "axios";

export const api = {
  base: "https://api.themoviedb.org/3",
  key: `${process.env.REACT_APP_KEY}`,
};

function App() {
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesCtx.favorites));
  }, [favoritesCtx.favorites]);

  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = () => {
    setPage(page + 1);
  };

  const fetchApi = async (page) => {
    const movieData = `${api.base}/movie/popular?api_key=${api.key}&language=pt-BR&page=${page}&with_genres=true`;
    const genreData = `${api.base}/genre/movie/list?api_key=${api.key}&language=pt-BR`;

    const getMovieData = axios.get(movieData);
    const getGenreData = axios.get(genreData);
    axios.all([getMovieData, getGenreData]).then(
      axios.spread((...allData) => {
        const allMovie = allData[0];
        const genreList = allData[1];

        setMovies((prev) => {
          return [...prev, ...allMovie.data.results];
        });

        setGenre(genreList.data.genres);

        setIsLoading(false);
      })
    );
  };

  useEffect(() => {
    fetchApi(page);
  }, [page]);

  if (isLoading) {
    return "loading...";
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/movie-store"
          element={
            <>
              <CardList genres={genre} movies={movies} />
              <button onClick={loadMore} className="load">
                Ver mais
              </button>
            </>
          }
        ></Route>
        <Route
          path="/movie-store/favorites"
          element={
            <>
              <CardList movies={favoritesCtx.favorites} genres={genre} />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
