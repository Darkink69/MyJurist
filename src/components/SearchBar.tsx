import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Что найти или сделать"
          className="w-full px-5 py-4 pl-14 rounded-2xl bg-white shadow-md border-none focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 placeholder-gray-400"
        />
        <svg
          className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
