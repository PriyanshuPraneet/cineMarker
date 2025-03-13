import { ThemeProvider, useTheme } from "../context/ThemeContext";

function Cast({ data }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex flex-col items-center text-center transition-transform transform hover:scale-105">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt="actor"
            className="w-40 h-40 object-cover rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl"
          />
          <p className="text-black mt-2 text-lg font-semibold hover:text-yellow-400 transition duration-200 dark:text-white">
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cast;
