import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=73f5af5d9a6c11f8e05b002bbe7cc492&language=en-US`
      );
      setMovie(request.data);
    }
    fetchMovie();
  }, [id]);

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {movie.poster_path && (
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      )}
    </div>
  );
}

export default MovieDetails;