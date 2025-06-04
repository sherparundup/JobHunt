import MovieCard from "./MovieCard";
import React from "react";

export default function FavoritesList({ favourites, toggleFavourite, hovered, setHovered }) {
  if (favourites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Your Favorites</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {favourites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavourite={true}
            toggleFavourite={toggleFavourite}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
