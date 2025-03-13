import Cast from "../components/Cast";
import DetailCard from "../components/DetailCard";
import MovieCard from "../components/MovieCard";
import { getMovieCredits, getRecommendedMovies } from "../services/api";
import { useMovieContext } from "../context/MovieContext";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import VideoCard from "../components/VedioCard";

function MovieDetails() {
  const [casts, setcasts] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const { isDarkMode } = useTheme();
  const { selectedMovie, setSelectedMovie } = useMovieContext();
  const { watch, setWatch } = useMovieContext();

  useEffect(() => {
    const loadCast = async () => {
      try {
        let data = await getMovieCredits(selectedMovie);
        data = data.slice(0, 6);
        setcasts(data);
      } catch (err) {
        console.error(err);
      }
    };

    const loadRecommended = async () => {
      try {
        const data = await getRecommendedMovies(selectedMovie);
        console.log(data);
        setRecommended(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadCast();
    loadRecommended();
  }, [selectedMovie]);

  const handleClose = () => {
    setWatch(false);
  };

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="dark:bg-gray-900 min-h-screen">
        <div className="pt-12">
          <DetailCard movie={selectedMovie} />
          {watch && (
            <VideoCard movieId={selectedMovie.id} onClose={handleClose} />
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center text-white mt-8">
            CAST
          </h1>
          <div className="grid grid-cols-3 gap-4 p-4">
            {casts.map((cast) => (
              <Cast key={cast.id} data={cast} />
            ))}
          </div>
          <h1 className="text-2xl font-bold text-center text-white mt-8 p-6">
            YOU MAY ALSO LIKE
          </h1>
          <div className="p-6">
            <Carousel>
              {recommended.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </Carousel>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MovieDetails;
