import { FaShoppingCart, FaHeart } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className="header__menu">
      <ul className="menu">
      <li className="menu-item">
          <FaHeart />
        </li>
        <li className="menu-item">
          <FaShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
