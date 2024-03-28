import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../axios.js";
import styles from "./MovieCast.module.css";

const MovieCast = (props) => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieCast(movieId)
      .then((result) => {
        setCast(result.cast);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching movie cast:", error);
        setLoading(false);
        setError("Error fetching movie cast. Please try again later.");
      });
  }, [movieId]);

  const getimgUrl = (url) => {
    return `https://image.tmdb.org/t/p/w500/${url}`;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!cast || cast.length === 0) return <p>No cast information available</p>;

  return (
    <div className={styles.MovieCast}>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img
                className={styles.castImage}
                src={getimgUrl(actor.profile_path)}
                alt={actor.name}
              />
            )}
            <h4>{actor.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieCast.propTypes = {};

export default MovieCast;
