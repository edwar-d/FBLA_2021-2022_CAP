
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
// import Checkout from "./pages/archived/Checkout";
import Checkout from "./pages/Checkout";
// import Book from "./pages/Book";

// import Signup from "./pages/archived/Signup";
// import Login from "./pages/archived/Login";

// import "./assets/css/bootstrap.min.css";
// import "./assets/scss/now-ui-kit.scss";
// import Book from "components/Book";
// import LoginBox from "components/LoginBox";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CurrentPage />
      </div>
    );
  }
}

function CurrentPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/checkout2" element={<Checkout2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
