import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const MoviesList = ({movies = []}) => {
  if(!movies.length) return
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={'/movies/' + movie.id}>
            {movie.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesList;