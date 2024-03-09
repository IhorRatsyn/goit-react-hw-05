import React, { useEffect, useState } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { getMovieDetail } from "../axios.js";
import BackButton from "../components/BackButton.jsx";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = (props) => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetail(movieId).then((result) => {
      setMovie(result);
    });
  }, [movieId]);

  const getImgUrl = (url) => {
    return `https://image.tmdb.org/t/p/w500/${url}`;
  };
  if (!movie) return;

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <BackButton />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.posterContainer}>
          <img
            className={styles.posterImg}
            src={getImgUrl(movie.poster_path)}
            alt={movie.title}
          />
        </div>
        <div className={styles.topContent}>
          <h1>{movie.title}</h1>
          <p>User score {movie.vote_average / 0.1}%</p>
          <h3>Overview</h3>
          <p className={styles.overview}>{movie.overview}</p>
          <h3>Genres</h3>
          <div>
            {movie.genres.map((genre) => (
              <div key={genre.id}>{genre.name}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.infoList}>
          <h3>Adiitional information</h3>
          <ul>
            <li>
              <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
            </li>
            <li>
              {" "}
              <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
