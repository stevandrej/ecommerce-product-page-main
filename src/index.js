import "./styles/themes/light.css";
import "./styles/reset.css";
import "./styles/style.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartContextProvider from "store/cart";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
