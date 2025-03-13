const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (pageNo) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`
  );
  const data = await response.json();
  return data.results;
};

export const getTopRatedMovies = async (pageNo) => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${pageNo}`
  );
  const data = await response.json();
  return data.results;
};

export const getUpcomingMovies = async (pageNo) => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageNo}`
  );
  const data = await response.json();
  return data.results;
};

export const getTrendingMovies = async (pageNo) => {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNo}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const getDesc = async (movie) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const getMovieCredits = async (movie) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movie.id}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.cast;
};

export const getRecommendedMovies = async (movie) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movie.id}/recommendations?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};
