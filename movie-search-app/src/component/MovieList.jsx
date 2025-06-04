import MovieCard from "./MovieCard";
import React from "react";

export default function MovieList({ movies, favourites, toggleFavourite, hovered, setHovered }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Search Results</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavourite={favourites.some((fav) => fav.imdbID === movie.imdbID)}
            toggleFavourite={toggleFavourite}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
