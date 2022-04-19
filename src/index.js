import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { FavoritesProvider } from "./contexts/favorites-context";

import App from "./components/app";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
