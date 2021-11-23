import react, { Fragment } from "react";
import "./App.css";
import TopNavbar from "./components/TopNavbar";
import UserLogin from "./components/Login";
import UserSignup from "./components/Signup";
import ItemSearch from "./components/MainPage";
import Cart from "./components/Cart";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart-items" element={<Cart />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
