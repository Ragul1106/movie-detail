import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} className="movie-card-poster" 
             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x600/333/ccc?text=No+Image"; }}
        />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-year-genre">{movie.year} | {movie.genre}</p>
          <button className="view-details-button">View Details</button>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;