import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from "./components/Navbar/Navbar"
import { HomePage, ProductListing, Login, SignUp } from "./pages"
import Mockman from "mockman-js";
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
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>

    </Router>
  );
}

export default App;
