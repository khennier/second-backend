import React from 'react';

const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Brand" />
    <input type="text" placeholder="Model" />
    <input type="text" placeholder="Oil Type" />
    <button>Search</button>
  </div>
);

export default SearchBar;
