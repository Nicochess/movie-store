import Card from "./Card";

const CardList = ({ movies, genres }) => {

  return (
    <main className="movies__grid">
      {movies.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.poster_path}
            rating={item.vote_average}
            date={item.release_date}
            genreList={item.genre_ids}
            genres={genres}
          />
        );
      })}
    </main>
  );
};

export default CardList;
