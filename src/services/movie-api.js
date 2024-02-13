import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE5MzAyYWUzMmFjNmZhNzViYzA1MDhlNGM3NGMwYiIsInN1YiI6IjYzM2ZiNzc3YjRhNTQzMDA3ZGE0MzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9vzJQ3wYIlY6xqrP8aWnr_LR0dOLBnKjHBDyrh1KCV0'}
});

export const fetchTrending = () => {
  return instance.get(`/trending/movie/day?language=en-US`)
    .then(response => response)
    .catch(err => console.error(err));
}

export const fetchByTitle = (title) => {
  return instance.get(`search/movie?query=${title}&include_adult=false&language=en-US&page=1`)
    .then(response => response)
    .catch(err => console.error(err));
}

export const fetchById = (id) => {
  return instance.get(`movie/${id}?language=en-US`)
    .then(response => response)
    .catch(err => console.error(err));
}

export const fetchCast = (id) => {
  return instance.get(`movie/${id}/credits?language=en-US`)
    .then(response => response)
    .catch(err => console.error(err));
}

export const fetchReviews = (id) => {
  return instance.get(`movie/${id}/reviews?language=en-US&page=1`)
    .then(response => response)
    .catch(err => console.error(err));
}




  