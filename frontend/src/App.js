import React from 'react';
import Navbar from './components/Header/Navbar/Navbar';
import Searchbar from './components/Header/Searchbar/Searchbar';
import HeroSection from './components/HeroSection/HeroSection';
import Features from './components/Features/Features';
import ProductList from './components/Products/ProductList/ProductList';
import AboutUs from './components/AboutUs/AboutUs';
import QualitySection from './components/QualitySection/QualitySection';
import ArticleList from './components/PromotionalArticles/ArticleList/ArticleList';
import FooterLinks from './components/Footer/FooterLinks/FooterLinks';
import FooterContact from './components/Footer/FooterContact/FooterContact';
import products from './products'; // Importa los productos

import './App.css';

const App = () => (
  <div className="app">
    <header>
      <Navbar />
      <Searchbar />
    </header>
    <HeroSection />
    <Features />
    <section id="products">
      <h2>Our Products</h2>
      <ProductList products={products} />
    </section>
    <AboutUs />
    <QualitySection />
    <section id="articles">
      <h2>Promotional Articles</h2>
      <ArticleList />
    </section>
    <footer>
      <FooterLinks />
      <FooterContact />
    </footer>
  </div>
);

export default App;
