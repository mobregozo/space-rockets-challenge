import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core/dist";
import { MemoryRouter } from "react-router-dom";

export const CustomWrapper = ({ children }) => (
  <MemoryRouter>
    <ThemeProvider>
      <CSSReset />
      {children}
    </ThemeProvider>
  </MemoryRouter>
);
