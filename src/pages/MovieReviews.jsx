import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../axios.js";
import styles from "./MovieReviews.module.css";

const MovieReviews = (props) => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then((result) => {
      setReviews(result.results);
    });
  }, [movieId]);

  return (
    <div className={styles.MovieReviews}>
      {reviews.length ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <div dangerouslySetInnerHTML={{ __html: review.content }} />
            </li>
          ))}
        </ul>
      ) : (
        <div>No Reviews yet</div>
      )}
    </div>
  );
};

MovieReviews.propTypes = {};

export default MovieReviews;
