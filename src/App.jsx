import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import { MovieProvider } from "./context/MovieContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <MovieProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Favorites />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
