import NavBar from "./components/NavBar";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import CardList from "./components/CardList";

const api = {
  base: "https://api.themoviedb.org/3",
  key: `${process.env.REACT_APP_KEY}`,
};

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async (page) => {
      const res = await fetch(
        `${api.base}/movie/popular?api_key=${api.key}&language=pt-BR&page=${page}&with_genres=true`
      );
      const data = await res.json();
      setMovies((prevMovie) => {
        return [...prevMovie, ...data.results];
      });
    };

    fetchMovies(page);
  }, [page]);

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
      <CardList movies={movies} />
      <button onClick={loadMore} className="load">
        Ver mais
      </button>
    </div>
  );
}

export default App;
