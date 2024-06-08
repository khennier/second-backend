import React from 'react';
import Navbar from './components/Header/Navbar/Navbar';
import SearchBar from './components/Header/Searchbar/Searchbar';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import Features from './components/Features/Features.jsx';
import ProductList from './components/Products/ProductList/ProductList.jsx';
import ProductItem from './components/Products/ProductItem/ProductItem';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import QualitySection from './components/QualitySection/QualitySection.jsx';
import ArticleList from './components/PromotionalArticles/ArticleList/ArticleList.jsx';
import FooterLinks from './components/Footer/FooterLinks/FooterLinks.jsx';
import FooterContact from './components/Footer/FooterContact/FooterContact.jsx';
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
