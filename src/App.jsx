import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage"));
const MoviesDetailsPage = React.lazy(() => import("./pages/MovieDetailsPage"));
const MovieCast = React.lazy(() => import("./pages/MovieCast"));
const MoviesReviews = React.lazy(() => import("./pages/MovieReviews"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Navigation = React.lazy(() => import("./pages/Navigation"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
