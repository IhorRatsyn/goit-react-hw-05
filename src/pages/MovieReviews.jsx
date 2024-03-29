import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../axios.js";
import styles from "./MovieReviews.module.css";

const MovieReviews = (props) => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then((result) => {
        setReviews(result.results);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching movie reviews:", error);
        setLoading(false);
        setError("Error fetching movie reviews. Please try again later.");
      });
  }, [movieId]);

  return (
    <div className={styles.MovieReviews}>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && reviews.length ? (
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
