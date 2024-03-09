import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar.jsx";
import MovieList from "./MovieList.jsx";
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
      <MovieList movies={movies} />
    </div>
  );
};

MoviesPage.propTypes = {};

export default MoviesPage;
