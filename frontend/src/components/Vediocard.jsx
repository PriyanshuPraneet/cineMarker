import React from "react";
import "../css/Vediocard.css"; // Create and style this CSS file as needed

const Vediocard = ({ movie, onClose }) => {
  return (
    <div className="video-card">
      <div className="video-container">
        <iframe
          src={`https://flicky.host/embed/movie/?id=${movie.id}`}
          allowFullScreen
          title={movie.title}
        ></iframe>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Vediocard;
