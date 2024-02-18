import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";

const MovieCast = props => {
  const {movieId,cast} = useParams();

  return (
    <div>
Movie Cast {movieId} {cast}
    </div>
  );
};

MovieCast.propTypes = {
  
};

export default MovieCast;