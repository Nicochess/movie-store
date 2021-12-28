import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/styles.css";
import reportWebVitals from "./reportWebVitals";
import { FavoritesContextProvider } from "./context/favorites-context";

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
