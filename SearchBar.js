// MyComponentes/SearchBar.js
import React from 'react';

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="container mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="🔍 Search To-Dos by title or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
