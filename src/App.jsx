import NavBar from "./components/NavBar";
import Card from "./components/Card";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const api = {
  base: "https://api.themoviedb.org/3",
  key: `${process.env.REACT_APP_KEY}`,
};

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchGenre = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}`
      );
      const data = await res.json();
      console.log(data.genres);
    };

    fetchGenre();

    const fetchMovies = async (page) => {
      const res = await fetch(
        `${api.base}/movie/popular?api_key=${api.key}&language=pt-BR&page=${page}&with_genres=true`
      );
      const data = await res.json();
      setMovies((prevMovie) => {
        return [...prevMovie, ...data.results]
      });
    };

    fetchMovies(page);
  }, [page]);

  console.log(movies)

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Pro Filmes</h1>
        <section className="header__search">
          <input type="text" className="search-bar" placeholder="Pesquisa..." />
          <button className="search-button">
            <FaSearch />
          </button>
        </section>
        <NavBar />
      </header>
      <main className="movies__grid">
        {movies.map((movies) => {
          return (
            <Card
              key={movies.id}
              id={movies.id}
              title={movies.title}
              image={movies.poster_path}
              genre={movies.genre_id}
              rating={movies.vote_average}
              date={movies.release_date}
            />
          );
        })}
      </main>
      <button onClick={loadMore} className='load'>Ver mais</button>
    </div>
  );
}

export default App;
