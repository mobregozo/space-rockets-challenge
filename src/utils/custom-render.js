import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter } from "react-router-dom";
import { FavoritesProvider } from "./../contexts/favourites-context";

export const CustomWrapper = ({ children }) => (
  <MemoryRouter>
    <ChakraProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </ChakraProvider>
  </MemoryRouter>
);
