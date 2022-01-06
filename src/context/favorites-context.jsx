import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  genre: [],
  totalFavorites: 0,
  addFavorite: (newFavorite) => {},
  removeFavorite: (favoriteId) => {},
  toggleFavorite: (favoriteId) => {},
  setGenre: () => {}
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState(() => {
    const dataLocal = JSON.parse(localStorage.getItem("favorites")) || [];
    return dataLocal;
  });

  const [genre, setGenre] = useState([])

  const addFavoriteHandler = (newFavorite) => {
    setUserFavorites((prevFavorites) => {
      return [...prevFavorites, newFavorite];
    });
  };

  const removeFavoriteHandler = (favoriteId) => {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.filter((favorites) => favorites.id !== favoriteId);
    });
  };

  const toggleFavoriteHandler = (favoriteId) => {
    return userFavorites.some((favorites) => favorites.id === favoriteId);
  };

  const context = {
    favorites: userFavorites,
    genre: genre,
    setGenre,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    toggleFavorite: toggleFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
