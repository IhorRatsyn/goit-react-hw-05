import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";

const MovieReviews = props => {
  const {movieId} = useParams();

  return (
    <div>
Movie Reviews {(movieId)}
    </div>
  );
};

MovieReviews.propTypes = {
  
};

export default MovieReviews;