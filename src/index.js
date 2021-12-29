import { FavoritesContextProvider } from "./context/favorites-context";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/styles.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
