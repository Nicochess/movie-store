import NavBar from "./NavBar";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to='/movie-store'>
        <h1 className="header__title">Pro Filmes</h1>
      </Link>
      <section className="header__search">
        <input type="text" className="search-bar" placeholder="Pesquisa..." />
        <button className="search-button">
          <FaSearch />
        </button>
      </section>
      <NavBar />
    </header>
  );
};

export default Header;
