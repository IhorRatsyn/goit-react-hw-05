import React from 'react';
import { useParams, Outlet } from "react-router-dom";

const MovieDetailsPage = props => {
  const {movieId} = useParams();


  return (
    <div>
Movie details Page{(movieId)}
      <Outlet />
    </div>
  );
};

MovieDetailsPage.propTypes = {
  
};

export default MovieDetailsPage;