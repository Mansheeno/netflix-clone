import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie, isLargeRow }) {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate(`/movie/${movie.id}`)}
      className={`row__poster ${isLargeRow && "row__posterLarge"}`}
      src={`https://image.tmdb.org/t/p/w500${
        isLargeRow ? movie.poster_path : movie.backdrop_path
      }`}
      alt={movie.name}
    />
  );
}

export default MovieCard;