import Card from "./Card";

const CardList = ({ movies }) => {
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
            date={movies.release_date}
          />
        );
      })}
    </main>
  );
};

export default CardList;
