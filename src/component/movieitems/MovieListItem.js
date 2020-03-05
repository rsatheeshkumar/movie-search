import React from "react";
import "./movieListItems.css";

const MovieListItem = ({ movie }) => {
  const { Title, Year, Poster } = movie;
  return (
    <div className="card-container">
      <img className="movie-poster" alt="monster" src={Poster} />
      <span className="title">
        <div className="movie-title">{Title} </div>
        <div className="movie-year">{Year} </div>
      </span>
    </div>
  );
};

export default MovieListItem;
