import React from 'react';
import Navbar from './components/Header/Navbar';
import SearchBar from './components/Header/SearchBar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import ProductList from './components/Products/ProductList';
import AboutUs from './components/AboutUs';
import QualitySection from './components/QualitySection';
import ArticleList from './components/PromotionalArticles/ArticleList';
import FooterLinks from './components/Footer/FooterLinks';
import FooterContact from './components/Footer/FooterContact';
import products from './products'; // Importa los productos

const App = () => (
  <div className="app">
    <header>
      <Navbar />
      <SearchBar />
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
