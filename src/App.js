import react, { Fragment, useState } from "react";
import "./App.css";
import TopNavbar from "./components/TopNavbar";
import UserLogin from "./components/Login";
// import UserSignup from "./components/Signup";
import ItemSearch from "./components/MainPage";
import Cart from "./components/Cart";
import Home from "./components/Home";
import MainScreen from "./components/MainScreen";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <Router>
      <TopNavbar isLoggedIn= {isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart-items" element={<Cart />} />
        <Route path="/login" element={<UserLogin setisLoggedIn={setisLoggedIn}/>} />
        <Route path="/signup" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}
// }

export default App;
