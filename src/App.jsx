import {Routes, Route, NavLink} from "react-router-dom";
import clsx from 'clsx';
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import MoviesDetailsPage from "./Pages/MovieDetailsPage";
import MovieCast from "./Pages/MovieCast";
import MoviesReviews from "./Pages/MovieReviews";
import NotFound from "./Pages/NotFound";
import css from "./App.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};



export const App = () => {
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
    </div>
  );
};

export default App;
