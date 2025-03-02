// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <Link className="navbar-brand text-warning fw-bold" to="/">
            IMDB Clone
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/favorites">
                  My Favorites
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content text-center mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
