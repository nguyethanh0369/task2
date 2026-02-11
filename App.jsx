import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing-page">
              <div className="landing-content">
                <h1>Paradise Nursery</h1>
                <p>Your one-stop shop for beautiful houseplants</p>
                <Link to="/plants">
                  <button>Get Started</button>
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
