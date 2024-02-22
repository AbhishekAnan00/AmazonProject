import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {AppProvider} from "./Context/ProductContext.jsx";
import {FilterProvider} from './Context/FilterContext.jsx'
import { CartContextProvider } from "./Context/CartContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <AppProvider>
        <FilterProvider>
          <CartContextProvider>
        <App />
        </CartContextProvider>
        </FilterProvider>
      </AppProvider>
    </React.StrictMode>
);
