import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  genres: [],
  totalFavorites: 0,
  addFavorite: (newFavorite) => {},
  removeFavorite: (favoriteId) => {},
  toggleFavorite: (favoriteId) => {},
  getGenre: (genre) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState(() => {
    const dataLocal = JSON.parse(localStorage.getItem("favorites")) || [];
    return dataLocal;
  });

  const [genre, setGenre] = useState([]);

  const fetchGenres = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=pt-BR`
    );
    const data = await res.json();
    setGenre(data.genres);
  };

  useEffect(() => {

    fetchGenres();
    return () => {
      setGenre();
    };
  }, []);

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
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    toggleFavorite: toggleFavoriteHandler,
    genres: genre,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
