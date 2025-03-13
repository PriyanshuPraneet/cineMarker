import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import {
  searchMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../services/api";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trending, setTrending] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [upcoming, setUpcoming] = useState(false);
  const [count, setCount] = useState(1);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies(count);
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      return;
    }
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (e) {
      console.log(e);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  const loadPopularMovies = async () => {
    try {
      const popularMovies = await getPopularMovies(count);
      setMovies(popularMovies);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  const loadTrending = async () => {
    setTrending(true);
    setTopRated(false);
    setUpcoming(false);
    if (loading) return;
    setLoading(true);
    try {
      const trendingMovies = await getTrendingMovies(count);
      setMovies(trendingMovies);
      setError(null);
    } catch (e) {
      console.log(e);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  const loadTopRated = async () => {
    setTopRated(true);
    setTrending(false);
    setUpcoming(false);
    if (loading) return;
    setLoading(true);
    try {
      const topRatedMovies = await getTopRatedMovies(count);
      setMovies(topRatedMovies);
      setError(null);
    } catch (e) {
      console.log(e);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  const loadUpcoming = async () => {
    setUpcoming(true);
    setTopRated(false);
    setTrending(false);
    if (loading) return;
    setLoading(true);
    try {
      const upcomingMovies = await getUpcomingMovies(count);
      setMovies(upcomingMovies);
      setError(null);
    } catch (e) {
      console.log(e);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (trending) {
      loadTrending();
    } else if (topRated) {
      loadTopRated();
    } else if (upcoming) {
      loadUpcoming();
    } else {
      loadPopularMovies();
    }
  }, [count, trending, topRated, upcoming]);

  const nextButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevButtonClick = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="dark:bg-gray-700">
        <form
          className="flex items-center justify-center p-5 pt-24 dark:bg-gray-700"
          onSubmit={handleSearch}
        >
          <div className="p-5 w-full max-w-[700px] dark:bg-gray-700">
            <div className="flex border border-gray-400 rounded-full hover:shadow-lg transition-all dark:bg-gray-700">
              <div className="flex w-10 items-center justify-center rounded-l-full border-r border-gray-400 bg-white p-5 dark:bg-gray-700">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition duration-300 dark:fill-gray-300"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
                </svg>
              </div>
              <input
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white pl-2 text-base font-semibold outline-none rounded-l-full rounded-r-full dark:bg-gray-700 dark:text-white"
                placeholder="Search..."
              />
              <input
                type="submit"
                defaultValue="Search"
                className="bg-blue-500 px-4 py-2 rounded-r-full text-white font-semibold hover:bg-blue-800 transition-colors cursor-pointer focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center gap-6 p-4">
          <button
            className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
            onClick={() => {
              setCount(1); // Reset count to 1 first
              setTrending(true);
              setTopRated(false);
              setUpcoming(false);
            }}
          >
            Trending
          </button>
          <button
            className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
            onClick={() => {
              setCount(1);
              setTrending(false);
              setTopRated(false);
              setUpcoming(true);
            }}
          >
            Upcoming
          </button>
          <button
            className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
            onClick={() => {
              setCount(1);
              setTrending(false);
              setTopRated(true);
              setUpcoming(false);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="p-4">
          <h4 className="text-xl font-bold text-gray-800 tracking-wide uppercase dark:text-white">
            {trending
              ? "Trending"
              : topRated
              ? "Top Rated"
              : upcoming
              ? "Upcoming"
              : "Popular"}{" "}
            Movies
          </h4>
        </div>
        <div id="movies"></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <div className="flex justify-center gap-4 p-4">
          <button
            onClick={prevButtonClick}
            className="flex items-center bg-red-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:-translate-x-3"
          >
            <svg
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 12l2.731 8.875A59.769 59.769 0 0 0 2.515 12 59.768 59.768 0 0 0 20.73 3.125L18 12Zm0 0H10.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            Prev
          </button>

          <button
            onClick={nextButtonClick}
            className="flex items-center bg-red-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
          >
            Next
            <svg
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
