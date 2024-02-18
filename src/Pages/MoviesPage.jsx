import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from "../SearchBar.jsx";

const MoviesPage = props => {
  return (
    <div>
Movies Page
      <SearchBar></SearchBar>
    </div>
  );
};

MoviesPage.propTypes = {
  
};

export default MoviesPage;