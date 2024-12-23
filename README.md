# cineMarker 🎥

Cinemaker is a React + Vite-based web application that allows users to explore trending movies, add their favorite movies to a list, and watch them seamlessly. This project leverages the TMDB API to fetch movie data and VidSrc to stream movies.

Visit the website: [Live link](cine-marker.vercel.app)

# Features 🚀

1. Trending Movies: Displays the latest trending movies on the homepage.

2. Favorite Movies: Add your favorite movies to a personalized favorites list.

3. Watch Movies: Stream movies directly using VidSrc.

# Tech Stack 💻
1. Frontend: React + Vite

2. APIs:

    TMDB API for movie information

    VidSrc for movie streaming

3. Styling: CSS

# Installation and Setup 🛠️

1. Clone the repo

   ``` bash
   git clone <repository-url>
   cd cinemaker

   ```

2. Install Dependencies

   ``` bash
   npm install
   ```

3. Get your API key from TMDB API site, then create a .env folder in the root directory and add the following
   ``` .env
   VITE_API_KEY=<your_tmdb_api_key>
   ```

4. Run the development server
   ``` bash
   npm run dev
   ```

# Usage 📖
1. Trending Movies:
  Browse the homepage to see the latest trending movies fetched from TMDB.

2. Add to Favorites:
  Click the "Add to Favorites" button to save movies for quick access later.

3. Watch Movies:
   Click the "Watch" button on a movie card to stream it using VidSrc.
