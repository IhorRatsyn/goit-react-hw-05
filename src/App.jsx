import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MoviesDetailsPage from "./pages/MovieDetailsPage";
import MovieCast from "./pages/MovieCast";
import MoviesReviews from "./pages/MovieReviews";
import NotFound from "./pages/NotFound";
import css from "./App.module.css";
import { getMovies } from "./axios.js";
import { useEffect, useState } from "react";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
