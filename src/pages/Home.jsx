// Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (search) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=86250b80`);
    const data = await response.json();
    if (data.Search) setMovies(data.Search);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) fetchMovies(e.target.value);
  };

  const addToFavorites = (movie) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <div className="container">
      <h2>Search Movies</h2>
      <input type="text" className="form-control" value={query} onChange={handleSearch} placeholder="Search for a movie..." />
      <div className="row mt-3">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-md-3">
            <div className="card">
              <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">Details</Link>
                <button className="btn btn-warning ms-2" onClick={() => addToFavorites(movie)}>❤️ Favorite</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
