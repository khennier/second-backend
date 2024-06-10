import React from 'react';
import './Searchbar.css'

const Searchbar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Brand" />
    <input type="text" placeholder="Model" />
    <input type="text" placeholder="Oil Type" />
    <button>Search</button>
  </div>
);

export default Searchbar;
