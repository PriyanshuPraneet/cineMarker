import { useEffect, useState } from "react";
import { getDesc } from "../services/api";
import { useMovieContext } from "../context/MovieContext";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function DetailCard({ movie }) {
  const [desc, setDesc] = useState([]);
  const { isDarkMode } = useTheme();
  const { watch, setWatch } = useMovieContext();

  useEffect(() => {
    const loadDesc = async () => {
      try {
        const data = await getDesc(movie);
        setDesc(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadDesc();
  }, [movie]);

  const watchButtonClicked = () => {
    setWatch(!watch);
  };

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div
        className="flex items-start p-6 space-x-8 bg-gray-100 rounded-xl shadow-lg w-[80%] mx-auto mt-12 dark:bg-gray-800"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
          backgroundSize: "cover", // Ensures the background image covers the card
          backgroundPosition: "center", // Centers the background image
        }}
      >
        {/* Movie Image (Now on the left side) */}
        <div className="w-1/3 h-auto overflow-hidden rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Movie Info (Title, Tagline, Description) */}
        <div className="flex-1 dark:text-white">
          {/* Movie Title */}
          <h2 className="text-4xl font-extrabold text-white mb-2 hover:text-blue-600 transition duration-200">
            {movie.title}
          </h2>

          {/* Movie Tagline */}
          <h5 className="text-xl text-white mt-2 italic">
            {desc["tagline"] ? desc["tagline"] : "No tagline available"}
          </h5>

          {/* Movie Description */}
          <p className="text-lg text-white mt-4">
            {desc["overview"] ? desc["overview"] : "Loading description..."}
          </p>
          <br />
          {/* Movie Additional Information (Language, Type, Runtime, Rating) */}
          <div className="flex flex-wrap space-x-90 mt-4">
            {/* Language and Type Info */}
            <div className="flex flex-col space-y-2">
              <p className="text-md text-white flex items-center">
                <span className="mr-2 text-xl">🌐</span>
                Language: {desc["original_language"]}
              </p>
              <p className="text-md text-white flex items-center">
                <span className="mr-2 text-xl">🎞</span>
                Type: Movie
              </p>
            </div>

            {/* Runtime and Rating Info */}
            <div className="flex flex-col space-y-2">
              <p className="text-md text-white flex items-center">
                <span className="mr-2 text-xl">🕓</span>
                Runtime: {desc["runtime"]} min
              </p>
              <p className="text-md text-white flex items-center">
                <span className="mr-2 text-xl">🎥</span>
                Rating: {desc["vote_average"]?.toFixed(2)}/10
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-16 w-64 rounded-full transition duration-300 ease-in-out cursor-pointer"
              onClick={watchButtonClicked}
            >
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
