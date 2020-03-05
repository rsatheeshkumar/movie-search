import React, { Component } from "react";
import MovieListItem from "../movieitems/MovieListItem";

import axios from "axios";
import "./MovieList.css";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: ""
    };
  }

  handleClick = () => {
    this.setState({ searchField: "", movies: [] });
  };

  handelChange = async e => {
    const search = e.target.value;
    this.setState({ searchField: search });
    if (search.length > 2) {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${search}&apiKey=46845d0d`
      );
      if (response.data.Response === "False") {
        this.setState({ movies: [] });
      } else {
        this.setState({ movies: response.data.Search });
      }
    }
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <div className="search-box">
          <input
            type="text"
            value={this.state.searchField}
            className="search-input"
            placeholder="Search..."
            onChange={this.handelChange}
          />
          <button className="icon-btn clear-btn" onClick={this.handleClick}>
            &times;
          </button>
        </div>
        <div className="card">
          {movies.map(movie => {
            return <MovieListItem key={movie.imdbID} movie={movie} />;
          })}
        </div>
      </>
    );
  }
}

export default MovieList;
