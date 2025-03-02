// Movie.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=86250b80`);
      const data = await response.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
    </div>
  );
};

export default Movie;
