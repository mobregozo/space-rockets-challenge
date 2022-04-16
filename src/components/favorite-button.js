import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/core";
import { FavoritesContext } from "../contexts/favourites-context";
import { Star } from "react-feather";

export default function FavoriteButton({ typeOfItem, item, idLabel }) {
  const { addFavorite, removeFavorite, isFavoriteSelected } =
    useContext(FavoritesContext);

  const removeFav = (event) => {
    event.preventDefault();
    event.stopPropagation();
    removeFavorite(typeOfItem, item, idLabel);
  };

  const addFav = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addFavorite(typeOfItem, item, idLabel);
  };

  return (
    <>
      {isFavoriteSelected(typeOfItem, item[idLabel], idLabel) ? (
        <IconButton
          onClick={(event) => removeFav(event)}
          aria-label="Remove favorite"
          fontSize="20px"
          variantColor="orange"
          variant="link"
          text="Remove favorite"
          icon={Star}
        />
      ) : (
        <IconButton
          onClick={(event) => addFav(event)}
          aria-label="Add favorite"
          text="Add favorite"
          variant="link"
          fontSize="20px"
          icon={Star}
        />
      )}
    </>
  );
}
