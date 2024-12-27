import Moviecard from "../components/Moviecard";
import Vediocard from "../components/Vediocard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import { useMovieContext } from "../context/MovieContext";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const { selectedMovie, setSelectedMovie } = useMovieContext();

  const nextButtonClick = () => {
    setCount(count + 1);
  };

  const prevButtonClick = () => {
    if (count == 1) setCount(1);
    else setCount(count - 1);
  };

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovie = await getPopularMovies(count);
        setMovie(popularMovie);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  useEffect(() => {
    const loadNewPage = async () => {
      try {
        const popularMovie = await getPopularMovies(count);
        setMovie(popularMovie);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadNewPage();
  }, [count]);

  const searchMovie = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovie(searchResults);
      setError(null);
    } catch (err) {
      setError("Failed to load data");
      console.error(err);
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  const handleCloseVideo = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={searchMovie}>
        <input
          className="search-input"
          type="text"
          placeholder="Search movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-msg">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="movies-grid">
          {movie.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      {selectedMovie && (
        <Vediocard movie={selectedMovie} onClose={handleCloseVideo} />
      )}
      <button className="prevButton" onClick={prevButtonClick}>
        prev
      </button>
      <button className="nextButton" onClick={nextButtonClick}>
        next
      </button>
    </div>
  );
}

export default Home;
