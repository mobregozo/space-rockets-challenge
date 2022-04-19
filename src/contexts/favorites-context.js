import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({ launch: [], launchPad: [] });

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      setFavorites(favorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (typeOfItem, newItem, idLabel) => {
    if (isFavoriteSelected(typeOfItem, newItem[idLabel], idLabel)) return;
    setFavorites((favorites) => ({
      ...favorites,
      [typeOfItem]: [...favorites[typeOfItem], newItem],
    }));
  };

  const removeFavorite = (typeOfItem, newItem, idLabel) => {
    if (!isFavoriteSelected(typeOfItem, newItem[idLabel], idLabel)) return;
    setFavorites((favorites) => ({
      ...favorites,
      [typeOfItem]: favorites[typeOfItem].filter(
        (fav) => fav[idLabel] !== newItem[idLabel]
      ),
    }));
  };

  const isFavoriteSelected = (type, id, idLabel) => {
    return favorites[type].findIndex((fav) => fav[idLabel] === id) !== -1;
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavoriteSelected }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
