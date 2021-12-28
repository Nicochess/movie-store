import { useState, useEffect } from "react";
import Card from "./Card";

const CardList = ({ movies }) => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=pt-BR`
      );
      const data = await res.json();
      setGenre(data.genres)
    };

    fetchGenres()
  }, []);

  return (
    <main className="movies__grid">
      {movies.map((movies) => {
        return (
          <Card
            key={movies.id}
            id={movies.id}
            title={movies.title}
            image={movies.poster_path}
            rating={movies.vote_average}
            genreList={movies.genre_ids}
            genre={genre}
            date={movies.release_date}
          />
        );
      })}
    </main>
  );
};

export default CardList;
