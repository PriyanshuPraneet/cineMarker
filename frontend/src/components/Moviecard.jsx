import "../css/Moviecard.css";
import { useMovieContext } from "../context/MovieContext";

function Moviecard({ movie }) {
  const { addToFavorites, isFavorite, removeFromFavorites, setSelectedMovie } =
    useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function onWatchClick(e) {
    e.preventDefault();
    setSelectedMovie(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavClick}
          >
            ♥
          </button>
          <button className="watch-btn" onClick={onWatchClick}>
            Watch
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 style={{ color: "white" }}>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default Moviecard;
