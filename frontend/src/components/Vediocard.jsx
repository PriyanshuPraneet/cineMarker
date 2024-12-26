import { useState, useEffect } from "react";
import "../css/Vediocard.css"; // Ensure the path to your CSS file is correct
import { getDesc } from "../services/api";
import { useMovieContext } from "../context/MovieContext";

const Vediocard = ({ movie, onClose }) => {
  const [desc, setDesc] = useState([]);
  const { selectedMovie, setSelectedMovie } = useMovieContext();

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
  }, [selectedMovie]);

  return (
    <div className="video-card">
      <div className="video-container">
        <iframe
          src={`https://flicky.host/embed/movie/?id=${movie.id}`}
          allowFullScreen
          title={movie.title}
        ></iframe>
        <div className="desc">
          <h2>{movie.title}</h2>
          <h5>{desc["tagline"]}</h5>
          <br />
          <h4>{movie.release_date}</h4>
          <br></br>
          <p>
            {desc["overview"] ? desc["overview"] : "Loading description..."}
          </p>
          <br />
          <div className="inline">
            <p>🌐 Language: {desc["original_language"]}</p>
            <p>🎞 Type: Movie</p>
          </div>
          <div className="inline">
            <p>🕓 Runtime: {desc["runtime"]} min</p>
            <p>🎥 Rating: {desc["vote_average"]?.toFixed(2)}/10</p>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Vediocard;
