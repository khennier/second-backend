import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">Driver 1 Lubricants</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#products" className="navbar-link">Products</a>
          </li>
          <li className="navbar-item">
            <a href="#about-us" className="navbar-link">About Us</a>
          </li>
          <li className="navbar-item">
            <a href="#quality" className="navbar-link">Quality</a>
          </li>
          <li className="navbar-item">
            <a href="#articles" className="navbar-link">Articles</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>
        <div className="navbar-icons">
          <a href="#search" className="navbar-icon">
            <i className="fas fa-search"></i>
          </a>
          <a href="#account" className="navbar-icon">
            <i className="fas fa-user"></i>
          </a>
          <a href="#cart" className="navbar-icon">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
