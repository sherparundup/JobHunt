import { Search } from "lucide-react";
import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="relative max-w-2xl mx-auto text-center">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          className="w-full pl-12 pr-4 py-4 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent backdrop-blur-sm text-lg"
        />
        <button
          onClick={onSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-semibold"
        >
          Search
        </button>
      </div>
    </div>
  );
}
