import React, { useEffect, useState } from "react";
import { api } from "../App";
import CardList from "../components/CardList";

const Home = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const fetchApi = async (page) => {
    const movieData = `${api.base}/movie/popular?api_key=${api.key}&language=pt-BR&page=${page}&with_genres=true`;
    const res = await fetch(movieData);
    const data = await res.json();
    setMovies((prev) => [...prev, ...data.results]);
  };

  useEffect(() => {
      fetchApi(page);
      setIsLoading(false);
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
