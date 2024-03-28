import React, { useEffect, useState } from "react";
import {
  useParams,
  Outlet,
  Link,
  NavLink,
  useLocation,
  useRef,
} from "react-router-dom";
import { getMovieDetail } from "../axios.js";
import BackButton from "../components/BackButton.jsx";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
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

  const location = useLocation();
  const backButtonRef = useRef(null);

  if (!movie) return null;

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <BackButton ref={backButtonRef} />
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
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}/reviews`,
                  state: { from: location },
                }}
                activeClassName={styles.activeLink}
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}/cast`,
                  state: { from: location },
                }}
                activeClassName={styles.activeLink}
              >
                Cast
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
