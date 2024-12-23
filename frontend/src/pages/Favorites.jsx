import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import Moviecard from "../components/Moviecard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <div className="movies-grid">
          {favorites.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No favorites added!!!</h2>
      </div>
    );
  }
}

export default Favorites;
