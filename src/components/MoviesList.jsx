import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies = [] }) => {
  if (!movies.length) return <div>No movies found</div>;
  return (
    <div className={css.moviesList}>
      {movies.map((movie) => (
        <Link
          to={"/movies/" + movie.id}
          className={css.movieTitle}
          key={movie.id}
        >
          {movie.title}
        </Link>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
