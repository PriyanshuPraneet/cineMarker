import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function Favorites() {
  const { favorites } = useMovieContext();
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="h-[100vh] dark:bg-gray-700">
        <div className="text-center pt-24">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">
            Your Wishlist
          </h1>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-gray-700">
              {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-gray-500 dark:text-gray-400">
                You have no favorite movies yet. Start adding some!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
