import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core/dist";
import { MemoryRouter } from "react-router-dom";
import { FavoritesProvider } from "./../contexts/favourites-context";

export const CustomWrapper = ({ children }) => (
  <MemoryRouter>
    <ThemeProvider>
      <CSSReset />
      <FavoritesProvider>{children}</FavoritesProvider>
    </ThemeProvider>
  </MemoryRouter>
);
