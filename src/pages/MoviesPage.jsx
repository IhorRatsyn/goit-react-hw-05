import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar.jsx";
import MovieList from "./MovieList.jsx";
import { getMoviesSearch } from "../axios.js";
import { useSearchParams } from "react-router-dom";

const MoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      setLoading(true);
      getMoviesSearch(query)
        .then((result) => {
          setMovies(result.results);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
          setLoading(false);
          setError("Error fetching movies. Please try again later.");
        });
    }
  }, [query]);

  return (
    <div>
      <SearchBar />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

MoviesPage.propTypes = {};

export default MoviesPage;
