import { useContext } from "react";
import FavoritesContext from "../context/favorites-context";
import Card from "./Card";

const CardList = ({ movies }) => {
  const favoriteCtx = useContext(FavoritesContext);
  console.log(favoriteCtx.genres)

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
            genre={favoriteCtx.genres}
            date={movies.release_date}
          />
        );
      })}
    </main>
  );
};

export default CardList;
