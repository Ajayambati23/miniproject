// Favorites.jsx
import React, { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container">
      <h2>My Favorite Movies</h2>
      <div className="row">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="col-md-3">
            <div className="card">
              <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <button className="btn btn-danger" onClick={() => removeFromFavorites(movie.imdbID)}>❌ Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
