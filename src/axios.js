import axios from "axios";


const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFjODkzYTlkZmFjYzhlYjliOWE5YWRmNDQ2M2U2YSIsInN1YiI6IjY1ZDI0ZjU2YzQzM2VhMDE4N2I1ZTJjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RmKTz7ra59DMI7vB2gxe5LPFBoQf683ewGYNnZjcQMk`;

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day`, options)
    .then((response) => response.data)
    .catch((err) => console.error(err));
};