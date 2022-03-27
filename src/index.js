import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductListProvider } from "./context/product-context";
import { AuthProvider } from './context/auth-context'
import { WishListProvider } from "./context/wishlist-context";
import { CartProvider } from "./context/cart-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishListProvider>
          <ProductListProvider>
            <App />
          </ProductListProvider>
        </WishListProvider>
      </CartProvider>
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
