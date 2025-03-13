import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavs = localStorage.getItem("favorites");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watch, setWatch] = useState(false);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    if (!isFavorite(movie.id)) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    selectedMovie,
    setSelectedMovie,
    watch,
    setWatch,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
