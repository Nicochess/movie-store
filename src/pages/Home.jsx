import { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import FavoritesContext from "../context/favorites-context";

const api = {
  base: "https://api.themoviedb.org/3",
  key: `${process.env.REACT_APP_KEY}`,
};

const Home = () => {
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesCtx.favorites));
  }, [favoritesCtx.favorites]);

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMovies = async (page) => {
    const res = await fetch(
      `${api.base}/movie/popular?api_key=${api.key}&language=pt-BR&page=${page}&with_genres=true`
    );
    const data = await res.json();
    return data.results;
  };

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(page);
      setMovies((prev) => {
        return [...prev, ...data];
      });
    };

    getMovies();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header />
      <CardList movies={movies} />
      <button onClick={loadMore} className="load">
        Ver mais
      </button>
    </>
  );
};

export default Home;
