import React, { useEffect, useState } from "react";
import { getMovies } from "../axios.js";
import MoviesList from "./MoviesList.jsx.js";

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
      <MoviesList movies={movies} />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
