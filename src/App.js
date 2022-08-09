import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from "./components/Navbar/Navbar"
import { HomePage, ProductListing, Login, SignUp, WishList, Cart, ProductPage, Shipping, PaymentMethod, PlaceOrder, OrderSuccess, NotFound } from "./pages"
import Mockman from "mockman-js";
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductListing />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path="/wishlist" element={<PrivateRoute><WishList /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order-success/:id" element={<OrderSuccess />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
