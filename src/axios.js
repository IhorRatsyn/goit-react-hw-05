import axios from "axios";


const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const token = `eyJhbGciOiJIUzI1NiJ9
    .eyJhdWQiOiI2MDFjODkzYTlkZmFjYzhlYjliOWE5YWRmNDQ2M2U2YSIsInN1YiI6IjY1ZDI0ZjU2YzQzM2VhMDE4N2I1ZTJjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
    .RmKTz7ra59DMI7vB2gxe5LPFBoQf683ewGYNnZjcQMk`;

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

