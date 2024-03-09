import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies = [] }) => {
  if (!movies.length) return <div>No movies found</div>;
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={"/movies/" + movie.id} className={css.movieTitle}>
            {movie.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
