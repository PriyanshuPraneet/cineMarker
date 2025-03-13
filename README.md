# VitragaMovieDB 🎥

VitragaMovieDB is a React + Vite-based web application that allows users to explore trending movies, add their favorite movies to a list. This project leverages the TMDB API to fetch movie data.

Visit the website: [link to site](https://vitraga-assignment.vercel.app/)

# Features 🚀

1. Movies: Displays the latest trending, upcoming and top rated movies on the homepage. Explore the details of the movie(via Dynamic Routing)

2. Search Movies: Search your favorite movie

3. Favorite Movies: Add your favorite movies to a personalized Wishlist(Persistent via local storage).

4. Responsive UI: Toggle between darkMode and LightMode seamlessly. Navigate between pages efficiently

# Tech Stack 💻
1. Frontend: React + Vite

2. APIs:

    TMDB API for movie information

3. Styling: TailwindCSS

# Installation and Setup 🛠️

1. Clone the repo

   ``` bash
   git clone <repository-url>
   cd vitraga-assignment

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
1. Movies:
  Browse the homepage to see the latest trending, popular and top rated movies fetched from TMDB.

2. Add to WishList:
  Click the "Add to WishList" button to save movies for quick access later.

3. Movie Details:
   Click on the moviecard to see the details of the movie.

4. Responsive Theme:
   Change the theme of the website by toggling between lightmode and darkmode.
