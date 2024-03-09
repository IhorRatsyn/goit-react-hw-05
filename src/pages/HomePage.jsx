import React, { useEffect, useState } from "react";
import { getMovies } from "../axios.js";
import MovieList from "./MovieList.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then((result) => {
      setMovies(result.results);
    });
  }, []);

  if (!movies.length) return;

  return (
    <div>
      <h2>Trending Today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
