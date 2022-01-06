import React, { useEffect, useState, useContext } from "react";
import { api } from "../App";
import CardList from "../components/CardList";
import FavoriteContext from "../context/favorites-context";

const Home = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const favoriteCtx = useContext(FavoriteContext);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const fetchApi = async (page) => {
    const movieUrl = `${api.base}/movie/popular?api_key=${api.key}&language=pt-BR&page=${page}&with_genres=true`;
    const resMovie = await fetch(movieUrl);
    const movieData = await resMovie.json();

    const genreUrl = `${api.base}/genre/movie/list?api_key=${api.key}&language=pt-BR`;
    const resGenre = await fetch(genreUrl);
    const genreData = await resGenre.json();
    favoriteCtx.setGenre(genreData.genres);

    setMovies((prev) => [...prev, ...movieData.results]);
  };

  useEffect(() => {
    fetchApi(page);
    setIsLoading(false);
    // eslint-disable-next-line
  }, [page]);

  if (isLoading) {
    return "loading...";
  }

  return (
    <>
      <CardList movies={movies} />
      <button onClick={loadMore} className="load">
        Ver mais
      </button>
    </>
  );
};

export default Home;
