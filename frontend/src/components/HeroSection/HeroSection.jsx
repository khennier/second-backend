import React from 'react';
import Searchbar from '../Header/Searchbar/Searchbar';
import './HeroSection.css';

const HeroSection = () => (
  <div className="hero-section">
    <div className="hero-content">
      <h1>Power Your Ride with Driver 1 Lubricants</h1>
      <p>Find the perfect oil for your car and make your driving experience smoother.</p>
      <button>Find Your Oil</button>
    </div>
    <div className="search-bar-container">
      <Searchbar />
    </div>
  </div>
);

export default HeroSection;
