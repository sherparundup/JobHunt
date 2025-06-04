import React, { useState, useEffect } from "react";
import SearchBar from "../component/SearchBar";
import MovieList from "../component/MovieList";
import FavoritesList from "../component/FavoritesList";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const fetchMovies = async (title) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Network error, please try again.");
      setMovies([]);
    }
    setLoading(false);
  };

  const toggleFavourite = (movie) => {
    const exists = favourites.some((fav) => fav.imdbID === movie.imdbID);
    if (exists) {
      setFavourites(favourites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavourites([...favourites, movie]);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      fetchMovies(searchTerm);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative bg-gradient-to-b from-black via-black/80 to-transparent">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-red-600">MOVIEFLIX</h1>
            <div className="flex items-center space-x-4">
              <div className="w-fill h-8 bg-red-600 rounded px-4 py-1 cursor-pointer">
                Favourites ({favourites.length})
              </div>
            </div>
          </div>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xl">Loading movies...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-md mx-auto bg-red-900/20 border border-red-500/50 rounded-lg p-6 text-center">
            <p className="text-red-400 text-lg">{error}</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <MovieList
            movies={movies}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            hovered={hoveredMovie}
            setHovered={setHoveredMovie}
          />
        )}

        {!loading && !error && movies.length === 0 && searchTerm && (
          <p className="text-center mt-16 text-gray-500">No movies found.</p>
        )}

        <FavoritesList
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          hovered={hoveredMovie}
          setHovered={setHoveredMovie}
        />
      </main>
    </div>
  );
};

export default HomePage;
