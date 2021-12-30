import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
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
      <nav className="header__menu">
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/movie-store/favorites">
            <FaHeart />
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to=''>
            <FaShoppingCart />
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
