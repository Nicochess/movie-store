import React, { useContext, useEffect } from "react";
import CardList from "../components/CardList";
import FavoritesContext from "../context/favorites-context";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesCtx.favorites));
  }, [favoritesCtx.favorites]);

  return <CardList movies={favoritesCtx.favorites} />;
};

export default Favorites;
