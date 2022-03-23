import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductListProvider } from "./context/product-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>

    <ProductListProvider>
      <App />
    </ProductListProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
