import NavBar from "./NavBar";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to='/movie-store'>
        <h1 className="header__title">Movie Store</h1>
      </NavLink>
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
