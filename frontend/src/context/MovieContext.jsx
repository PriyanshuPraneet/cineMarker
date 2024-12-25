import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites)); // store the favorites in local storage as a string
  }, [favorites]); // whenever the favorites change update the local storage

  const addToFavorites = (movies) => {
    setFavorites((prev) => [...prev, movies]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((movie) => movie.id === id); // check if the movie is in the favorites
  }; // if it is return true

  const values = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    selectedMovie,
    setSelectedMovie,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
