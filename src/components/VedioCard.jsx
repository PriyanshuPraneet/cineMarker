import React from "react";

function VideoCard({ movieId, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
      <div className="relative w-full h-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden">
        {/* Video Embed */}
        <div className="relative pb-[56.25%] w-[100%] h-[90%]">
          <iframe
            className="absolute top-5 left-0 w-full h-[90%] rounded-b-lg"
            src={`https://vidsrc.me/embed/movie?tmdb=${movieId}`}
            allowFullScreen
            title={`Movie ${movieId}`}
          ></iframe>
        </div>

        {/* Close Button at the bottom */}
        <button
          onClick={onClose}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-red-500 rounded-full py-2 px-4 shadow-lg hover:bg-red-700 transition duration-300 cursor-pointer"
        >
          Close Player
        </button>
      </div>
    </div>
  );
}

export default VideoCard;
