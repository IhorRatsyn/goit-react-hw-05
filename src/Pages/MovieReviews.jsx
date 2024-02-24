import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";
import {getMovieCast, getMovieReviews} from "../axios.js";

const MovieReviews = props => {
  const {movieId} = useParams();
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getMovieReviews(movieId).then((result)=> {
      setReviews(result.results)
    })
  }, [])
  if (!reviews.length) return

  return (
    <div>
      {reviews.length ?
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <div dangerouslySetInnerHTML={{ __html: review.content }} />
          </li>
        ))}
      </ul>
        : <div>No Reviews yet</div>}
    </div>
  );
};

MovieReviews.propTypes = {
  
};

export default MovieReviews;