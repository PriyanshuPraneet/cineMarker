import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function MovieCard({ movie }) {
  const { isDarkMode } = useTheme();
  const { isFavorite, addToFavorites, removeFromFavorites, setSelectedMovie } =
    useMovieContext();
  const favorite = isFavorite(movie.id);
  function onFavClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  function onCardClick(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    setSelectedMovie(movie);
  }

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="transform transition duration-300 hover:scale-105 rounded-lg shadow-lg w-56 bg-white cursor-pointer dark:bg-gray-800">
        {/* Movie Poster */}
        <div onClick={onCardClick}>
          <Link to={`/movie/${movie.id}`}>
            <div className="relative w-full h-80 overflow-hidden rounded-t-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Movie Info */}
            <div className="px-5 pt-2 pb-4 flex flex-col dark:bg-gray-800">
              <h1 className="font-semibold text-center text-sm truncate dark:text-white">
                {movie.title}
              </h1>
              <div className="text-center dark:text-white">
                <p>{movie.release_date?.split("-")[0]}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="px-5 pt-2 pb-4 flex flex-col dark:bg-gray-800">
          <button
            className={
              favorite
                ? "favorite-btn bg-red-500 text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-red-700"
                : "favorite-btn bg-blue-500 text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-blue-700"
            }
            type="button"
            onClick={onFavClick}
          >
            {favorite ? "Remove from Wishlist" : "Add to WishList"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
