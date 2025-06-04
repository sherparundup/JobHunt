import { Play, Info, Heart } from "lucide-react";
import React from "react";

export default function MovieCard({ movie, isFavourite, toggleFavourite, hovered, setHovered }) {
  return (
    <div
      className="group relative cursor-pointer hover:scale-105 transition-transform"
      onMouseEnter={() => setHovered(movie.imdbID)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-900">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450/1a1a1a/666666?text=No+Image"}
          alt={movie.Title}
          className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform"
        />
        <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300 ${hovered === movie.imdbID ? "opacity-100" : "opacity-0"}`}>
          <div className="text-center p-4">
            <h4 className="text-lg font-bold mb-2 line-clamp-2">{movie.Title}</h4>
            <p className="text-gray-300 mb-4">{movie.Year}</p>
            <div className="flex items-center justify-center space-x-2">
              <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Play</span>
              </button>
              <button className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition-colors">
                <Info className="w-4 h-4" />
              </button>
              <button
                onClick={() => toggleFavourite(movie)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  isFavourite ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavourite ? "fill-white text-white" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h4 className="font-semibold text-sm line-clamp-1">{movie.Title}</h4>
        <p className="text-gray-400 text-xs">{movie.Year}</p>
      </div>
    </div>
  );
}
