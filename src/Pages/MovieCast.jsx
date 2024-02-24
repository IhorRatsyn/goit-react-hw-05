import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";
import {getMovieCast} from "../axios.js";

const MovieCast = props => {
  const {movieId} = useParams();
  const [cast, setCast] = useState(null)

  useEffect(() => {
    getMovieCast(movieId).then((result)=> {
      setCast(result)
    })
  }, [])
  if (!cast) return

  const getimgUrl = (url) => {
    return `https://image.tmdb.org/t/p/w500/${url}`
  }

  return (
    <div>
      <ul>
        {cast.cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path && <img src={getimgUrl(actor.profile_path)} alt={actor.name}/>}
            <h4>{actor.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieCast.propTypes = {
  
};

export default MovieCast;