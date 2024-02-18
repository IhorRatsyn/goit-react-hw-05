import {Routes, Route, NavLink, Link} from "react-router-dom";
import clsx from 'clsx';
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import MoviesDetailsPage from "./Pages/MovieDetailsPage";
import MovieCast from "./Pages/MovieCast";
import MoviesReviews from "./Pages/MovieReviews";
import NotFound from "./Pages/NotFound";
import css from "./App.module.css";
import {getMovies} from "./axios.js";
import {useEffect, useState} from "react";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};



export const App = () => {
  const [movies, setMovies] = useState({
    results: []
  })
  useEffect(()=>{
    getMovies().then((result)=> {
      setMovies(result)
      console.log(result)
    })
  }, [])

  if(!movies.results.length) return

  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          HomePage
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          MoviesPage
        </NavLink>
        <NavLink to="/movies/:movieId" className={buildLinkClass}>
          MoviesDetailsPage
        </NavLink>
        <NavLink to="/movies/:movieId/cast" className={buildLinkClass}>
          MovieCast
        </NavLink>
        <NavLink to="/movies/:movieId/reviews" className={buildLinkClass}>
          MoviesReviews
        </NavLink>
      </nav>;
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {movies.results.map((movie) => (
        <div><li key={movie.id} movie={movie.title}> {movie.title} </li></div>

      ))}
    </div>
  );
};

export default App;
