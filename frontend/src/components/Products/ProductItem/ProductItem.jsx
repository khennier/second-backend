import React from 'react';
import './ProductItem.css'

const ProductItem = ({ product }) => (
  <div className="product-item">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <button>Learn More</button>
  </div>
);

export default ProductItem;
