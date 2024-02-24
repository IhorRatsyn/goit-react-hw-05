import React, {useEffect, useState} from 'react';
import {useParams, Outlet, Link} from "react-router-dom";
import { getMovieDetail} from "../axios.js";
import BackButton from "../components/BackButton.jsx";

const MovieDetailsPage = props => {
  const [movie, setMovie] = useState(null)
  const {movieId} = useParams();

  useEffect(() => {
    getMovieDetail(movieId).then((result)=> {
      setMovie(result)
    })
  }, [])


  const getImgUrl = (url) => {
    return `https://image.tmdb.org/t/p/w500/${url}`
  }
  if (!movie) return


  return (
    <div>
      <BackButton/>
      <img src={getImgUrl(movie.poster_path)} alt={movie.title}/>
      <h1>{movie.title}</h1>
      <p>User score {movie.vote_average}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <div>
        {movie.genres.map((genre) => (
          <div key={genre.id}>
              {genre.name}
          </div>
        ))}
      </div>
      <hr/>
      <h3>Adiitional information</h3>
      <ul>
        <li><Link to={`/movies/${movie.id}/reviews`}>
          Reviews
        </Link></li>
        <li> <Link to={`/movies/${movie.id}/cast`}>
          Cast
        </Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

MovieDetailsPage.propTypes = {
  
};

export default MovieDetailsPage;