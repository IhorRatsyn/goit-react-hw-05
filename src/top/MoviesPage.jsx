import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar.jsx";
import MoviesList from "./MoviesList.jsx";
import { getMovies, getMoviesSearch } from "../axios.js";

const MoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getMoviesSearch(query).then((result) => {
      setMovies(result.results);
    });
  }, [query]);
  return (
    <div>
      <SearchBar onSubmit={setQuery} />
      <MoviesList movies={movies} />
    </div>
  );
};

MoviesPage.propTypes = {};

export default MoviesPage;
