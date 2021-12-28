import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header__menu">
      <ul className="menu">
        <li className="menu-item">
          <Link to="/movie-store/favorites">
            <FaHeart />
          </Link>
        </li>
        <li className="menu-item">
          <Link to=''>
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
