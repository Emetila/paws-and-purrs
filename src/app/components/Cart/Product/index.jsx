import React from 'react';
import style from './style.module.css'
import product1 from '../../../assets/images/cartproduct1.svg';
import product2 from '../../../assets/images/cartproduct2.svg';

export const ProductList = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10', image: product1 },
    { id: 2, name: 'Product 2', price: '$20', image: product2 },
    { id: 3, name: 'Product 3', price: '$30' },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
            <img src={product.image} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}